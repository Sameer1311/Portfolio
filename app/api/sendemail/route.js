import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    
    // ✅ Debugging Logs
    console.log("Received Data:", { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️ Missing Email Credentials in .env");
      return NextResponse.json({ error: "Email configuration missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="background: #ff4d4d; color: white; padding: 10px; text-align: center;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff4d4d;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ff4d4d; padding-left: 10px; font-style: italic;">${message}</blockquote>
          <p style="text-align: center; color: #888;">🚀 Sent via Contact Form</p>
        </div>
      `,
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("📩 Email Sent Successfully:", emailResponse);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 202 });
  } catch (error) {
    console.error("🚨 Email Sending Error:", error);
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
  }
}
