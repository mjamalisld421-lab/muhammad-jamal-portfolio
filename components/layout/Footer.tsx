import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammad Jamal</p>
        <p>Software Engineer · Islamabad, Pakistan</p>
      </Container>
    </footer>
  );
}
