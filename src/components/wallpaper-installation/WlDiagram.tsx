"use client";

import { useState } from "react";
import { wlStages } from "@/lib/wallpaper-installation";
import WlIcon from "./WlIcon";

// Wall → prepared surface → sheet → seam → pattern repeat → finished wall.
function Stage({ i }: { i: number }) {
  const sheets = i >= 5 ? 4 : i === 4 ? 3 : i === 3 ? 2 : i === 2 ? 1 : 0;
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-labelledby="wl-stage-title">
      <title id="wl-stage-title">{`Wallpaper stage ${i + 1} of 6: ${wlStages[i].label}`}</title>
      <defs>
        <pattern id="wl-dg-pat" x="20" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#1f5c5c" />
          <path d="M20 4c6 6 6 10 0 16-6-6-6-10 0-16z" fill="#8fc4c4" />
          <circle cx="0" cy="30" r="4" fill="#e0b28a" /><circle cx="40" cy="30" r="4" fill="#e0b28a" />
        </pattern>
      </defs>
      <rect width="360" height="240" fill="#f4f0e8" />
      <rect x="20" y="10" width="320" height="200" fill={i === 0 ? "#d8cdb8" : "#ebe4d6"} />
      {i === 0 && (
        <g>
          <path d="M70 40l14 20-6 14 10 18" stroke="#94472a" strokeWidth="1.5" fill="none" />
          <circle cx="200" cy="90" r="4" fill="#94472a" /><circle cx="260" cy="150" r="3" fill="#94472a" />
          <path d="M140 160h40l-6 10h-30z" fill="#c9bba2" />
          <text x="230" y="40" fontFamily="ui-monospace, monospace" fontSize="11" fill="#94472a">CRACKS · HOLES</text>
        </g>
      )}
      {i === 1 && <text x="110" y="115" fontFamily="ui-monospace, monospace" fontSize="12" fill="#1f5c5c">SMOOTH · CLEAN · PRIMED</text>}
      {sheets > 0 && (
        <g key={sheets} className="animate-fadeIn">
          <rect x="20" y="10" width={sheets * 80} height="200" fill="url(#wl-dg-pat)" />
          {Array.from({ length: Math.min(sheets, 4) - 1 }, (_, n) => (
            <path key={n} d={`M${100 + n * 80} 10v200`} stroke={i === 3 ? "#c76a3f" : "#0f3a3a"} strokeWidth={i === 3 ? 2.5 : 1} />
          ))}
        </g>
      )}
      {i === 2 && <text x="112" y="115" fontFamily="ui-monospace, monospace" fontSize="12" fill="#1f5c5c">← FIRST SHEET, PLUMB</text>}
      {i === 3 && <text x="194" y="115" fontFamily="ui-monospace, monospace" fontSize="12" fill="#c76a3f">← SEAM</text>}
      {i === 4 && (
        <>
          <circle cx="100" cy="190" r="12" fill="none" stroke="#c76a3f" strokeWidth="2.5" />
          <circle cx="180" cy="190" r="12" fill="none" stroke="#c76a3f" strokeWidth="2.5" />
          <text x="270" y="115" fontFamily="ui-monospace, monospace" fontSize="11" fill="#1f5c5c">REPEAT</text>
          <text x="262" y="130" fontFamily="ui-monospace, monospace" fontSize="11" fill="#1f5c5c">MATCHED</text>
        </>
      )}
      {i === 5 && (
        <>
          <rect x="20" y="200" width="320" height="10" fill="#faf8f4" />
          <rect x="140" y="60" width="80" height="80" fill="#e3eef7" stroke="#faf8f4" strokeWidth="5" />
        </>
      )}
      <rect y="210" width="360" height="30" fill="#ded2ba" />
    </svg>
  );
}

export default function WlDiagram() {
  const [i, setI] = useState(0);
  const s = wlStages[i];

  return (
    <section id="how-it-goes-up" aria-labelledby="wl-diagram" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-300">From bare wall to finished wall</p>
          <h2 id="wl-diagram" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">How a wallpaper installation comes together</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-sand-100/10 lg:col-span-7">
            <Stage i={i} />
          </div>
          <div className="lg:col-span-5">
            <ol className="grid grid-cols-3 gap-1.5 sm:grid-cols-6" aria-label="Installation stages">
              {wlStages.map((st, n) => (
                <li key={st.label}>
                  <button
                    type="button"
                    aria-current={i === n ? "step" : undefined}
                    onClick={() => setI(n)}
                    className={`focus-ring flex h-full w-full flex-col items-center gap-1 rounded-xl border px-1 py-2.5 text-[11px] leading-tight transition-colors ${
                      i === n ? "border-teal-300 bg-teal-300 text-ink-950" : n < i ? "border-teal-300/40 text-sand-100" : "border-sand-100/15 text-ink-300 hover:border-sand-100/40"
                    }`}
                  >
                    <span className="font-mono">{n + 1}</span>
                    {st.label}
                  </button>
                </li>
              ))}
            </ol>
            <div key={i} className="mt-6 animate-fadeIn" aria-live="polite">
              <h3 className="font-serif text-2xl">{s.label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-300">{s.body}</p>
            </div>
            <div className="mt-6 flex gap-2">
              <button type="button" disabled={i === 0} onClick={() => setI(i - 1)} className="focus-ring rounded-full border border-sand-100/25 px-4 py-2 text-sm disabled:opacity-30">Back</button>
              <button type="button" disabled={i === wlStages.length - 1} onClick={() => setI(i + 1)} className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-ink-950 disabled:opacity-30">
                Next stage <WlIcon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
