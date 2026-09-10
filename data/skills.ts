import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "Java",
      "C++",
      "C",
      "Dart",
      "SQL",
      "HTML",
      "CSS",
    ],
    emphasis: ["TypeScript", "JavaScript", "Python", "C#", "SQL"],
  },
  {
    title: "Frontend & Web",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "ASP.NET Core MVC", "REST APIs"],
    emphasis: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "SQLite",
      "Entity Framework Core",
      "MySQL",
      "Redis",
      "BullMQ",
    ],
    emphasis: ["NestJS", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI & Computer Vision",
    skills: ["PyTorch", "Vision Transformers", "OpenCV", "PIL", "Data Augmentation"],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Google Colab",
      "FastAPI",
      "WebSockets",
      "VS Code",
      "Figma",
      "UI/UX",
      "Wireframing",
      "Prototyping",
    ],
    emphasis: ["Git", "GitHub", "Vercel"],
  },
];
