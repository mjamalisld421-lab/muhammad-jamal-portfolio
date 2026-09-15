import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Technical experience built around real systems." description="Software engineering and telecom infrastructure work, with ByteFinch as the current focus." />
        <div className="mt-12 border-t border-border">
          {experiences.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-5 border-b border-border py-8 md:grid-cols-[0.34fr_0.66fr] md:gap-12 md:py-10">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
                  {item.current ? <span className="rounded-full bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent-strong">Current</span> : null}
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{item.period}</p>
                {item.location ? <p className="mt-1 text-sm text-muted-foreground">{item.location}</p> : null}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">{item.role}</h3>
                <p className="mt-1 font-medium text-accent-strong">{item.company}</p>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.summary}</p>
                <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {item.technologies ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => <TechBadge key={technology}>{technology}</TechBadge>)}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
