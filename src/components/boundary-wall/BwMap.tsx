"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { bwZoneIssues, bwZones, type BwZone } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const shapes: Record<BwZone, string> = {
  front: "M20 250h120v14H20zM200 250h180v14H200z",
  gate: "M140 246h60v22h-60z",
  side: "M366 30h14v220h-14z",
  rear: "M20 20h360v14H20z",
  entrance: "M170 190h40v40h-40z",
  garden: "M20 34h14v216H20z",
  service: "M300 50h56v50h-56z",
};

// Plan of a villa plot. Pick a zone, tick its problems and add it to a list
// that becomes a WhatsApp assessment request.
export default function BwMap() {
  const [zone, setZone] = useState<BwZone>("front");
  const [issues, setIssues] = useState<string[]>([]);
  const [list, setList] = useState<{ zone: BwZone; issues: string[] }[]>([]);
  const label = (z: BwZone) => bwZones.find((x) => x.key === z)!.label;

  const add = () => {
    if (!issues.length) return;
    setList((l) => [...l.filter((x) => x.zone !== zone), { zone, issues }]);
    setIssues([]);
  };
  const href = buildWhatsAppLink(
    ["Hello Dammam Home Solutions, I'd like an outdoor wall assessment for:", ...list.map((x) => `- ${label(x.zone)}: ${x.issues.join(", ")}`), "I can send photos of each area in this chat."].join("\n"),
  );

  return (
    <section id="wall-map" aria-labelledby="bw-map" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">Wall condition map</p>
          <h2 id="bw-map" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Map the problem areas on your property</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Pick an area, tick what you see, then add it to your assessment list.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <svg viewBox="0 0 400 290" className="h-auto w-full rounded-2xl ring-1 ring-ink-900/10" role="img" aria-labelledby="bw-map-title">
              <title id="bw-map-title">{`Plan of a villa plot with the ${label(zone).toLowerCase()} selected`}</title>
              <rect width="400" height="290" fill="#eef1f3" />
              <rect x="34" y="34" width="332" height="216" fill="#f2e6d5" />
              <rect x="120" y="70" width="160" height="110" fill="#faf8f4" stroke="#7a5a3f" />
              <text x="200" y="130" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#7a5a3f">VILLA</text>
              <text x="60" y="230" fontFamily="ui-monospace, monospace" fontSize="9" fill="#9c7752">GARDEN</text>
              <rect y="270" width="400" height="20" fill="#d9bfa0" />
              <text x="200" y="284" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#4a3626">STREET</text>
              {bwZones.map((z) => {
                const on = zone === z.key;
                const listed = list.some((x) => x.zone === z.key);
                return (
                  <path
                    key={z.key}
                    d={shapes[z.key]}
                    onClick={() => setZone(z.key)}
                    className="cursor-pointer transition-colors"
                    fill={on ? "#b3562f" : listed ? "#7a5a3f" : "#b8916c"}
                    stroke={on ? "#4a3626" : "none"}
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Property area">
              {bwZones.map((z) => {
                const listed = list.some((x) => x.zone === z.key);
                return (
                  <button
                    key={z.key}
                    type="button"
                    aria-pressed={zone === z.key}
                    onClick={() => setZone(z.key)}
                    className={`focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors ${zone === z.key ? "border-ink-950 bg-ink-950 text-sand-50" : "border-ink-900/15 text-ink-800 hover:border-clay-600"}`}
                  >
                    {listed ? "✓ " : ""}{z.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-ink-500">Selected area in orange; areas already added in dark brown and marked ✓.</p>
          </div>
          <div className="space-y-4 lg:col-span-5">
            <fieldset className="rounded-2xl bg-clay-100/60 p-5">
              <legend className="sr-only">Problems in this area</legend>
              <p className="font-semibold text-ink-950">{label(zone)}: what do you see?</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {bwZoneIssues.map((i) => {
                  const on = issues.includes(i);
                  return (
                    <label key={i} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${on ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800"}`}>
                      <input type="checkbox" checked={on} onChange={() => setIssues((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))} className="sr-only" />
                      {on ? "✓ " : ""}{i}
                    </label>
                  );
                })}
              </div>
              <button type="button" onClick={add} disabled={!issues.length} className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-clay-900 px-5 py-2.5 text-sm font-semibold text-sand-50 disabled:opacity-40">
                Add this area to your assessment
              </button>
            </fieldset>
            <div className="rounded-2xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-300">Your assessment list</p>
              {list.length ? (
                <>
                  <ul className="mt-3 space-y-2">
                    {list.map((x) => (
                      <li key={x.zone} className="flex items-start justify-between gap-3 border-b border-sand-100/10 pb-2 text-sm">
                        <span><span className="font-semibold">{label(x.zone)}</span> <span className="text-ink-300">— {x.issues.join(", ")}</span></span>
                        <button type="button" onClick={() => setList((l) => l.filter((y) => y.zone !== x.zone))} className="focus-ring rounded-sm text-xs text-ink-400 underline" aria-label={`Remove ${label(x.zone)}`}>Remove</button>
                      </li>
                    ))}
                  </ul>
                  <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-300 px-5 py-3 text-sm font-semibold text-ink-950">
                    Send This List <BwIcon name="arrow" className="h-4 w-4" />
                  </a>
                </>
              ) : (
                <p className="mt-2 text-sm text-ink-300">No areas added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
