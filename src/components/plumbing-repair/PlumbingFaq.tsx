"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What plumbing problems do you handle?",
    a: "Water leaks, blocked drains, low water pressure, bathroom and kitchen plumbing, fixtures and fittings, and general plumbing repairs.",
  },
  {
    q: "Can you help with water leaks?",
    a: "Yes. This is one of the most common reasons people contact us, whether it's a visible drip or a damp patch with no obvious source yet.",
  },
  {
    q: "Can I send photos before requesting service?",
    a: "Yes. A photo or short video on WhatsApp helps explain what you're seeing before service is arranged.",
  },
  {
    q: "Why is water appearing on a wall or ceiling?",
    a: "It usually means water has traveled from somewhere else — a pipe, a fixture above, or a nearby room. The exact source needs an assessment rather than a guess.",
  },
  {
    q: "Do you repair bathroom plumbing?",
    a: "Yes — taps, toilets, showers, sinks, drains and related fittings.",
  },
  {
    q: "Do you repair kitchen plumbing?",
    a: "Yes, including sink leaks, tap problems, drain issues and pipe connections, often centered under the sink.",
  },
  {
    q: "Can you help with slow or blocked drains?",
    a: "Yes. Slow drainage usually points to a partial blockage, and it's worth having it looked at rather than relying on strong chemical products.",
  },
  {
    q: "Do you provide recurring property maintenance?",
    a: "Yes, for homeowners, landlords and property managers who want plumbing and other issues looked after on an ongoing basis rather than one at a time.",
  },
];

export default function PlumbingFaq() {
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
          <p className="section-label text-teal-700">Questions</p>
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
                    aria-controls={`plumbing-faq-answer-${i}`}
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
                  id={`plumbing-faq-answer-${i}`}
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
