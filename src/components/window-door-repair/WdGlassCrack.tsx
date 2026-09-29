"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WdGlassCrack() {
  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto w-full max-w-md">
          <svg viewBox="0 0 320 320" className="h-auto w-full" aria-hidden="true">
            <rect x="10" y="10" width="300" height="300" rx="4" fill="url(#wd-glass)" stroke="#1c2733" strokeWidth="3" />
            <rect x="10" y="10" width="300" height="300" fill="url(#wd-glass-sheen)" opacity="0.4" style={{ mixBlendMode: "screen" }} />

            <motion.path
              d="M70 60 L140 130 L120 165 L190 220 L230 270 M140 130 L190 110 M120 165 L80 190"
              fill="none"
              stroke="#4a5468"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
            />
          </svg>
          <p className="mt-3 text-center text-xs text-ink-500">Perfect glass, until it isn&rsquo;t.</p>
        </div>

        <div className="max-w-lg">
          <p className="section-label !text-glass-700">Glass damage</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Glass damage should be assessed rather than repaired blindly.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-600">
            The right response depends on the type of glass, the extent of
            the damage, its location, the condition of the surrounding frame,
            and general safety considerations. We don&rsquo;t recommend
            guessing from a photo alone, but a photo is a good place to start.
          </p>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a photo of some damaged glass. ")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Send a Glass Photo
          </a>
        </div>
      </div>
    </section>
  );
}
