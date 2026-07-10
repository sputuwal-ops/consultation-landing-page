import { NextResponse } from "next/server";
import { blogs } from "@/data/site";

export async function GET() {
  return NextResponse.json({ posts: blogs });
}
