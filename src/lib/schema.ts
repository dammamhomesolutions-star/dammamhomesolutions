import { siteConfig } from "@/lib/site-config";
import { allServices } from "@/lib/services-catalog";

// The business entity, shared by the English and Arabic root layouts so both
// describe the same organisation (one @id, Arabic name as alternateName).
export const arabicBusinessName = "حلول الدمام المنزلية";

export function businessNode() {
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: arabicBusinessName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phoneDisplay,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    areaServed: siteConfig.areas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    knowsAbout: ["Home maintenance", "AC repair", "Plumbing", "Electrical repair", "Waterproofing", "Painting", "Handyman services"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dammam",
      addressCountry: "SA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property repair and maintenance services",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${siteConfig.url}${s.href}#service` },
      })),
    },
  };
}
