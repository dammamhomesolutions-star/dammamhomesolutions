"use client";

import { useState } from "react";
import { mdLayers, mdMaterials } from "@/lib/mold-damp";
import { useReport } from "./MdReport";
import { Spec, chip, chipOff, chipOn } from "./MdUi";

const layerBg: Record<string, string> = {
  finish: "repeating-linear-gradient(0deg,#f4f0e8 0 14px,#ebe4d6 14px 15px)",
  paint: "#eceef0",
  plaster: "radial-gradient(circle at 30% 40%,#cdab8f 0 1px,transparent 2px) 0 0/9px 9px,#ded2ba",
  masonry: "linear-gradient(#78746a 0 0) 0 0/100% 2px repeat-y,linear-gradient(90deg,#78746a 0 2px,transparent 2px) 0 0/50% 28px,#9a968a",
  source: "linear-gradient(180deg,#5b7d8f,#3d5a6b)",
};

// Wall cut-away: click a layer to see what persistent moisture can do to it.
export default function MdSurface() {
  const { material, set } = useReport();
  const [layer, setLayer] = useState(2);
  const mat = mdMaterials.find((m) => m.label === material);

  return (
    <section id="surface" aria-labelledby="md-surface" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Spec code="S-10">Surface story</Spec>
        <h2 id="md-surface" className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">What moisture does, layer by layer</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex h-72 overflow-hidden rounded-2xl border border-ink-900/10 sm:h-80" role="group" aria-label="Wall layer">
              {mdLayers.map((l, i) => {
                const on = layer === i;
                const wet = i >= layer;
                return (
                  <button
                    key={l.key}
                    type="button"
                    aria-pressed={on}
                    aria-controls="md-layer-panel"
                    onClick={() => setLayer(i)}
                    className={`focus-ring relative flex flex-col justify-end text-left transition-[flex-grow] duration-500 motion-reduce:transition-none ${on ? "grow-[2.2]" : "grow"}`}
                    style={{ background: layerBg[l.key], flexBasis: 0 }}
                  >
                    {wet && i !== mdLayers.length - 1 && <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-glass-600/45 to-glass-500/10" />}
                    {on && <span aria-hidden="true" className="absolute inset-0 ring-2 ring-inset ring-glass-900" />}
                    <span className={`relative m-2 rounded px-1.5 py-1 font-mono text-[9px] uppercase leading-tight tracking-[0.12em] sm:m-3 sm:text-[10px] ${l.key === "source" ? "text-sand-50" : "bg-sand-50/80 text-ink-900"}`}>{l.label}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              <span>Room side</span><span>Source side</span>
            </p>
          </div>
          <div id="md-layer-panel" aria-live="polite" className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glass-700">Layer {layer + 1} of {mdLayers.length}</p>
            <h3 className="mt-2 font-serif text-3xl text-ink-950">{mdLayers[layer].label}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{mdLayers[layer].text}</p>
            <ol className="sr-only">{mdLayers.map((l) => <li key={l.key}>{l.label}: {l.text}</li>)}</ol>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          <fieldset className="lg:col-span-7">
            <legend className="font-serif text-2xl text-ink-950 sm:text-3xl">What surface is affected?</legend>
            <p className="mt-2 text-sm text-ink-600">Treatment depends on the material.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {mdMaterials.map((m) => (
                <label key={m.key} className={`${chip} ${material === m.label ? chipOn : chipOff}`}>
                  <input type="radio" name="md-material" checked={material === m.label} onChange={() => set("material", m.label)} className="sr-only" />
                  {m.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-5" aria-live="polite">
            {mat ? (
              <div className={`rounded-xl border p-5 ${mat.inScope ? "border-glass-700/25 bg-glass-100" : "border-clay-500/40 bg-clay-100"}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-glass-700">{mat.inScope ? "Within our treatment scope" : "Outside our scope"}</p>
                <p className="mt-2 font-semibold text-ink-950">{mat.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{mat.note}</p>
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-ink-900/20 p-5 text-sm text-ink-500">Choose a surface to see how it&rsquo;s usually handled. Your choice is added to your report.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
