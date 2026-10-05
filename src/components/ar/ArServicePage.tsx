import Link from "next/link";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import type { ArBlock, ArServiceDoc } from "@/lib/ar/services";
import ArHeader from "./ArHeader";
import ArFooter from "./ArFooter";
import ArSticky from "./ArSticky";
import ArBreadcrumb from "./ArBreadcrumb";

const tones = {
  ink: { hero: "bg-ink-950 text-sand-50", sub: "text-ink-300", chip: "border-sand-50/20 text-sand-100" },
  sand: { hero: "bg-sand-100 text-ink-950", sub: "text-ink-700", chip: "border-ink-900/15 text-ink-800 bg-sand-50" },
  moss: { hero: "bg-moss-900 text-sand-50", sub: "text-moss-200", chip: "border-sand-50/20 text-sand-100" },
  glass: { hero: "bg-glass-900 text-sand-50", sub: "text-glass-200", chip: "border-sand-50/20 text-sand-100" },
} as const;

function Block({ b, i }: { b: ArBlock; i: number }) {
  const alt = i % 2 === 1;
  const wrap = `py-16 sm:py-20 ${alt ? "border-y border-ink-900/10 bg-sand-100/50" : ""}`;
  const head = <h2 className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">{b.title}</h2>;
  const intro = "intro" in b && b.intro ? <p className="mt-3 max-w-2xl text-[15px] leading-loose text-ink-700">{b.intro}</p> : null;

  switch (b.type) {
    case "problems":
      return (
        <section className={wrap}><div className="container-edge">{head}{intro}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {b.items.map((p) => (
              <li key={p.t} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
                <h3 className="font-semibold text-ink-950">{p.t}</h3>
                <p className="mt-2 text-sm leading-loose text-ink-600">{p.d}</p>
              </li>
            ))}
          </ul>
        </div></section>
      );
    case "list":
      return (
        <section className={wrap}><div className="container-edge grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">{head}{intro}</div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8">
            {b.items.map((x) => (
              <li key={x} className="flex gap-3 rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-[15px] text-ink-800">
                <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-none text-moss-600" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
                {x}
              </li>
            ))}
          </ul>
        </div></section>
      );
    case "steps":
      return (
        <section className={wrap}><div className="container-edge">{head}{intro}
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b.items.map((s, n) => (
              <li key={s.t}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 font-mono text-sm text-sand-50">{n + 1}</span>
                <h3 className="mt-3 font-semibold text-ink-950">{s.t}</h3>
                <p className="mt-1 text-sm leading-loose text-ink-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div></section>
      );
    case "warning":
      return (
        <section className="py-10"><div className="container-edge">
          <div className="rounded-2xl border-s-4 border-rust-700 bg-rust-100 p-6 sm:p-8">
            <h2 className="font-serif text-xl text-ink-950 sm:text-2xl">{b.title}</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-loose text-ink-800">{b.items.map((x) => <li key={x}>• {x}</li>)}</ul>
            {b.note && <p className="mt-4 text-sm font-semibold text-rust-700">{b.note}</p>}
          </div>
        </div></section>
      );
    case "split":
      return (
        <section className={wrap}><div className="container-edge">{head}{intro}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {b.cols.map((c, n) => (
              <div key={c.t} className={`rounded-2xl p-6 ${n === 0 ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50"}`}>
                <h3 className="font-serif text-xl">{c.t}</h3>
                <ul className={`mt-4 space-y-2 text-sm leading-loose ${n === 0 ? "text-ink-300" : "text-ink-700"}`}>{c.items.map((x) => <li key={x}>— {x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div></section>
      );
    case "types":
      return (
        <section className={wrap}><div className="container-edge">{head}{intro}
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {b.items.map((x) => (
              <div key={x.t} className="bg-sand-50 p-5">
                <dt className="font-semibold text-ink-950">{x.t}</dt>
                <dd className="mt-1.5 text-sm leading-loose text-ink-600">{x.d}</dd>
              </div>
            ))}
          </dl>
        </div></section>
      );
    case "text":
      return (
        <section className={wrap}><div className="container-edge max-w-3xl">{head}
          {b.paras.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-[15px] leading-loose text-ink-700">{p}</p>)}
        </div></section>
      );
  }
}

export default function ArServicePage({ doc }: { doc: ArServiceDoc }) {
  const t = tones[doc.tone];
  const pageUrl = `${siteConfig.url}/ar${doc.en}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: doc.metaTitle, description: doc.description, inLanguage: "ar-SA", isPartOf: { "@id": `${siteConfig.url}/ar/#website` }, about: { "@id": `${pageUrl}#service` } },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: doc.h1,
        serviceType: doc.serviceType,
        description: doc.description,
        url: pageUrl,
        inLanguage: "ar-SA",
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: siteConfig.areas.map((name) => ({ "@type": "City", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteConfig.url}/ar/` },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteConfig.url}/ar/services/` },
          { "@type": "ListItem", position: 3, name: doc.crumb, item: pageUrl },
        ],
      },
      { "@type": "FAQPage", inLanguage: "ar-SA", mainEntity: doc.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArHeader whatsappMessage={doc.wa} />
      <main id="main" className="pb-20 lg:pb-0">
        <section className={t.hero}>
          <div className="container-edge pb-14 pt-6 sm:pb-20">
            <ArBreadcrumb dark={doc.tone !== "sand"} items={[{ label: "الخدمات", href: "/ar/services/" }, { label: doc.crumb }]} />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="animate-fadeUp lg:col-span-7">
                <p className="text-sm font-semibold text-rust-500">{doc.kicker}</p>
                <h1 className="mt-4 font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">{doc.h1}</h1>
                <p className={`mt-5 max-w-xl text-base leading-loose ${t.sub}`}>{doc.intro}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppLink(doc.wa)} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50 hover:bg-rust-600">{doc.cta}</a>
                  <a href={buildTelLink()} className={`focus-ring inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-semibold ${doc.tone === "sand" ? "border-ink-900/20 bg-sand-50 text-ink-950" : "border-sand-50/30 hover:bg-sand-50/10"}`}>اتصل الآن</a>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 lg:col-span-5">
                {doc.highlights.map((h) => <li key={h} className={`rounded-full border px-4 py-2 text-sm ${t.chip}`}>{h}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {doc.blocks.map((b, i) => <Block key={b.title} b={b} i={i} />)}

        <section className="py-16 sm:py-20">
          <div className="container-edge grid gap-10 lg:grid-cols-12">
            <h2 className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl lg:col-span-4">أسئلة شائعة عن {doc.crumb}</h2>
            <div className="divide-y divide-ink-900/10 border-y border-ink-900/10 lg:col-span-8">
              {doc.faqs.map((f, i) => (
                <details key={f.q} className="group py-1" open={i === 0}>
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-[16px] font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                    <h3>{f.q}</h3>
                    <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-900/20 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 pe-10 text-[15px] leading-loose text-ink-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-900/10 bg-sand-100/60 py-14">
          <div className="container-edge">
            <h2 className="text-sm font-semibold text-ink-500">خدمات مرتبطة</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {doc.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} hrefLang={r.href.startsWith("/ar/") ? undefined : "en"} className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-sand-50 px-4 py-2 text-sm font-semibold text-ink-900 hover:border-rust-600">
                    {r.label} <span aria-hidden="true">←</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink-950 py-16 text-sand-50 sm:py-20">
          <div className="container-edge grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl leading-snug sm:text-4xl">{doc.finalTitle}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-loose text-ink-300">أرسل صورة ووصفاً قصيراً عبر واتساب، أو اتصل بنا — متاحون على مدار الساعة في الدمام والخبر والظهران والقطيف.</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5">
              <a href={buildWhatsAppLink(doc.wa)} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center rounded-full bg-rust-700 px-7 py-4 text-sm font-semibold text-sand-50">{doc.cta}</a>
              <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-50/30 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">
                اتصل <span dir="ltr" className="ms-1">{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <ArFooter />
      <ArSticky label={doc.cta} message={doc.wa} />
    </>
  );
}
