import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const base = "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition";
  const variants = {
    primary: "button-gradient text-white shadow-glow hover:-translate-y-0.5",
    secondary: "border border-line bg-white text-ink hover:border-blue/40 hover:text-blue hover:-translate-y-0.5",
    ghost: "text-blue hover:text-purple"
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
