"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { rfZones, type RfZone } from "@/lib/roof-repair";

const DRAIN = { x: 274, y: 190 };

const waterConfig: Record<
  string,
  { path: string; length: number; duration: number; stuck?: boolean; note: string }
> = {
  surface: {
    path: "M100 60 C 140 90, 190 120, 240 160 S 268 184, 274 190",
    length: 260,
    duration: 3.2,
    note: "On a well-sloped surface, water travels toward the drainage point without collecting.",
  },
  drainage: {
    path: "M240 170 C 255 178, 266 184, 274 190",
    length: 70,
    duration: 1.4,
    note: "This is the shortest, most direct path — the area closest to a drainage point.",
  },
  edge: {
    path: "M50 40 C 46 90, 48 140, 70 165 C 110 190, 180 195, 274 190",
    length: 340,
    duration: 4.2,
    stuck: true,
    note: "Near an edge or parapet, water can pause or collect before continuing toward drainage — worth a closer look if it happens often.",
  },
  joints: {
    path: "M150 50 C 160 90, 158 120, 150 140",
    length: 130,
    duration: 2.2,
    stuck: true,
    note: "A joint or connection can sometimes interrupt the expected path — this is one reason joints are checked during an inspection.",
  },
  structures: {
    path: "M110 70 C 130 70, 150 90, 140 110 C 130 130, 160 150, 200 165 C 230 175, 260 184, 274 190",
    length: 320,
    duration: 4,
    note: "Rooftop fixtures and structures can redirect the path water takes on its way to a drainage point.",
  },
};

export default function RfFollowWater() {
  const [activeId, setActiveId] = useState(rfZones[0].id);
  const shouldReduceMotion = useReducedMotion();
  const active = rfZones.find((z) => z.id === activeId)!;
  const config = waterConfig[activeId];

  return (
    <section id="follow-the-water" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">Follow the water</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Pick a starting point. Watch where it goes.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            An illustrative simulation of how water generally moves across a
            rooftop toward a drainage point — not a model of any specific
            property.
          </p>
        </div>

        <div role="group" aria-label="Starting point on the roof" className="mt-8 flex flex-wrap gap-2">
          {rfZones.map((z: RfZone) => (
            <button
              key={z.id}
              type="button"
              aria-pressed={activeId === z.id}
              onClick={() => setActiveId(z.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeId === z.id ? "border-teal-500 bg-teal-700 text-sand-50" : "border-sand-50/20 text-ink-300 hover:border-teal-500"
              }`}
            >
              {z.label}
            </button>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-sand-50/10 bg-ink-900 p-6">
          <svg viewBox="0 0 320 220" className="h-auto w-full" aria-hidden="true">
            <title>A top-down roof plan showing where water travels from a chosen starting point toward the drainage point</title>
            <rect x="20" y="20" width="280" height="180" fill="#232833" stroke="#4a5468" strokeWidth="2" />

            {rfZones.map((z, i) => {
              const positions: Record<string, { x: number; y: number }> = {
                surface: { x: 100, y: 60 },
                drainage: { x: 240, y: 170 },
                edge: { x: 50, y: 40 },
                joints: { x: 150, y: 50 },
                structures: { x: 110, y: 70 },
              };
              const p = positions[z.id];
              return (
                <circle
                  key={z.id}
                  cx={p.x}
                  cy={p.y}
                  r={activeId === z.id ? 6 : 4}
                  fill={activeId === z.id ? "#4a9797" : "#69748a"}
                  style={{ transition: "r 200ms" }}
                />
              );
            })}

            {/* drainage point */}
            <circle cx={DRAIN.x} cy={DRAIN.y} r="9" fill="none" stroke="#8fc4c4" strokeWidth="2" />
            <text x={DRAIN.x} y={DRAIN.y + 24} textAnchor="middle" fontSize="9" fill="#8fc4c4" fontFamily="monospace">
              DRAIN
            </text>

            {/* path guide */}
            <path key={`guide-${activeId}`} d={config.path} fill="none" stroke="#333a49" strokeWidth="2" strokeDasharray="3 4" />

            {/* traveling water droplet */}
            {shouldReduceMotion ? (
              <circle cx={DRAIN.x} cy={DRAIN.y} r="5" fill="#4a9797" />
            ) : (
              <motion.circle
                key={activeId}
                r="5"
                fill="#4a9797"
                style={{ offsetPath: `path('${config.path}')` }}
                animate={{ offsetDistance: ["0%", "100%"], opacity: config.stuck ? [1, 1, 0.3, 1] : [1, 1] }}
                transition={{
                  offsetDistance: { duration: config.duration, repeat: Infinity, ease: config.stuck ? "easeIn" : "easeInOut" },
                  opacity: { duration: config.duration, repeat: Infinity },
                }}
              />
            )}
          </svg>
        </div>

        <div key={active.id} className="mx-auto mt-6 max-w-lg animate-fadeIn rounded-md border border-sand-50/10 bg-ink-900/60 p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-300">{active.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">{config.note}</p>
        </div>
      </div>
    </section>
  );
}
