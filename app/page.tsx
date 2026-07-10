import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeUp } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { blogs, features, process, services, testimonials, trustedBadges } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32">
        <div className="mesh-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-white/80 px-4 py-2 text-sm font-semibold text-blue shadow-sm">
                <Sparkles className="h-4 w-4" />
                AI Marketing Expert & Consultant
              </div>
              <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-ink md:text-7xl">
                Transform Your Business with <span className="text-gradient">AI-Powered Marketing</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted">
                Helping businesses automate marketing, generate more leads, improve productivity, and grow using AI solutions.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact?intent=consultation">Book a Consultation</ButtonLink>
                <ButtonLink href="/services" variant="secondary">View Services</ButtonLink>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-line bg-[#F8F9FA] py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 md:grid-cols-6 lg:px-8">
          {trustedBadges.map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-muted">
              <badge.icon className="h-4 w-4 text-blue" />
              {badge.label}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Services" title="AI marketing services built for measurable growth" description="Premium consulting and implementation support for businesses ready to work faster, sell smarter, and scale with better systems." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <FadeUp key={service.slug} delay={index * 0.04}>
                <Link href={`/services/${service.slug}`} className="group block h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue/10 text-blue">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Why Choose Me" title="Strategy, systems, and growth thinking in one place" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-line bg-white p-6">
                <feature.icon className="h-7 w-7 text-purple" />
                <h3 className="mt-5 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Process" title="A clear path from opportunity to implementation" />
          <div className="grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-cyan">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Testimonials" title="Trusted by ambitious businesses and teams" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <Quote className="h-7 w-7 text-blue" />
                <p className="mt-5 text-base leading-7 text-ink">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-bold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Latest Blog" title="Ideas for AI-powered growth" />
          <div className="grid gap-5 md:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image src={blog.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-blue">{blog.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{blog.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-ink px-6 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to Grow with AI?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72">Book a consultation and turn AI from a buzzword into a working growth system.</p>
          <ButtonLink href="/contact?intent=consultation" className="mt-8 bg-white text-ink hover:bg-white" variant="secondary">Book a Consultation</ButtonLink>
        </div>
      </section>
    </>
  );
}
