"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { wdLayers } from "@/lib/window-door-repair";

const fills = ["url(#wd-glass)", "#d7e4ea", "#b8ccd4", "#7fa0b0", "#5b7d8f", "#3d5a6b"];
const textColors = ["text-ink-900", "text-ink-900", "text-ink-900", "text-sand-50", "text-sand-50", "text-sand-50"];
const SCATTER_GAP = 30;

export default function WdFinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="container-edge relative text-center">
        <p className="section-label !text-glass-300">Something isn&rsquo;t working properly?</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Show us.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-300">
          Send a few photos of the door or window and tell us what&rsquo;s
          changed. We&rsquo;ll help you understand the appropriate next step.
        </p>

        <div className="relative mx-auto mt-10 h-56 w-full max-w-xs sm:h-64">
          {wdLayers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className={`absolute left-1/2 flex h-10 w-56 -translate-x-1/2 items-center justify-center rounded-sm border border-glass-500/20 text-xs font-medium shadow-sm sm:w-64 ${textColors[i]}`}
              style={{ background: fills[i], zIndex: wdLayers.length - i }}
              initial={shouldReduceMotion ? false : { top: i * SCATTER_GAP, opacity: 0.6 }}
              whileInView={{ top: i * 6, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 160, damping: 20, delay: i * 0.08 }}
            >
              {i === 0 ? layer.label : ""}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a door or window issue. ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-glass-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Send Photos
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a door or window repair.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-glass-300"
          >
            Request Repair
          </a>
        </div>
      </div>
    </section>
  );
}
