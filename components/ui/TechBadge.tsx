interface TechBadgeProps {
  children: string;
  emphasized?: boolean;
}

export function TechBadge({ children, emphasized = false }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-sm font-medium ${
        emphasized
          ? "border-accent-soft bg-accent-subtle text-accent-strong"
          : "border-border bg-surface text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}
