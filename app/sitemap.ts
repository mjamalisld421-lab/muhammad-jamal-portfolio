import type { MetadataRoute } from "next";

const baseUrl = "https://muhammad-jamal-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects/unisigner`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects/docuflow-ai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects/relayforge`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
