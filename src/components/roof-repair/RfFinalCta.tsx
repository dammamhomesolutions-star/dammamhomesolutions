"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function RfFinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(74,151,151,0.28), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="container-edge relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-label !text-teal-300">Noticed something?</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
              Look up. Then let&rsquo;s trace it.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-300">
              Send a few photos of what you&rsquo;ve noticed and where — we&rsquo;ll
              help you trace it from there.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a roof assessment. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex items-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Request a Roof Assessment
              </a>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a rooftop issue. ")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring text-sm font-semibold text-sand-100 underline underline-offset-4 hover:text-teal-400"
              >
                Send Photos
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-52 w-full max-w-sm overflow-hidden rounded-sm sm:h-60">
            <motion.svg
              viewBox="0 0 320 620"
              className="absolute left-0 h-auto w-full"
              aria-hidden="true"
              initial={{ y: 0 }}
              whileInView={shouldReduceMotion ? {} : { y: [-0, -100, -220, -340, -430] }}
              viewport={{ once: true }}
              transition={{ duration: 4.5, times: [0, 0.28, 0.54, 0.78, 1], ease: "easeInOut" }}
            >
              <title>A camera rising from a room, through the ceiling and roof structure, up to the rooftop and the full property</title>
              {/* room (bottom-most, first frame) */}
              <rect x="0" y="440" width="320" height="180" fill="#faf8f4" />
              <rect x="30" y="460" width="60" height="80" fill="#e8e2d4" opacity="0.6" />

              {/* ceiling void */}
              <rect x="0" y="360" width="320" height="80" fill="#eae7de" />
              <circle cx="160" cy="400" r="18" fill="url(#rf-stain)" opacity="0.7" />

              {/* roof structural layer */}
              <rect x="0" y="300" width="320" height="60" fill="url(#rf-structure)" />

              {/* rooftop surface */}
              <rect x="0" y="230" width="320" height="70" fill="url(#rf-surface)" />
              <rect x="140" y="240" width="34" height="18" fill="#9a968a" />

              {/* pulled-back property silhouette */}
              <rect x="0" y="0" width="320" height="230" fill="url(#rf-sky)" />
              <rect x="60" y="120" width="200" height="110" fill="#c4c0b4" opacity="0.9" />
              <rect x="60" y="100" width="200" height="20" fill="url(#rf-surface)" />
              <rect x="90" y="150" width="24" height="30" fill="url(#rf-sky)" opacity="0.7" />
              <rect x="206" y="150" width="24" height="30" fill="url(#rf-sky)" opacity="0.7" />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}
