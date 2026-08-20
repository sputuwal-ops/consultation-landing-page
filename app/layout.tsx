import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1026967396769074');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            src="https://www.facebook.com/tr?id=1026967396769074&ev=PageView&noscript=1"
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
        <main>{children}</main>
      </body>
    </html>
  );
}
