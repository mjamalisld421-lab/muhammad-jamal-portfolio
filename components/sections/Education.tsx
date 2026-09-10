import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Software engineering foundations." />
        <article className="mt-10 grid gap-8 rounded-[var(--radius-card)] border border-border bg-background p-7 shadow-[var(--shadow-soft)] sm:p-9 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-sm font-semibold text-accent">{education.period}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">{education.degree}</h3>
            <p className="mt-2 text-muted-foreground">{education.institution}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {education.coursework.map((course) => <span key={course} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground">{course}</span>)}
            </div>
          </div>
          {education.cgpa ? (
            <div className="rounded-2xl border border-accent-soft bg-accent-subtle px-6 py-5 md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-strong">CGPA</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">{education.cgpa}</p>
            </div>
          ) : null}
        </article>
      </Container>
    </section>
  );
}
