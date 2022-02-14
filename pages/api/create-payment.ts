import type { NextApiRequest, NextApiResponse } from "next";
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SK);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: {
        message: `Method ${req.method} Not Allowed`,
      },
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1195,
      currency: "usd",
      description: "bobjolly.com",
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
}
