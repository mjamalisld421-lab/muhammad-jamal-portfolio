import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-pretty leading-7 text-muted-foreground">
            The page you were looking for does not exist or may have moved.
          </p>
          <div className="mt-8">
            <Button href="/">Return home</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
