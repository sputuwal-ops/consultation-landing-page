"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const submitEmail = "sputuwal@gmail.com";
const submitEndpoint = `https://formsubmit.co/ajax/${submitEmail}`;

export function ContactForm({ mode = "contact" }: { mode?: "contact" | "booking" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", mode === "booking" ? "New Digital Saroz consultation request" : "New Digital Saroz contact message");
    formData.set("_template", "table");
    formData.set("_captcha", "false");

    try {
      const response = await fetch(submitEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thank you. Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form action={submitEndpoint} method="POST" onSubmit={onSubmit} className="soft-panel rounded-2xl p-5 md:p-8">
      <input type="hidden" name="_subject" value={mode === "booking" ? "New Digital Saroz consultation request" : "New Digital Saroz contact message"} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-4 md:grid-cols-2">
        {["name", "email", "phone", "company"].map((field) => (
          <label key={field} className="grid gap-2 text-sm font-medium capitalize text-ink">
            {field}
            <input
              name={field}
              type={field === "email" ? "email" : "text"}
              required={field !== "company"}
              className="h-12 rounded-xl border border-line bg-white px-4 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-ink">
        Subject
        <input name="subject" required className="h-12 rounded-xl border border-line bg-white px-4 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10" />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-medium text-ink">
        Message
        <textarea name="message" required rows={5} className="resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10" />
      </label>
      <button disabled={status === "loading"} className="button-gradient mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : mode === "booking" ? "Book Consultation" : "Send Message"}
      </button>
      {message ? <p className={`mt-4 text-sm font-medium ${status === "success" ? "text-emerald-600" : "text-red-600"}`}>{message}</p> : null}
    </form>
  );
}
