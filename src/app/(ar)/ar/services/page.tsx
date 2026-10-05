import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { languageAlternates } from "@/lib/i18n";
import { arAllServices, arServiceGroups } from "@/lib/ar/catalog";
import ArHeader from "@/components/ar/ArHeader";
import ArFooter from "@/components/ar/ArFooter";
import ArSticky from "@/components/ar/ArSticky";
import ArBreadcrumb from "@/components/ar/ArBreadcrumb";

const url = `${siteConfig.url}/ar/services/`;
const title = "خدمات صيانة وإصلاح المنازل";
const description = "جميع خدمات صيانة المنازل في الدمام: تكييف، سباكة، كهرباء، تشطيبات داخلية، عزل وأعمال خارجية، رطوبة وتنظيف، هاندي مان وصيانة العقارات.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/services/", languages: languageAlternates("/services/") },
  openGraph: { type: "website", locale: "ar_SA", url, title, description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function ArServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` } },
      { "@type": "ItemList", itemListElement: arAllServices.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.label, url: `${siteConfig.url}${s.href}` })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteConfig.url}/ar/` }, { "@type": "ListItem", position: 2, name: "الخدمات", item: url }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader />
      <main id="main" className="pb-20 lg:pb-0">
        <section className="border-b border-ink-900/10 bg-sand-100/60">
          <div className="container-edge pb-12 pt-6 sm:pb-16">
            <ArBreadcrumb items={[{ label: "الخدمات" }]} />
            <h1 className="mt-8 max-w-3xl font-serif text-[2rem] leading-[1.4] text-ink-950 sm:text-5xl">خدمات صيانة وإصلاح المنازل</h1>
            <p className="mt-5 max-w-2xl text-base leading-loose text-ink-700">
              {arAllServices.length} خدمة للمنازل في الدمام والخبر والظهران والقطيف، مرتبة حسب جزء المنزل.
              الخدمات المكتوبة بخط عريض لها صفحات بالعربية، والبقية صفحاتها حالياً بالإنجليزية.
            </p>
            <nav aria-label="أقسام الخدمات" className="mt-8 flex flex-wrap gap-2">
              {arServiceGroups.map((g) => <a key={g.key} href={`#${g.key}`} className="focus-ring rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2 text-sm font-medium text-ink-800 hover:border-ink-900/40">{g.title}</a>)}
            </nav>
          </div>
        </section>
        {arServiceGroups.map((g, gi) => (
          <section key={g.key} id={g.key} aria-labelledby={`asv-${g.key}`} className={`scroll-mt-20 border-b border-ink-900/10 py-14 sm:py-16 ${gi % 2 ? "bg-sand-100/40" : ""}`}>
            <div className="container-edge grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 id={`asv-${g.key}`} className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">{g.title}</h2>
                <p className="mt-3 text-[15px] leading-loose text-ink-600">{g.intro}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                {g.services.map((s) => (
                  <li key={s.en}>
                    <Link href={s.href} hrefLang={s.arabic ? undefined : "en"} className="focus-ring flex h-full items-start justify-between gap-4 rounded-xl border border-ink-900/10 bg-sand-50 p-5 hover:border-rust-600">
                      <span>
                        <span className={`block text-ink-950 ${s.arabic ? "font-semibold" : "font-medium"}`}>{s.label}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-600">{s.blurb}</span>
                        {!s.arabic && <span className="mt-2 inline-block rounded-full bg-ink-900/5 px-2 py-0.5 text-[11px] text-ink-500">بالإنجليزية</span>}
                      </span>
                      <span aria-hidden="true" className="text-rust-700">←</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
        <section className="py-16">
          <div className="container-edge max-w-3xl text-center">
            <h2 className="font-serif text-2xl text-ink-950 sm:text-3xl">لست متأكداً من الخدمة؟</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-loose text-ink-600">صف المشكلة وأرسل صورة، وسنحدد الخدمة المناسبة.</p>
            <a href={buildWhatsAppLink("السلام عليكم، لست متأكداً من الخدمة المطلوبة. المشكلة: ")} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50">اسأل عبر واتساب</a>
          </div>
        </section>
      </main>
      <ArFooter />
      <ArSticky label="اسأل عن خدمة" message="السلام عليكم، أرغب في الاستفسار عن إحدى خدماتكم." />
    </>
  );
}
