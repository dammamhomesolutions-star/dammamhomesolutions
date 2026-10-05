import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { getArService } from "@/lib/ar/services";
import ArServicePage from "@/components/ar/ArServicePage";

const doc = getArService("/handyman-services-dammam/");

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.description,
  alternates: { canonical: "/ar/handyman-services-dammam/", languages: languageAlternates("/handyman-services-dammam/") },
  openGraph: { type: "website", locale: "ar_SA", url: `${siteConfig.url}/ar/handyman-services-dammam/`, title: doc.metaTitle, description: doc.description, images: [`${siteConfig.url}/opengraph-image`] },
  twitter: { card: "summary", title: doc.metaTitle, description: doc.description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function Page() {
  return <ArServicePage doc={doc} />;
}
