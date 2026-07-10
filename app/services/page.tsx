import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/site";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader eyebrow="Services" title="AI marketing services for every stage of growth" description="Choose focused consulting or combine services into a complete AI-powered marketing system." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue/10 text-blue">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
