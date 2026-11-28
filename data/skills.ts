import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Scientific Computing",
    skills: ["Python", "TypeScript", "JavaScript", "Rust", "C#", "SQL", "Dart", "NumPy", "Java", "C++"],
    emphasis: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["Exploratory Data Analysis", "Data Profiling", "Data Validation", "Dataset Engineering", "Descriptive Statistics", "Feature Engineering", "Data Preprocessing", "Class Balancing", "Data Visualization", "Diagnostic Analytics", "Statistical Evaluation"],
    emphasis: ["Exploratory Data Analysis", "Dataset Engineering", "Model Evaluation"],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: ["PyTorch", "Supervised Learning", "Deep Learning", "Multiclass Classification", "Model Evaluation", "Neural Networks", "Generative AI", "LLM Integration", "OCR"],
    emphasis: ["PyTorch", "Deep Learning", "Model Evaluation"],
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "MediaPipe", "Vision Transformers", "Video Classification", "Image Processing", "Video Preprocessing", "Data Augmentation", "Spatial-Temporal Modeling"],
    emphasis: ["OpenCV", "Vision Transformers", "Video Classification"],
  },
  {
    title: "Model Optimization & AI Infrastructure",
    skills: ["CUDA", "GPU Inference", "INT8 Quantization", "ExecuTorch", "XNNPACK", "FastAPI", "WebSockets", "Cloudflare", "AI Model Serving"],
    emphasis: ["GPU Inference", "FastAPI", "WebSockets"],
  },
  {
    title: "Backend & Distributed Systems",
    skills: ["Node.js", "NestJS", "Rust", "Axum", "Tokio", "REST APIs", "Redis", "BullMQ", "SQLx", "JWT", "RBAC", "Distributed Systems", "Background Workers", "Webhook Delivery"],
    emphasis: ["NestJS", "PostgreSQL", "Distributed Systems"],
  },
  {
    title: "Frontend, Mobile & Databases",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Vite", "PostgreSQL", "Prisma", "SQLite", "MySQL", "Entity Framework Core", "Neon", "Cloudflare D1"],
    emphasis: ["React", "Next.js", "PostgreSQL"],
  },
  {
    title: "Testing, Infrastructure & Research",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Playwright", "Vitest", "Railway", "Vercel", "Cloudflare Workers", "Netlify", "Research Methodology", "Literature Review", "Experimental Analysis", "Technical Documentation", "Software Architecture", "System Design", "AI-Assisted Development"],
    emphasis: ["Git", "Playwright", "Technical Documentation"],
  },
];
