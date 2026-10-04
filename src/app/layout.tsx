import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Fraunces } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-43PH63HYX9";
const CLARITY_PROJECT_ID = "ypul9zqpwq";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Property Repair & Maintenance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Property Repair & Maintenance`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Property Repair & Maintenance`,
    description: siteConfig.description,
  },
  verification: {
    google: "OsieyejuRTEuXUWrhWKvUd0eC_UP1orXkwACJ3_j86g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const serviceSlugs = [
    "ac-repair",
    "plumbing-repair",
    "electrical-repair",
    "waterproofing",
    "painting-wall-repair",
    "carpentry-doors-locks",
    "bathroom-kitchen-repair",
    "general-home-repairs",
    "property-maintenance",
    "emergency-home-repairs",
    "tile-repair-grout",
    "ceiling-gypsum-board-repair",
    "window-door-glass-repair",
    "kitchen-cabinet-repair",
    "flooring-repair",
    "gate-garage-door-repair",
    "roof-repair",
    "water-leak-repair",
    "water-tank-cleaning",
    "fire-smoke-damage-restoration-dammam",
    "roof-replacement-dammam",
    "pest-control-dammam",
    "deep-cleaning-move-in-move-out-cleaning-dammam",
    "sofa-carpet-cleaning-dammam",
    "ac-installation-dammam",
    "ac-duct-cleaning-dammam",
    "water-heater-repair-installation-dammam",
    "drain-unblocking-sewer-line-cleaning-dammam",
    "water-pump-repair-dammam",
    "appliance-repair-dammam",
    "cctv-intercom-installation-dammam",
    "lighting-fixture-installation-dammam",
    "furniture-assembly-dammam",
    "curtain-blind-installation-dammam",
    "wallpaper-installation-dammam",
    "false-ceiling-installation-dammam",
    "marble-granite-polishing-dammam",
    "outdoor-boundary-wall-repair-dammam",
    "swimming-pool-repair-maintenance-dammam",
    "handyman-services-dammam",
    "home-renovation-dammam",
    "mold-damp-treatment-dammam",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        telephone: siteConfig.phoneDisplay,
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
        areaServed: {
          "@type": "City",
          name: "Dammam",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dammam",
          addressCountry: "SA",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Property repair and maintenance services",
          itemListElement: serviceSlugs.map((slug) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${siteConfig.url}/${slug}/#service` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
