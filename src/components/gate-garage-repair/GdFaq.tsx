"use client";

import { useState } from "react";
import { gdFaqs } from "@/lib/gate-garage-repair";

export default function GdFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-rust-700">Questions</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Frequently asked questions.
        </h2>

        <div className="relative mt-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-ink-900/10" aria-hidden="true" />

          <div>
            {gdFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="relative border-b border-ink-900/10 pl-9 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(i)}
                    className="focus-ring relative flex w-full items-center gap-3 py-4 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -left-9 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-all duration-300 ${
                        isOpen ? "bg-rust-600 shadow-[0_0_0_4px_rgba(199,106,63,0.2)]" : "bg-ink-900/20"
                      }`}
                    />
                    <span className={`text-sm font-medium ${isOpen ? "text-ink-950" : "text-ink-700"}`}>{faq.q}</span>
                  </button>
                  {isOpen && (
                    <p className="animate-fadeIn pb-4 pr-4 text-sm leading-relaxed text-ink-600">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
