import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { areas } from "@/lib/areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

const path = "/areas-we-serve/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Areas We Serve: Dammam, Khobar, Dhahran, Qatif";
const description =
  "Home maintenance and repair across Dammam, Al Khobar, Dhahran and Qatif. See the homes we work on in each city and send your location to confirm coverage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path, languages: languageAlternates("/areas-we-serve/") },
  openGraph: { type: "website", url: pageUrl, siteName: siteConfig.name, title: `${title} | ${siteConfig.name}`, description, images: [`${siteConfig.url}/opengraph-image`] },
  twitter: { card: "summary", title: `${title} | ${siteConfig.name}`, description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function AreasPage() {
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
        about: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="border-b border-ink-900/10 bg-ink-950 text-sand-50">
          <div className="container-edge pb-14 pt-6 sm:pb-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-300">
                <li><Link href="/" className="focus-ring rounded-sm hover:text-sand-50">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-sand-50" aria-current="page">Areas We Serve</li>
              </ol>
            </nav>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="font-serif text-4xl tracking-tight sm:text-6xl">Areas we serve</h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300">
                  We&rsquo;re based in Dammam and carry out home maintenance and
                  repairs across Al Khobar, Dhahran and Qatif too — 24 hours a day.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-2 lg:col-span-5">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <a href={`#${a.slug}`} className="focus-ring flex items-baseline justify-between rounded-xl border border-sand-50/15 px-4 py-3 hover:border-sand-50/50">
                      <span className="font-semibold">{a.name}</span>
                      <span lang="ar" dir="rtl" className="text-sm text-rust-500">{a.arabic}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {areas.map((a, i) => (
          <section key={a.slug} id={a.slug} aria-labelledby={`ar-${a.slug}`} className={`scroll-mt-20 border-b border-ink-900/10 py-16 sm:py-20 ${i % 2 ? "bg-sand-100/50" : ""}`}>
            <div className="container-edge grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p lang="ar" dir="rtl" className="text-left text-2xl text-rust-700">{a.arabic}</p>
                <h2 id={`ar-${a.slug}`} className="mt-2 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Home maintenance in {a.name}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{a.summary}</p>
                <a
                  href={buildWhatsAppLink(`Hello Dammam Home Solutions, I'm in ${a.name} and need help with: `)}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50"
                >
                  Request service in {a.name}
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Homes we work on</h3>
                  <ul className="mt-3 space-y-2">
                    {a.homes.map((h) => <li key={h} className="rounded-lg border border-ink-900/10 bg-sand-50 px-4 py-2.5 text-sm text-ink-800">{h}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Often requested</h3>
                  <ul className="mt-3 space-y-2">
                    {a.common.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="focus-ring flex items-center justify-between rounded-lg border border-ink-900/10 bg-sand-50 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:border-rust-600">
                          {c.label} <span aria-hidden="true" className="text-rust-700">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 sm:py-20">
          <div className="container-edge max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Outside these cities?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
              Send your location on WhatsApp and we&rsquo;ll tell you whether we can
              help. Every service we offer is listed on the{" "}
              <Link href="/services/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-rust-600 underline-offset-4">services page</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCta label="Send My Location" whatsappMessage="Hello Dammam Home Solutions, can you cover my area? My location is: " />
    </>
  );
}
