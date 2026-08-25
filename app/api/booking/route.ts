import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

function validate(payload: Payload) {
  if (!payload.name || !payload.email || !payload.phone || !payload.message) {
    return "Name, email, phone, and message are required.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email))) {
    return "Please enter a valid email address.";
  }
  return null;
}

function formatValue(value: string | undefined, fallback = "Not provided") {
  const text = value?.trim();
  return text ? text : fallback;
}

function logEmailEnvironmentDiagnostics() {
  const smtpPass = process.env.SMTP_PASS || "";

  console.info("[booking-email] SMTP environment diagnostics", {
    exists: {
      SMTP_HOST: Boolean(process.env.SMTP_HOST),
      SMTP_PORT: Boolean(process.env.SMTP_PORT),
      SMTP_SECURE: Boolean(process.env.SMTP_SECURE),
      SMTP_USER: Boolean(process.env.SMTP_USER),
      SMTP_PASS: Boolean(process.env.SMTP_PASS),
      SMTP_FROM: Boolean(process.env.SMTP_FROM),
      CONTACT_TO: Boolean(process.env.CONTACT_TO)
    },
    SMTP_PORT: process.env.SMTP_PORT || "",
    SMTP_SECURE: process.env.SMTP_SECURE || "",
    SMTP_PASS_character_count: smtpPass.length,
    SMTP_PASS_contains_whitespace: /\s/.test(smtpPass)
  });
}

function logEmailError(error: unknown) {
  if (!(error instanceof Error)) {
    console.error("[booking-email] Nodemailer send failed", {
      name: "UnknownError",
      message: "Unknown email sending error"
    });
    return;
  }

  const diagnostic = error as Error & {
    code?: unknown;
    command?: unknown;
    responseCode?: unknown;
  };

  console.error("[booking-email] Nodemailer send failed", {
    name: diagnostic.name,
    message: diagnostic.message,
    code: diagnostic.code,
    command: diagnostic.command,
    responseCode: diagnostic.responseCode
  });
}

async function sendBookingEmail(payload: Payload) {
  logEmailEnvironmentDiagnostics();

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("Email service is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const submittedAt = new Date().toISOString();
  const fullName = formatValue(payload.name);
  const subject = formatValue(payload.subject, "Free Consultation Request");

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO || site.email,
    replyTo: payload.email,
    subject: `New Free Consultation Request - ${fullName}`,
    text: [
      "New consultation booking request",
      "",
      `Full Name: ${fullName}`,
      `Email: ${formatValue(payload.email)}`,
      `WhatsApp / Phone: ${formatValue(payload.phone)}`,
      `Business Name: ${formatValue(payload.company)}`,
      `Subject: ${subject}`,
      "",
      "Marketing / Sales Challenge:",
      formatValue(payload.message),
      "",
      `Submitted At: ${submittedAt}`
    ].join("\n")
  });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Payload;
  const error = validate(payload);
  if (error) return NextResponse.json({ error }, { status: 400 });

  try {
    await sendBookingEmail(payload);
  } catch (error) {
    logEmailError(error);
    return NextResponse.json(
      { error: "We could not send your consultation request right now. Please try again in a few minutes." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Consultation request received. Digital Saroz will contact you soon." });
}
