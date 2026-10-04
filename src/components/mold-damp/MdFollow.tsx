"use client";

import Link from "next/link";
import { useState } from "react";
import { mdSources, type MdSourceKey } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Spec } from "./MdUi";

type Geo = { zone: [number, number, number, number]; path?: string; stain?: [number, number, number, number] };

// Hit zones, moisture paths and the resulting stain for each source on the
// house cross-section (viewBox 720 × 480).
const geo: Record<MdSourceKey, Geo> = {
  roof: { zone: [60, 40, 560, 50], path: "M400 60C400 78 404 88 402 100", stain: [402, 104, 46, 8] },
  exterior: { zone: [600, 200, 40, 90], path: "M660 240C640 245 620 250 596 252C590 262 588 280 588 300", stain: [588, 300, 10, 26] },
  window: { zone: [596, 292, 40, 86], path: "M640 300C626 310 616 330 612 360C606 380 596 388 588 392", stain: [584, 398, 14, 14] },
  bathroom: { zone: [80, 90, 180, 160], path: "M170 236C170 248 168 258 168 270", stain: [168, 276, 52, 8] },
  plumbing: { zone: [262, 90, 16, 340], path: "M270 330C280 336 290 344 296 356", stain: [300, 366, 12, 24] },
  kitchen: { zone: [80, 270, 200, 160], path: "M150 392C156 404 166 412 176 418", stain: [180, 418, 26, 8] },
  ground: { zone: [60, 430, 580, 50], path: "M40 470C60 460 74 446 84 428C86 420 88 414 90 410", stain: [92, 410, 10, 18] },
  condensation: { zone: [520, 90, 80, 80], stain: [586, 112, 10, 18] },
  unknown: { zone: [60, 40, 580, 440] },
};

function Section({ sel, onPick }: { sel: MdSourceKey | null; onPick: (k: MdSourceKey) => void }) {
  const g = sel ? geo[sel] : null;
  return (
    <svg viewBox="0 0 720 480" className="h-auto w-full" aria-hidden="true">
      <defs>
        <pattern id="md-soil" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0v12" stroke="#7fa0b0" strokeOpacity="0.25" strokeWidth="2" />
        </pattern>
        <radialGradient id="md-stain">
          <stop offset="0" stopColor="#7fa0b0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#7fa0b0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky / ground */}
      <rect x="0" y="430" width="720" height="50" fill="url(#md-soil)" />
      <path d="M0 430H720" stroke="#b8ccd4" strokeOpacity="0.5" />

      {/* rooms */}
      <g fill="#26333f">
        <rect x="80" y="90" width="182" height="160" />
        <rect x="278" y="90" width="322" height="160" />
        <rect x="80" y="270" width="182" height="160" />
        <rect x="278" y="270" width="322" height="160" />
      </g>
      {/* structure */}
      <g fill="#3d5a6b">
        <rect x="60" y="70" width="560" height="20" />
        <rect x="60" y="250" width="560" height="20" />
        <rect x="60" y="70" width="20" height="360" />
        <rect x="600" y="70" width="20" height="360" />
        <rect x="60" y="40" width="14" height="30" />
        <rect x="606" y="40" width="14" height="30" />
      </g>
      {/* windows */}
      <g fill="#b8ccd4" fillOpacity="0.35" stroke="#b8ccd4" strokeOpacity="0.6">
        <rect x="600" y="130" width="20" height="60" />
        <rect x="600" y="300" width="20" height="70" />
      </g>
      {/* pipe */}
      <rect x="266" y="90" width="8" height="340" fill="#5b7d8f" />
      {/* fixtures: shower, wc, sink, sofa, bed, AC */}
      <g stroke="#b8ccd4" strokeOpacity="0.5" fill="none" strokeWidth="1.5">
        <path d="M100 110v120M100 120h40M136 120v10" />
        <path d="M200 236v-30h30v30M196 206h38" />
        <rect x="110" y="380" width="80" height="50" />
        <path d="M130 380v-10h20" />
        <rect x="330" y="392" width="150" height="38" rx="6" />
        <rect x="320" y="206" width="170" height="44" rx="4" />
        <rect x="500" y="104" width="70" height="20" rx="3" />
      </g>
      {/* room labels */}
      <g className="font-mono" fontSize="17" letterSpacing="1" fill="#b8ccd4" fillOpacity="0.8">
        <text x="150" y="114">BATH</text>
        <text x="290" y="114">BEDROOM</text>
        <text x="150" y="294">KITCHEN</text>
        <text x="290" y="294">LIVING ROOM</text>
        <text x="80" y="30">ROOF</text>
        <text x="636" y="462">GROUND</text>
      </g>

      {/* selection */}
      {g && sel !== "unknown" && (
        <rect x={g.zone[0]} y={g.zone[1]} width={g.zone[2]} height={g.zone[3]} fill="#7fa0b0" fillOpacity="0.16" stroke="#b8ccd4" strokeDasharray="4 4" />
      )}
      {g?.stain && <ellipse cx={g.stain[0]} cy={g.stain[1]} rx={g.stain[2]} ry={g.stain[3]} fill="url(#md-stain)" className="animate-fadeIn" />}
      {g?.path && <path key={sel} d={g.path} fill="none" stroke="#b8ccd4" strokeWidth="3" strokeLinecap="round" className="md-flow" strokeDasharray="6 8" />}
      {sel === "condensation" && [[540, 140], [556, 150], [572, 138], [588, 150]].map(([x, y], i) => (
        <path key={i} className="md-drip" style={{ animationDelay: `${i * 0.4}s` }} d={`M${x} ${y}c3 4 5 7 5 9a5 5 0 0 1-10 0c0-2 2-5 5-9z`} fill="#b8ccd4" />
      ))}
      {sel === "unknown" && [[402, 104], [300, 366], [588, 300], [168, 276]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r="11" fill="#1c2733" stroke="#b8ccd4" /><text x={x} y={y + 4} textAnchor="middle" fontSize="12" fill="#eef3f5">?</text></g>
      ))}

      {/* click targets */}
      {(Object.keys(geo) as MdSourceKey[]).filter((k) => k !== "unknown").map((k) => {
        const [x, y, w, h] = geo[k].zone;
        return <rect key={k} x={x} y={y} width={w} height={h} fill="transparent" className="cursor-pointer" onClick={() => onPick(k)} />;
      })}
    </svg>
  );
}

export default function MdFollow() {
  const { source, set } = useReport();
  const [sel, setSel] = useState<MdSourceKey | null>(null);

  return (
    <section id="follow-the-moisture" aria-labelledby="md-follow" className="scroll-mt-20 overflow-hidden bg-glass-900 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <Spec code="S-02" dark>Follow the moisture</Spec>
        <h2 id="md-follow" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">Where could the moisture be coming from?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-glass-200">
          Don&rsquo;t just treat the mark. Pick a possible source to see how moisture
          can travel from it — and where it might show up. The exact source
          always needs checking on site.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="relative rounded-2xl border border-glass-300/20 bg-glass-800/40 p-3 sm:p-5">
              <Section sel={sel} onPick={setSel} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap" role="group" aria-label="Possible moisture source">
              {mdSources.map((s) => (
                <button key={s.key} type="button" aria-pressed={sel === s.key} aria-controls="md-source-panel" onClick={() => setSel(s.key)} className={`focus-ring rounded-lg border px-2 py-2.5 text-xs font-semibold leading-tight transition-colors sm:px-3.5 sm:text-sm ${sel === s.key ? "border-glass-300 bg-glass-300 text-glass-900" : "border-glass-300/25 text-glass-100 hover:border-glass-300/70"}`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div id="md-source-panel" aria-live="polite" className="lg:col-span-5">
            {!sel && (
              <div className="rounded-2xl border border-glass-300/20 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-300">Visible sign → source</p>
                <p className="mt-3 font-serif text-2xl leading-snug">The mark on the wall is where moisture shows — not always where it starts.</p>
                <p className="mt-3 text-sm leading-relaxed text-glass-200">Choose roof, exterior wall, window, bathroom, plumbing, kitchen, ground, condensation — or &ldquo;not sure&rdquo;.</p>
              </div>
            )}
            {mdSources.map((s) => (
              <article key={s.key} hidden={sel !== s.key}>
                <div className="rounded-2xl border border-glass-300/20 p-6">
                  <h3 className="font-serif text-2xl">{s.label}</h3>
                  <dl className="mt-5 space-y-5 text-sm">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-300">Possible source</dt>
                      <dd className="mt-1 leading-relaxed text-glass-100">{s.possible}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-300">Visible signs</dt>
                      <dd className="mt-1"><ul className="space-y-1 text-glass-100">{s.signs.map((x) => <li key={x}>· {x}</li>)}</ul></dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-300">What should be checked</dt>
                      <dd className="mt-1"><ul className="space-y-1 text-glass-100">{s.checked.map((x) => <li key={x}>· {x}</li>)}</ul></dd>
                    </div>
                    <div className="rounded-lg bg-glass-800 p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-300">Appropriate next step</dt>
                      <dd className="mt-1 font-semibold text-sand-50">{s.next}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <button type="button" onClick={() => set("source", source === s.label ? null : s.label)} aria-pressed={source === s.label} className={`focus-ring rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${source === s.label ? "bg-glass-300 text-glass-900" : "border border-glass-300/50 text-sand-50 hover:bg-glass-800"}`}>
                      {source === s.label ? "✓ Noted in my report" : "Note this in my report"}
                    </button>
                    {s.href && (
                      <Link href={s.href} className="focus-ring rounded-sm text-sm font-semibold text-glass-200 underline decoration-glass-300/60 underline-offset-4 hover:text-sand-50">{s.linkLabel}</Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
