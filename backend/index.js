import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// POST /contact endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Setup mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP
      auth: {
        user: process.env.EMAIL_USER, // replace with your Gmail
        pass: process.env.EMAIL_PASS, // use an app password, NOT your main password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} (${email})`,
      replyTo: email, // 👈 This lets you reply directly to the user
      text: `
You've got a new message from your portfolio contact form!

Name: ${name}
Email: ${email}

Message:
${message}
  `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
