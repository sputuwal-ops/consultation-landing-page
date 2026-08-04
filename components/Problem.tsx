import { AlertCircle } from "lucide-react";

export function Problem() {
  return (
    <section className="section-pad px-5 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-amber/12 text-amber">
          <AlertCircle className="h-6 w-6" />
        </div>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">The problem</p>
        <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">
          Your marketing should create consistent results.
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-pretty text-base leading-8 text-muted md:text-lg">
          <p>If you&apos;re a small or medium business owner struggling to attract customers and increase sales, this free one-to-one consultation is for you.</p>
          <p>You&apos;ll receive practical recommendations tailored to your business, so you know what to improve and what to focus on next.</p>
        </div>
      </div>
    </section>
  );
}
