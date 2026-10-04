"use client";

import { useState } from "react";
import BwIcon from "./BwIcon";

const signs = ["Staining", "Peeling coating", "Deteriorated plaster", "Discolouration", "Damage that keeps returning", "A deteriorating lower wall"];
const sources = ["Rain exposure", "Irrigation", "Plumbing leaks", "Drainage", "Pooled water", "Failed exterior protection", "Neighbouring property"];
const ground = ["Water pooling at the base", "Drainage falls", "Irrigation and sprinklers", "Soil against the wall", "Splashback", "Lower-wall deterioration"];

function CopingDiagram({ damaged }: { damaged: boolean }) {
  return (
    <svg viewBox="0 0 300 200" className="h-auto w-full" role="img" aria-labelledby="bw-coping-title">
      <title id="bw-coping-title">{damaged ? "Damaged coping: rain soaks into a cracked cap and runs down inside the wall, staining it" : "Sound coping: rain runs off the sloped cap and drips clear of the wall faces"}</title>
      <rect width="300" height="200" fill="#eef1f3" />
      <rect x="110" y="60" width="80" height="140" fill="#f2e6d5" stroke="#9c7752" />
      {damaged ? (
        <>
          <path d="M98 60h104l-10-16h-84z" fill="#9c7752" />
          <path d="M150 44l-6 16" stroke="#4a3626" strokeWidth="2.5" />
          <path className="fs-flow" d="M147 62v70" stroke="#5b7d8f" strokeWidth="3" />
          <path d="M120 90c10 10 50 10 60 0v60c-10 10-50 10-60 0z" fill="#7fa0b0" opacity="0.35" />
          <text x="196" y="120" fontFamily="ui-monospace, monospace" fontSize="10" fill="#94472a">WATER ENTRY</text>
        </>
      ) : (
        <>
          <path d="M98 60h104l-10-16h-84z" fill="#9c7752" />
          <path d="M98 60l-4 6M202 60l4 6" stroke="#4a3626" strokeWidth="2" />
          <path className="fs-flow" d="M92 70v40M208 70v40" stroke="#5b7d8f" strokeWidth="2.5" strokeDasharray="4 6" />
          <text x="214" y="96" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3d5a6b">SHEDS CLEAR</text>
        </>
      )}
      <g stroke="#7fa0b0" strokeWidth="1.5">
        <path d="M130 8l-4 14M150 4l-4 14M170 8l-4 14" />
      </g>
      <rect y="186" width="300" height="14" fill="#d9bfa0" />
    </svg>
  );
}

export default function BwCoping() {
  const [damaged, setDamaged] = useState(false);

  return (
    <section id="coping-and-moisture" aria-label="Coping, moisture and the ground" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-clay-700">Coping &amp; caps</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Don&rsquo;t ignore the top of the wall</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The coping sheds rain away from the wall faces. When it cracks or
              its joints open, water soaks in from the top and works its way
              down — loosening plaster and staining the wall from the inside.
            </p>
            <div className="mt-6 inline-flex rounded-full bg-clay-100 p-1" role="group" aria-label="Coping condition">
              {[false, true].map((d) => (
                <button key={String(d)} type="button" aria-pressed={damaged === d} onClick={() => setDamaged(d)} className={`focus-ring rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${damaged === d ? "bg-clay-900 text-sand-50" : "text-clay-900"}`}>
                  {d ? "Damaged coping" : "Sound coping"}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl ring-1 ring-ink-900/10 lg:col-span-6">
            <CopingDiagram damaged={damaged} />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <BwIcon name="drop" className="h-8 w-8 text-clay-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">When moisture is part of the problem</h2>
            <p className="mt-3 text-sm text-ink-300">Visible signs:</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">{signs.map((s) => <li key={s} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs">{s}</li>)}</ul>
            <p className="mt-4 text-sm text-ink-300">Possible sources — confirmed only on site:</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">{sources.map((s) => <li key={s} className="rounded-full bg-sand-100/10 px-2.5 py-1 text-xs">{s}</li>)}</ul>
            <p className="mt-5 rounded-xl bg-ink-900 p-3 text-sm text-sand-50">Repairing the visible finish without addressing recurring moisture can lead to repeated deterioration. We can finish with a waterproof coating where it suits.</p>
          </div>
          <div className="rounded-2xl bg-clay-100/60 p-6 sm:p-8">
            <BwIcon name="ground" className="h-8 w-8 text-clay-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Where the wall meets the ground</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">The base of a wall often deteriorates first. Things to look at:</p>
            <ul className="mt-4 space-y-1.5">{ground.map((g) => <li key={g} className="flex gap-2 text-sm text-ink-800"><BwIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-700" />{g}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
