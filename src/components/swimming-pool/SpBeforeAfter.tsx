"use client";

import { useState } from "react";

type Scene = "surface" | "water" | "equipment" | "area";
const scenes: { key: Scene; label: string; before: string; after: string }[] = [
  { key: "surface", label: "Surface", before: "Cracked tiles, stained grout", after: "Re-tiled and re-grouted" },
  { key: "water", label: "Water appearance", before: "Cloudy, green tint", after: "Clear and balanced" },
  { key: "equipment", label: "Equipment area", before: "Leaking, untidy pipework", after: "Serviced pump and filter" },
  { key: "area", label: "Pool surround", before: "Loose coping, stained deck", after: "Coping re-bedded, cleaned" },
];

// Illustrated "before" and "after" for each scene. These are drawings, not
// photos of real projects — real project photos will replace them.
function Art({ scene, after }: { scene: Scene; after: boolean }) {
  const water = after ? "#4a9797" : "#7d9b6a";
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill={after ? "#e0f0f0" : "#d8d2c4"} />
      {scene === "surface" && (
        <>
          {Array.from({ length: 10 }, (_, c) => Array.from({ length: 6 }, (_, r) => (
            <rect key={`${c}-${r}`} x={c * 40 + 2} y={r * 40 + 2} width="36" height="36" fill={after ? "#2f7a7a" : (c + r) % 4 === 0 ? "#6f8a86" : "#3f6d6a"} />
          )))}
          {!after && <path d="M120 40l20 30-12 20 18 26M260 120l14 24" stroke="#14181f" strokeWidth="2.5" fill="none" />}
        </>
      )}
      {scene === "water" && (
        <>
          <rect x="20" y="40" width="360" height="180" rx="16" fill={water} />
          {after ? <path className="sp-caustic" d="M20 120c40-20 80-20 120 0s80 20 120 0 80-20 120 0" stroke="#e0f0f0" strokeWidth="3" fill="none" opacity="0.6" /> : <rect x="20" y="40" width="360" height="180" rx="16" fill="#ffffff" opacity="0.3" />}
        </>
      )}
      {scene === "equipment" && (
        <>
          <rect width="400" height="240" fill="#232833" />
          <rect x="70" y="120" width="90" height="70" rx="12" fill={after ? "#4a5468" : "#333a49"} />
          <rect x="190" y="60" width="60" height="130" rx="30" fill={after ? "#4a5468" : "#333a49"} />
          <path d="M0 170h70M160 150h30M250 110h150" stroke={after ? "#8e97a8" : "#69748a"} strokeWidth="8" />
          {!after && <><path d="M160 150c4 20 2 40-6 60" stroke="#4a9797" strokeWidth="3" fill="none" /><ellipse cx="150" cy="215" rx="40" ry="8" fill="#4a9797" opacity="0.5" /></>}
        </>
      )}
      {scene === "area" && (
        <>
          <rect x="40" y="110" width="320" height="130" fill={water} />
          <rect x="30" y="92" width="340" height="20" fill={after ? "#faf8f4" : "#c9c0ae"} />
          {!after && <path d="M150 92l10 20M260 96l-6 14" stroke="#94472a" strokeWidth="2.5" />}
          <rect y="0" width="400" height="92" fill={after ? "#ebe4d6" : "#bfb49c"} />
        </>
      )}
    </svg>
  );
}

export default function SpBeforeAfter() {
  const [scene, setScene] = useState<Scene>("surface");
  const [pos, setPos] = useState(50);
  const s = scenes.find((x) => x.key === scene)!;

  return (
    <section id="before-after" aria-labelledby="sp-ba" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">From problem to ready again</p>
            <h2 id="sp-ba" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What the work looks like</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Scene">
            {scenes.map((x) => (
              <button key={x.key} type="button" aria-pressed={scene === x.key} onClick={() => { setScene(x.key); setPos(50); }} className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors ${scene === x.key ? "bg-ink-950 text-sand-50" : "bg-teal-100 text-teal-900 hover:bg-teal-300/50"}`}>
                {x.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative mt-8 aspect-[5/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(15,58,58,0.6)] sm:aspect-[16/7]" role="img" aria-label={`Illustration of ${s.label.toLowerCase()}: before — ${s.before}; after — ${s.after}`}>
          <Art scene={scene} after />
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <div className="absolute inset-y-0 left-0" style={{ width: `${10000 / Math.max(pos, 1)}%` }}>
              <Art scene={scene} after={false} />
            </div>
          </div>
          <span aria-hidden="true" className="absolute inset-y-0 w-1 -translate-x-1/2 bg-sand-50 shadow" style={{ left: `${pos}%` }} />
          <span className="absolute left-3 top-3 rounded-full bg-ink-950/75 px-3 py-1 text-xs font-semibold text-sand-50">Before: {s.before}</span>
          <span className="absolute bottom-3 right-3 rounded-full bg-ink-950/75 px-3 py-1 text-xs font-semibold text-sand-50">After: {s.after}</span>
        </div>
        <label className="mt-4 block text-sm font-medium text-ink-800">
          <span className="sr-only">Before / after position</span>
          <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="w-full accent-teal-700" />
        </label>
        <p className="mt-2 text-xs text-ink-500">Illustrations only — not photos of completed projects. Real project photos will be added here.</p>
      </div>
    </section>
  );
}
