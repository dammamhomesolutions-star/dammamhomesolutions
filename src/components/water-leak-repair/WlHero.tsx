"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function WlHero() {
  const shouldReduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">
            <span className="inline-block h-1.5 w-1.5 bg-copper-600" aria-hidden="true" />
            Water leak detection &amp; repair
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
            Water leak detection in Dammam — not always where it shows up.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600 sm:text-base">
            A damp patch, a ceiling stain, a water bill that doesn&rsquo;t add
            up — water can travel a distance before it becomes visible. This
            service is about tracing it back.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a water leak assessment. ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Request a Leak Assessment
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of a possible water leak. ")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-copper-700"
            >
              Send Photos
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          onMouseEnter={() => setRevealed(true)}
          aria-pressed={revealed}
          className="focus-ring relative mx-auto w-full max-w-md overflow-hidden rounded-sm"
          aria-label="Reveal where the visible sign and the hidden pipe route differ"
        >
          <svg viewBox="0 0 400 300" className="h-auto w-full" aria-hidden="true">
            <title>A wall with a visible damp patch, and — when revealed — the hidden pipe route behind it that shows the leak starts elsewhere</title>
            <rect x="0" y="0" width="400" height="300" fill="url(#wl-wall)" />

            {/* visible damp patch, always shown */}
            <circle cx="150" cy="190" r="36" fill="url(#wl-damp)" />

            {/* hidden pipe route, revealed on interaction */}
            <g style={{ opacity: revealed ? 1 : 0, transition: "opacity 400ms ease-out" }}>
              <path
                d="M280 60 C 240 70, 220 120, 230 160 C 236 185, 200 190, 150 190"
                fill="none"
                stroke="url(#wl-pipe)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="230" cy="160" r="7" fill="#b3652f" />
              {!shouldReduceMotion && (
                <motion.circle
                  r="4"
                  fill="#e0b28a"
                  style={{ offsetPath: "path('M280 60 C 240 70, 220 120, 230 160 C 236 185, 200 190, 150 190')" }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <text x="284" y="52" fontSize="9" fill="#8f4f2f" fontFamily="monospace">
                LEAK POINT
              </text>
            </g>

            <text x="20" y="280" fontSize="10" fill="#78746a" fontFamily="monospace" letterSpacing="1">
              {revealed ? "HIDDEN ROUTE REVEALED" : "TAP TO TRACE IT BACK"}
            </text>
          </svg>
        </button>
      </div>
    </section>
  );
}
