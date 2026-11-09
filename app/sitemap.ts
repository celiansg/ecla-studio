import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/mentions-legales", "/confidentialite"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() })); }
