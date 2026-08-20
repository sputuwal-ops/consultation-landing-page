import type { Metadata } from "next";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your free AI marketing consultation request has been received."
};

const videoPoints = [
  "Why most businesses struggle to generate consistent sales.",
  "The biggest marketing mistakes that hold businesses back.",
  "How AI can help attract more qualified customers.",
  "What we'll cover during your consultation.",
  "How to prepare so you receive the most valuable recommendations."
];

const nextSteps = [
  "We've received your booking.",
  "Watch the video above.",
  "Check your email for your consultation details.",
  "Join the consultation on time so we can create your personalized AI marketing plan."
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <section className="relative isolate px-5 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="hero-glow" />
        <div className="mesh-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-white shadow-glow">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-secondary">You&apos;re In!</p>
          <h1 className="mt-3 text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
            Your Free AI Marketing Consultation Request Has Been Received.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Thank you for booking your consultation. We&apos;re reviewing your information so we can prepare a customized AI marketing strategy for your business.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-card border border-line bg-white p-5 shadow-form sm:p-8">
          <div className="text-center">
            <p className="text-base font-bold text-primary">Before your consultation, there&apos;s one important step.</p>
            <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">Watch This Before Your Consultation</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              It will help you get the most value from your free consultation and show you how we&apos;ll identify the biggest opportunities to grow your business.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-card border border-line bg-ink shadow-soft">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/qqyDfPeYFUo"
              title="Before your consultation video"
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-card bg-surface p-5">
              <h3 className="text-xl font-black text-ink">In this short video, you&apos;ll discover:</h3>
              <ul className="mt-4 space-y-3">
                {videoPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-bold text-ink">Please watch the entire video before your scheduled call.</p>
            </div>

            <div className="rounded-card bg-surface p-5">
              <h3 className="text-xl font-black text-ink">What&apos;s Next?</h3>
              <ul className="mt-4 space-y-3">
                {nextSteps.map((step) => (
                  <li key={step} className="flex gap-3 text-sm font-semibold leading-6 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-14 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <MessageCircle className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl font-black text-ink">Need Help or Have Questions?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            If you have any questions before your consultation, send us a WhatsApp message. We&apos;ll be happy to help.
          </p>
          <a className="button-primary mt-6" href="https://wa.me/9779849579303" rel="noopener noreferrer" target="_blank">
            <MessageCircle className="h-5 w-5" />
            Chat With Us on WhatsApp
          </a>
          <p className="mt-4 text-sm font-bold text-muted">WhatsApp: 9849579303</p>
          <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-muted">
            <Mail className="h-4 w-4 text-secondary" />
            Check your email for your consultation details.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted">
            We look forward to helping you discover the best opportunities to grow your business with AI-powered marketing.
          </p>
        </div>
      </section>
    </div>
  );
}
