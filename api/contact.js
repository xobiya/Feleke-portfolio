import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY ?? '');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTargetEmails() {
  const toValue = process.env.RESEND_TO_EMAIL || process.env.EMAIL_TO;
  if (!toValue) {
    return [];
  }
  return toValue
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name = '', email = '', message = '' } = req.body ?? {};

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is missing.');
    return res.status(500).json({ success: false, message: 'Email service misconfigured.' });
  }

  const recipients = getTargetEmails();

  if (!recipients.length) {
    console.error('❌ RESEND_TO_EMAIL (or EMAIL_TO) is missing.');
    return res.status(500).json({ success: false, message: 'Email destination not configured.' });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  try {
    const htmlMessage = message
      .split('\n')
      .map((line) => `<p>${line || '<br>'}</p>`)
      .join('');

    const emailResponse = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #0f172a;">
          <h2 style="color: #0ea5e9;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <div>${htmlMessage}</div>
        </div>
      `,
    });

    console.log('📧 Email sent:', emailResponse?.id ?? '[no-id]');

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (error) {
    console.error('❌ Email sending failed:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
