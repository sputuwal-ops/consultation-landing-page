import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { process, services } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">Service</p>
            <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-ink md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{service.description} This service turns strategy into a clear, usable system for your team and your growth goals.</p>
            <ButtonLink href="/contact?intent=consultation" className="mt-8">Book Consultation</ButtonLink>
          </div>
          <div className="soft-panel rounded-2xl p-6">
            <service.icon className="h-10 w-10 text-blue" />
            <h2 className="mt-5 text-2xl font-bold text-ink">What you get</h2>
            <div className="mt-5 grid gap-3">
              {service.benefits.map((benefit) => (
                <p key={benefit} className="flex items-center gap-3 text-sm font-medium text-muted">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Process" title="How this service works" />
          <div className="grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="text-sm font-bold text-blue">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader align="left" eyebrow="Tools Used" title="Built with practical tools" />
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted">{tool}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="FAQ" title="Common questions" />
            <div className="grid gap-3">
              {service.faqs.map(([question, answer]) => (
                <div key={question} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="font-bold text-ink">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Related Services" title="Services that pair well with this" />
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <item.icon className="h-7 w-7 text-blue" />
                <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact?intent=consultation">Book Consultation</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
