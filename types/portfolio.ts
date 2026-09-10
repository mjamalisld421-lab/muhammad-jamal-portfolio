export interface SocialLink {
  label: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  period?: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
  current?: boolean;
}

export interface Project {
  name: string;
  year?: string;
  period?: string;
  type?: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  npmUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  emphasis?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  coursework: string[];
}
