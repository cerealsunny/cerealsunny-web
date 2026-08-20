import type { MetadataRoute } from "next";
import { SITE_URL, SITE_IS_INDEXABLE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!SITE_IS_INDEXABLE) {
    // Staging: bloquear todo el crawl, no solo el índice, mientras
    // cerealsunny-web.vercel.app no sea el dominio final.
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/creditos",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
