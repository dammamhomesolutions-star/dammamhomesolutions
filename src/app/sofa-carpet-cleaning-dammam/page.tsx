import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { scFaqs } from "@/lib/sofa-carpet-cleaning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScBreadcrumb from "@/components/sofa-carpet-cleaning/ScBreadcrumb";
import ScHero from "@/components/sofa-carpet-cleaning/ScHero";
import ScProblem from "@/components/sofa-carpet-cleaning/ScProblem";
import ScMap from "@/components/sofa-carpet-cleaning/ScMap";
import ScSofaVsCarpet from "@/components/sofa-carpet-cleaning/ScSofaVsCarpet";
import ScStainSelector from "@/components/sofa-carpet-cleaning/ScStainSelector";
import ScFreshOld from "@/components/sofa-carpet-cleaning/ScFreshOld";
import ScMaterials from "@/components/sofa-carpet-cleaning/ScMaterials";
import ScOdorDrying from "@/components/sofa-carpet-cleaning/ScOdorDrying";
import ScProcesses from "@/components/sofa-carpet-cleaning/ScProcesses";
import ScBeforeAfter from "@/components/sofa-carpet-cleaning/ScBeforeAfter";
import ScHomeCommercial from "@/components/sofa-carpet-cleaning/ScHomeCommercial";
import ScDecisionTool from "@/components/sofa-carpet-cleaning/ScDecisionTool";
import ScMatrix from "@/components/sofa-carpet-cleaning/ScMatrix";
import ScCost from "@/components/sofa-carpet-cleaning/ScCost";
import ScPrepAfter from "@/components/sofa-carpet-cleaning/ScPrepAfter";
import ScRequestForm from "@/components/sofa-carpet-cleaning/ScRequestForm";
import ScFaq from "@/components/sofa-carpet-cleaning/ScFaq";
import ScRelatedServices from "@/components/sofa-carpet-cleaning/ScRelatedServices";
import ScFinalCta from "@/components/sofa-carpet-cleaning/ScFinalCta";
import ScMobileStickyCta from "@/components/sofa-carpet-cleaning/ScMobileStickyCta";

const path = "/sofa-carpet-cleaning-dammam/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Sofa & Carpet Cleaning in Dammam";
const description =
  "Sofa, upholstery, carpet and rug cleaning in Dammam. Material-aware methods for stains, soil and odours in homes and offices, with honest advice on what can come out.";

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

export default function SofaCarpetCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Sofa & Carpet Cleaning",
        serviceType: "Sofa, upholstery and carpet cleaning",
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
          { "@type": "Audience", audienceType: "Homeowners and tenants" },
          { "@type": "Audience", audienceType: "Offices and commercial properties" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: "Sofa & Carpet Cleaning", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: scFaqs.map((faq) => ({
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
        ctaLabel="WhatsApp About Cleaning"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about sofa or carpet cleaning."
      />
      <ScBreadcrumb />
      <main id="main" className="pb-20 lg:pb-0">
        <ScHero />
        <ScProblem />
        <ScMap />
        <ScSofaVsCarpet />
        <ScStainSelector />
        <ScFreshOld />
        <ScMaterials />
        <ScOdorDrying />
        <ScProcesses />
        <ScBeforeAfter />
        <ScHomeCommercial />
        <ScDecisionTool />
        <ScMatrix />
        <ScCost />
        <ScPrepAfter />
        <ScRequestForm />
        <ScFaq />
        <ScRelatedServices />
        <ScFinalCta />
      </main>
      <Footer />
      <ScMobileStickyCta />
    </>
  );
}
