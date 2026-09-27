"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of general home repairs do you handle?",
    a: "Practical household issues — fixtures and fittings, loose hardware, small wall repairs, doors and handles, cabinets and drawers, minor surface issues, and similar small jobs.",
  },
  {
    q: "What if I don't know which service I need?",
    a: "That's what this page is for. Describe what you're noticing using the problem router above, or just send a photo — we'll help point you to the right service.",
  },
  {
    q: "Can I send photos before booking?",
    a: "Yes. A photo or short video on WhatsApp is the quickest way to explain what you're dealing with.",
  },
  {
    q: "Can you handle several small repairs at one property?",
    a: "Yes — send everything in one message rather than requesting each item separately.",
  },
  {
    q: "Do you repair doors, handles and household fittings?",
    a: "Yes, these are common general-repair requests. More involved door and lock work is covered on our carpentry, doors & locks page.",
  },
  {
    q: "Can you help with minor wall or surface damage?",
    a: "Yes, for small repairs. Larger surface or moisture-related work is covered on our painting & wall repair and waterproofing pages.",
  },
  {
    q: "What information should I provide when requesting a repair?",
    a: "Your location, the room or area, what's happening, when you noticed it, and a photo if you have one. Preferred visit time helps too.",
  },
  {
    q: "Can landlords request multiple repairs for one property?",
    a: "Yes — send a consolidated list covering everything that needs attention across a property.",
  },
  {
    q: "Do you handle major renovation or construction work?",
    a: "No. This page covers practical repair and maintenance work, not large-scale renovation or structural construction.",
  },
  {
    q: "What happens if my problem requires a specialist service?",
    a: "We'll point you to the relevant page — AC, plumbing, electrical, waterproofing, painting, carpentry, or bathroom & kitchen repair — based on what you describe.",
  },
];

export default function GeneralRepairsFaq() {
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
          <p className="section-label text-indigo-700">Questions</p>
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
                    aria-controls={`general-faq-answer-${i}`}
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
                  id={`general-faq-answer-${i}`}
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
