import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { ReadingProgress } from "@/components/ReadingProgress";
import { blogs } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  return { title: blog?.title || "Blog" };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();
  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <article className="pt-32">
        <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">{blog.category}</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink md:text-6xl">{blog.title}</h1>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
            <span>{blog.date}</span>
            <span>By {blog.author}</span>
            <span>5 min read</span>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
            <Image src={blog.image} alt="" fill priority className="object-cover" />
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-[1fr_180px] lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-ink prose-p:text-muted">
            {blog.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>What to do next</h2>
            <p>Start with one workflow, define the outcome, then use AI to reduce friction in that exact place. Small improvements compound quickly when the system is used every week.</p>
          </div>
          <aside className="md:sticky md:top-28 md:h-fit">
            <p className="text-sm font-bold text-ink">Share</p>
            <div className="mt-3 flex gap-2 md:grid">
              {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Share article" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-muted hover:text-blue">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-[#F8F9FA] py-14">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">About the author</h2>
            <p className="mt-3 leading-7 text-muted">Digital Saroz is an AI marketing expert and consultant helping businesses use automation, content systems, and AI strategy to grow with clarity.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-line bg-white p-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-blue" />
              <h2 className="text-xl font-bold text-ink">Comments</h2>
            </div>
            <p className="mt-3 text-sm text-muted">Comments placeholder for future discussion integration.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-ink">Related Articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-sm font-semibold text-blue">{item.category}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
