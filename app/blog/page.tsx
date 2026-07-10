import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { blogs } from "@/data/site";

export const metadata = {
  title: "Blog"
};

const categories = ["All", "AI Marketing", "Prompt Engineering", "Automation", "SEO"];

export default function BlogPage() {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader eyebrow="Blog" title="Insights for smarter AI-powered marketing" description="Practical articles on strategy, automation, prompts, SEO, and business growth." />
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input placeholder="Search articles" className="h-12 w-full rounded-full border border-line bg-white pl-12 pr-4 text-sm outline-none focus:border-blue focus:ring-4 focus:ring-blue/10" />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted hover:border-blue hover:text-blue">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[16/10]">
                <Image src={blog.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-sm text-muted">
                  <span className="font-semibold text-blue">{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-ink">{blog.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{blog.excerpt}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue">Read More</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button key={page} className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold ${page === 1 ? "border-blue bg-blue text-white" : "border-line bg-white text-muted"}`}>
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
