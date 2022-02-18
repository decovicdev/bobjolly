const Stripe = require('stripe');

import handler from '../../middlewares/handler';

export default handler().post(async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SK!);
    const { client_secret } = await stripe.paymentIntents.create({
      amount: 1195,
      currency: 'usd',
      description: 'bobjolly.com',
      metadata: req.body,
    });

    console.log(client_secret);

    res.json({
      clientSecret: client_secret,
    });
  } catch (err: any) {
    res.status(500).json({
      error: 'Something went wrong, please try again later',
    });
  }
});
