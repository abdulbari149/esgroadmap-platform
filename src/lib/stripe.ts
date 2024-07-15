

import env from '@/config/env.config';
import { Stripe } from 'stripe';

let stripe: Stripe;

if (process.env.NODE_ENV === 'production') {
  stripe = new Stripe(env.STRIPE_SECRET_KEY)
} else {
  // @ts-ignore
  if (!global.stripe) {
    // @ts-ignore
    global.stripe = new Stripe(env.STRIPE_SECRET_KEY)
  }
  // @ts-ignore
  stripe = global.stripe;
}

export default stripe;
