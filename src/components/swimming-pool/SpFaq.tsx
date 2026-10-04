"use client";

import { useState } from "react";
import { spFaqs } from "@/lib/swimming-pool";

// Question list on the left, answer panel on the right (from lg). On smaller
// screens each answer opens under its question. Every answer stays in the
// HTML so it matches the FAQ schema.
export default function SpFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="sp-faq" className="bg-teal-900 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Questions</p>
        <h2 id="sp-faq" className="mt-4 font-serif text-3xl tracking-tight sm:text-5xl">Swimming pool repair &amp; maintenance FAQs</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <ul className="space-y-1.5 lg:col-span-5">
            {spFaqs.map((f, i) => (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`sp-faq-q-${i}`}
                    aria-expanded={open === i}
                    aria-controls={`sp-faq-a-${i}`}
                    onClick={() => setOpen(i)}
                    className={`focus-ring flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-[15px] transition-colors ${open === i ? "bg-sand-50 font-semibold text-ink-950" : "text-teal-100 hover:bg-sand-100/10"}`}
                  >
                    {f.q}
                    <span aria-hidden="true" className={`flex-none transition-transform ${open === i ? "rotate-90" : ""}`}>›</span>
                  </button>
                </h3>
                <p id={`sp-faq-m-${i}`} hidden={open !== i} className="px-4 pb-3 pt-2 text-sm leading-relaxed text-teal-100 lg:hidden">{f.a}</p>
              </li>
            ))}
          </ul>
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28 rounded-[2rem] bg-ink-950/60 p-8 ring-1 ring-sand-100/10">
              {spFaqs.map((f, i) => (
                <div key={f.q} id={`sp-faq-a-${i}`} role="region" aria-labelledby={`sp-faq-q-${i}`} hidden={open !== i} className="animate-fadeIn">
                  <p className="font-mono text-xs text-teal-300">{String(i + 1).padStart(2, "0")} / {spFaqs.length}</p>
                  <p className="mt-3 font-serif text-2xl">{f.q}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-300">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
