import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Discover why your current marketing isn't generating consistent sales.",
  "Get a personalized AI marketing strategy for your business.",
  "Learn where your biggest growth opportunities are.",
  "Understand the most important actions to improve your marketing.",
  "Leave with a clear plan to attract more qualified customers."
];

export function Benefits() {
  return (
    <section className="section-pad bg-surface px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">How you benefit</p>
          <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">
            How You Benefit From This Consultation
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-card border border-line bg-white p-5 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-secondary" />
              <p className="mt-4 text-sm font-semibold leading-6 text-ink">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
