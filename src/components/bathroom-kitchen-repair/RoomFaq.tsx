"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What bathroom repairs do you handle?",
    a: "Sink and fixture issues, drainage, tiles, minor wall repair, sealant-related work, doors and hardware, and general bathroom repairs.",
  },
  {
    q: "What kitchen repairs do you handle?",
    a: "Sink and tap repairs, drainage, cabinet doors, hinges and handles, tiles, wall repair, minor carpentry and general kitchen repairs.",
  },
  {
    q: "Can I request several repairs at once?",
    a: "Yes — the repair-list feature on this page lets you tick everything that needs attention in a room and send it as one message.",
  },
  {
    q: "Can you repair bathroom tiles?",
    a: "Yes, for cracked, loose or damaged tiles and grout.",
  },
  {
    q: "Can you repair kitchen cabinets?",
    a: "Yes — cabinet doors, hinges, handles and drawers are some of the most common requests we get.",
  },
  {
    q: "What if I don't know whether the problem is plumbing or waterproofing?",
    a: "That's fine — describe the symptom and send photos. We'll use that to work out which service is the right starting point.",
  },
  {
    q: "Can I send photos before requesting service?",
    a: "Yes. A wide photo of the room plus a close-up of the problem area on WhatsApp helps explain it before anything is arranged.",
  },
  {
    q: "Do you handle rental-property repairs?",
    a: "Yes, for landlords and property managers dealing with bathroom and kitchen issues between tenants or during general upkeep.",
  },
  {
    q: "Do you provide complete bathroom renovation?",
    a: "No — this page is focused on repair and maintenance rather than full renovation. If a job turns out to need more than that, we'll say so.",
  },
  {
    q: "Do you provide complete kitchen remodeling?",
    a: "No, we don't manufacture custom kitchens or handle full remodeling. We handle the repair and maintenance side — cabinets, plumbing-related issues, tiles and general repairs.",
  },
];

export default function RoomFaq() {
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
          <p className="section-label text-emerald-800">Questions</p>
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
                    aria-controls={`room-faq-answer-${i}`}
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
                  id={`room-faq-answer-${i}`}
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
