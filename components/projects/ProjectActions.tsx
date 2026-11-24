import { Button } from "@/components/ui/Button";
import type { Project } from "@/types/portfolio";

export function ProjectActions({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const links = [
    project.liveUrl
      ? { label: "Live Demo", href: project.liveUrl, external: true }
      : null,
    project.caseStudyUrl
      ? { label: "Case Study", href: project.caseStudyUrl, external: false }
      : null,
    project.githubUrl
      ? { label: "GitHub", href: project.githubUrl, external: true }
      : null,
    project.npmUrl
      ? { label: "npm Package", href: project.npmUrl, external: true }
      : null,
  ].filter(
    (link): link is { label: string; href: string; external: boolean } =>
      Boolean(link),
  );

  if (!links.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <Button
          key={link.href}
          href={link.href}
          {...(link.external
            ? {
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${link.label} for ${project.name} (opens in a new tab)`,
              }
            : { "aria-label": `${link.label} for ${project.name}` })}
          variant={index === 0 && project.liveUrl ? "primary" : "secondary"}
          className={compact ? "min-h-10 px-4 py-2 text-xs" : ""}
        >
          {link.label}
          <span className="ml-1.5" aria-hidden="true">
            {link.external ? "↗" : "→"}
          </span>
        </Button>
      ))}
    </div>
  );
}
