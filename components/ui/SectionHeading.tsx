interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
