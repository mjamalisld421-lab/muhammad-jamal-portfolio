import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center py-24">
      <Container>
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-7 shadow-[var(--shadow-soft)] sm:p-10">
          <SectionHeading
            eyebrow="Portfolio foundation"
            title={profile.name}
            description={profile.summary}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            <TechBadge emphasized>Next.js</TechBadge>
            <TechBadge emphasized>TypeScript</TechBadge>
            <TechBadge>Software Engineering</TechBadge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="mailto:mjamalisld421@gmail.com">Get in touch</Button>
            <Button href="https://github.com/mjamalisld421-lab" variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
