type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
