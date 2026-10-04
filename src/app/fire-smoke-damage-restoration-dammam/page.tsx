import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { fsFaqs } from "@/lib/fire-smoke-restoration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FsBreadcrumb from "@/components/fire-smoke-restoration/FsBreadcrumb";
import FsHero from "@/components/fire-smoke-restoration/FsHero";
import FsEmergencyStrip from "@/components/fire-smoke-restoration/FsEmergencyStrip";
import FsAtAGlance from "@/components/fire-smoke-restoration/FsAtAGlance";
import FsDamageMap from "@/components/fire-smoke-restoration/FsDamageMap";
import FsDamageTypes from "@/components/fire-smoke-restoration/FsDamageTypes";
import FsServices from "@/components/fire-smoke-restoration/FsServices";
import FsProcess from "@/components/fire-smoke-restoration/FsProcess";
import FsWhatNotToDo from "@/components/fire-smoke-restoration/FsWhatNotToDo";
import FsSmokeOdor from "@/components/fire-smoke-restoration/FsSmokeOdor";
import FsFireWater from "@/components/fire-smoke-restoration/FsFireWater";
import FsPropertyTypes from "@/components/fire-smoke-restoration/FsPropertyTypes";
import FsContents from "@/components/fire-smoke-restoration/FsContents";
import FsAssessmentPlan from "@/components/fire-smoke-restoration/FsAssessmentPlan";
import FsJourney from "@/components/fire-smoke-restoration/FsJourney";
import FsLocalTrust from "@/components/fire-smoke-restoration/FsLocalTrust";
import FsRequestForm from "@/components/fire-smoke-restoration/FsRequestForm";
import FsFaq from "@/components/fire-smoke-restoration/FsFaq";
import FsRelatedServices from "@/components/fire-smoke-restoration/FsRelatedServices";
import FsFinalCta from "@/components/fire-smoke-restoration/FsFinalCta";
import FsMobileStickyCta from "@/components/fire-smoke-restoration/FsMobileStickyCta";

const path = "/fire-smoke-damage-restoration-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Fire & Smoke Damage Restoration in Dammam";
const description =
  "Fire and smoke damage restoration in Dammam. Help with smoke odor, firefighting water damage, damaged contents and repairs to walls, ceilings, floors and kitchens.";

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

export default function FireSmokeDamageRestorationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Fire & Smoke Damage Restoration",
        serviceType: "Fire and smoke damage restoration",
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
          { "@type": "Audience", audienceType: "Homeowners and residents" },
          { "@type": "Audience", audienceType: "Businesses" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "Fire & Smoke Damage Restoration", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: fsFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Fire Damage"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about fire or smoke damage restoration."
      />
      <FsBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <FsHero />
        <FsEmergencyStrip />
        <FsAtAGlance />
        <FsDamageMap />
        <FsDamageTypes />
        <FsServices />
        <FsProcess />
        <FsWhatNotToDo />
        <FsSmokeOdor />
        <FsFireWater />
        <FsPropertyTypes />
        <FsContents />
        <FsAssessmentPlan />
        <FsJourney />
        <FsLocalTrust />
        <FsRequestForm />
        <FsFaq />
        <FsRelatedServices />
        <FsFinalCta />
      </main>
      <Footer />
      <FsMobileStickyCta />
    </>
  );
}
