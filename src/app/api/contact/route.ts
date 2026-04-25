import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";



export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, message } = body;

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
         user: "arguimercado@gmail.com",
         pass: "btmq zuvn dinv oaqp",
      }   
  });

  console.log("Sending email with data:", { name, email, phone, service, message });

  await transporter.sendMail({
    from: `"OOH Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New Inquiry: ${service} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
        <h2 style="border-bottom:2px solid #c9a84c;padding-bottom:8px;color:#1a1a2e">
          New Contact Inquiry
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr>
            <td style="padding:8px 0;font-weight:600;width:140px;color:#555">Name</td>
            <td style="padding:8px 0">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555">Email</td>
            <td style="padding:8px 0"><a href="mailto:${email}" style="color:#c9a84c">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555">Phone</td>
            <td style="padding:8px 0">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555">Service</td>
            <td style="padding:8px 0">${service}</td>
          </tr>
        </table>
        <h3 style="margin-top:24px;margin-bottom:8px;color:#1a1a2e">Message</h3>
        <div style="background:#f8f8f8;border-left:3px solid #c9a84c;padding:12px 16px;white-space:pre-wrap;line-height:1.6">
          ${message}
        </div>
        <p style="margin-top:24px;font-size:12px;color:#aaa">
          Sent from the OOH website contact form.
        </p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
