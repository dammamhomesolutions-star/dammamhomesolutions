"use client";

import { useState } from "react";
import { crFaqs } from "@/lib/ceiling-repair";

export default function CrFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: crFaqs.map((f) => ({
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

        <div className="mt-10 max-w-2xl divide-y divide-ink-900/10 border-y border-ink-900/10">
          {crFaqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`cr-faq-answer-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="focus-ring flex w-full items-start gap-4 py-5 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-2 w-2 flex-none rounded-full transition-shadow duration-300 ${
                        open ? "bg-rust-600 shadow-[0_0_0_5px_rgba(199,106,63,0.22)]" : "bg-ink-300"
                      }`}
                    />
                    <span className="text-[15px] font-medium text-ink-900 sm:text-base">{faq.q}</span>
                  </button>
                </h3>
                <div
                  id={`cr-faq-answer-${i}`}
                  className={`grid overflow-hidden pl-6 transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pb-5 pl-0 text-[15px] leading-relaxed text-ink-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
