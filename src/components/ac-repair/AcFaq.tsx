"use client";

import { useState } from "react";

const faqs = [
  {
    q: "My AC is running but not cooling. What should I do?",
    a: "Several things can cause this — refrigerant level, a blocked filter, thermostat settings or general wear. Tell us what you're noticing and the unit can be inspected to narrow it down.",
  },
  {
    q: "Why is water leaking from my AC?",
    a: "It's usually related to drainage or condensation handling, though the exact cause depends on the unit and its condition. We'd want to see it rather than guess remotely.",
  },
  {
    q: "Can I send a photo before requesting service?",
    a: "Yes. A photo or short video of the indoor unit or the leak on WhatsApp helps us understand the issue before we respond.",
  },
  {
    q: "Do you repair ACs or only provide maintenance?",
    a: "Both. We handle AC repairs — cooling problems, leaks, noise, electrical-related stoppages — as well as routine cleaning and maintenance.",
  },
  {
    q: "Do you provide AC maintenance for rental properties?",
    a: "Yes, for landlords and property managers who want the unit checked or cleaned between tenants or on a recurring basis.",
  },
  {
    q: "How do I request AC repair in Dammam?",
    a: "WhatsApp is the quickest way — tell us the symptom, your location in Dammam, and a photo if you have one.",
  },
  {
    q: "Should I replace my AC or repair it?",
    a: "That depends on the fault, the age of the unit and its overall condition. We look at what's actually wrong before suggesting either option.",
  },
  {
    q: "Can you handle multiple maintenance issues at one property?",
    a: "Yes — if the property has more than one thing going on, including issues outside the AC, mention all of it and we'll work out what's needed.",
  },
];

export default function AcFaq() {
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
          <p className="section-label text-sky-700">Questions</p>
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
                    aria-controls={`ac-faq-answer-${i}`}
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
                  id={`ac-faq-answer-${i}`}
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
