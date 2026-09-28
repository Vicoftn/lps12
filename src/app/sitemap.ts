import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/paciente", "/aluno", "/privacidade"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/privacidade" ? "yearly" : "monthly",
    priority: route === "" ? 1.0 : route === "/privacidade" ? 0.3 : 0.8,
  }));
}