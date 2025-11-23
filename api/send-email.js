import { Resend } from 'resend';
import process from 'process';
// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed'
    });
  }

  try {
    const { name = '', email = '', message = '' } = req.body;

    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: name, email, and message.'
      });
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Validate message length
    if (message.trim().length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long. Please keep it under 2000 characters.'
      });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is missing');
      return res.status(500).json({
        success: false,
        message: 'Email service is temporarily unavailable.'
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['eshetufeleke21@gmail.com'],
      reply_to: email,
      subject: `New Portfolio Message from ${name.trim()}`,
      text: `
Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
Sent from your portfolio contact form
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
  <style>
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      max-width: 600px; 
      margin: 0 auto; 
      background: #f8fafc;
    }
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      padding: 30px; 
      text-align: center; 
      border-radius: 8px 8px 0 0;
    }
    .header h1 { 
      color: white; 
      margin: 0; 
      font-size: 24px;
    }
    .content { 
      padding: 30px; 
      background: white; 
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .field { 
      margin-bottom: 20px; 
      padding: 15px;
      background: #f8fafc;
      border-radius: 6px;
      border-left: 4px solid #667eea;
    }
    .field strong { 
      color: #4a5568; 
      display: block; 
      margin-bottom: 5px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .message { 
      background: #f0fff4; 
      padding: 20px; 
      border-radius: 6px; 
      border-left: 4px solid #48bb78;
      white-space: pre-line;
    }
    .footer { 
      margin-top: 30px; 
      padding: 15px; 
      background: #edf2f7; 
      border-radius: 6px; 
      text-align: center;
      font-size: 12px;
      color: #718096;
    }
    a { 
      color: #667eea; 
      text-decoration: none; 
    }
    a:hover { 
      text-decoration: underline; 
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🚀 New Portfolio Message</h1>
  </div>
  
  <div class="content">
    <div class="field">
      <strong>From</strong>
      <div>${name.trim()}</div>
    </div>
    
    <div class="field">
      <strong>Email</strong>
      <div>
        <a href="mailto:${email.trim()}">${email.trim()}</a>
      </div>
    </div>
    
    <div class="field">
      <strong>Message</strong>
      <div class="message">${message.trim().replace(/\n/g, '<br>')}</div>
    </div>
    
    <div class="footer">
      <p>This message was sent from your portfolio contact form on ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
      `
    });

    // Handle Resend API errors
    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again later.'
      });
    }

    // Success response
    console.log('Email sent successfully:', data?.id);
    
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      emailId: data?.id
    });

  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error in send-email API:', error);
    
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
}