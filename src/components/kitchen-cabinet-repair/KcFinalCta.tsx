"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

const layers = [
  { id: "door", label: "Door" },
  { id: "hinge", label: "Hinge" },
  { id: "drawer", label: "Drawer" },
  { id: "handle", label: "Handle" },
  { id: "panel", label: "Panel" },
  { id: "frame", label: "Frame" },
];

const fills = ["url(#kc-walnut)", "#838d96", "url(#kc-walnut-dark)", "#eceef0", "#cdab8f", "#b7bfc6"];
const textColors = ["text-ink-900", "text-sand-50", "text-sand-50", "text-ink-900", "text-ink-900", "text-ink-900"];
const SCATTER_GAP = 30;

export default function KcFinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,244,224,0.32), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative text-center">
        <p className="section-label !text-steel-300">Something isn&rsquo;t working properly?</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
          Show us.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-steel-300">
          Show us the cabinet, drawer, handle or damaged area and tell us
          what you&rsquo;ve noticed.
        </p>

        <div className="relative mx-auto mt-10 h-56 w-full max-w-xs sm:h-64">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className={`absolute left-1/2 flex h-10 w-56 -translate-x-1/2 items-center justify-center rounded-sm border border-walnut-900/20 text-xs font-medium shadow-sm sm:w-64 ${textColors[i]}`}
              style={{ background: fills[i], zIndex: layers.length - i }}
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
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a kitchen cabinet issue. ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center rounded-full bg-walnut-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            Send Photos
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a kitchen cabinet repair.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-steel-300"
          >
            Request Kitchen Repair
          </a>
        </div>
      </div>
    </section>
  );
}
