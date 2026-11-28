import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const focusAreas = [
  { number: "01", title: "Applied AI research", copy: "Dataset engineering, exploratory analysis, deep-learning experiments, and quantitative evaluation." },
  { number: "02", title: "Backend systems", copy: "APIs, relational data, distributed workers, authentication, and reliable workflows." },
  { number: "03", title: "Intelligent products", copy: "AI-integrated applications that connect research, secure inference, and usable software." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="Research depth with software engineering discipline." />
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
