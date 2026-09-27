"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What waterproofing problems do you handle?",
    a: "Moisture and water-leak-related issues around roofs, wet areas, walls and other affected surfaces, along with related repair and protection work.",
  },
  {
    q: "How can I tell if moisture is coming from the roof?",
    a: "Timing and location can give clues — a mark that appears or worsens after rain, or one directly below a roof area — but confirming it usually needs an assessment rather than a guess.",
  },
  {
    q: "Can you repair water leakage as well as waterproofing?",
    a: "Yes, the two are often related. Where the issue is more plumbing-related, we can also point you to our plumbing and water leak repair service.",
  },
  {
    q: "Does repainting fix damp walls?",
    a: "Not on its own if moisture is still reaching the surface. Repainting can look like a fix temporarily, but the underlying source usually needs addressing too.",
  },
  {
    q: "Do you provide bathroom waterproofing?",
    a: "Yes, for wet areas and surfaces affected by water exposure in bathrooms.",
  },
  {
    q: "Can I send photos before requesting service?",
    a: "Yes. A photo of the affected area, plus a wider photo for context, helps explain the problem on WhatsApp before anyone visits.",
  },
  {
    q: "How long does waterproofing work take?",
    a: "It depends on the area, the condition of the surface, the scope of work and the materials involved — there isn't one standard duration.",
  },
  {
    q: "Can waterproofing prevent every type of water leak?",
    a: "No. The appropriate solution depends on the actual source, which is why assessment comes before any waterproofing or repair work is recommended.",
  },
  {
    q: "Do you provide recurring property maintenance?",
    a: "Yes — for recurring moisture issues in particular, see our property maintenance service.",
  },
];

export default function WaterproofingFaq() {
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
          <p className="section-label text-cyan-800">Questions</p>
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
                    aria-controls={`waterproofing-faq-answer-${i}`}
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
                  id={`waterproofing-faq-answer-${i}`}
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
