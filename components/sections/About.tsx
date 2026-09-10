import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const focusAreas = [
  { number: "01", title: "Web applications", copy: "Responsive, typed experiences built with React and Next.js." },
  { number: "02", title: "Backend systems", copy: "APIs, relational data, job queues, authentication, and reliable workflows." },
  { number: "03", title: "Developer tooling", copy: "Practical command-line tools for dependency analysis and architecture checks." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="Engineering with practical outcomes in mind." />
          <div>
            <div className="space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <article key={area.number} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                  <p className="text-xs font-bold tracking-[0.16em] text-accent">{area.number}</p>
                  <h3 className="mt-5 font-semibold tracking-[-0.02em] text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
