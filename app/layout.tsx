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
  title: "Muhammad Jamal | Software Engineer",
  description:
    "Software Engineer and Full-Stack Developer building web applications, backend systems, developer tooling, and applied AI projects.",
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Jamal | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building web applications, backend systems, developer tooling, and applied AI projects.",
    siteName: "Muhammad Jamal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Jamal | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building web applications, backend systems, developer tooling, and applied AI projects.",
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
