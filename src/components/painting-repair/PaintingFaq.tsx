"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you repair walls before painting?",
    a: "Yes — surface preparation and supported repair work (cracks, holes, damaged plaster) are part of getting a wall ready to paint.",
  },
  {
    q: "Can you repaint only one room?",
    a: "Yes, single rooms are a normal request alongside full-property work.",
  },
  {
    q: "Can you repair cracks before painting?",
    a: "Minor, stable surface cracks can usually be addressed as part of preparation. Anything that looks significant or is changing should be assessed by an appropriately qualified professional first, rather than simply painted over.",
  },
  {
    q: "Why is my paint peeling?",
    a: "It can relate to surface condition, moisture, the previous coating, how it was prepared, or general environmental exposure — there isn't one single cause.",
  },
  {
    q: "Can you repair holes and wall damage?",
    a: "Yes, small holes and impact damage are a common part of surface preparation before painting.",
  },
  {
    q: "Can I send photos before requesting a quote?",
    a: "Yes. A photo of the wall or surface on WhatsApp is the quickest way to explain the problem before anything is arranged.",
  },
  {
    q: "Do you paint ceilings?",
    a: "Yes, including addressing staining or marks as part of the job.",
  },
  {
    q: "What if the wall is damp?",
    a: "The moisture source may need to be addressed before repainting, otherwise the mark is likely to return. We can point you to our waterproofing service if that seems to be the case.",
  },
  {
    q: "Do you handle rental-property touch-ups?",
    a: "Yes, for landlords and property managers preparing a property between tenants or handling general upkeep.",
  },
];

export default function PaintingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="border-t border-ink-900/10 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`painting-faq-answer-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-ink-900 sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink-900/20 text-ink-700 transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`painting-faq-answer-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pb-5 text-[15px] leading-relaxed text-ink-600">{faq.a}</p>
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
