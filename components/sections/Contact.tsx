import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[calc(var(--radius-card)+0.5rem)] bg-foreground px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[60px] border-white/5" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft">Let&apos;s connect</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Interested in building reliable, useful software.</h2>
            <p className="mt-5 max-w-xl text-pretty leading-7 text-white/70">I&apos;m open to software engineering opportunities and conversations with recruiters, developers, and product teams.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:mjamalisld421@gmail.com" className="bg-white text-foreground hover:bg-accent-subtle">Send an email</Button>
              {socialLinks.filter((link) => link.label !== "Email").map((link) => (
                <Button key={link.label} href={link.href} target="_blank" rel="noreferrer" variant="ghost" className="border border-white/20 text-white hover:bg-white/10">{link.label} <span className="ml-1" aria-hidden="true">↗</span></Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
