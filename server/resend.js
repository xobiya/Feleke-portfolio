import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import process from "process";
dotenv.config();

// Usage: node resend.js /tmp/feleke-email-12345.json
// If no filename is passed, will list candidates in /tmp and prompt which to use (simple interactive selection not implemented here).

async function loadPayload(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

async function createTransporter() {
  // Prefer explicit SMTP_HOST + creds
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('Missing SMTP configuration. Please set SMTP_HOST, SMTP_USER and SMTP_PASS in your environment before running this script.');
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.verify();
  return transporter;
}

async function main() {
  try {
    const arg = process.argv[2];
    if (!arg) {
      console.error('Usage: node resend.js /tmp/feleke-email-<timestamp>.json');
      process.exit(1);
    }

    const filePath = path.resolve(arg);
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist:', filePath);
      process.exit(1);
    }

    const payload = await loadPayload(filePath);
    const mailOptions = payload.mailOptions;

    console.log('Loaded mailOptions:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });

    const transporter = await createTransporter();

    // Send
    const info = await transporter.sendMail(mailOptions);
    console.log('Resend successful. nodemailer info:', info);
    console.log('You may remove the saved file if you like:', filePath);
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

main();
