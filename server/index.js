import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import process from "process";

dotenv.config();

console.log("🔧 Environment Check:");
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "✅ Set" : "❌ Missing");
console.log("EMAIL_TO:", process.env.EMAIL_TO ? "✅ Set" : "❌ Missing");
console.log("NODE_ENV:", process.env.NODE_ENV);

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const toEmail = process.env.EMAIL_TO;

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <portfolio@xobiya.dev>",
      to: toEmail,
      reply_to: email,
      subject: `New message from ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>🚀 New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    console.log("📧 Email sent:", emailResponse.id);

    res.json({
      success: true,
      message: "Message sent successfully! I will contact you soon.",
    });
  } catch (error) {
    console.error("❌ Email sending failed:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "backend-online",
    timestamp: new Date().toISOString(),
  });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});
