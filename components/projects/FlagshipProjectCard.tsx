import Image from "next/image";
import { ProjectActions } from "@/components/projects/ProjectActions";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/types/portfolio";

export function FlagshipProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[calc(var(--radius-card)+0.5rem)] border border-border bg-surface shadow-[var(--shadow-soft)]">
      {project.imageUrl ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-[#eef3ff]">
          <Image
            src={project.imageUrl}
            alt="DocuFlow AI production landing page"
            fill
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#173564] shadow-sm backdrop-blur sm:left-7 sm:top-7">
            {project.status}
          </div>
        </div>
      ) : null}
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Flagship project · {project.category}
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
          <div className="mt-7">
            <ProjectActions project={project} />
          </div>
        </div>
        <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
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
          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            Source repository is private. The case study documents architecture,
            security decisions, evaluation scope, and known limitations without
            exposing private source code.
          </p>
        </div>
      </div>
    </article>
  );
}
