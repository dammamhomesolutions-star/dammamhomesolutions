"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What electrical problems do you repair?",
    a: "Lighting, switches, sockets, breaker-related problems, supported fixtures, and general residential electrical faults.",
  },
  {
    q: "My light stopped working. Can you help?",
    a: "Yes. The cause can vary — the fixture, the switch, a connection or the supply — so it's usually worth a look rather than a guess.",
  },
  {
    q: "Why does my breaker keep tripping?",
    a: "Repeated tripping can have several causes. It's worth having it assessed rather than repeatedly resetting it, especially if it keeps happening.",
  },
  {
    q: "Can I send a photo before requesting service?",
    a: "Yes, on WhatsApp — as long as it's safe to take. We don't ask customers to open panels or inspect live wiring for a photo.",
  },
  {
    q: "Do you repair switches and sockets?",
    a: "Yes, this is one of the most common things we're contacted about.",
  },
  {
    q: "Can you help with electrical problems in rental properties?",
    a: "Yes, for tenants, landlords and property managers dealing with everyday electrical faults.",
  },
  {
    q: "Do you provide electrical maintenance?",
    a: "Yes, for supported preventive checks — this is separate from an active repair and worth mentioning when you reach out.",
  },
  {
    q: "What should I do if I smell burning near a socket?",
    a: "Avoid using that socket, don't touch it, and arrange a professional look. If there's an immediate fire or life-safety risk, contact the relevant emergency service.",
  },
];

export default function ElectricalFaq() {
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
          <p className="section-label text-blue-700">Questions</p>
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
                    aria-controls={`electrical-faq-answer-${i}`}
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
                  id={`electrical-faq-answer-${i}`}
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
