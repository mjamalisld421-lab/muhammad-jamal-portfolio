import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL;
const metadataBase = configuredSiteUrl
  ? new URL(
      configuredSiteUrl.startsWith("http")
        ? configuredSiteUrl
        : `https://${configuredSiteUrl}`,
    )
  : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Muhammad Jamal | Software Engineer, Applied AI & Data Science",
  description:
    "Software Engineer working across applied AI, machine learning, data science, computer vision, full-stack development, backend engineering, and distributed systems.",
  applicationName: "Muhammad Jamal Portfolio",
  authors: [{ name: "Muhammad Jamal" }],
  creator: "Muhammad Jamal",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Backend Engineering",
    "Developer Tooling",
    "AI Engineering",
    "Applied AI",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "Computer Vision",
    "Python",
    "PyTorch",
    "Vision Transformers",
    "Pakistan Sign Language Recognition",
    "Deep Learning",
    "AI Model Serving",
    "Distributed Systems",
    "Generative AI",
    "Intelligent Document Processing",
    "Cloudflare Workers AI",
    "Large Language Models",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Jamal | Software Engineer, Applied AI & Data Science",
    description:
      "Applied AI research, intelligent software products, full-stack applications, and distributed backend systems.",
    siteName: "Muhammad Jamal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Jamal | Software Engineer, Applied AI & Data Science",
    description:
      "Applied AI research, intelligent software products, full-stack applications, and distributed backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
