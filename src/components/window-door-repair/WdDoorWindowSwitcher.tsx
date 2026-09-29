"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SceneId = "door" | "window";

interface Hotspot {
  id: string;
  label: string;
  note: string;
  x: number;
  y: number;
}

const doorHotspots: Hotspot[] = [
  { id: "handle", label: "Handle", note: "Operates the latch mechanism.", x: 68, y: 55 },
  { id: "hinge", label: "Hinge", note: "Lets the door swing on its axis.", x: 18, y: 30 },
  { id: "lock", label: "Lock", note: "Secures the door when closed.", x: 68, y: 45 },
  { id: "frame", label: "Frame", note: "Holds the door in the opening.", x: 90, y: 50 },
  { id: "alignment", label: "Alignment", note: "How evenly the door sits in the frame.", x: 50, y: 85 },
];

const windowHotspots: Hotspot[] = [
  { id: "glass", label: "Glass", note: "The pane itself.", x: 45, y: 40 },
  { id: "frame", label: "Frame", note: "Holds the glass and hardware.", x: 12, y: 50 },
  { id: "seal", label: "Seal", note: "Weatherstrip between frame and wall.", x: 88, y: 50 },
  { id: "track", label: "Track", note: "Channel the sliding panel moves along.", x: 50, y: 88 },
  { id: "handle", label: "Handle", note: "Used to slide and latch the panel.", x: 72, y: 55 },
  { id: "hardware", label: "Hardware", note: "Rollers, latches and fittings.", x: 30, y: 70 },
];

function DoorScene() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="220" fill="url(#wd-sand)" />
      <rect x="60" y="20" width="200" height="180" fill="#ebe4d6" filter="url(#wd-noise)" />
      {/* swing arc */}
      <path d="M100 190 A140 140 0 0 0 240 60" fill="none" stroke="#7fa0b0" strokeWidth="1" strokeDasharray="3 5" />
      {/* door leaf, swung open */}
      <g transform="translate(100,190) rotate(-38)">
        <rect x="0" y="-170" width="16" height="170" fill="url(#wd-frame-dark)" />
        <circle cx="8" cy="-30" r="4" fill="#eef3f5" />
      </g>
      {/* frame */}
      <rect x="92" y="30" width="16" height="160" fill="#3d5a6b" />
      <rect x="92" y="30" width="148" height="14" fill="#3d5a6b" />
    </svg>
  );
}

function WindowScene() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="320" height="220" fill="url(#wd-sand)" />
      <rect x="40" y="30" width="240" height="160" rx="4" fill="url(#wd-frame-dark)" />
      <rect x="56" y="44" width="100" height="132" fill="url(#wd-glass)" opacity="0.5" />
      <rect x="164" y="44" width="100" height="132" fill="url(#wd-glass)" stroke="#eef3f5" strokeWidth="2" />
      <rect x="40" y="182" width="240" height="8" rx="2" fill="#8e97a8" />
      <circle cx="200" cy="110" r="4" fill="#eef3f5" />
      <rect x="200" y="106" width="24" height="8" rx="4" fill="#eef3f5" />
    </svg>
  );
}

export default function WdDoorWindowSwitcher() {
  const [scene, setScene] = useState<SceneId>("door");
  const [openHotspot, setOpenHotspot] = useState<string | null>(null);
  const hotspots = scene === "door" ? doorHotspots : windowHotspots;

  return (
    <section className="border-b border-glass-900/10 bg-glass-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Two systems, one service</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Door or window?
          </h2>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-glass-900/15 bg-sand-50 p-1">
          {(["door", "window"] as SceneId[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setScene(id);
                setOpenHotspot(null);
              }}
              aria-pressed={scene === id}
              className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                scene === id ? "bg-glass-700 text-sand-50" : "text-ink-700 hover:text-glass-700"
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-10 aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-md border border-glass-900/10 bg-sand-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={scene}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0"
            >
              {scene === "door" ? <DoorScene /> : <WindowScene />}
            </motion.div>
          </AnimatePresence>

          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setOpenHotspot(openHotspot === h.id ? null : h.id)}
              onMouseEnter={() => setOpenHotspot(h.id)}
              onMouseLeave={() => setOpenHotspot((cur) => (cur === h.id ? null : cur))}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-glass-700 bg-sand-50/90 p-1.5"
              aria-label={h.label}
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-glass-700" />
              {openHotspot === h.id && (
                <span className="absolute left-1/2 top-full z-10 mt-2 w-40 -translate-x-1/2 rounded-md border border-glass-900/10 bg-ink-950 p-3 text-left text-xs text-sand-50 shadow-lg">
                  <span className="block font-semibold text-glass-300">{h.label}</span>
                  <span className="mt-1 block text-sand-50/90">{h.note}</span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
