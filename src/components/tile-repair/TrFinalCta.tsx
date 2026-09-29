"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function TrFinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="absolute -inset-4 grid grid-cols-10 gap-[2px] opacity-[0.07]"
      >
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="aspect-square bg-sand-100" />
        ))}
      </motion.div>

      <div className="container-edge relative text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Don&rsquo;t know what the damage is called? Show us.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-300">
          Send a few photos of the tile, grout and surrounding area.
          We&rsquo;ll review the request and guide you toward the
          appropriate repair.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a tile/grout issue. ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Send Photos
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to ask about a tile or grout repair.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-rust-500"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
