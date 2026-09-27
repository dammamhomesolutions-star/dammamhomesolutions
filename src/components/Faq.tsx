"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of home repairs do you handle?",
    a: "AC and HVAC, plumbing, electrical, waterproofing, painting, carpentry, tiling and general repairs around residential properties in Dammam.",
  },
  {
    q: "Do you provide AC, plumbing and electrical services?",
    a: "Yes. These are among the core services we handle for homeowners, tenants, landlords and property managers.",
  },
  {
    q: "Can I send photos of the problem before requesting service?",
    a: "Yes. Sending a photo or short video on WhatsApp helps us understand the issue before we respond.",
  },
  {
    q: "Do you handle small repair jobs?",
    a: "Yes. Smaller jobs such as a door, lock, tile or paint touch-up are handled alongside larger repairs.",
  },
  {
    q: "Do you provide recurring property maintenance?",
    a: "Yes, in the form of scheduled visits, inspection-based maintenance, or ongoing support depending on the property.",
  },
  {
    q: "Do you work with landlords and property managers?",
    a: "Yes. We work with landlords and property managers on repair and maintenance needs across their properties.",
  },
  {
    q: "Do you serve residential properties in Dammam?",
    a: "Yes, our services are focused on residential properties in Dammam, including villas and apartments.",
  },
  {
    q: "How do I request a repair?",
    a: "The quickest way is WhatsApp — send what's wrong, your location in Dammam, and a photo if you have one.",
  },
];

export default function Faq() {
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
                    aria-controls={`faq-answer-${i}`}
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
                  id={`faq-answer-${i}`}
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
