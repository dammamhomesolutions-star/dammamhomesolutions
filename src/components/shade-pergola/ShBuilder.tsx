"use client";

import { shTypes } from "@/lib/shade-pergola";
import { condParts, useShade, type Cond, type CondPart } from "./ShPlan";
import { Tag, opt, optOff, optOn } from "./ShUi";

const issues = ["Cover", "Frame", "Base", "Connections", "Drainage"] as const;
const vehicleOpts = ["1", "2", "3+"] as const;

// Top-down plan of the shade footprint, bays, posts and entry.
function TopDown({ cars, seating }: { cars: number; seating: boolean }) {
  const bays = seating ? 2 : Math.min(4, Math.max(1, cars));
  const bayW = 110;
  const w = bays * bayW;
  const x0 = (600 - w) / 2;
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" aria-hidden="true">
      <rect x="0" y="0" width="600" height="300" fill="#eceef0" />
      <rect x={x0 - 20} y="50" width={w + 40} height="190" fill="none" stroke="#838d96" strokeDasharray="5 6" />
      <rect x={x0} y="60" width={w} height="170" fill="#c98246" fillOpacity="0.16" stroke="#b3652f" strokeWidth="2" className="transition-all duration-500 motion-reduce:transition-none" />
      {!seating && Array.from({ length: bays }, (_, i) => (
        <g key={i}>
          {i > 0 && <path d={`M${x0 + i * bayW} 70V220`} stroke="#9a968a" strokeDasharray="8 6" />}
          <rect x={x0 + i * bayW + 22} y="88" width="66" height="122" rx="14" fill="#4d545c" />
          <rect x={x0 + i * bayW + 30} y="104" width="50" height="26" rx="5" fill="#b8ccd4" fillOpacity="0.6" />
        </g>
      ))}
      {seating && (
        <g>
          <circle cx="300" cy="145" r="34" fill="#a67c5b" />
          {[[-56, 0], [56, 0], [0, -56], [0, 56]].map(([dx, dy]) => <rect key={`${dx}${dy}`} x={300 + dx - 12} y={145 + dy - 12} width="24" height="24" fill="#6b4a35" />)}
        </g>
      )}
      {[[x0, 60], [x0 + w, 60], [x0, 230], [x0 + w, 230]].map(([x, y]) => <rect key={`${x}${y}`} x={x - 7} y={y - 7} width="14" height="14" fill="#2b2f33" />)}
      {!seating && (
        <g>
          <path d="M300 290V252" stroke="#b3652f" strokeWidth="3" />
          <path d="M290 262l10-12 10 12" fill="none" stroke="#b3652f" strokeWidth="3" />
          <text x="316" y="284" fontSize="16" fill="#8f4f2f" className="font-mono">ENTRY</text>
        </g>
      )}
      <text x={x0 - 18} y="40" fontSize="16" fill="#666f78" className="font-mono">CLEARANCE</text>
      <text x={x0 + 6} y="224" fontSize="15" fill="#8f4f2f" className="font-mono">SHADE</text>
    </svg>
  );
}

// Front elevation with the chosen issue highlighted.
function Elevation({ issue, cond, pergola }: { issue: string | null; cond: Cond | null; pergola: boolean }) {
  const hi = (k: string) => (issue === k ? "#c98246" : "#666f78");
  const tone = cond === "Attention" ? "#b3652f" : cond === "Good" ? "#5f7050" : "#838d96";
  return (
    <svg viewBox="0 0 600 220" className="h-auto w-full" aria-hidden="true">
      <rect width="600" height="220" fill="#faf8f4" />
      <path d="M0 200H600" stroke="#9a968a" strokeWidth="2" />
      {pergola ? (
        <g>
          {[110, 180, 250, 320, 390, 460].map((x) => <rect key={x} x={x} y="56" width="10" height="14" fill={hi("Cover")} />)}
        </g>
      ) : (
        <path className="sh-sway" d={issue === "Drainage" ? "M80 60Q300 104 520 60V72Q300 116 80 72Z" : "M80 60L520 48V60L80 72Z"} fill={issue === "Cover" ? "#f5e3d2" : "#eceef0"} stroke={hi("Cover")} strokeWidth="2" />
      )}
      <path d="M90 74H510" stroke={hi("Frame")} strokeWidth="8" />
      <path d="M100 76V196M500 76V196" stroke={hi("Frame")} strokeWidth="10" />
      {[[100, 74], [500, 74]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="9" fill={hi("Connections")} />)}
      {[[100, 196], [500, 196]].map(([x, y]) => <rect key={x} x={x - 18} y={y - 4} width="36" height="8" fill={hi("Base")} />)}
      {issue === "Drainage" && [0, 1, 2].map((i) => <circle key={i} className="sh-run" cx="300" cy="96" r="3.5" fill="#5b7d8f" style={{ animationDelay: `${i * 0.7}s`, ["--sh-dx" as string]: "0px", ["--sh-dy" as string]: "60px" }} />)}
      {issue && (
        <g>
          <rect x="330" y="8" width="262" height="32" fill={tone} />
          <text x="461" y="30" textAnchor="middle" fontSize="16" fill="#faf8f4" className="font-mono">{issue.toUpperCase()} · {(cond ?? "UNKNOWN").toUpperCase()}</text>
        </g>
      )}
    </svg>
  );
}

export default function ShBuilder() {
  const s = useShade();
  const t = shTypes.find((x) => x.key === s.type);
  const seating = !!t && t.cars === 0;
  const cars = s.vehicles === "1" ? 1 : s.vehicles === "2" ? 2 : s.vehicles === "3+" ? 4 : t?.cars || 1;
  const condPart = condParts.includes(s.mainIssue as CondPart) ? (s.mainIssue as CondPart) : null;
  const cond = condPart ? s.cond[condPart] : null;

  return (
    <section id="your-shade" aria-labelledby="sh-builder" className="scroll-mt-20 overflow-hidden bg-steel-900 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <Tag n="07" dark>Your shade</Tag>
        <h2 id="sh-builder" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">What type of shade do you have?</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-steel-300">
          Build a quick picture of your shade so we understand the scope. This is
          for describing the job — not an engineering design or load calculation.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-5">
            <fieldset>
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">Structure</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {shTypes.map((x) => (
                  <label key={x.key} className={`${opt} text-center text-xs sm:text-sm ${s.type === x.key ? "border-copper-500 bg-copper-600 text-sand-50" : "border-steel-300/25 bg-transparent text-sand-100 hover:border-steel-300"}`}>
                    <input type="radio" name="sh-type" checked={s.type === x.key} onChange={() => { s.setType(x.key); if (x.cars) s.setVehicles(x.cars >= 3 ? "3+" : (String(x.cars) as "1" | "2")); }} className="sr-only" />
                    {x.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">Vehicles</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {vehicleOpts.map((v) => (
                  <label key={v} className={`${opt} text-center ${s.vehicles === v ? "border-copper-500 bg-copper-600 text-sand-50" : "border-steel-300/25 text-sand-100 hover:border-steel-300"}`}>
                    <input type="radio" name="sh-veh" checked={s.vehicles === v} onChange={() => s.setVehicles(v)} className="sr-only" />
                    {v} {v === "1" ? "vehicle" : "vehicles"}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">Main issue</legend>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {issues.map((i) => (
                  <label key={i} className={`${opt} px-1 text-center text-xs sm:text-sm ${s.mainIssue === i ? "border-copper-500 bg-copper-600 text-sand-50" : "border-steel-300/25 text-sand-100 hover:border-steel-300"}`}>
                    <input type="radio" name="sh-issue" checked={s.mainIssue === i} onChange={() => s.setMainIssue(i)} className="sr-only" />
                    {i}
                  </label>
                ))}
              </div>
            </fieldset>
            {condPart && (
              <fieldset>
                <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-300">{condPart} condition</legend>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {(["Good", "Attention", "Unknown"] as Cond[]).map((c) => (
                    <label key={c} className={`${opt} text-center ${cond === c ? "border-copper-500 bg-copper-600 text-sand-50" : "border-steel-300/25 text-sand-100 hover:border-steel-300"}`}>
                      <input type="radio" name="sh-cond" checked={cond === c} onChange={() => s.setCond(condPart, c)} className="sr-only" />
                      {c}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
          </div>

          <div className="min-w-0 lg:col-span-7">
            <figure className="border border-steel-300/20 bg-sand-50 p-2 text-ink-900">
              <TopDown cars={cars} seating={seating} />
              <div className="border-t border-steel-900/10">
                <Elevation issue={s.mainIssue} cond={cond} pergola={s.type === "pergola" || s.type === "garden"} />
              </div>
              <figcaption className="px-2 pb-1 pt-2 text-xs text-ink-600" aria-live="polite">
                {t ? t.label : "Shade"}{seating ? "" : ` · ${cars >= 4 ? "3+" : cars} vehicle${cars === 1 ? "" : "s"}`}{s.mainIssue ? ` · main issue: ${s.mainIssue.toLowerCase()}` : ""}. Plan and front elevation, illustrative only.
              </figcaption>
            </figure>
            <p className="mt-3 text-xs leading-relaxed text-steel-300">Final dimensions, structural requirements and installation decisions require appropriate site assessment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
