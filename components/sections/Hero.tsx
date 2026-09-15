import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-subtle blur-3xl sm:h-[28rem] sm:w-[28rem]" aria-hidden="true" />
      <Container>
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-soft bg-accent-subtle px-3.5 py-2 text-sm font-semibold text-accent-strong">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Software Engineering graduate · Islamabad
          </div>
          <p className="mb-3 text-lg font-medium text-muted-foreground sm:text-xl">Hello, I&apos;m</p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-[5.5rem]">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            Building modern web products, developer tools, backend systems, and applied AI.
          </p>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Software Engineering graduate and full-stack developer working across Next.js, TypeScript, databases, .NET, and computer vision.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects">View selected work</Button>
            <Button href="https://github.com/mjamalisld421-lab" target="_blank" rel="noreferrer" variant="secondary">
              GitHub <span aria-hidden="true">↗</span>
            </Button>
            <Button href="#contact" variant="ghost">Contact me</Button>
          </div>
        </div>
        <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border sm:grid-cols-3">
          {[
            ["Current focus", "Full-stack engineering"],
            ["Education", "BS Software Engineering"],
            ["Based in", profile.location],
          ].map(([term, detail]) => (
            <div key={term} className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{term}</dt>
              <dd className="mt-2 font-semibold tracking-[-0.02em] text-foreground">{detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
