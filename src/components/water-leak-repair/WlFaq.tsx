"use client";

import { useState } from "react";
import { wlFaqs } from "@/lib/water-leak-repair";

export default function WlFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-copper-700">Questions</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Frequently asked questions.
        </h2>

        <div className="mt-10 divide-y divide-ink-900/10 border-t border-ink-900/10">
          {wlFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="py-1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm font-medium ${isOpen ? "text-copper-700" : "text-ink-800"}`}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-copper-600 text-copper-700" : "border-ink-900/20 text-ink-500"
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <p className="animate-fadeIn pb-4 pr-8 text-sm leading-relaxed text-ink-600">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
