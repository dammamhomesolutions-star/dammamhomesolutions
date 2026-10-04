import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { allServices, serviceGroups } from "@/lib/services-catalog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

const path = "/services/";
const pageUrl = `${siteConfig.url}${path}`;
const title = "Home Repair & Maintenance Services";
const description =
  "Every home repair and maintenance service we offer in Dammam — AC, plumbing, electrical, interiors, exterior, damp, cleaning, handyman and property care.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", url: pageUrl, siteName: siteConfig.name, title: `${title} | ${siteConfig.name}`, description, images: [`${siteConfig.url}/opengraph-image`] },
  twitter: { card: "summary", title: `${title} | ${siteConfig.name}`, description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: `${title} | ${siteConfig.name}`, description, isPartOf: { "@id": `${siteConfig.url}/#website` }, about: { "@id": `${siteConfig.url}/#business` } },
      {
        "@type": "ItemList",
        name: "Home repair and maintenance services",
        itemListElement: allServices.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.label, url: `${siteConfig.url}${s.href}` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="border-b border-ink-900/10 bg-sand-100/60">
          <div className="container-edge pb-12 pt-6 sm:pb-16">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
                <li><Link href="/" className="focus-ring rounded-sm hover:text-rust-700">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-800" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="mt-8 max-w-3xl font-serif text-4xl tracking-tight text-ink-950 sm:text-6xl">Home repair &amp; maintenance services</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
              {allServices.length} services for homes in Dammam, Al Khobar, Dhahran and Qatif, grouped by
              the part of the home they deal with. Each page explains the problems
              we handle, how the work is done and what to send us.
            </p>
            <nav aria-label="Service categories" className="mt-8 flex flex-wrap gap-2">
              {serviceGroups.map((g) => (
                <a key={g.key} href={`#${g.key}`} className="focus-ring rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-900/40">{g.title}</a>
              ))}
            </nav>
          </div>
        </section>

        {serviceGroups.map((g, gi) => (
          <section key={g.key} id={g.key} aria-labelledby={`sv-${g.key}`} className={`scroll-mt-20 border-b border-ink-900/10 py-14 sm:py-20 ${gi % 2 ? "bg-sand-100/40" : ""}`}>
            <div className="container-edge grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-rust-700">{String(gi + 1).padStart(2, "0")}</p>
                <h2 id={`sv-${g.key}`} className="mt-2 font-serif text-3xl tracking-tight text-ink-950">{g.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{g.intro}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                {g.services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="focus-ring group flex h-full items-start justify-between gap-4 rounded-xl border border-ink-900/10 bg-sand-50 p-5 transition-colors hover:border-rust-600">
                      <span>
                        <span className="block font-semibold text-ink-950">{s.label}</span>
                        <span className="mt-1 block text-sm text-ink-600">{s.blurb}</span>
                      </span>
                      <span aria-hidden="true" className="text-rust-700 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="py-16 sm:py-20">
          <div className="container-edge max-w-3xl text-center">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Not sure which service you need?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">Describe the problem and send a photo. We&rsquo;ll work out which service it falls under — you don&rsquo;t need to know the trade name.</p>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'm not sure which service I need. Here's the problem: ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50"
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCta label="Ask About a Service" whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about one of your services." />
    </>
  );
}
