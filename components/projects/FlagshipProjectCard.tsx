import { ProjectActions } from "@/components/projects/ProjectActions";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/types/portfolio";

export function FlagshipProjectCard({ project, prominent = false }: { project: Project; prominent?: boolean }) {
  return (
    <article className={`flex h-full flex-col rounded-[calc(var(--radius-card)+0.5rem)] border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10 ${prominent ? "border-accent-soft" : "border-border"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Flagship project
        </p>
        <span className="rounded-full border border-accent-soft bg-accent-subtle px-3 py-1.5 text-xs font-semibold text-accent-strong">
          {project.status}
        </span>
      </div>
      <div className={`flex flex-1 flex-col pt-7 ${prominent ? "lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-12" : ""}`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {project.category}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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
        </div>
        <div className={`mt-8 border-t border-border pt-7 ${prominent ? "lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0" : ""}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Verified engineering evidence
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
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
          {project.sourceNote ? (
            <p className="mt-6 text-xs leading-5 text-muted-foreground">
              {project.sourceNote}
            </p>
          ) : null}
        </div>
        <div className={`mt-auto pt-8 ${prominent ? "lg:col-span-2" : ""}`}>
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}
