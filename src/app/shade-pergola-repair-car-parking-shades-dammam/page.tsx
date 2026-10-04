import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { shFaqs } from "@/lib/shade-pergola";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShPlanProvider } from "@/components/shade-pergola/ShPlan";
import ShHero from "@/components/shade-pergola/ShHero";
import ShInspector from "@/components/shade-pergola/ShInspector";
import ShExploded from "@/components/shade-pergola/ShExploded";
import ShProblems from "@/components/shade-pergola/ShProblems";
import ShDecision from "@/components/shade-pergola/ShDecision";
import ShMaterials from "@/components/shade-pergola/ShMaterials";
import ShFrame from "@/components/shade-pergola/ShFrame";
import ShBuilder from "@/components/shade-pergola/ShBuilder";
import ShWater from "@/components/shade-pergola/ShWater";
import ShWeather from "@/components/shade-pergola/ShWeather";
import ShUses from "@/components/shade-pergola/ShUses";
import ShMaintain from "@/components/shade-pergola/ShMaintain";
import ShProcess from "@/components/shade-pergola/ShProcess";
import ShStory from "@/components/shade-pergola/ShStory";
import ShCost from "@/components/shade-pergola/ShCost";
import ShRequest from "@/components/shade-pergola/ShRequest";
import ShLocal from "@/components/shade-pergola/ShLocal";
import ShAnswers from "@/components/shade-pergola/ShAnswers";
import ShFaq from "@/components/shade-pergola/ShFaq";
import ShFinalCta from "@/components/shade-pergola/ShFinalCta";
import ShSticky from "@/components/shade-pergola/ShSticky";

const path = "/shade-pergola-repair-car-parking-shades-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Car Parking Shade & Pergola Repair in Dammam";
const description =
  "Car parking shade and pergola repair in Dammam: assessment of cover, frame, connections, base and drainage, then repair, cover replacement or refurbishment.";

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

export default function ShadePergolaPage() {
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
        name: "Shade & Pergola Repair",
        serviceType: "Car parking shade, pergola and outdoor shade structure repair, cover replacement and refurbishment",
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
          { "@type": "Audience", audienceType: "Villa owners and residents" },
          { "@type": "Audience", audienceType: "Commercial properties and compounds" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Shade & Pergola Repair", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: shFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp Shade Photos"
        whatsappMessage="Hello Dammam Home Solutions, my parking shade / pergola needs repair."
      />
      <ShPlanProvider>
        <main id="main" className="pb-20 lg:pb-0">
          <ShHero />
          <ShInspector />
          <ShExploded />
          <ShProblems />
          <ShDecision />
          <ShMaterials />
          <ShFrame />
          <ShBuilder />
          <ShWater />
          <ShWeather />
          <ShUses />
          <ShMaintain />
          <ShProcess />
          <ShStory />
          <ShCost />
          <ShRequest />
          <ShLocal />
          <ShAnswers />
          <ShFaq />
          <ShFinalCta />
        </main>
        <Footer />
        <ShSticky />
      </ShPlanProvider>
    </>
  );
}
