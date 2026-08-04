const steps = [
  "Book your free consultation by completing the form below.",
  "Meet one-to-one to discuss your business, current marketing, and growth goals.",
  "Receive a customized AI marketing plan with practical recommendations for your business."
];

export function Process() {
  return (
    <section className="section-pad px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Consultation process</p>
          <h2 className="mt-3 text-balance text-3xl font-black text-ink md:text-5xl">
            A simple three-step path to your plan
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="rounded-card border border-line bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-ink">Step {index + 1}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
