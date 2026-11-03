import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Project Inquiry from ${name} - Portfolio`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Project Inquiry
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email Address:</strong> ${email}</p>
            <p style="margin: 15px 0 5px;"><strong>Brief Details:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            Transmitted via Feleke Eshetu Portfolio System
          </p>
        </div>
      `,
      text: `
Project Inquiry
===============

Client Name: ${name}
Email Address: ${email}
Message:
${message}

Transmitted via Feleke Eshetu Portfolio System
      `
    });

    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Inquiry received successfully. I will review and reply within 24 hours.'
    });

  } catch (error) {
    console.error('Email sending error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to deliver message. Please contact eshetufeleke21@gmail.com directly.'
    });
  }
}
