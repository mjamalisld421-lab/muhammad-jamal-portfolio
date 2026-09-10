import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Monorepo Dependency Boundary Checker",
    year: "2026",
    summary:
      "Developer CLI for enforcing dependency boundaries in JavaScript and TypeScript monorepos.",
    technologies: ["TypeScript", "Node.js", "@babel/parser", "TypeScript Compiler API"],
    highlights: [
      "Workspace discovery and static import scanning",
      "Source and target workspace resolution",
      "Configurable boundaries and TypeScript path aliases",
      "Human-readable and JSON output with deterministic exit codes",
      "Cross-platform symlink and canonical-path handling",
      "194 passing tests",
    ],
    npmUrl: "https://www.npmjs.com/package/monorepo-boundary-checker",
    githubUrl: "https://github.com/mjamalisld421-lab/monorepo-boundary-checker",
    featured: true,
  },
  {
    name: "npm-shame",
    year: "2026",
    summary:
      "Developer utility for inspecting installed dependency sizes and surfacing dependency weight.",
    technologies: ["JavaScript", "Node.js", "CommonJS", "npm"],
    highlights: [
      "Recursive filesystem size analysis",
      "Dependency size classification",
      "CLI and postinstall behavior",
      "Workspace symlink handling",
      "Opt-out environment control",
      "npm package publication workflow",
    ],
    featured: true,
  },
  {
    name: "Report Generation Service",
    year: "2026",
    summary:
      "Backend report-generation service supporting asynchronous jobs and persisted report states.",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ", "JWT"],
    highlights: [
      "Authentication and role-based access control",
      "Concurrent workers and retries",
      "CSV and JSON output",
      "Keyset pagination and Swagger documentation",
      "Rate limiting and production validation",
    ],
    featured: true,
  },
  {
    name: "Report Dashboard",
    year: "2026",
    summary:
      "Frontend dashboard for creating, tracking, and downloading asynchronous reports.",
    technologies: ["React", "TypeScript", "Vite"],
    highlights: [
      "Login and token flow",
      "Cursor pagination",
      "Validated report creation",
      "Job polling and completed or failed states",
      "Report downloads",
    ],
    featured: true,
  },
  {
    name: "Job Tracker App",
    year: "2026",
    summary: "Full-stack application for organizing and monitoring job applications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Neon", "Vercel"],
    highlights: ["CRUD workflows", "Status filtering and search", "Dashboard statistics", "Validation", "Responsive UI"],
  },
  {
    name: "SkillsSavy",
    year: "2026",
    summary: "Service-provider discovery interface with search and booking workflows.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
    highlights: ["Provider listings", "Category filtering", "Search", "Profile modals", "Booking validation"],
  },
  {
    name: "ShopEase",
    year: "2026",
    summary: "Responsive e-commerce storefront with a persistent client-side cart.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: ["Product listing and detail pages", "Category filtering", "Cart management", "Local storage persistence", "Mock checkout"],
  },
  {
    name: "Student Management System",
    year: "2026",
    summary: "Relational student, course, enrollment, and grade management application.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQLite"],
    highlights: ["Relational CRUD workflows", "Search and filtering", "Validation", "Persistent storage"],
  },
  {
    name: "UniSigner",
    period: "Feb 2025 – 2026",
    type: "Final Year Project",
    summary: "Pakistan Sign Language to Urdu prototype using video-based cloud inference.",
    technologies: ["PyTorch", "OpenCV", "ViT-B/8", "Temporal Transformer", "Flutter", "FastAPI", "WebSockets"],
    highlights: [
      "Eight-sign prototype trained on a 200-video dataset",
      "30-frame RGB input pipeline",
      "UniSignFormerV2 with ViT-Base/8 and temporal Transformer",
      "Mobile-to-cloud inference",
    ],
  },
  {
    name: "GoGrant",
    period: "Oct 2024 – Nov 2024",
    summary: "Relational database design for managing grant applications and funding workflows.",
    technologies: ["MySQL", "SQL"],
    highlights: ["Normalized relational schema", "Applications and approvals", "Funding distribution", "CRUD and SQL queries"],
  },
  {
    name: "Previous Personal Portfolio Website",
    period: "Apr 2024 – May 2024",
    summary: "An earlier personal portfolio created with a visual site builder.",
    technologies: ["WordPress", "Elementor"],
    highlights: ["Personal portfolio design and implementation"],
  },
];
