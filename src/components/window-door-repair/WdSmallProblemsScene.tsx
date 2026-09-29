"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface RoomHotspot {
  id: string;
  label: string;
  x: number;
  y: number;
}

const hotspots: RoomHotspot[] = [
  { id: "handle", label: "Loose handle", x: 27, y: 62 },
  { id: "sticking", label: "Sticking door", x: 15, y: 50 },
  { id: "seal", label: "Worn seal", x: 68, y: 34 },
  { id: "glass", label: "Damaged glass", x: 78, y: 28 },
  { id: "sliding", label: "Difficult sliding window", x: 60, y: 55 },
  { id: "hinge", label: "Hinge issue", x: 8, y: 38 },
  { id: "frame", label: "Frame issue", x: 40, y: 20 },
];

export default function WdSmallProblemsScene() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="border-b border-glass-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Small, until it isn&rsquo;t</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Small hardware problems can become everyday frustrations.
          </h2>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-md border border-glass-900/10 bg-glass-100">
          <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
            <rect x="0" y="0" width="400" height="250" fill="url(#wd-sand)" />
            {/* floor line */}
            <line x1="0" y1="210" x2="400" y2="210" stroke="#ded2ba" strokeWidth="1.4" />

            {/* door on the left */}
            <rect x="20" y="40" width="90" height="170" fill="url(#wd-frame-dark)" />
            <rect x="32" y="52" width="66" height="146" fill="#0f1720" opacity="0.25" />
            <circle cx="90" cy="130" r="4" fill="#eef3f5" />

            {/* sliding window, center-right */}
            <rect x="150" y="30" width="220" height="130" rx="4" fill="url(#wd-frame-dark)" />
            <rect x="164" y="44" width="95" height="102" fill="url(#wd-glass)" />
            <rect x="266" y="44" width="90" height="102" fill="url(#wd-glass)" opacity="0.6" />
            <rect x="150" y="150" width="220" height="8" fill="#8e97a8" />
          </svg>

          {hotspots.map((h, i) => (
            <motion.button
              key={h.id}
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.09 }}
              onClick={() => setOpenId(openId === h.id ? null : h.id)}
              onMouseEnter={() => setOpenId(h.id)}
              onMouseLeave={() => setOpenId((cur) => (cur === h.id ? null : cur))}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ember-600 bg-sand-50/90 p-1.5"
              aria-label={h.label}
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-ember-600" />
              {openId === h.id && (
                <span className="absolute left-1/2 top-full z-10 mt-2 w-max max-w-[10rem] -translate-x-1/2 whitespace-normal rounded-md border border-glass-900/10 bg-ink-950 px-3 py-1.5 text-left text-xs font-medium text-sand-50 shadow-lg">
                  {h.label}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-600">
          Tap any point to see how a small issue shows up in everyday use.
        </p>
      </div>
    </section>
  );
}
