"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WlFinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,130,70,0.28), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-label !text-copper-300">Noticed something?</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Let&rsquo;s trace it back to the source.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-300">
              Send a photo, a short video, or just describe what you&rsquo;ve
              noticed — we&rsquo;ll help you work out where to start.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a water leak assessment. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex items-center rounded-full bg-copper-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Request a Leak Assessment
              </a>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a possible water leak. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-copper-400"
              >
                Send Photos
              </a>
            </div>
          </div>

          <motion.svg
            viewBox="0 0 320 180"
            className="mx-auto h-auto w-full max-w-sm"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <rect x="0" y="0" width="320" height="180" fill="#191d25" />
            <rect x="20" y="20" width="280" height="140" fill="none" stroke="#4a5468" strokeWidth="2" />
            <path
              d="M270 40 C 220 50, 180 90, 120 130"
              fill="none"
              stroke="url(#wl-pipe)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="120" cy="130" r="16" fill="url(#wl-damp)" />
            <circle cx="270" cy="40" r="8" fill="#c98246" />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
