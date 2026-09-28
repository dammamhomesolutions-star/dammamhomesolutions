"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function CrFinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="absolute -inset-4 grid grid-cols-10 gap-[2px] opacity-[0.06]"
      >
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="aspect-square bg-sand-100" />
        ))}
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,248,234,0.35), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Show us what&rsquo;s happening overhead.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-300">
          Send a few photos of the ceiling and tell us what you&rsquo;ve
          noticed. We&rsquo;ll help you understand the appropriate next step.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a ceiling issue. ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Send Ceiling Photos
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a ceiling repair.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-rust-500"
          >
            Request Repair
          </a>
        </div>
      </div>
    </section>
  );
}
