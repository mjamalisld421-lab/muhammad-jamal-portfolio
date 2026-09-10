import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "ByteFinch Technologies",
    period: "2026",
    summary:
      "Engineering experience across JavaScript and TypeScript tooling, backend services, React interfaces, npm packages, and production-focused testing.",
    highlights: [
      "Built dependency-analysis CLIs with graph resolution, cycle detection, workspace discovery, static import scanning, and deterministic reporting.",
      "Developed a NestJS report service with authentication, RBAC, asynchronous jobs, retries, persisted state, keyset pagination, and CSV/JSON generation.",
      "Created a React dashboard for report creation, cursor-based browsing, job polling, failure handling, and downloads.",
      "Designed and tested Map-based LRU caching and npm utilities, including a monorepo boundary checker verified by 194 passing tests.",
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
      "Gained practical exposure to mobile network infrastructure, vendor service delivery, and telecom systems documentation.",
    highlights: [
      "Studied 2G GSM, 3G UMTS, and 4G LTE/EPC architectures, including attach, authentication, SMS, VoLTE, and bearer flows.",
      "Worked with technical diagrams and documentation covering eNodeB, MME, SGW, PGW, HSS, and PCRF components.",
    ],
  },
  {
    role: "Teacher's Assistant",
    company: "IQRA University",
    period: "Apr 2023 – Jun 2024",
    summary:
      "Supported lectures, labs, tutorials, grading, and exam preparation for programming and software engineering courses.",
    highlights: [
      "Provided academic guidance to approximately 50–55 students per class.",
      "Helped students strengthen programming and software engineering fundamentals.",
    ],
  },
  {
    role: "Content & Research Intern",
    company: "Maven Logix",
    period: "Jun 2024 – Aug 2024",
    summary:
      "Produced research-driven written and digital campaign content across written and multimedia formats.",
    highlights: [
      "Researched and prepared deadline-driven content for digital campaigns.",
      "Supported video editing and content enhancement work.",
    ],
  },
  {
    role: "Private Home Tutor",
    company: "Self-Employed",
    period: "Mar 2024 – May 2024",
    summary:
      "Tutored Mathematics, English, and Science for students in grades 9–11.",
    highlights: [
      "Created personalized lesson plans and assessed student progress.",
    ],
  },
];
