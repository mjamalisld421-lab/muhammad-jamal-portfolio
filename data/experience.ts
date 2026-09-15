import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "ByteFinch Technologies",
    period: "2026",
    summary:
      "Built JavaScript and TypeScript developer tooling, backend systems, React interfaces, and npm packages with a strong focus on testing and reliability.",
    highlights: [
      "Worked on the Task Dependency Resolver, LRU Cache, npm-shame, and Monorepo Dependency Boundary Checker.",
      "Developed an asynchronous NestJS report service and its React dashboard.",
      "Applied automated testing, deterministic CLI behavior, and architecture-boundary analysis across engineering tasks.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    current: true,
  },
  {
    role: "Network & Telecom Systems Intern",
    company: "Huawei Technologies",
    period: "Jun 2025 – Aug 2025",
    location: "Islamabad, Pakistan",
    summary:
      "Worked with mobile network infrastructure concepts, LTE/EPC architecture, and technical service documentation.",
    highlights: [
      "Studied authentication and attach flows, VoLTE, SMS delivery, and bearer management.",
      "Prepared and reviewed network diagrams and service documentation for core LTE/EPC components.",
    ],
  },
];
