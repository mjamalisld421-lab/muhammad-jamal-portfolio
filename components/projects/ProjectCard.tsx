import { ProjectActions } from "@/components/projects/ProjectActions";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-background p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
          {project.category}
        </p>
        <span className="text-sm text-muted-foreground">
          {project.period ?? project.year}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-foreground">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {project.summary}
      </p>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5">
            <span
              className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechBadge key={technology}>{technology}</TechBadge>
        ))}
      </div>
      <div className="mt-auto pt-7">
        <ProjectActions project={project} compact />
      </div>
    </article>
  );
}
