import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate px-5 pb-16 pt-28 sm:pt-32 lg:px-8">
      <div className="hero-glow" />
      <div className="mesh-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Free AI Marketing Consultation
        </div>
        <h1 className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-black leading-[1.04] text-ink sm:text-5xl md:text-7xl">
          Get Your Free Personalized <span className="text-primary">AI Marketing Plan</span> to Generate More Leads and Sales
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted md:text-xl">
          Discover why your current marketing isn&apos;t delivering consistent results and receive a customized AI marketing strategy built specifically for your business.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
          If you&apos;re a small or medium business owner struggling to attract customers and increase sales, this free one-to-one consultation is for you.
        </p>
        <a href="#booking" className="button-primary mt-9">
          Book Free Consultation
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
