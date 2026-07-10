import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

function validate(payload: Payload) {
  const required: Array<keyof Payload> = ["name", "email", "phone", "subject", "message"];
  for (const field of required) {
    if (!payload[field] || String(payload[field]).trim().length < 2) {
      return `${field} is required.`;
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email))) {
    return "Please enter a valid email address.";
  }
  return null;
}

async function storeInquiry(payload: Payload) {
  const directory = path.join(process.cwd(), "inquiries");
  await fs.mkdir(directory, { recursive: true });
  const file = path.join(directory, "contact.json");
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    existing = [];
  }
  existing.push({ ...payload, type: "contact", createdAt: new Date().toISOString() });
  await fs.writeFile(file, JSON.stringify(existing, null, 2));
}

async function sendMail(payload: Payload) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO || site.email,
    subject: `New inquiry: ${payload.subject}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nCompany: ${payload.company || "-"}\n\n${payload.message}`
  });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Payload;
  const error = validate(payload);
  if (error) return NextResponse.json({ error }, { status: 400 });
  await storeInquiry(payload);
  await sendMail(payload);
  return NextResponse.json({ message: "Thank you. Your message has been sent successfully." });
}
