import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact"
};

type Props = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { intent } = await searchParams;
  const mode = intent === "consultation" ? "booking" : "contact";

  return (
    <section className="pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Contact</p>
          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-ink md:text-6xl">Let’s build your AI marketing system</h1>
          <p className="mt-5 text-lg leading-8 text-muted">Send a message or book a consultation to discuss automation, AI strategy, content, SEO, or lead generation.</p>

          <div className="mt-8 grid gap-4">
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm hover:border-blue/40">
              <Mail className="h-6 w-6 text-blue" />
              <span className="font-medium text-ink">{site.email}</span>
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm hover:border-blue/40">
              <Phone className="h-6 w-6 text-blue" />
              <span className="font-medium text-ink">{site.phone}</span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm">
              <MapPin className="h-6 w-6 text-blue" />
              <span className="font-medium text-ink">{site.location}</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-[#F8F9FA] p-5">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 text-purple" />
              <h2 className="font-bold text-ink">Book Consultation</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">Prefer a focused strategy session? Use the form and mention your goals, business type, and current marketing tools.</p>
            <ButtonLink href="#contact-form" variant="secondary" className="mt-5">Start Booking</ButtonLink>
          </div>

          <div className="mt-8 aspect-[16/10] rounded-2xl border border-line bg-white p-4 shadow-sm">
            <div className="grid h-full place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(79,125,249,0.12),rgba(6,182,212,0.08),rgba(124,58,237,0.12))] text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-blue" />
                <p className="mt-3 font-semibold text-ink">Google Map Placeholder</p>
                <p className="mt-1 text-sm text-muted">Banepa, Kavre, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form">
          <ContactForm mode={mode} />
        </div>
      </div>
    </section>
  );
}
