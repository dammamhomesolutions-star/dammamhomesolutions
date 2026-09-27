"use client";

import { useState } from "react";
import { pmFaqs } from "@/lib/property-maintenance";

export default function PmFaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = pmFaqs[activeIndex];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pmFaqs.map((f) => ({
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
          <p className="section-label !text-moss-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        {/* Desktop: index list + reading pane */}
        <div className="mt-12 hidden gap-12 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <ol className="space-y-0.5 border-t border-ink-900/10">
            {pmFaqs.map((faq, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={faq.q} className="border-b border-ink-900/10">
                  <button
                    type="button"
                    aria-current={isActive}
                    onClick={() => setActiveIndex(i)}
                    className="focus-ring flex w-full items-baseline gap-4 py-3 text-left"
                  >
                    <span className="font-mono text-xs text-ink-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-moss-700" : "text-ink-700 hover:text-ink-950"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div key={active.q} className="animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/50 p-7">
            <h3 className="font-serif text-lg text-ink-950">{active.q}</h3>
            <p className="mt-3 leading-relaxed text-ink-700">{active.a}</p>
          </div>
        </div>

        {/* Mobile: plain, always-expanded reading list */}
        <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10 lg:hidden">
          {pmFaqs.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <p className="font-mono text-xs text-ink-400">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1.5 text-[15px] font-medium text-ink-950">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{faq.a}</p>
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
