import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/projects";

const previewProjects = projects.filter((project) => project.featured).slice(0, 3);

export function FeaturedWork() {
  return (
    <section id="projects" className="scroll-mt-28 border-y border-border py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="A brief look at recent engineering work."
            description="A compact preview of developer tooling and full-stack systems. The complete case-study experience is reserved for the next stage."
          />
          <Button href="https://github.com/mjamalisld421-lab" target="_blank" rel="noreferrer" variant="secondary" className="self-start sm:self-auto">
            View GitHub <span className="ml-1" aria-hidden="true">↗</span>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {previewProjects.map((project, index) => (
            <article key={project.name} className="flex min-h-72 flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold tracking-[0.16em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-foreground">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((technology) => <TechBadge key={technology}>{technology}</TechBadge>)}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
