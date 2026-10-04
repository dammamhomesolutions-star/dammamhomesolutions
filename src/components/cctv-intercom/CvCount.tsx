"use client";

import { useState } from "react";
import { cvCountChain } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const counters = [
  { key: "entrances", label: "Main entrances / doors", max: 6 },
  { key: "gates", label: "Gates", max: 4 },
  { key: "driveways", label: "Driveways or parking areas", max: 4 },
  { key: "outdoor", label: "Other outdoor areas to watch", max: 6 },
  { key: "floors", label: "Floors with entrances or hallways to cover", max: 4 },
] as const;

type Key = (typeof counters)[number]["key"];

// A planning range, not a quote — final count comes from the site assessment.
export default function CvCount() {
  const [v, setV] = useState<Record<Key, number>>({ entrances: 1, gates: 1, driveways: 1, outdoor: 0, floors: 0 });
  const [detail, setDetail] = useState<"overview" | "detail">("overview");

  const areas = v.entrances + v.gates + v.driveways + v.outdoor + v.floors;
  const low = Math.max(1, areas);
  const high = Math.max(low, Math.ceil(areas * (detail === "detail" ? 1.6 : 1.25)));

  return (
    <section aria-labelledby="cv-count" className="border-b border-ink-900/10 bg-moss-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Camera count</p>
          <h2 id="cv-count" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How many CCTV cameras does a property need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            There&rsquo;s no fixed number for a villa or an office. It depends on
            the layout, number of entrances, each camera&rsquo;s field of view,
            how much detail you need, outdoor areas, blind spots and privacy.
            Count the areas that matter to get a rough planning range.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            {counters.map((c) => (
              <div key={c.key} className="flex items-center justify-between gap-4 rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                <span className="text-sm font-medium text-ink-900" id={`cv-c-${c.key}`}>{c.label}</span>
                <div className="flex items-center gap-2" role="group" aria-labelledby={`cv-c-${c.key}`}>
                  <button type="button" aria-label={`Fewer: ${c.label}`} disabled={v[c.key] === 0} onClick={() => setV((s) => ({ ...s, [c.key]: Math.max(0, s[c.key] - 1) }))} className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/20 text-lg text-ink-800 disabled:opacity-30">−</button>
                  <output className="w-6 text-center font-mono text-sm text-ink-950" aria-live="polite">{v[c.key]}</output>
                  <button type="button" aria-label={`More: ${c.label}`} disabled={v[c.key] === c.max} onClick={() => setV((s) => ({ ...s, [c.key]: Math.min(c.max, s[c.key] + 1) }))} className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/20 text-lg text-ink-800 disabled:opacity-30">+</button>
                </div>
              </div>
            ))}
            <fieldset className="rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
              <legend className="sr-only">Coverage needed</legend>
              <p className="text-sm font-medium text-ink-900" aria-hidden="true">Coverage needed</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {([["overview", "General overview"], ["detail", "Clear faces / plates"]] as const).map(([k, l]) => (
                  <label key={k} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-moss-600 ${detail === k ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 text-ink-800"}`}>
                    <input type="radio" name="cv-detail" checked={detail === k} onChange={() => setDetail(k)} className="sr-only" />
                    {l}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">Rough planning range</p>
              <p className="mt-2 font-serif text-4xl" aria-live="polite">
                {areas === 0 ? "—" : low === high ? `About ${low}` : `${low}–${high}`} <span className="text-lg text-ink-300">{areas === 0 ? "" : "cameras"}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Some spots can share one camera; others need two for detail
                or angles. A site assessment is recommended before final camera
                count and placement.
              </p>
              <div className="mt-6 border-t border-sand-100/10 pt-5">
                <p className="text-sm font-semibold">Every extra camera usually means</p>
                <ol className="mt-3 space-y-2">
                  {cvCountChain.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-ink-300">
                      <CvIcon name="arrow" className="h-4 w-4 flex-none text-moss-200" />
                      {c}
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-xs text-ink-400">More cameras isn&rsquo;t always better security — the right positions matter more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
