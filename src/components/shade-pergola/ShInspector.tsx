"use client";

import { useState } from "react";
import { shParts, type ShPart } from "@/lib/shade-pergola";
import { Car } from "./ShHero";
import { condParts, useShade, type Cond, type CondPart } from "./ShPlan";
import { Tag } from "./ShUi";

const spots: Record<ShPart, { x: number; y: number }> = {
  cover: { x: 52, y: 30 },
  frame: { x: 61, y: 43 },
  connections: { x: 36, y: 49 },
  base: { x: 36, y: 88 },
  drainage: { x: 88, y: 64 },
  finish: { x: 19, y: 52 },
};
const toCond: Partial<Record<ShPart, CondPart>> = { cover: "Cover", frame: "Frame", base: "Base", drainage: "Drainage" };

// The highlighted overlay for each component on the drawing.
function Highlight({ part }: { part: ShPart | null }) {
  const c = "#c98246";
  return (
    <g fill="none" stroke={c} strokeWidth="5" strokeLinejoin="round" className="animate-fadeIn">
      {part === "cover" && <path d="M150 150L550 110L690 190L290 240Z" fill={c} fillOpacity="0.25" />}
      {part === "frame" && <path d="M150 156L550 116L690 196L290 246ZM290 246V300M690 196V250" />}
      {part === "connections" && [[150, 156], [550, 116], [690, 196], [290, 246]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="13" />)}
      {part === "base" && [[150, 350], [550, 310], [690, 400], [290, 440]].map(([x, y]) => <rect key={x} x={x - 20} y={y - 8} width="40" height="16" />)}
      {part === "drainage" && <path d="M290 248L690 198M698 200V392" />}
      {part === "finish" && <path d="M150 156V350M290 246V440M550 116V310M690 196V400" strokeDasharray="6 6" />}
    </g>
  );
}

export default function ShInspector() {
  const { cond, setCond, addIssue } = useShade();
  const [part, setPart] = useState<ShPart | null>(null);

  return (
    <section id="inspect" aria-labelledby="sh-inspect" className="scroll-mt-20 bg-steel-900 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Tag n="01" dark>Inspect your shade</Tag>
            <h2 id="sh-inspect" className="mt-5 font-serif text-3xl tracking-tight sm:text-5xl">What part of your shade needs attention?</h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-steel-300 lg:col-span-5">
            Tap a component. This helps you describe what you see — it can&rsquo;t
            tell you whether a structure is safe. That needs an assessment.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative border border-steel-300/20 bg-[linear-gradient(rgba(183,191,198,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(183,191,198,0.07)_1px,transparent_1px)] bg-[size:28px_28px]">
              <svg viewBox="0 0 800 500" className="h-auto w-full" role="img" aria-label="Three-quarter view of a car parking shade: a sloped cover on a perimeter frame supported by four posts on base plates, with a gutter and downpipe along the front edge and a car parked underneath">
                {/* ground plane */}
                <path d="M60 360L560 300L760 420L260 490Z" fill="#4d545c" fillOpacity="0.35" />
                {/* back posts */}
                <rect x="146" y="150" width="8" height="200" fill="#838d96" />
                <rect x="546" y="110" width="8" height="200" fill="#838d96" />
                {/* car */}
                <Car x={300} y={300} s={1.1} fill="#666f78" />
                {/* front posts */}
                <rect x="286" y="240" width="9" height="200" fill="#b7bfc6" />
                <rect x="686" y="190" width="9" height="210" fill="#b7bfc6" />
                {/* bases */}
                {[[150, 350], [550, 310], [690, 400], [290, 440]].map(([x, y]) => <rect key={x} x={x - 14} y={y - 4} width="28" height="8" fill="#2b2f33" />)}
                {/* frame */}
                <path d="M150 156L550 116L690 196L290 246Z" fill="none" stroke="#b7bfc6" strokeWidth="6" />
                {/* cover */}
                <path className="sh-sway" d="M150 150L550 110L690 190L290 240Z" fill="#eceef0" fillOpacity="0.92" />
                <path d="M220 165L620 125M260 190L660 150M220 210L620 170" stroke="#b7bfc6" strokeOpacity="0.6" />
                {/* gutter + downpipe */}
                <path d="M290 248L690 198" stroke="#666f78" strokeWidth="5" />
                <path d="M698 200V392" stroke="#666f78" strokeWidth="4" />
                <Highlight part={part} />
              </svg>
              {shParts.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  aria-pressed={part === p.key}
                  aria-controls="sh-part-panel"
                  aria-label={p.label}
                  onClick={() => setPart(p.key)}
                  className={`focus-ring absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] shadow-lg transition-colors sm:px-2.5 sm:text-[11px] ${part === p.key ? "border-copper-500 bg-copper-600 text-sand-50" : "border-sand-50/40 bg-steel-900/85 text-sand-50 hover:border-copper-500"}`}
                  style={{ left: `${spots[p.key].x}%`, top: `${spots[p.key].y}%` }}
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-copper-500" />
                  <span className="sm:hidden">{shParts.indexOf(p) + 1}</span>
                  <span className="hidden sm:inline">{p.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden" role="group" aria-label="Shade component">
              {shParts.map((p, n) => (
                <button key={p.key} type="button" aria-pressed={part === p.key} aria-controls="sh-part-panel" onClick={() => setPart(p.key)} className={`focus-ring border px-2 py-2 text-left text-xs font-semibold ${part === p.key ? "border-copper-500 bg-copper-600" : "border-steel-300/30"}`}>
                  <span className="font-mono text-copper-300">{n + 1}</span> {p.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-steel-300">Illustration for describing components — not an engineering drawing.</p>
          </div>

          <div id="sh-part-panel" aria-live="polite" className="lg:col-span-5">
            {!part && (
              <div className="border-l-2 border-copper-600 pl-6">
                <p className="font-serif text-2xl leading-snug">Structure → cover → connections → drainage → anchoring → appearance.</p>
                <p className="mt-4 text-sm leading-relaxed text-steel-300">A damaged cover doesn&rsquo;t always mean the whole shade needs replacing — and a fresh coat of paint shouldn&rsquo;t hide frame problems. Inspect each part.</p>
              </div>
            )}
            {shParts.map((p) => (
              <article key={p.key} hidden={part !== p.key}>
                <h3 className="font-serif text-3xl">{p.label}</h3>
                <ol className="mt-6 space-y-5">
                  {[
                    { k: "What you may notice", v: p.notice },
                    { k: "What should be checked", v: p.check },
                  ].map((s, i) => (
                    <li key={s.k} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="font-mono text-xs text-copper-500">0{i + 1}</span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">{s.k}</p>
                        <ul className="mt-2 space-y-1 text-sm text-sand-100">{s.v.map((x) => <li key={x}>— {x}</li>)}</ul>
                      </div>
                    </li>
                  ))}
                  <li className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-mono text-xs text-copper-500">03</span>
                    <div className="bg-steel-700/50 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">Possible next step</p>
                      <p className="mt-1 text-sm font-semibold">{p.next}</p>
                    </div>
                  </li>
                </ol>
                {toCond[p.key] && condParts.includes(toCond[p.key]!) && (
                  <fieldset className="mt-6">
                    <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">How does your {p.label.toLowerCase()} look?</legend>
                    <div className="mt-2 flex gap-2">
                      {(["Good", "Attention", "Unknown"] as Cond[]).map((c) => {
                        const on = cond[toCond[p.key]!] === c;
                        return (
                          <label key={c} className={`flex-1 cursor-pointer border px-3 py-2 text-center text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-500 ${on ? "border-copper-500 bg-copper-600 text-sand-50" : "border-steel-300/30 text-sand-100 hover:border-steel-300"}`}>
                            <input type="radio" name={`sh-cond-${p.key}`} checked={on} onChange={() => setCond(toCond[p.key]!, c)} className="sr-only" />
                            {c}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                )}
                {!toCond[p.key] && (
                  <button type="button" onClick={() => addIssue(p.key === "connections" ? "Loose connection" : "Worn finish")} className="focus-ring mt-6 border border-steel-300/40 px-4 py-2.5 text-sm font-semibold hover:border-copper-500">
                    + Note {p.label.toLowerCase()} issue in my request
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
