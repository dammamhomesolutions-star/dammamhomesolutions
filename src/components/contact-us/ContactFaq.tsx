"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "How quickly will I get a reply?",
    a: `We reply on WhatsApp during working hours. If you send photos or a video along with your message, it usually helps us respond with a clearer answer the first time.`,
  },
  {
    q: "Do I need to know which service I need before contacting you?",
    a: "No. A short description of the problem is enough — we'll work out which part of the property it relates to and route it to the right person.",
  },
  {
    q: "Can you give me a price over WhatsApp?",
    a: "For simple, well-described jobs we can often give a general idea. Most jobs need a short visit or clear photos first, since the actual cost depends on what's found on site.",
  },
  {
    q: "What areas around Dammam do you cover?",
    a: `We work across ${siteConfig.region}. Mention your area when you get in touch and we'll confirm whether it's within reach for the visit you need.`,
  },
  {
    q: "What if my problem is urgent?",
    a: "Say so when you message us and describe what's happening. Urgent issues such as active leaks, no power, or a door that won't secure the property are prioritized differently from routine maintenance.",
  },
  {
    q: "Can I contact you about more than one repair at once?",
    a: "Yes. List everything that needs attention in your message — many visits cover more than one issue in the same trip.",
  },
];

export default function ContactFaq() {
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
    <section className="border-t border-ink-900/10 py-16 sm:py-20">
      <div className="container-edge max-w-2xl">
        <p className="section-label">Questions</p>
        <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-950 sm:text-3xl">
          Before you reach out.
        </h2>

        <div className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`contact-faq-answer-${i}`}
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
                  id={`contact-faq-answer-${i}`}
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
