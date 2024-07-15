import { HttpUnAuthorizedError } from '@/errors'
import prisma from '@/lib/prisma'
import token from '@/utils/token'
import { cookies, headers } from 'next/headers'

export default async function authorizer() {
  const authorization = headers().get('Authorization')

  if (!authorization) {
    throw new HttpUnAuthorizedError('token not found!')
  }

  const [_, accessToken] = authorization.split(' ')

  const payload = token.access.verify<{
    id: number
    email: string
    username: string
    role: string
  }>(accessToken)

  const user = await prisma.user.findFirst({
    where: { id: payload.id },
    select: {
      id: true,
      username: true,
      email: true,
      isActive: true,
      plan: true,
      role: true,
      profileImage: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      stripeId: true,
    },
  })

  if (!user) {
    throw new HttpUnAuthorizedError('User not found!')
  }

  return { user, payload }
}
