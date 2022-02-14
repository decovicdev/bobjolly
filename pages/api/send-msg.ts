import type { NextApiRequest, NextApiResponse } from 'next';
import Mailgun from 'mailgun-js';

const DOMAIN = process.env.MAILGUN_DOMAIN_NAME;

type Data = {
  status: string;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, phone, msg } = req.body;

  const data = {
    from: `Mailgun Sandbox <postmaster@${DOMAIN}>`,
    to: 'support@bobjolly.com',
    subject: 'Contact Form Submit Data',
    text: `Name: ${name}\nSender Email: ${email}\nSender Phone: ${phone}\nSender Message: ${msg}`,
  };

  try {
    const mailgun = new Mailgun({
      apiKey: process.env.MAILGUN_API_KEY!,
      domain: DOMAIN!,
    });

    await mailgun.messages().send(data);
    res.json({
      status: 'succ',
      message: 'Message has been successfully sent',
    });
  } catch (error) {
    res.json({
      status: 'err',
      message: 'Sorry something went wrong, try again later',
    });
  }
};

export default handler;
