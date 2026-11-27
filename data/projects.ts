import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "DocuFlow AI",
    category: "Artificial Intelligence / Full-Stack Engineering",
    year: "2026",
    status: "Live in Production",
    summary:
      "A production-deployed intelligent document processing platform that turns invoices, receipts, and purchase orders into validated financial data through browser-side OCR, hybrid extraction, and human approval.",
    technologies: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Workers AI",
      "D1",
      "PDF.js",
      "Tesseract.js",
      "Zod",
    ],
    highlights: [
      "41/41 automated tests passing with strict TypeScript, ESLint, and production build checks",
      "94.20% deterministic field accuracy across a 12-document fictional evaluation corpus",
      "15/15 verified hybrid fields across two fictional production acceptance documents",
      "Signed Access JWT verification, tenant-scoped data, AI quotas, audit logs, and approval-gated exports",
    ],
    proof: "Production AI · 41 tests · evidence-aware extraction",
    caseStudyUrl: "/projects/docuflow-ai",
    liveUrl: "https://docuflow-ai.mjamalisld421.workers.dev",
    actions: [
      {
        label: "Live Application",
        href: "https://docuflow-ai.mjamalisld421.workers.dev",
        external: true,
      },
      {
        label: "Read Case Study",
        href: "/projects/docuflow-ai",
        external: false,
      },
    ],
    sourceNote:
      "The source repository is private. The case study documents verified architecture, evaluation scope, security decisions, and known limitations.",
  },
  {
    name: "RelayForge",
    category: "Distributed Systems / Backend Engineering",
    year: "2026",
    status: "Production Deployment Verified",
    summary:
      "A production-oriented, multi-tenant background job and webhook platform built around durable PostgreSQL state, independently scalable Rust workers, and an operational Next.js control plane.",
    technologies: [
      "Rust",
      "Axum",
      "Tokio",
      "PostgreSQL",
      "SQLx",
      "Next.js",
      "TypeScript",
      "Playwright",
    ],
    highlights: [
      "Transactional SKIP LOCKED claims, renewable leases, and fencing tokens recover abandoned work and reject stale completions",
      "35 Rust/PostgreSQL tests and six browser scenarios passed, including process-level crash and database outage drills",
      "Four workers reduced end-to-end P95 from 11.21 seconds to 953 ms in the measured 100-job local workload",
      "Tenant-scoped APIs, RBAC, API keys, quotas, audit trails, encrypted webhook secrets, HMAC signing, and SSRF defenses",
    ],
    proof: "Rust infrastructure · crash recovery · measured concurrency",
    caseStudyUrl: "/projects/relayforge",
    liveUrl: "https://relayforge-dashboard.vercel.app",
    githubUrl: "https://github.com/mjamalisld421-lab/relayforge",
    actions: [
      {
        label: "Live Application",
        href: "https://relayforge-dashboard.vercel.app",
        external: true,
      },
      {
        label: "Interactive Demo",
        href: "https://relayforge-dashboard.vercel.app/demo",
        external: true,
      },
      {
        label: "View Source Code",
        href: "https://github.com/mjamalisld421-lab/relayforge",
        external: true,
      },
      {
        label: "Read Case Study",
        href: "/projects/relayforge",
        external: false,
      },
    ],
    sourceNote:
      "Public source, architecture notes, release evidence, benchmark scope, and known limitations are documented in the repository.",
  },
  {
    name: "Monorepo Dependency Boundary Checker",
    category: "Developer Tooling / CLI",
    year: "2026",
    summary:
      "A TypeScript CLI for enforcing dependency boundaries across JavaScript and TypeScript monorepos.",
    technologies: [
      "TypeScript",
      "Node.js",
      "@babel/parser",
      "TypeScript Compiler API",
      "YAML",
    ],
    highlights: [
      "npm workspace and pnpm-workspace.yaml discovery with exclusion patterns",
      "JS, JSX, TS, and TSX static import scanning",
      "Workspace resolution, architecture boundaries, and TypeScript path aliases",
      "Human-readable and JSON reports with deterministic exit codes",
      "Canonical path handling and cross-platform GitHub Actions CI",
    ],
    proof: "v1.1.0 · 202 tests passing · 0 failed · 0 skipped",
    npmUrl:
      "https://www.npmjs.com/package/monorepo-boundary-checker/v/1.1.0",
    githubUrl:
      "https://github.com/mjamalisld421-lab/monorepo-boundary-checker",
    featured: true,
  },
  {
    name: "npm-shame",
    category: "Developer Tooling / npm Package",
    year: "2026",
    summary:
      "Developer utility for inspecting installed dependency sizes and surfacing dependency weight.",
    technologies: ["JavaScript", "Node.js", "CommonJS", "npm"],
    highlights: [
      "Recursive dependency size analysis and size classification",
      "CLI and postinstall workflow with lifecycle-script opt-out",
      "Workspace symlink handling with cycle and duplicate protection",
      "npm packaging and publication preparation",
    ],
    githubUrl: "https://github.com/mjamalisld421-lab/npm-shame",
    featured: true,
  },
  {
    name: "Report Generation Service",
    category: "Backend Engineering",
    year: "2026",
    summary:
      "Backend report-generation service built around asynchronous jobs and persistent report states.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "JWT",
    ],
    highlights: [
      "Authentication, RBAC, rate limiting, and production validation",
      "BullMQ workers with concurrency, retries, and persisted job states",
      "Chunked CSV and JSON generation with keyset pagination",
      "Swagger API documentation",
    ],
    featured: true,
  },
  {
    name: "Report Dashboard",
    category: "Frontend Engineering",
    year: "2026",
    summary:
      "Frontend interface for creating, tracking, and downloading asynchronous reports.",
    technologies: ["React", "TypeScript", "Vite"],
    highlights: [
      "Authentication and token handling",
      "Report creation with cursor pagination",
      "Async polling and loading, error, and empty states",
      "Completed and failed states with report downloads",
    ],
    featured: true,
  },
  {
    name: "UniSigner",
    category: "Final Year Project / Applied AI",
    period: "Feb 2025 – 2026",
    summary:
      "Pakistan Sign Language to Urdu recognition prototype combining computer vision and temporal sequence modelling.",
    technologies: [
      "PyTorch",
      "OpenCV",
      "ViT-B/8",
      "Temporal Transformer",
      "Flutter",
      "FastAPI",
      "WebSockets",
    ],
    highlights: [
      "8-sign prototype trained with a 200-video dataset",
      "30-frame RGB input processed by UniSignFormerV2",
      "ViT-Base/8 spatial encoding with a temporal Transformer",
      "Mobile-to-cloud inference workflow",
    ],
    featured: true,
  },
  {
    name: "Student Management System",
    category: ".NET Web Application",
    year: "2026",
    summary:
      "Relational web application for managing student records, courses, enrollments, and grades.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQLite"],
    highlights: [
      "Student, course, enrollment, and grade CRUD",
      "Search, filtering, and validation",
      "Relational persistence",
    ],
    liveUrl: "https://jamal-student-management.runasp.net/",
    githubUrl:
      "https://github.com/mjamalisld421-lab/student-management-system-dotnet",
  },
  {
    name: "Job Tracker App",
    category: "Full-Stack Web Application",
    year: "2026",
    summary:
      "Full-stack job application tracker with CRUD workflows, filtering, search, dashboard statistics, form validation, and responsive UI.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
    ],
    highlights: ["CRUD workflows", "Filtering and search", "Dashboard statistics"],
    liveUrl: "https://job-tracker-app-xi-two.vercel.app",
    githubUrl: "https://github.com/mjamalisld421-lab/job-tracker-app",
  },
  {
    name: "SkillsSavy Service Finder",
    category: "Frontend Web Application",
    year: "2026",
    summary:
      "Responsive service-finder platform with provider discovery and booking interaction.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    highlights: [
      "Provider listings, category filters, and search",
      "Profile modals and booking validation",
      "Responsive navigation",
    ],
    liveUrl: "https://skills-savy-service-finder.netlify.app",
    githubUrl:
      "https://github.com/mjamalisld421-lab/skills-savy-service-finder",
  },
  {
    name: "ShopEase",
    category: "E-Commerce Frontend",
    year: "2026",
    summary: "Responsive mini e-commerce storefront.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Product listings, details, and category filtering",
      "Cart management with quantity updates and localStorage persistence",
      "Mock checkout validation",
    ],
    liveUrl: "https://shopease-ecommerce-store.vercel.app/products",
    githubUrl:
      "https://github.com/mjamalisld421-lab/shopease-ecommerce-store",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const earlierProjects = projects.filter((project) => !project.featured);
