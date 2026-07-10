"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={cn("fixed left-0 right-0 top-0 z-50 transition", scrolled ? "bg-white/86 shadow-sm backdrop-blur-xl" : "bg-white/60 backdrop-blur-md")}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-ink">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg">Digital Saroz</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition hover:text-blue",
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "text-blue" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact?intent=consultation" className="button-gradient hidden h-11 items-center rounded-full px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 md:inline-flex">
          Book Consultation
        </Link>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-4 shadow-soft md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-sm font-semibold text-ink hover:bg-slate-50">
                {link.label}
              </Link>
            ))}
            <Link href="/contact?intent=consultation" className="button-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white">
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
