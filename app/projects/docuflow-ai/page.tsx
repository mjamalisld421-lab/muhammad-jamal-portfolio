import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const liveUrl = "https://docuflow-ai.mjamalisld421.workers.dev";

export const metadata: Metadata = {
  title: "DocuFlow AI Case Study | Muhammad Jamal",
  description:
    "A production AI engineering case study covering intelligent document processing, browser OCR, Cloudflare Workers AI, evidence verification, secure APIs, and human approval workflows.",
  keywords: [
    "DocuFlow AI",
    "AI Engineering",
    "Intelligent Document Processing",
    "Cloudflare Workers AI",
    "Large Language Models",
    "Optical Character Recognition",
    "Full-Stack Development",
  ],
  openGraph: {
    title: "DocuFlow AI — Production Document Intelligence Case Study",
    description:
      "How a secure hybrid extraction pipeline turns business documents into validated financial data while keeping humans in control.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "DocuFlow AI — AI Engineering Case Study",
    description:
      "Production document processing with browser OCR, Workers AI, evidence verification, and human approval.",
  },
};

const architecture = [
  "PDF / image / text input",
  "Browser PDF extraction or OCR",
  "Cloudflare Workers API",
  "Deterministic parser + Workers AI",
  "Zod schema + evidence verification",
  "Financial validation",
  "Human review & approval",
  "D1 persistence",
  "CSV / JSON export",
];

const features = [
  "Invoice, receipt, and purchase-order processing",
  "Browser-side PDF parsing and English OCR",
  "Structured LLM extraction with deterministic fallback",
  "Evidence-aware validation and financial reconciliation",
  "Duplicate detection and persistent audit trails",
  "Human correction, approval, and CSV / JSON export",
  "Signed authentication and tenant-scoped data access",
  "Safe public demonstration using fictional documents",
];

const aiEngineering = [
  "Native Llama 3.3 70B inference through Cloudflare Workers AI",
  "Strict versioned JSON output validated with Zod",
  "Exact source-evidence checks before AI values can replace conflicts",
  "Deterministic extraction retained as a transparent fallback",
  "Document text isolated as untrusted input with no model tools or state authority",
  "D1-backed inference quotas and cached duplicate requests",
  "Ground-truth evaluation separating deterministic and live-AI evidence",
];

const security = [
  "Cloudflare Access protects private application APIs",
  "RS256 JWT signatures verified against Access JWKS",
  "Issuer, audience, expiry, and email allowlist validation",
  "Every document query and mutation is tenant scoped",
  "Human approval is required before financial exports",
  "Rate and inference limits fail closed on the free tier",
  "Audit events record creation, correction, approval, and export",
];

const challenges = [
  {
    title: "Free-tier production constraints",
    copy: "Moved CPU-intensive PDF parsing and OCR into the browser, bounded inputs, and enforced D1-backed inference quotas so the system stops rather than creating paid overage.",
  },
  {
    title: "AI without model authority",
    copy: "Combined a deterministic baseline with strict structured output, source-evidence checks, financial validation, and mandatory human review before approval or export.",
  },
  {
    title: "Private documents and public proof",
    copy: "Kept original files local, protected all private APIs through Access and application JWT checks, and built a separate client-only employer demo with fictional data.",
  },
];

const limitations = [
  "OCR is English-only and depends on browser resources and an initial language-model download.",
  "The verified live-AI acceptance sample contains two fictional documents; its 15/15 result is not a general model benchmark.",
  "Inputs are bounded to 8 MB, 20 PDF pages, and 2.5 megapixels per OCR render.",
  "Original document binaries are not persisted, and multi-document batch queues are not implemented.",
  "Cross-tenant isolation is covered by automated tests; two real production tenant identities were not created.",
  "The source repository remains private while the public case study documents verified behavior and architecture.",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

export default function DocuFlowCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <Container>
          <nav
            className="flex min-h-16 items-center justify-between gap-4"
            aria-label="Case study navigation"
          >
            <Link
              href="/"
              className="font-semibold tracking-[-0.02em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Muhammad Jamal<span className="text-accent">.</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/#projects"
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-raised hover:text-foreground"
              >
                All projects
              </Link>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong sm:inline-flex"
              >
                Open live app ↗
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
                <span className="rounded-full border border-accent-soft bg-accent-subtle px-3 py-1.5 text-xs font-semibold text-accent-strong">
                  Live in Production
                </span>
                <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                  Independent Engineering Project
                </span>
              </div>
              <SectionLabel>AI engineering case study</SectionLabel>
              <h1 className="mt-4 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-foreground sm:text-7xl">
                DocuFlow AI
              </h1>
              <p className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
                Intelligent document processing with verified AI and human control.
              </p>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                A production platform that converts invoices, receipts, and
                purchase orders into validated financial data using browser-side
                document processing, deterministic extraction, large language
                models, and approval-gated workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Application <span className="ml-1.5" aria-hidden="true">↗</span>
                </Button>
                <Button href="/#projects" variant="secondary">
                  Back to projects <span className="ml-1.5" aria-hidden="true">←</span>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                The public demonstration uses fictional records and does not expose private documents or anonymous AI inference.
              </p>
            </div>

            <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:mt-16 sm:grid-cols-3">
              {[
                ["41 / 41", "Automated tests passing"],
                ["94.20%", "Deterministic field accuracy"],
                ["15 / 15", "Verified hybrid fields"],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-accent pl-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-foreground">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>The problem</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Financial documents create repetitive work and fragile data entry.
                </h2>
                <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
                  Accounting, procurement, and operations teams receive business
                  documents in inconsistent layouts. Manual re-entry is slow and
                  error-prone, while unconstrained AI can invent values or become
                  an unsafe source of truth.
                </p>
              </div>
              <div>
                <SectionLabel>The solution</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  A hybrid extraction pipeline that treats AI as a proposal.
                </h2>
                <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
                  DocuFlow AI keeps original files in the browser, combines
                  deterministic parsing with protected Workers AI inference,
                  verifies evidence against source text, reconciles financial
                  totals, and requires human approval before export.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Technical architecture</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                Local-first processing, protected inference, validated output.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cloudflare Access protects private API paths. The Worker independently
                verifies the signed identity, while D1 stores tenant-scoped workflow
                state, audit events, quotas, and cached validated inference responses.
                A KV binding is configured but is not used in the current verified
                document or inference path.
              </p>
            </div>
            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {architecture.map((step, index) => (
                <li
                  key={step}
                  className="relative rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-semibold leading-6 text-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionLabel>Key features</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  A complete document-review workflow.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[var(--radius-card)] border border-border bg-background p-5 text-sm font-medium leading-6 text-foreground"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[calc(var(--radius-card)+0.25rem)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <SectionLabel>AI engineering</SectionLabel>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                  Structured, evidence-aware inference
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {aiEngineering.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[calc(var(--radius-card)+0.25rem)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <SectionLabel>Security & reliability</SectionLabel>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                  Defense in depth around private data
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                  {security.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <SectionLabel>Results & evaluation</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                Measured release evidence, with the sample sizes visible.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["41 / 41", "Automated tests passing across six test files"],
                ["94.20%", "65 of 69 deterministic fields across 12 fictional documents"],
                ["15 / 15", "Hybrid fields across two fictional production acceptance documents"],
                ["17.19 s", "Mean verified Workers AI inference latency across two runs"],
              ].map(([value, label]) => (
                <article key={label} className="rounded-[var(--radius-card)] border border-border bg-background p-6">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <article className="rounded-[var(--radius-card)] border border-border bg-background p-6">
                <p className="font-semibold text-foreground">OCR acceptance snapshot</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  0.00% normalized character error rate on a 155-character fictional sample; 13.55% strict raw error rate including page-marker and blank-line layout differences. Processing took approximately 6.18 seconds.
                </p>
              </article>
              <article className="rounded-[var(--radius-card)] border border-border bg-background p-6">
                <p className="font-semibold text-foreground">Hallucination and missing-field checks</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The deterministic corpus handled 3 of 3 expected missing fields and produced zero observed unsupported-value hallucinations in the reported evaluation.
                </p>
              </article>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-6 text-muted-foreground">
              These are small, fictional release-acceptance measurements—not universal OCR accuracy, a broad model-quality benchmark, or a service-level guarantee.
            </p>
          </Container>
        </section>

        <section className="border-y border-border bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>Engineering challenges</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Constraints shaped the architecture.
                </h2>
              </div>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <article key={challenge.title} className="rounded-[var(--radius-card)] border border-border bg-background p-6">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{challenge.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{challenge.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <SectionLabel>Known limitations</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Transparent scope, not inflated claims.
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                {limitations.map((limitation) => (
                  <li key={limitation} className="flex gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="pb-20 sm:pb-28">
          <Container>
            <div className="overflow-hidden rounded-[calc(var(--radius-card)+0.5rem)] bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16">
              <SectionLabel>Conclusion</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Reliable document intelligence depends on evidence and human control.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-background/70">
                DocuFlow AI demonstrates a production-minded approach to applied AI:
                bounded inputs, transparent fallbacks, verified model output, secure
                tenant boundaries, and approval before financial data leaves the system.
              </p>
              <div className="mt-8">
                <Button href={liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Live Application <span className="ml-1.5" aria-hidden="true">↗</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
