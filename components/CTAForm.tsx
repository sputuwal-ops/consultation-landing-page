import { LockKeyhole, MessageCircle } from "lucide-react";
import { FlodeskForm } from "@/components/FlodeskForm";

export function CTAForm() {
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
          <div className="flodesk-card rounded-card border border-line bg-white p-4 shadow-form sm:p-7">
            <FlodeskForm />
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
