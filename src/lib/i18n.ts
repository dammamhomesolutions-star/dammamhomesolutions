import { siteConfig } from "@/lib/site-config";

// English paths that have an Arabic counterpart at /ar + path.
export const arabicPaths = [
  "/",
  "/services/",
  "/areas-we-serve/",
  "/contact-us/",
  "/about-us/",
  "/ac-repair/",
  "/plumbing-repair/",
  "/electrical-repair/",
  "/water-leak-repair/",
  "/handyman-services-dammam/",
  "/painting-wall-repair/",
  "/waterproofing/",
  "/property-maintenance/",
  "/emergency-home-repairs/",
] as const;

export const hasArabic = (path: string) => (arabicPaths as readonly string[]).includes(path);

// hreflang alternates for a page available in both languages. `path` is the
// English path; English is the x-default.
export function languageAlternates(path: string) {
  return {
    "en-SA": `${siteConfig.url}${path}`,
    "ar-SA": `${siteConfig.url}/ar${path}`,
    "x-default": `${siteConfig.url}${path}`,
  };
}

// Where the language switcher should point from a given pathname.
export function switchTarget(pathname: string): { href: string; lang: "en" | "ar" } {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (p === "/ar/" || p.startsWith("/ar/")) {
    const en = p.slice(3) || "/";
    return { href: hasArabic(en) ? en : "/", lang: "en" };
  }
  return { href: hasArabic(p) ? `/ar${p}` : "/ar/", lang: "ar" };
}
