"use client";

import { useState } from "react";
import { wlPlanCondition, wlPlanHeight, wlPlanType, wlPlanWalls, wlPlanWidth, wlQuantityFactors } from "@/lib/wallpaper-installation";
import WlCtas from "./WlCtas";
import WlIcon from "./WlIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${value === o ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-teal-600"}`}>
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// A planning summary — not a roll calculator. Quantities depend on the product.
export default function WlPlanner() {
  const [walls, setWalls] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState("");
  const [cond, setCond] = useState("");
  const [openings, setOpenings] = useState(false);
  const [photos, setPhotos] = useState(false);
  const ready = walls && width && height && type && cond;

  const notes: string[] = [];
  if (type === "Patterned") notes.push("The pattern repeat adds wastage — allow extra rolls from the same batch.");
  if (type === "Mural") notes.push("Murals are ordered to the wall size, so accurate measurements are essential before ordering.");
  if (height === "Over 3.2 m") notes.push("Tall walls need access equipment and may use more paper per drop.");
  if (openings) notes.push("Doors and windows change the cutting plan more than the total area suggests.");
  if (cond === "Old wallpaper") notes.push("Old wallpaper may need removing first.");
  if (cond === "Needs some prep") notes.push("Repairs and priming come before hanging.");
  if (walls === "4 (full room)" || walls === "More") notes.push("Full rooms involve more corners and a planned finishing point.");
  if ([width, height, cond, type].includes("Not sure")) notes.push("We can measure on site.");
  if (photos) notes.push("Send the photos with your request.");

  return (
    <section id="quantity" aria-label="Wallpaper quantity and planner" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">Quantity</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How much wallpaper will you need?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Wall area divided by roll size isn&rsquo;t a reliable purchasing
              method — pattern repeat and product dimensions can change the
              number of rolls significantly. It depends on:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {wlQuantityFactors.map((q) => (
                <li key={q} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2 text-sm text-ink-800 ring-1 ring-ink-900/10">
                  <WlIcon name="measure" className="h-4 w-4 flex-none text-teal-700" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-700">We can measure and work out the quantity for your chosen product.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-8">
              <h3 className="font-serif text-2xl text-ink-950">Tell us about your wall</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <fieldset><legend className="text-sm font-semibold text-ink-950">Number of walls</legend><Chips name="wl-p-walls" options={wlPlanWalls} value={walls} onChange={setWalls} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Wallpaper</legend><Chips name="wl-p-type" options={wlPlanType} value={type} onChange={setType} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Approx. width</legend><Chips name="wl-p-w" options={wlPlanWidth} value={width} onChange={setWidth} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Approx. height</legend><Chips name="wl-p-h" options={wlPlanHeight} value={height} onChange={setHeight} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Wall condition</legend><Chips name="wl-p-c" options={wlPlanCondition} value={cond} onChange={setCond} /></fieldset>
                <div className="space-y-2 pt-1">
                  <label className="flex items-center gap-2 text-sm text-ink-800"><input type="checkbox" checked={openings} onChange={() => setOpenings(!openings)} className="h-4 w-4 accent-teal-700" />Doors or windows in the wall</label>
                  <label className="flex items-center gap-2 text-sm text-ink-800"><input type="checkbox" checked={photos} onChange={() => setPhotos(!photos)} className="h-4 w-4 accent-teal-700" />I have photos</label>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
                {ready ? (
                  <div key={walls + width + height + type + cond} className="animate-fadeIn">
                    <p className="font-serif text-xl">{type} · {walls} wall{walls.startsWith("1") ? "" : "s"} · {width} × {height}</p>
                    <ul className="mt-3 space-y-1.5">{notes.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-300"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{n}</li>)}</ul>
                    <WlCtas tone="dark" className="mt-5" primaryLabel="Request a Measurement Visit" />
                  </div>
                ) : (
                  <p className="text-sm text-ink-300">Choose the options above to see what affects your project.</p>
                )}
                <p className="mt-4 border-t border-sand-100/10 pt-3 text-xs text-ink-400">Final material requirements should be confirmed against the chosen wallpaper&rsquo;s roll or panel size, repeat and manufacturer specifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
