import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date("2026-11-20"), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
