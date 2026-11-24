import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { FlagshipProjectCard } from "@/components/projects/FlagshipProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { earlierProjects, featuredProjects } from "@/data/projects";

export function Projects() {
  const flagshipProject = earlierProjects.find(
    (project) => project.name === "DocuFlow AI",
  );
  const deployedProjects = earlierProjects.filter(
    (project) => project.name !== "DocuFlow AI",
  );

  return (
    <section
      id="projects"
      className="scroll-mt-28 border-y border-border py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Production systems, developer tools, and applied AI."
          description="Selected projects demonstrating AI engineering, full-stack development, secure backend systems, developer tooling, and practical computer vision."
        />

        <div className="mt-14">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Group A
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                Deployed projects
              </h3>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              Web applications and supporting work
            </p>
          </div>
          <div className="mt-6 space-y-5">
            {flagshipProject ? (
              <FlagshipProjectCard project={flagshipProject} />
            ) : null}
            <div className="grid gap-5 md:grid-cols-2">
            {deployedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Group B
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                Featured engineering work
              </h3>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {featuredProjects.length} selected projects
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.name}
                project={project}
                prominent={index === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
