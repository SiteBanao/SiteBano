import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { demoProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${siteConfig.url}${p.path}`,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...demoProjects.map((d) => ({
      url: `${siteConfig.url}/portfolio/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
