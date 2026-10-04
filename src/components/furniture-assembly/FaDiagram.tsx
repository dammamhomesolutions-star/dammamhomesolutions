"use client";

import { useState } from "react";
import { faStages } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

const ink = "#3d2b1f";
const panel = "#faf8f4";
const wood = "#8a6248";

function Stage({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-labelledby="fa-stage-title">
      <title id="fa-stage-title">{`Assembly stage ${i + 1} of 5: ${faStages[i].label}`}</title>
      <rect width="360" height="260" fill="#f0e4d8" />
      <path d="M0 236h360" stroke="#a67c5b" strokeWidth="2" />
      <g key={i} className="animate-fadeIn">
        {i === 0 && (
          <>
            <path d="M110 120l70-28 70 28v86l-70 28-70-28z" fill="#cdab8f" stroke={ink} strokeWidth="2" />
            <path d="M110 120l70 28 70-28M180 148v86" fill="none" stroke={ink} strokeWidth="2" />
            <path d="M138 108l70 28" stroke={wood} strokeWidth="7" />
          </>
        )}
        {i === 1 && (
          <>
            <rect x="40" y="190" width="150" height="14" rx="2" fill={panel} stroke={ink} strokeWidth="2" />
            <rect x="40" y="210" width="150" height="14" rx="2" fill={panel} stroke={ink} strokeWidth="2" />
            <rect x="40" y="170" width="110" height="14" rx="2" fill={panel} stroke={ink} strokeWidth="2" />
            <rect x="200" y="200" width="70" height="24" rx="2" fill={panel} stroke={ink} strokeWidth="2" />
            <rect x="200" y="172" width="70" height="24" rx="2" fill={panel} stroke={ink} strokeWidth="2" />
            <g fill={wood}>
              {[0, 1, 2, 3, 4].map((n) => <circle key={n} cx={290 + (n % 3) * 14} cy={190 + Math.floor(n / 3) * 16} r="4" />)}
              <rect x="290" y="216" width="40" height="6" rx="2" />
            </g>
            <text x="40" y="160" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>PANELS</text>
            <text x="286" y="172" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>HARDWARE</text>
          </>
        )}
        {i >= 2 && (
          <>
            <rect x="120" y="40" width="120" height="196" fill={i === 2 ? "none" : panel} stroke={ink} strokeWidth="3" />
            <path d="M120 222h120" stroke={ink} strokeWidth="3" />
          </>
        )}
        {i === 2 && <text x="250" y="140" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>FRAME</text>}
        {i === 3 && (
          <>
            <path d="M120 100h120M120 150h120" stroke={wood} strokeWidth="4" />
            <rect x="126" y="182" width="108" height="34" fill="#cdab8f" stroke={ink} strokeWidth="2" />
            <path d="M170 199h20" stroke={ink} strokeWidth="3" strokeLinecap="round" />
            <path d="M240 40l40 12v168l-40 16z" fill={panel} stroke={ink} strokeWidth="2" />
            <text x="250" y="30" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>DOOR</text>
            <text x="20" y="104" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>SHELVES</text>
            <text x="20" y="204" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>DRAWER</text>
          </>
        )}
        {i === 4 && (
          <>
            <path d="M180 40v182" stroke={ink} strokeWidth="2" />
            <path d="M172 120v20M188 120v20" stroke={wood} strokeWidth="4" strokeLinecap="round" />
            <rect x="126" y="182" width="108" height="34" fill="#cdab8f" stroke={ink} strokeWidth="2" />
            <path d="M170 199h20" stroke={ink} strokeWidth="3" strokeLinecap="round" />
            <rect x="150" y="26" width="60" height="9" rx="3" fill={wood} />
            <circle className="wh-glow" cx="180" cy="30.5" r="2.5" fill="#f0e4d8" />
            <path d="M240 50h28" stroke={wood} strokeWidth="4" />
            <path d="M268 20v216" stroke="#a67c5b" strokeWidth="3" />
            <text x="274" y="56" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>ANCHOR</text>
            <text x="20" y="34" fontFamily="ui-monospace, monospace" fontSize="12" fill={ink}>LEVEL ✓</text>
          </>
        )}
      </g>
    </svg>
  );
}

export default function FaDiagram() {
  const [i, setI] = useState(0);
  const s = faStages[i];

  return (
    <section id="how-assembly-works" aria-labelledby="fa-diagram" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-300">From box to furniture</p>
          <h2 id="fa-diagram" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">How a flat-pack wardrobe comes together</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-2xl ring-1 ring-sand-100/10 lg:col-span-7">
            <Stage i={i} />
          </div>
          <div className="lg:col-span-5">
            <ol className="grid grid-cols-5 gap-1.5" aria-label="Assembly stages">
              {faStages.map((st, n) => (
                <li key={st.label}>
                  <button
                    type="button"
                    aria-current={i === n ? "step" : undefined}
                    onClick={() => setI(n)}
                    className={`focus-ring flex w-full flex-col items-center gap-1 rounded-xl border px-1 py-2.5 text-[11px] leading-tight transition-colors sm:text-xs ${
                      i === n ? "border-walnut-300 bg-walnut-300 text-ink-950" : n < i ? "border-walnut-300/40 text-sand-100" : "border-sand-100/15 text-ink-300 hover:border-sand-100/40"
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
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((t) => <li key={t} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs text-sand-100">{t}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex gap-2">
              <button type="button" disabled={i === 0} onClick={() => setI(i - 1)} className="focus-ring rounded-full border border-sand-100/25 px-4 py-2 text-sm disabled:opacity-30">Back</button>
              <button type="button" disabled={i === faStages.length - 1} onClick={() => setI(i + 1)} className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-walnut-300 px-4 py-2 text-sm font-semibold text-ink-950 disabled:opacity-30">
                Next stage <FaIcon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
