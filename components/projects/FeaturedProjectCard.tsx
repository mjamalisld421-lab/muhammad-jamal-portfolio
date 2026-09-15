import { ProjectActions } from "@/components/projects/ProjectActions";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/types/portfolio";

export function FeaturedProjectCard({
  project,
  prominent = false,
}: {
  project: Project;
  prominent?: boolean;
}) {
  return (
    <article
      className={`rounded-[calc(var(--radius-card)+0.25rem)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 ${prominent ? "lg:col-span-2" : ""}`}
    >
      <div
        className={
          prominent
            ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
            : "flex h-full flex-col"
        }
      >
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {project.category}
            </p>
            <span className="text-sm font-medium text-muted-foreground">
              {project.period ?? project.year}
            </span>
          </div>
          <h3
            className={`mt-5 font-semibold tracking-[-0.035em] text-foreground ${prominent ? "text-3xl sm:text-4xl" : "text-2xl"}`}
          >
            {project.name}
          </h3>
          <p className="mt-4 text-pretty leading-7 text-muted-foreground">
            {project.summary}
          </p>
          {project.proof ? (
            <p className="mt-5 w-fit rounded-full border border-accent-soft bg-accent-subtle px-3 py-1.5 text-xs font-semibold text-accent-strong">
              {project.proof}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
          <div className="mt-7">
            <ProjectActions project={project} />
          </div>
        </div>
        <div
          className={
            prominent
              ? "border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
              : "mt-7 border-t border-border pt-6"
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Selected engineering details
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
