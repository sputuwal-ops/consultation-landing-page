import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  const payload = (await request.json()) as Payload;
  const error = validate(payload);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const directory = path.join(process.cwd(), "bookings");
  await fs.mkdir(directory, { recursive: true });
  const file = path.join(directory, "booking-requests.json");
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    existing = [];
  }
  existing.push({ ...payload, type: "booking", createdAt: new Date().toISOString() });
  await fs.writeFile(file, JSON.stringify(existing, null, 2));

  return NextResponse.json({ message: "Consultation request received. Digital Saroz will contact you soon." });
}
