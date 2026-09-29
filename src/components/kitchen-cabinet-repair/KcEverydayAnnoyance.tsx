"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
}

const hotspots: Hotspot[] = [
  { id: "handle", label: "One loose handle", x: 22, y: 58 },
  { id: "drawer", label: "One sticking drawer", x: 62, y: 66 },
  { id: "door", label: "One cabinet door that won't align", x: 40, y: 40 },
  { id: "edge", label: "One damaged edge", x: 80, y: 30 },
];

export default function KcEverydayAnnoyance() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="border-b border-walnut-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">Small, until it isn&rsquo;t</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            You notice it every time you use the kitchen.
          </h2>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-md border border-walnut-900/10 bg-gradient-to-b from-sand-50 to-sand-100">
          <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
            <rect x="0" y="0" width="400" height="250" fill="url(#kc-ivory)" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#b7bfc6" strokeWidth="3" />
            {/* upper cabinets */}
            <rect x="30" y="20" width="100" height="70" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
            <rect x="150" y="20" width="100" height="70" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
            <rect x="270" y="20" width="100" height="70" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
            {/* lower cabinets */}
            <rect x="30" y="160" width="120" height="80" fill="url(#kc-walnut-dark)" />
            <rect x="160" y="160" width="90" height="80" fill="url(#kc-walnut)" filter="url(#kc-wood-grain)" />
            <rect x="260" y="160" width="110" height="80" fill="url(#kc-walnut-dark)" />
          </svg>

          {hotspots.map((h, i) => (
            <motion.button
              key={h.id}
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              onClick={() => setOpenId(openId === h.id ? null : h.id)}
              onMouseEnter={() => setOpenId(h.id)}
              onMouseLeave={() => setOpenId((cur) => (cur === h.id ? null : cur))}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ember-600 bg-sand-50/90 p-1.5"
              aria-label={h.label}
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-ember-600" />
              {openId === h.id && (
                <span className="absolute left-1/2 top-full z-10 mt-2 w-max max-w-[11rem] -translate-x-1/2 whitespace-normal rounded-md border border-walnut-900/10 bg-ink-950 px-3 py-1.5 text-left text-xs font-medium text-sand-50 shadow-lg">
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
