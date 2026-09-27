"use client";

import { useState } from "react";
import { trFaqs } from "@/lib/tile-repair";

export default function TrFaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = trFaqs[activeIndex];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-rust-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-5 gap-[3px] rounded-sm bg-ink-300 p-[3px] sm:max-w-xl">
          {trFaqs.map((faq, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={faq.q}
                type="button"
                aria-pressed={isActive}
                aria-label={faq.q}
                onClick={() => setActiveIndex(i)}
                className={`focus-ring flex aspect-square items-center justify-center text-sm font-semibold transition-colors ${
                  isActive ? "bg-rust-700 text-sand-50" : "bg-sand-100 text-ink-700 hover:bg-sand-200"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>

        <div key={active.q} className="mt-6 max-w-2xl animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6 sm:p-7">
          <h3 className="font-serif text-lg text-ink-950">{active.q}</h3>
          <p className="mt-2.5 leading-relaxed text-ink-700">{active.a}</p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
