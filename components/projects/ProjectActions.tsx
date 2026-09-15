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
    project.liveUrl ? { label: "Live Demo", href: project.liveUrl } : null,
    project.githubUrl ? { label: "GitHub", href: project.githubUrl } : null,
    project.npmUrl ? { label: "npm Package", href: project.npmUrl } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  if (!links.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <Button
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label} for ${project.name} (opens in a new tab)`}
          variant={index === 0 && project.liveUrl ? "primary" : "secondary"}
          className={compact ? "min-h-10 px-4 py-2 text-xs" : ""}
        >
          {link.label}
          <span className="ml-1.5" aria-hidden="true">↗</span>
        </Button>
      ))}
    </div>
  );
}
