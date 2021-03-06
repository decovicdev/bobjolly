import Mailgun from 'mailgun.js';
import formData from 'form-data';

import handler from '../../middlewares/handler';
import { contactSchema } from '../../validation';

const mailgun = new Mailgun(formData);
const DOMAIN = process.env.MAILGUN_DOMAIN_NAME!;
const KEY = process.env.MAILGUN_API_KEY!;

export default handler().post(async (req, res) => {
  const { name, email, message } = req.body;

  await contactSchema.validate({ name, email, message });

  const data = {
    from: `Bobjolly <postmaster@${DOMAIN}>`,
    to: 'support@bobjolly.com',
    subject: 'Contact Form Submit Data',
    text: `
    Name: ${name} 
    Sender Email: ${email}
    Sender Message: ${message}`,
  };

  try {
    const client = mailgun.client({
      username: 'api',
      key: KEY,
    });

    await client.messages.create(DOMAIN, data);
    res.json({
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Something went wrong, please try again later',
    });
  }
});
