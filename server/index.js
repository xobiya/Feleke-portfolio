import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import process from "process";

// Load environment variables FIRST
dotenv.config();

console.log('🔧 Environment Check:');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
console.log('EMAIL_TO:', process.env.EMAIL_TO ? '✅ Set' : '❌ Missing');
console.log('NODE_ENV:', process.env.NODE_ENV);

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create email transporter with better error handling
const createTransporter = () => {
  // Check if we have Gmail credentials
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log('📧 Using Gmail transporter');
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add timeout settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  } else {
    console.log('⚠️  No email credentials found. Using Ethereal test account.');
    // Create test account for development
    return nodemailer.createTransporter({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'test@ethereal.email',
        pass: 'test'
      }
    });
  }
};

const transporter = createTransporter();

// Test email configuration with better logging
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error.message);
    if (error.code === 'EAUTH') {
      console.log('🔑 Authentication failed. Check your email credentials.');
    }
  } else {
    console.log('✅ Email server is ready to send messages');
    if (process.env.EMAIL_USER) {
      console.log(`📧 Using: ${process.env.EMAIL_USER}`);
    } else {
      console.log('📧 Using: Ethereal test account (emails saved to console)');
    }
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log('📨 Contact form submission:', { name, email, message: message.substring(0, 50) + '...' });

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Determine sender and recipient
    const fromEmail = process.env.EMAIL_USER || 'portfolio@test.com';
    const toEmail = process.env.EMAIL_TO || 'eshetufeleke21@gmail.com';

    const mailOptions = {
      from: `"Portfolio Contact" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #00F5FF; padding-bottom: 10px;">
            🚀 New Portfolio Message
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      text: `
New Portfolio Message
====================

Name: ${name}
Email: ${email}
Message: ${message}

Sent from your portfolio contact form
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    if (process.env.EMAIL_USER) {
      console.log('✅ Email sent successfully to:', toEmail);
      console.log('📧 Message ID:', info.messageId);
    } else {
      console.log('📧 Test email preview URL:', nodemailer.getTestMessageUrl(info));
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      testUrl: process.env.EMAIL_USER ? null : nodemailer.getTestMessageUrl(info)
    });

  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    
    let userMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      userMessage = 'Email configuration error. Please check your credentials.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      userMessage = 'Connection timeout. Please check your internet connection.';
    }
    
    res.status(500).json({
      success: false,
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Email server is running',
    emailConfigured: !!process.env.EMAIL_USER,
    timestamp: new Date().toISOString(),
  });
});

// Debug endpoint to check environment
app.get('/api/debug', (req, res) => {
  res.status(200).json({
    emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
    emailTo: process.env.EMAIL_TO,
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server started on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'YES' : 'NO (using test mode)'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔍 Debug info: http://localhost:${PORT}/api/debug\n`);
});