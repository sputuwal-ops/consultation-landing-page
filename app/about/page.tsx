import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { skills, stats, tools } from "@/data/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">About Digital Saroz</p>
              <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-ink md:text-6xl">AI marketing expertise for practical business growth</h1>
            </div>
            <div className="soft-panel rounded-2xl p-6 md:p-8">
              <p className="text-lg leading-8 text-muted">
                Digital Saroz helps businesses use AI to automate marketing, create better content, improve customer follow-up, and make smarter growth decisions. The approach is simple: understand the business first, then choose the AI tools and systems that actually move the numbers.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-line bg-white p-4">
                    <p className="text-3xl font-bold text-blue">{value}</p>
                    <p className="mt-1 text-sm text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 lg:px-8">
          {[
            ["My Story", "Built around a passion for marketing, automation, and helping businesses work with clearer systems."],
            ["Mission", "Make AI marketing accessible, practical, and profitable for growing businesses."],
            ["Vision", "Help modern brands use intelligent systems without losing their human voice."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Experience" title="A timeline shaped by strategy, execution, and learning" />
          <div className="grid gap-4">
            {[
              ["2023", "Started building AI-assisted marketing workflows for local and service businesses."],
              ["2024", "Expanded into automation, lead generation, SEO, and content systems."],
              ["2025", "Delivered consulting sessions and implementation support for growing teams."],
              ["2026", "Focused on scalable AI marketing systems for measurable business growth."]
            ].map(([year, text]) => (
              <div key={year} className="grid gap-4 rounded-2xl border border-line bg-white p-5 md:grid-cols-[140px_1fr]">
                <p className="text-xl font-bold text-blue">{year}</p>
                <p className="leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Skills" title="Core capabilities" />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map(([skill, value]) => (
              <div key={skill} className="rounded-2xl border border-line bg-white p-5">
                <div className="flex justify-between text-sm font-semibold text-ink">
                  <span>{skill}</span>
                  <span>{value}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="progress-track h-full rounded-full" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Tools" title="Modern AI and marketing tools" />
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-muted shadow-sm">{tool}</span>
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
