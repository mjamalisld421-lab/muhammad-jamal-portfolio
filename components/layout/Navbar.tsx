import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-5" aria-label="Primary navigation">
          <a
            href="#top"
            className="rounded-sm text-base font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Muhammad Jamal<span className="text-accent">.</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:mjamalisld421@gmail.com"
            className="inline-flex min-h-10 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            Email me
          </a>
        </nav>
        <nav className="grid grid-cols-5 pb-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-10 items-center justify-center rounded-full px-1 py-2 text-[0.6875rem] font-medium text-muted-foreground hover:bg-surface-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent sm:text-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
