import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "Digital Saroz | AI Marketing Expert & Consultant",
    template: "%s | Digital Saroz"
  },
  description: "AI marketing consulting, automation, prompt engineering, SEO, and growth strategy for modern businesses.",
  keywords: ["Digital Saroz", "AI marketing Nepal", "marketing automation", "AI consultant", "prompt engineering", "SEO consultant"],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Digital Saroz | AI Marketing Expert & Consultant",
    description: "Transform your business with AI-powered marketing systems.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
