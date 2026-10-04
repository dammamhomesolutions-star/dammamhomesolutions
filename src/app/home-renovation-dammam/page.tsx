import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { rnFaqs } from "@/lib/renovation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RnPlanProvider } from "@/components/renovation/RnPlan";
import RnHero from "@/components/renovation/RnHero";
import RnGoals from "@/components/renovation/RnGoals";
import RnScale from "@/components/renovation/RnScale";
import RnFloorPlan from "@/components/renovation/RnFloorPlan";
import RnVision from "@/components/renovation/RnVision";
import RnScope from "@/components/renovation/RnScope";
import RnMaterials from "@/components/renovation/RnMaterials";
import RnPriority from "@/components/renovation/RnPriority";
import RnRepair from "@/components/renovation/RnRepair";
import RnAssess from "@/components/renovation/RnAssess";
import RnRoadmap from "@/components/renovation/RnRoadmap";
import RnPathways from "@/components/renovation/RnPathways";
import RnStories from "@/components/renovation/RnStories";
import RnOneOrWhole from "@/components/renovation/RnOneOrWhole";
import RnRequest from "@/components/renovation/RnRequest";
import RnCost from "@/components/renovation/RnCost";
import RnSpecialist from "@/components/renovation/RnSpecialist";
import RnLocal from "@/components/renovation/RnLocal";
import RnAnswers from "@/components/renovation/RnAnswers";
import RnFaq from "@/components/renovation/RnFaq";
import RnFinalCta from "@/components/renovation/RnFinalCta";
import RnSticky from "@/components/renovation/RnSticky";

const path = "/home-renovation-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Home Renovation in Dammam";
const description =
  "Home renovation in Dammam, from a single-room refresh to multi-room and villa renovation. Plan rooms, scope and finishes, then send photos for an assessment.";

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

export default function HomeRenovationPage() {
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
        name: "Home Renovation",
        serviceType: "Residential and commercial interior renovation",
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
          { "@type": "Audience", audienceType: "Offices and retail spaces" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
          { "@type": "ListItem", position: 3, name: "Home Renovation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: rnFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp Your Plan"
        whatsappMessage="Hello Dammam Home Solutions, I'm planning a home renovation and would like to discuss it."
      />
      <RnPlanProvider>
        <main id="main" className="pb-20 lg:pb-0">
          <RnHero />
          <RnGoals />
          <RnScale />
          <RnFloorPlan />
          <RnVision />
          <RnScope />
          <RnMaterials />
          <RnPriority />
          <RnRepair />
          <RnAssess />
          <RnRoadmap />
          <RnPathways />
          <RnStories />
          <RnOneOrWhole />
          <RnRequest />
          <RnCost />
          <RnSpecialist />
          <RnLocal />
          <RnAnswers />
          <RnFaq />
          <RnFinalCta />
        </main>
        <Footer />
        <RnSticky />
      </RnPlanProvider>
    </>
  );
}
