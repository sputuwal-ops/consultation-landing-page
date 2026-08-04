import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital Saroz | Free AI Marketing Consultation",
    template: "%s | Digital Saroz"
  },
  description: "Book a free personalized AI marketing consultation and receive a customized digital marketing plan for your business.",
  keywords: ["Digital Saroz", "AI marketing consultation", "AI marketing plan", "digital marketing for small business", "lead generation"],
  authors: [{ name: "Digital Saroz" }],
  openGraph: {
    title: "Digital Saroz | Free AI Marketing Consultation",
    description: "Get a customized AI marketing plan built specifically for your business.",
    type: "website",
    locale: "en_US",
    siteName: "Digital Saroz"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Saroz | Free AI Marketing Consultation",
    description: "Get a customized AI marketing plan built specifically for your business."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
