"use client";

import { rnLevels, rnScales } from "@/lib/renovation";
import { usePlan } from "./RnPlan";
import { Eyebrow } from "./RnUi";

// Mini plan: which cells are "in scope" for each scale.
const fills: Record<string, number[]> = { small: [0], room: [0], multi: [0, 1, 2], whole: [0, 1, 2, 3, 4] };

function MiniPlan({ scale, on }: { scale: string; on: boolean }) {
  const cells = [
    { x: 2, y: 2, w: 46, h: 34 },
    { x: 48, y: 2, w: 30, h: 34 },
    { x: 2, y: 36, w: 30, h: 26 },
    { x: 32, y: 36, w: 46, h: 26 },
    { x: 78, y: 2, w: 20, h: 60 },
  ];
  const lit = fills[scale];
  return (
    <svg viewBox="0 0 100 64" className="h-auto w-full" aria-hidden="true">
      {cells.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={c.y}
          width={c.w}
          height={c.h}
          fill={lit.includes(i) ? (on ? "#d69a5f" : "#cdab8f") : "transparent"}
          fillOpacity={scale === "small" && i === 0 ? 0.45 : 1}
          stroke={on ? "#faf8f4" : "#14181f"}
          strokeOpacity={on ? 0.6 : 0.35}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function RnScale() {
  const { scale, setScale } = usePlan();
  const active = scale ?? "room";

  return (
    <section id="scale" aria-labelledby="rn-scale" className="scroll-mt-20 border-t border-ink-950/10 bg-sand-100 py-20 sm:py-28">
      <div className="container-edge">
        <Eyebrow n="02">Renovation scale</Eyebrow>
        <h2 id="rn-scale" className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">How big is the change?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
          Not every renovation is a whole-house project. Choose the scale closest
          to what you have in mind — you can change it later.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px bg-ink-950/10 lg:grid-cols-4" role="group" aria-label="Renovation scale">
          {rnScales.map((s) => {
            const on = active === s.key;
            return (
              <button
                key={s.key}
                type="button"
                aria-pressed={scale === s.key}
                aria-controls="rn-scale-detail"
                onClick={() => setScale(s.key)}
                className={`focus-ring flex flex-col gap-5 p-4 text-left transition-colors sm:p-6 ${on ? "bg-ink-950 text-sand-50" : "bg-sand-50 text-ink-950 hover:bg-sand-200/60"}`}
              >
                <MiniPlan scale={s.key} on={on} />
                <span>
                  <span className={`block font-mono text-[10px] uppercase tracking-[0.22em] ${on ? "text-clay-300" : "text-walnut-700"}`}>{s.tag}</span>
                  <span className="mt-1 block font-serif text-xl sm:text-2xl">{s.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div id="rn-scale-detail" aria-live="polite">
          {rnScales.map((s) => (
            <div key={s.key} hidden={active !== s.key} className="grid [&[hidden]]:hidden gap-8 border-b border-ink-950/10 bg-sand-50 p-6 sm:p-8 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Typical scope</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-800">{s.scope}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Planning considerations</p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink-800">
                  {s.considerations.map((c) => <li key={c}>— {c}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Example rooms</p>
                <p className="mt-2 text-sm text-ink-800">{s.examples}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Expected complexity</p>
                <div className="mt-3 flex items-end gap-1" aria-hidden="true">
                  {[1, 2, 3, 4].map((n) => (
                    <span key={n} className={`w-5 ${n <= s.complexity ? "bg-walnut-700" : "bg-ink-950/10"}`} style={{ height: `${6 + n * 6}px` }} />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-ink-950">{s.complexityLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Depth, not size: the renovation spectrum. */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl text-ink-950 sm:text-3xl">What level of renovation?</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
            Scale is how much of the home is involved. Level is how deep the work
            goes. The right level depends on the property&rsquo;s condition and the
            work you select — it&rsquo;s confirmed on assessment.
          </p>
          <div aria-hidden="true" className="mt-8 h-1.5 w-full bg-gradient-to-r from-clay-300 via-walnut-600 to-ink-950" />
          <ol className="grid grid-cols-2 gap-x-6 gap-y-6 pt-5 sm:grid-cols-3 lg:grid-cols-6">
            {rnLevels.map((l, i) => (
              <li key={l.label} className="relative pl-4">
                <span aria-hidden="true" className="absolute left-0 top-1 h-3 w-px bg-ink-950/40" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink-400">L{i + 1}</span>
                <p className="mt-1 font-serif text-lg leading-tight text-ink-950">{l.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-600">{l.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
