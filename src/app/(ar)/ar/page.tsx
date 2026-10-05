import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { arHomeFaqs } from "@/lib/ar/home";
import ArHeader from "@/components/ar/ArHeader";
import ArFooter from "@/components/ar/ArFooter";
import ArSticky from "@/components/ar/ArSticky";
import { ArEmergency, ArFaqCta, ArHero, ArProblems, ArPropertyAreas, ArServices, ArWhyProcess } from "@/components/ar/ArHome";

const url = `${siteConfig.url}/ar/`;
const title = "صيانة وإصلاح المنازل في الدمام | حلول الدمام المنزلية";
const description = "صيانة منازل في الدمام والخبر والظهران والقطيف: فني تكييف، سباك، كهربائي، عزل مائي، دهانات وهاندي مان. متاحون 24 ساعة — أرسل الصور عبر واتساب.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ar/", languages: languageAlternates("/") },
  openGraph: { type: "website", locale: "ar_SA", url, title, description, images: [`${siteConfig.url}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function ArabicHome() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` }, about: { "@id": `${siteConfig.url}/#business` } },
      { "@type": "FAQPage", inLanguage: "ar-SA", mainEntity: arHomeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader />
      <main id="main" className="pb-20 lg:pb-0">
        <ArHero />
        <ArServices />
        <ArProblems />
        <ArWhyProcess />
        <ArEmergency />
        <ArPropertyAreas />
        <ArFaqCta />
      </main>
      <ArFooter />
      <ArSticky label="اطلب عرض سعر عبر واتساب" message="السلام عليكم، أرغب في عرض سعر. المشكلة هي: " />
    </>
  );
}
