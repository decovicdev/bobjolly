import Mailgun from 'mailgun.js';
import formData from 'form-data';

import handler from '../../middlewares/handler';

const mailgun = new Mailgun(formData);
const DOMAIN = process.env.MAILGUN_DOMAIN_NAME!;
const KEY = process.env.MAILGUN_API_KEY!;

export default handler.post(async (req, res) => {
  const { name, email, phone, message } = req.body;

  const data = {
    from: `Mailgun Sandbox <postmaster@${DOMAIN}>`,
    to: 'support@bobjolly.com',
    subject: 'Contact Form Submit Data',
    text: `
    Name: ${name} 
    Sender Email: ${email}
    Sender Phone: ${phone}
    Sender Message: ${message}`,
  };

  try {
    const client = mailgun.client({
      username: 'api',
      key: KEY,
    });

    await client.messages.create(DOMAIN, data);

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
});
