import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammad Jamal · Software Engineer</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="mailto:mjamalisld421@gmail.com"
            className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Email
          </a>
          <a
            href="https://github.com/mjamalisld421-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
