"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { kcFaqs } from "@/lib/kitchen-cabinet-repair";

export default function KcFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-walnut-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-walnut-700">Questions</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Frequently asked questions.
        </h2>

        <div className="mt-10 space-y-2">
          {kcFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-sm border border-walnut-900/15 bg-sand-50 shadow-sm">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="focus-ring flex w-full items-center gap-4 px-5 py-4 text-left"
                  style={{ background: isOpen ? "linear-gradient(135deg, #a67c5b, #6b4a35)" : undefined }}
                >
                  <span
                    className={`font-mono text-xs ${isOpen ? "text-sand-100" : "text-walnut-500"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 text-sm font-medium ${isOpen ? "text-sand-50" : "text-ink-900"}`}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-6 shrink-0 rounded-full transition-colors ${isOpen ? "bg-sand-100" : "bg-walnut-500/40"}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    >
                      <p className="border-t border-walnut-900/10 px-5 py-4 pl-12 text-sm leading-relaxed text-ink-700">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
