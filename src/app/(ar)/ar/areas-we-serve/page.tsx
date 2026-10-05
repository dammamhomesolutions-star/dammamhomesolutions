import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { arabicAreas } from "@/lib/ar/areas";
import ArHeader from "@/components/ar/ArHeader";
import ArFooter from "@/components/ar/ArFooter";
import ArSticky from "@/components/ar/ArSticky";
import ArBreadcrumb from "@/components/ar/ArBreadcrumb";

const url = `${siteConfig.url}/ar/areas-we-serve/`;
const title = "مناطقنا: الدمام والخبر والظهران والقطيف";
const description = "صيانة وإصلاح المنازل في الدمام والخبر والظهران والقطيف. تعرّف على المنازل التي نعمل عليها في كل مدينة، وأرسل موقعك للتأكد من التغطية.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/areas-we-serve/", languages: languageAlternates("/areas-we-serve/") },
  openGraph: { type: "website", locale: "ar_SA", url, title, description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function ArAreasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` }, about: { "@id": `${siteConfig.url}/#business` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteConfig.url}/ar/` }, { "@type": "ListItem", position: 2, name: "المناطق التي نخدمها", item: url }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="bg-ink-950 text-sand-50">
          <div className="container-edge pb-14 pt-6 sm:pb-20">
            <ArBreadcrumb dark items={[{ label: "المناطق التي نخدمها" }]} />
            <h1 className="mt-10 font-serif text-[2rem] leading-[1.4] sm:text-5xl">المناطق التي نخدمها</h1>
            <p className="mt-5 max-w-xl text-base leading-loose text-ink-300">مقرّنا في الدمام، ونقدّم صيانة وإصلاح المنازل أيضاً في الخبر والظهران والقطيف — على مدار الساعة.</p>
            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-2">
              {arabicAreas.map((a) => <li key={a.slug}><a href={`#${a.slug}`} className="focus-ring block rounded-xl border border-sand-50/15 px-4 py-3 font-semibold hover:border-sand-50/50">{a.name}</a></li>)}
            </ul>
          </div>
        </section>
        {arabicAreas.map((a, i) => (
          <section key={a.slug} id={a.slug} aria-labelledby={`aar-${a.slug}`} className={`scroll-mt-20 border-b border-ink-900/10 py-16 sm:py-20 ${i % 2 ? "bg-sand-100/50" : ""}`}>
            <div className="container-edge grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 id={`aar-${a.slug}`} className="font-serif text-2xl leading-snug text-ink-950 sm:text-4xl">صيانة المنازل في {a.name}</h2>
                <p className="mt-4 text-[15px] leading-loose text-ink-700">{a.summary}</p>
                <a href={buildWhatsAppLink(`السلام عليكم، أنا في ${a.name} وأحتاج خدمة: `)} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-sand-50">اطلب خدمة في {a.name}</a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                <div>
                  <h3 className="text-sm font-semibold text-ink-500">المنازل التي نعمل عليها</h3>
                  <ul className="mt-3 space-y-2">{a.homes.map((h) => <li key={h} className="rounded-lg border border-ink-900/10 bg-sand-50 px-4 py-2.5 text-sm text-ink-800">{h}</li>)}</ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink-500">خدمات مطلوبة كثيراً</h3>
                  <ul className="mt-3 space-y-2">
                    {a.common.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} hrefLang={c.href.startsWith("/ar/") ? undefined : "en"} className="focus-ring flex items-center justify-between rounded-lg border border-ink-900/10 bg-sand-50 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:border-rust-600">
                          {c.label} <span aria-hidden="true" className="text-rust-700">←</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <ArFooter />
      <ArSticky label="أرسل موقعي" message="السلام عليكم، هل تغطون منطقتي؟ موقعي: " />
    </>
  );
}
