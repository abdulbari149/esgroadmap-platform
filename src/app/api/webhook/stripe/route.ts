import env from '@/config/env.config'
import { HttpBadRequestError } from '@/errors'
import handleError from '@/utils/handle-error'
import { HttpStatusCode } from 'axios'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import prisma from '@/lib/prisma'
import stripe from '@/lib/stripe'

const endpointSecret = env.STRIPE_WEBHOOK_SECRET

const onPaymentSucceed = async (data: Stripe.Invoice) => {
  if (!data.customer_email || !data.customer)
    throw new Error('Customer not found!')

  let user = await prisma.user.findFirst({
    where: { email: data.customer_email, deletedAt: null },
  })

  if (!user) {
    throw new Error('User needs to be created first!')
  }

  const customerId =
    typeof data.customer === 'string' ? data.customer : data.customer.id

  await prisma.user.update({
    where: { id: user.id },
    data: { stripeId: customerId, plan: 2 },
  })

  if (data.billing_reason === 'subscription_create') {
    const subscriptionId =
      typeof data.subscription === 'string'
        ? data.subscription
        : data.subscription?.id ?? ''

    await prisma.userSubscription.deleteMany({ where: { userId: user.id } })

    await prisma.userSubscription.create({
      data: { subscriptionId: subscriptionId, userId: user.id },
    })
  }

  // TODO: give an email alert saying the payment has been successfull
}

const onPaymentFailed = async (data: Stripe.Invoice) => {
  if (!data.customer_email || !data.customer)
    throw new Error('Customer not found!')
  const user = await prisma.user.findFirst({
    where: { email: data.customer_email, deletedAt: null },
  })

  if (!user) {
    throw new Error('User needs to be created first!')
  }

  if (data.billing_reason === 'subscription_cycle' && user.plan === 2) {
    await prisma.user.update({ where: { id: user.id }, data: { plan: 1 } })
  }

  // TODO: give an email alert saying the payment has been failed
}

export const POST = async (req: NextRequest) => {
  try {
    const sig = headers().get('stripe-signature')

    if (!sig) throw new Error('Sig not found')
    // const body = await req.json()
    const body = await req.json()
    let event
    console.log('Signature: ', sig);
    console.log('Text Body: ', body);
    console.log('End point secret', endpointSecret)
    // console.log('JSON Body: ', JSON.stringify(body, null, 2))
    // console.log('Text body:', await req.text())

    try {
      event = stripe.webhooks.constructEvent(JSON.stringify(body, null, 2), sig, endpointSecret)
    } catch (err) {
      throw new HttpBadRequestError(`Webhook Error: ${(err as Error).message}`)
    }

    switch (event.type) {
      case 'invoice.payment_succeeded':
        await onPaymentSucceed(event.data.object)
        break
      case 'invoice.payment_failed':
        await onPaymentFailed(event.data.object)
      default:
        break
    }

    return NextResponse.json({ message: 'ok' }, { status: HttpStatusCode.Ok })
  } catch (error) {
    console.log(error)
    return handleError(error)
  }
}
