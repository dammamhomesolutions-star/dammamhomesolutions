"use client";

import { useState } from "react";
import { mgStages } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

// Magnified edge-on view of the stone surface getting smoother at each stage.
const profiles = [
  "M0 60 L12 52 L20 64 L30 48 L40 62 L52 50 L60 66 L72 46 L84 60 L94 52 L106 64 L118 48 L130 62 L142 50 L152 66 L164 48 L176 60 L188 52 L200 64 L212 50 L224 62 L236 48 L248 60 L260 52 L272 64 L284 50 L296 60 L300 56",
  "M0 58 L20 54 L40 60 L60 54 L80 59 L100 53 L120 59 L140 54 L160 60 L180 54 L200 59 L220 54 L240 60 L260 54 L280 59 L300 56",
  "M0 56 L60 55 L120 56.5 L180 55 L240 56 L300 55.5",
  "M0 56 L300 56",
];

function Surface({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 300 140" className="h-auto w-full" role="img" aria-labelledby="mg-surface-title">
      <title id="mg-surface-title">{`Magnified stone surface at stage ${i + 1}: ${mgStages[i].label}`}</title>
      <rect width="300" height="140" fill="#eae7de" />
      <path d={`${profiles[i]} L300 140 L0 140 Z`} fill="#c4c0b4" style={{ transition: "d 600ms ease" }} />
      <path d={profiles[i]} fill="none" stroke="#5c584f" strokeWidth="1.5" style={{ transition: "d 600ms ease" }} />
      {i === 0 && [40, 120, 210].map((x) => <rect key={x} x={x} y="40" width="14" height="6" rx="2" fill="#94472a" opacity="0.5" />)}
      {/* light rays: scattered when rough, mirrored when polished */}
      <g key={i} className="animate-fadeIn" stroke="#c17f3e" strokeWidth="1.5" fill="none">
        <path d="M60 10L100 50" />
        {i < 2 ? (
          <>
            <path d="M100 50l-20-22" />
            <path d="M100 50l4-30" />
            <path d="M100 50l26-18" />
          </>
        ) : (
          <path d="M100 50l40-40" strokeWidth={i === 3 ? 2.5 : 1.5} />
        )}
      </g>
      <text x="200" y="22" fontFamily="ui-monospace, monospace" fontSize="10" fill="#35332e">{i < 2 ? "LIGHT SCATTERS" : "LIGHT REFLECTS"}</text>
    </svg>
  );
}

export default function MgSurface() {
  const [i, setI] = useState(0);
  const s = mgStages[i];

  return (
    <section aria-labelledby="mg-surface" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="section-label !text-concrete-700">Under the surface</p>
          <h2 id="mg-surface" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why a smoother surface looks shinier</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Shine is really about how evenly the surface reflects light. Tiny
            scratches scatter it, so the stone looks dull. Each step refines the
            surface a little more until it reflects cleanly.
          </p>
          <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {mgStages.map((st, n) => (
              <li key={st.label}>
                <button
                  type="button"
                  aria-current={i === n ? "step" : undefined}
                  onClick={() => setI(n)}
                  className={`focus-ring h-full w-full rounded-xl border px-2 py-2.5 text-xs font-semibold transition-colors ${i === n ? "border-concrete-900 bg-concrete-900 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-concrete-600"}`}
                >
                  <span className="block font-mono opacity-70">{n + 1}</span>
                  {st.label}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
            <Surface i={i} />
          </div>
          <ul key={i} className="mt-4 flex animate-fadeIn flex-wrap gap-2" aria-live="polite">
            {s.points.map((p) => <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-concrete-100 px-3 py-1 text-sm text-ink-800"><MgIcon name="check" className="h-3.5 w-3.5 text-concrete-700" />{p}</li>)}
          </ul>
          <p className="mt-2 text-xs text-ink-500">Simplified, magnified illustration.</p>
        </div>
      </div>
    </section>
  );
}
