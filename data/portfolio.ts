import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Muhammad Jamal",
  title: "Software Engineer | Full-Stack Developer",
  location: "Islamabad, Pakistan",
  email: "mjamalisld421@gmail.com",
  summary:
    "Software Engineering graduate and full-stack developer building practical web applications, developer tooling, backend systems, and applied AI solutions.",
  about: [
    "I am a Software Engineering graduate from IQRA University focused on full-stack development with React, Next.js, and TypeScript. My work also spans backend services, databases, .NET, and applied AI.",
    "Through engineering internships and independent projects, I have built web applications, asynchronous backend systems, npm packages, and developer tools with an emphasis on reliability, clear architecture, and practical value.",
  ],
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mjamalisld421-lab" },
  { label: "Email", href: "mailto:mjamalisld421@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/jamal_17x" },
];
