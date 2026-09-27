"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you repair doors that don't close properly?",
    a: "Yes — this covers alignment, hinges, handles, latches and related hardware.",
  },
  {
    q: "Can you repair or replace door locks?",
    a: "Yes, for supported residential locks — repair, adjustment or replacement of hardware you already own.",
  },
  {
    q: "Do you repair handles and hinges?",
    a: "Yes, this is one of the most common requests we get.",
  },
  {
    q: "Can you repair cabinet doors?",
    a: "Yes — alignment, hinges and hardware on existing cabinets, rather than new cabinetry.",
  },
  {
    q: "Can I send a photo before requesting service?",
    a: "Yes. A photo of the door, cabinet or hardware on WhatsApp helps explain the problem before anything is arranged.",
  },
  {
    q: "Do you handle small carpentry jobs?",
    a: "Yes — most of what we do is smaller repairs and adjustments rather than large projects.",
  },
  {
    q: "Can you repair a damaged wooden door?",
    a: "It depends on the condition — minor damage is often repairable, while more extensive damage may point toward replacement. This is usually clearer once we've seen it.",
  },
  {
    q: "Do you provide rental-property repairs?",
    a: "Yes, for landlords and property managers handling touch-ups and repairs between tenants.",
  },
  {
    q: "Can you handle several small repairs at once?",
    a: "Yes — send a list of what needs attention in one message rather than requesting each one separately.",
  },
  {
    q: "Do you manufacture custom furniture?",
    a: "No. This page is focused on repair and maintenance — doors, locks, hardware, cabinets and minor woodwork — rather than furniture manufacturing.",
  },
];

export default function CarpentryFaq() {
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
          <p className="section-label text-amber-800">Questions</p>
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
                    aria-controls={`carpentry-faq-answer-${i}`}
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
                  id={`carpentry-faq-answer-${i}`}
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
