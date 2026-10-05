import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { getArService } from "@/lib/ar/services";
import ArServicePage from "@/components/ar/ArServicePage";

const doc = getArService("/electrical-repair/");

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.description,
  alternates: { canonical: "/ar/electrical-repair/", languages: languageAlternates("/electrical-repair/") },
  openGraph: { type: "website", locale: "ar_SA", url: `${siteConfig.url}/ar/electrical-repair/`, title: doc.metaTitle, description: doc.description, images: [`${siteConfig.url}/opengraph-image`] },
  twitter: { card: "summary", title: doc.metaTitle, description: doc.description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function Page() {
  return <ArServicePage doc={doc} />;
}
