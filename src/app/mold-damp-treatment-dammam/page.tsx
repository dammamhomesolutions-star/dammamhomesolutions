import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { mdFaqs } from "@/lib/mold-damp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdReportProvider } from "@/components/mold-damp/MdReport";
import MdHero from "@/components/mold-damp/MdHero";
import MdSigns from "@/components/mold-damp/MdSigns";
import MdFollow from "@/components/mold-damp/MdFollow";
import MdPath from "@/components/mold-damp/MdPath";
import MdMap from "@/components/mold-damp/MdMap";
import MdLooks from "@/components/mold-damp/MdLooks";
import MdReturns from "@/components/mold-damp/MdReturns";
import MdOutside from "@/components/mold-damp/MdOutside";
import MdTreat from "@/components/mold-damp/MdTreat";
import MdSurface from "@/components/mold-damp/MdSurface";
import MdHistory from "@/components/mold-damp/MdHistory";
import MdStory from "@/components/mold-damp/MdStory";
import MdRequest from "@/components/mold-damp/MdRequest";
import MdCost from "@/components/mold-damp/MdCost";
import MdCare from "@/components/mold-damp/MdCare";
import MdBoundaries from "@/components/mold-damp/MdBoundaries";
import MdLocal from "@/components/mold-damp/MdLocal";
import MdAnswers from "@/components/mold-damp/MdAnswers";
import MdFaq from "@/components/mold-damp/MdFaq";
import MdFinalCta from "@/components/mold-damp/MdFinalCta";
import MdSticky from "@/components/mold-damp/MdSticky";

const path = "/mold-damp-treatment-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Mold & Damp Treatment in Dammam";
const description =
  "Mold and damp treatment in Dammam: find the likely moisture source, treat affected walls and ceilings, fix leaks or waterproofing and restore the surface.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  twitter: {
    card: "summary",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function MoldDampPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | ${siteConfig.name}`,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Mold & Damp Treatment",
        serviceType: "Damp assessment, surface mold treatment, moisture-source repair and surface restoration",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Eastern Province, Saudi Arabia",
          },
        },
        audience: [
          { "@type": "Audience", audienceType: "Homeowners, tenants and landlords" },
          { "@type": "Audience", audienceType: "Commercial properties" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "Mold & Damp Treatment", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: mdFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        ctaLabel="WhatsApp Photos"
        whatsappMessage="Hello Dammam Home Solutions, I have a damp or mold problem and would like it checked."
      />
      <MdReportProvider>
        <main id="main" className="pb-20 lg:pb-0">
          <MdHero />
          <MdSigns />
          <MdFollow />
          <MdPath />
          <MdMap />
          <MdLooks />
          <MdReturns />
          <MdOutside />
          <MdTreat />
          <MdSurface />
          <MdHistory />
          <MdStory />
          <MdRequest />
          <MdCost />
          <MdCare />
          <MdBoundaries />
          <MdLocal />
          <MdAnswers />
          <MdFaq />
          <MdFinalCta />
        </main>
        <Footer />
        <MdSticky />
      </MdReportProvider>
    </>
  );
}
