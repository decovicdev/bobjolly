import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

export default stripe;
