const Stripe = require('stripe');

import handler from '../../middlewares/handler';

const stripe = new Stripe(process.env.STRIPE_SK);

export default handler.post(async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1195,
      currency: 'usd',
      description: 'bobjolly.com',
      metadata: req.body,
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    res.status(400).json({
      error: {
        message: err?.message,
      },
    });
  }
});
