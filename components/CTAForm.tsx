"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, MessageCircle, Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "error";

export function CTAForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
          subject: "Free Consultation Request"
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Something went wrong. Please try again.");
      }

      router.push("/thanks");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="booking" className="section-pad scroll-mt-8 bg-booking px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Book the call</p>
          <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">One-to-One Consultation</h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Get dedicated time to discuss your business challenges, marketing efforts, and growth opportunities.
          </p>
          <div className="mt-6 rounded-card border border-line bg-white p-5 shadow-sm">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary/12 text-secondary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-ink">Customized Strategy for Your Business</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Receive an AI-powered marketing plan tailored to your business so you know exactly what to improve next.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-card border border-line bg-white p-4 shadow-form sm:p-7">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Full Name
                  <input className="form-field" name="name" required type="text" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Email Address
                  <input className="form-field" name="email" required type="email" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  WhatsApp / Phone Number
                  <input className="form-field" name="phone" required type="tel" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  Business Name
                  <input className="form-field" name="company" type="text" />
                </label>
              </div>

              <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
                What is your biggest marketing or sales challenge?
                <textarea className="form-field min-h-36 resize-y" name="message" required />
              </label>

              {errorMessage ? (
                <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {errorMessage}
                </p>
              ) : null}

              <button className="button-primary mt-5 w-full" disabled={status === "loading"} type="submit">
                <Send className="h-5 w-5" />
                {status === "loading" ? "Booking..." : "Book My Free Consultation"}
              </button>
            </form>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-muted">
            <LockKeyhole className="h-4 w-4 text-secondary" />
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
