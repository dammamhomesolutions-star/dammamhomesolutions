"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { flLayers } from "@/lib/flooring-repair";

const fills = ["url(#fl-tile)", "url(#fl-tile-dark)", "#c4c0b4", "#78746a"];
const textColors = ["text-ink-900", "text-sand-50", "text-ink-900", "text-sand-50"];
const SCATTER_GAP = 30;

export default function FlFinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,191,160,0.3), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative text-center">
        <p className="section-label !text-clay-300">Something changed underfoot?</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Show us what changed underfoot.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-steel-300">
          Send a few photos of the floor and tell us what you&rsquo;ve
          noticed. We&rsquo;ll help guide the repair request.
        </p>

        <div className="relative mx-auto mt-10 h-48 w-full max-w-xs sm:h-56">
          {flLayers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className={`absolute left-1/2 flex h-10 w-56 items-center justify-center rounded-sm border border-concrete-500/20 text-xs font-medium shadow-sm sm:w-64 ${textColors[i]}`}
              style={{ background: fills[i], zIndex: flLayers.length - i }}
              initial={shouldReduceMotion ? false : { top: i * SCATTER_GAP, opacity: 0.6, x: "-50%" }}
              whileInView={{ top: i * 6, opacity: 1, x: "-50%" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 160, damping: 20, delay: i * 0.08 }}
            >
              {i === 0 ? layer.label : ""}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a flooring issue. ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-clay-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Send Floor Photos
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a flooring repair.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-clay-300"
          >
            Request Repair
          </a>
        </div>
      </div>
    </section>
  );
}
