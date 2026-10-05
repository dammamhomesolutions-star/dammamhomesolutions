import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { homeFaqs } from "@/lib/home";
import Header from "@/components/Header";
import IssueSelector from "@/components/IssueSelector";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import HpHero from "@/components/home/HpHero";
import HpTrust from "@/components/home/HpTrust";
import HpServices from "@/components/home/HpServices";
import HpWhy from "@/components/home/HpWhy";
import HpProcess from "@/components/home/HpProcess";
import HpEmergency from "@/components/home/HpEmergency";
import HpProperty from "@/components/home/HpProperty";
import HpProof from "@/components/home/HpProof";
import HpAreas from "@/components/home/HpAreas";
import HpFaq from "@/components/home/HpFaq";
import HpFinalCta from "@/components/home/HpFinalCta";

const title = "Home Maintenance & Repair Services in Dammam | Dammam Home Solutions";
const description =
  "AC, plumbing, electrical, handyman, painting and waterproofing for homes in Dammam, Khobar, Dhahran and Qatif. Available 24/7 — send photos on WhatsApp for a quote.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/", languages: languageAlternates("/") },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: title,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="pb-20 lg:pb-0">
        <HpHero />
        <HpTrust />
        <HpServices />
        <IssueSelector />
        <HpWhy />
        <HpProcess />
        <HpEmergency />
        <HpProperty />
        <HpProof />
        <HpAreas />
        <HpFaq />
        <HpFinalCta />
      </main>
      <Footer />
      <MobileStickyCta label="Get a Quote on WhatsApp" whatsappMessage="Hello Dammam Home Solutions, I'd like a quote. Here's what needs fixing: " />
    </>
  );
}
