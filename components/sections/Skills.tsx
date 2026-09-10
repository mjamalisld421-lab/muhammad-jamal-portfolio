import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="Skills" title="A grounded, full-stack toolkit." description="Technologies used across academic, internship, and independent engineering work. Accent badges mark the strongest current focus." />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <TechBadge key={skill} emphasized={group.emphasis?.includes(skill)}>{skill}</TechBadge>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
