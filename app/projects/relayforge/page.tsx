import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const liveUrl = "https://relayforge-dashboard.vercel.app";
const demoUrl = "https://relayforge-dashboard.vercel.app/demo";
const sourceUrl = "https://github.com/mjamalisld421-lab/relayforge";

export const metadata: Metadata = {
  title: "RelayForge Case Study | Muhammad Jamal",
  description:
    "A distributed systems case study covering durable PostgreSQL jobs, Rust workers, leases, fencing, webhook reliability, multi-tenancy, and measured recovery behavior.",
  keywords: [
    "RelayForge",
    "Rust",
    "Distributed Systems",
    "Axum",
    "Tokio",
    "PostgreSQL",
    "Background Jobs",
    "Webhooks",
  ],
  openGraph: {
    title: "RelayForge — Distributed Job Processing Case Study",
    description:
      "How durable state, renewable leases, and fencing tokens support reliable background work and signed webhook delivery.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "RelayForge — Distributed Systems Case Study",
    description:
      "Production-oriented job processing with Rust, PostgreSQL, crash recovery, tenant isolation, and measured performance.",
  },
};

const architecture = [
  ["01", "Next.js control plane", "Operator workflows and a same-origin API proxy; authorization remains in the backend."],
  ["02", "Axum API", "Validates authenticated requests and records jobs, schedules, events, and delivery work transactionally."],
  ["03", "PostgreSQL", "Durable source of truth for job state, attempts, leases, audit records, and webhook deliveries."],
  ["04", "Tokio workers", "Claim eligible rows with SKIP LOCKED, renew leases, execute work, and persist every outcome."],
  ["05", "Webhook receivers", "Receive exact-byte HMAC-signed HTTPS deliveries with bounded retries and dead-letter handling."],
];

const decisions = [
  ["PostgreSQL over a required broker", "Jobs and related business state share durable transactions. Redis may improve wakeups later, but losing it cannot erase accepted work."],
  ["Leases plus fencing", "Ownership can transfer after a crash, while a monotonically newer token prevents the original worker from committing a stale completion."],
  ["At-least-once semantics", "The system documents the real boundary: external effects cannot generally be made atomic with database acknowledgement, so handlers must be idempotent."],
  ["Independent processes", "API and worker binaries scale and fail separately, keeping HTTP traffic outside the execution failure domain."],
];

const features = [
  "Idempotent job submission, scheduling, bounded retries, cancellation, and dead-letter replay",
  "Transactional SKIP LOCKED claiming with renewable leases and fencing tokens",
  "Durable attempt history, events, audit records, quotas, and operational summaries",
  "Invite and public onboarding, sessions, RBAC, tenant-scoped API keys, and workspace isolation",
  "Encrypted webhook secrets, exact-body HMAC signing, receiver retries, and delivery history",
  "Responsive Next.js operations console with a safe public interactive demonstration",
];

const security = [
  "Argon2id passwords, hashed opaque sessions, strict cookies, and CSRF protection",
  "Server-enforced RBAC, workspace predicates, scoped API keys, quotas, and audit trails",
  "AES-GCM encryption for webhook secrets and HMAC-SHA256 over timestamp plus raw body",
  "HTTPS-only production delivery, public-address validation, DNS pinning, redirect denial, and bounded outbound I/O",
  "Cross-tenant, permission, rate-limit, worker-crash, database-outage, and receiver-failure acceptance checks",
];

const challenges = [
  ["Safe recovery after process death", "A terminated worker leaves a lease that can expire. A live worker records LEASE_EXPIRED, reclaims with a newer fence, and rejects the old worker's late write."],
  ["Concurrency without duplicate ownership", "Short PostgreSQL transactions lock eligible rows with SKIP LOCKED, so competing workers advance independently without a central in-memory coordinator."],
  ["Webhook delivery across trust boundaries", "Encrypted secrets, exact-byte signatures, SSRF defenses, bounded I/O, retries, and durable delivery records make each outbound attempt explicit and inspectable."],
];

const limitations = [
  "Railway API and worker availability is trial/credit-limited and is not represented as a permanent 24/7 service-level guarantee.",
  "Tenant isolation is enforced in repository predicates and tests; PostgreSQL row-level security is not yet a second boundary.",
  "Execution is at-least-once, so handlers and downstream effects must be idempotent; exactly-once execution is not claimed.",
  "Dashboard data is polling-based and capped; there is no event stream, cursor UI, or historical analytics warehouse.",
  "The benchmark covers a 100-job local debug workload, not release profiling or statistically repeated high-volume runs.",
  "Fixed PostgreSQL minute-window rate limits add write load and can allow boundary bursts.",
];

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RelayForgeCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <Container>
          <nav className="flex min-h-16 items-center justify-between gap-4" aria-label="Case study navigation">
            <Link href="/" className="font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              Muhammad Jamal<span className="text-accent">.</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/#projects" className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-raised hover:text-foreground">
                All projects
              </Link>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong sm:inline-flex">
                Interactive demo ↗
              </a>
            </div>
          </nav>
        </Container>
      </header>

      <main>
        <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="hero-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
          <Container>
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-accent-soft bg-accent-subtle px-3 py-1.5 text-xs font-semibold text-accent-strong">Production Deployment Verified</span>
                <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">Open Source Engineering Project</span>
              </div>
              <div className="mt-7"><SectionLabel>Distributed systems case study</SectionLabel></div>
              <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-foreground sm:text-7xl">RelayForge</h1>
              <p className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
                Durable background work built to survive process failure.
              </p>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                A multi-tenant job processing and webhook platform where PostgreSQL holds durable truth, Rust workers coordinate through transactional claims and leases, and every retry, attempt, and delivery remains observable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={liveUrl} target="_blank" rel="noopener noreferrer">Live Application <span className="ml-1.5" aria-hidden="true">↗</span></Button>
                <Button href={demoUrl} target="_blank" rel="noopener noreferrer" variant="secondary">Interactive Demo <span className="ml-1.5" aria-hidden="true">↗</span></Button>
                <Button href={sourceUrl} target="_blank" rel="noopener noreferrer" variant="secondary">View Source Code <span className="ml-1.5" aria-hidden="true">↗</span></Button>
              </div>
            </div>
            <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:mt-16 sm:grid-cols-3">
              {[["35", "Rust and PostgreSQL tests"], ["6", "Browser scenarios passed"], ["953 ms", "Four-worker end-to-end P95"]].map(([value, label]) => (
                <div key={label} className="border-l-2 border-accent pl-4"><p className="text-2xl font-semibold tracking-[-0.04em] text-foreground">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28">
          <Container><div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div><SectionLabel>The problem</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">Request-bound work disappears when processes fail.</h2><p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">Long-running jobs tied to an HTTP process are difficult to recover, retry, isolate by tenant, and inspect after failure. Webhook delivery adds another unreliable boundary.</p></div>
            <div><SectionLabel>The solution</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">Durable state with explicit ownership transfer.</h2><p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">RelayForge separates the API from independent workers and persists jobs, attempts, leases, retries, events, and deliveries in PostgreSQL. Fencing tokens make recovery safe when ownership changes.</p></div>
          </div></Container>
        </section>

        <section className="py-20 sm:py-28"><Container>
          <div className="max-w-3xl"><SectionLabel>Technical architecture</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Five boundaries, one durable source of truth.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">The API accepts work, workers execute it, and PostgreSQL arbitrates claims and records every state transition. The browser never becomes an authority for tenancy or permissions.</p></div>
          <ol className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{architecture.map(([number, title, copy]) => <li key={number} className="rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]"><span className="text-xs font-bold tracking-[0.16em] text-accent">{number}</span><h3 className="mt-3 font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></li>)}</ol>
        </Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container>
          <div className="max-w-3xl"><SectionLabel>Engineering decisions</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Correctness before convenience.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">{decisions.map(([title, copy]) => <article key={title} className="rounded-[var(--radius-card)] border border-border bg-background p-6"><h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div>
        </Container></section>

        <section className="py-20 sm:py-28"><Container><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><SectionLabel>Key features</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">The complete operating path.</h2></div><div className="grid gap-3 sm:grid-cols-2">{features.map((feature) => <div key={feature} className="rounded-[var(--radius-card)] border border-border bg-surface p-5 text-sm font-medium leading-6 text-foreground">{feature}</div>)}</div></div></Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container>
          <div className="grid gap-5 lg:grid-cols-2"><article className="rounded-[calc(var(--radius-card)+0.25rem)] border border-border bg-background p-6 sm:p-8"><SectionLabel>Technology stack</SectionLabel><h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">Rust services, PostgreSQL durability, Next.js operations</h2><div className="mt-6 flex flex-wrap gap-2">{["Rust", "Axum", "Tokio", "SQLx", "PostgreSQL", "Next.js", "TypeScript", "Playwright", "Railway", "Vercel"].map((technology) => <span key={technology} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">{technology}</span>)}</div></article>
          <article className="rounded-[calc(var(--radius-card)+0.25rem)] border border-border bg-background p-6 sm:p-8"><SectionLabel>Security & reliability</SectionLabel><h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">Server-side controls at every boundary</h2><div className="mt-6"><BulletList items={security} /></div></article></div>
        </Container></section>

        <section className="py-20 sm:py-28"><Container>
          <div className="max-w-3xl"><SectionLabel>Verified performance metrics</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Measured evidence, with its limits visible.</h2></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["7.88 jobs/s", "One-worker 100-job baseline"], ["11.21 s", "One-worker end-to-end P95"], ["953 ms", "Four-worker end-to-end P95"], ["2 attempts", "Crash drill: LEASE_EXPIRED, then SUCCEEDED"]].map(([value, label]) => <article key={label} className="rounded-[var(--radius-card)] border border-border bg-surface p-6"><p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{value}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p></article>)}</div>
          <p className="mt-6 max-w-4xl text-sm leading-6 text-muted-foreground">These results come from documented 100-job local debug workloads. The four-worker aggregate was affected by the intentional request limiter, so RelayForge does not claim linear scaling.</p>
        </Container></section>

        <section className="border-y border-border bg-surface py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><SectionLabel>Engineering challenges</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">Failures were tested as system behavior.</h2></div><div className="space-y-4">{challenges.map(([title, copy]) => <article key={title} className="rounded-[var(--radius-card)] border border-border bg-background p-6"><h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></Container></section>

        <section className="py-20 sm:py-28"><Container><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><SectionLabel>Known limitations</SectionLabel><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">Explicit boundaries, not inflated guarantees.</h2></div><ul className="space-y-3 text-sm leading-6 text-muted-foreground">{limitations.map((limitation) => <li key={limitation} className="flex gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-5"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"/><span>{limitation}</span></li>)}</ul></div></Container></section>

        <section className="pb-20 sm:pb-28"><Container><div className="overflow-hidden rounded-[calc(var(--radius-card)+0.5rem)] bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16"><SectionLabel>Conclusion</SectionLabel><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Reliability is a sequence of explicit, testable ownership decisions.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-background/70">RelayForge demonstrates that durable job processing is more than a queue: it requires transactional state, bounded recovery, stale-writer rejection, tenant isolation, secure delivery, and honest operational limits.</p><div className="mt-8 flex flex-wrap gap-3"><Button href={demoUrl} target="_blank" rel="noopener noreferrer" variant="secondary">Interactive Demo <span className="ml-1.5" aria-hidden="true">↗</span></Button><Button href={sourceUrl} target="_blank" rel="noopener noreferrer" variant="secondary">View Source Code <span className="ml-1.5" aria-hidden="true">↗</span></Button></div></div></Container></section>
      </main>
      <Footer />
    </>
  );
}
