"use client";

import { useState } from "react";
import { rfFaqs } from "@/lib/roof-repair";

export default function RfFaq() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Questions</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rfFaqs.map((faq, i) => {
            const isOpen = openSet.has(i);
            return (
              <div
                key={faq.q}
                className={`relative overflow-hidden rounded-lg border p-5 transition-colors ${
                  isOpen ? "border-teal-500 bg-teal-100/40" : "border-ink-900/10 bg-sand-100/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -right-4 -top-4 h-16 w-16 rounded-full transition-transform duration-500 ${
                    isOpen ? "scale-100 bg-teal-300/30" : "scale-0 bg-teal-300/30"
                  }`}
                />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  className="focus-ring relative flex w-full items-start justify-between gap-3 text-left"
                >
                  <span className={`text-sm font-semibold ${isOpen ? "text-ink-950" : "text-ink-800"}`}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border text-xs transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-teal-600 text-teal-700" : "border-ink-900/20 text-ink-500"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="relative mt-3 animate-fadeIn text-sm leading-relaxed text-ink-700">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
