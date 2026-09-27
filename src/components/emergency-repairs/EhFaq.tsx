import { ehFaqs, type EhFaqEntry } from "@/lib/emergency-repairs";

const groupOrder: EhFaqEntry["group"][] = ["Safety first", "Getting started", "What we cover"];

export default function EhFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ehFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {groupOrder.map((group) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-700">
                {group}
              </p>
              <div className="mt-4 space-y-6 border-t border-ink-900/10 pt-5">
                {ehFaqs
                  .filter((f) => f.group === group)
                  .map((f) => (
                    <div key={f.q}>
                      <h3 className="text-[15px] font-semibold text-ink-950">{f.q}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.a}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
