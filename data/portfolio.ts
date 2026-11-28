import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Muhammad Jamal",
  title: "Software Engineer | Applied AI, Machine Learning & Data Science",
  location: "Islamabad, Pakistan",
  email: "mjamalisld421@gmail.com",
  summary:
    "Software Engineering graduate building applied AI research, intelligent software products, distributed backend systems, and full-stack applications.",
  about: [
    "I am a Software Engineering graduate from IQRA University working across applied artificial intelligence, machine learning, data science, computer vision, backend engineering, and full-stack development.",
    "My work spans custom dataset engineering, exploratory analysis, deep-learning experiments, quantitative model evaluation, API development, database architecture, automated testing, and cloud deployment. UniSigner, DocuFlow AI, and RelayForge show that range through research, intelligent products, and distributed systems.",
  ],
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mjamalisld421-lab" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-jamal-46aa47420/" },
  { label: "Email", href: "mailto:mjamalisld421@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/jamal_17x" },
];
