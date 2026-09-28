"use client";

import { motion } from "framer-motion";
import { decisionSteps } from "@/lib/ceiling-repair";

export default function CrDecisionTree() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-xl">
        <p className="section-label !text-rust-700">Repair or replace?</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Does the damaged section need repair or replacement?
        </h2>

        <ol className="relative mt-10 pl-8">
          <motion.div
            aria-hidden="true"
            className="absolute left-[3px] top-1 w-px bg-ink-900/15"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 8px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          {decisionSteps.map((step, i) => (
            <motion.li
              key={step}
              className="relative pb-8 last:pb-0"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1 h-2 w-2 rounded-full border-2 border-rust-600 bg-sand-50"
              />
              <p className="text-sm text-ink-800">{step}</p>
            </motion.li>
          ))}
        </ol>

        <div className="rounded-md border border-ink-900/10 bg-sand-100/60 p-6">
          <p className="font-medium text-ink-950">
            Assessment determines the appropriate approach.
          </p>
          <p className="mt-1.5 text-sm text-ink-600">
            Not every ceiling problem requires full replacement, and we
            don&rsquo;t promise a particular outcome before the area is seen.
          </p>
        </div>
      </div>
    </section>
  );
}
