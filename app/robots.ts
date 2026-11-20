import type { MetadataRoute } from "next";

// Site non lancé : aucune indexation. Remettre allow + sitemap au lancement.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
