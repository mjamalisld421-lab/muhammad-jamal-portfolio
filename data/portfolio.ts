import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Muhammad Jamal",
  title: "Software Engineer | Full-Stack Developer",
  location: "Islamabad, Pakistan",
  email: "mjamalisld421@gmail.com",
  summary:
    "Final-year Software Engineering student focused on building practical full-stack products, developer tooling, backend systems, and applied AI solutions.",
  about: [
    "I am a final-year BS Software Engineering student at IQRA University with a focus on full-stack development using React, Next.js, and TypeScript. My work also spans backend services, databases, .NET, and applied AI.",
    "Through engineering internships and independent projects, I have built web applications, asynchronous backend systems, npm packages, and developer tools with an emphasis on reliability, clear architecture, and practical value.",
  ],
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mjamalisld421-lab" },
  { label: "Email", href: "mailto:mjamalisld421@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/jamal_17x" },
];
