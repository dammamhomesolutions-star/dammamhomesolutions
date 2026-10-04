"use client";

import { useState } from "react";
import { cbMeasurements, cbPlanCover, cbPlanHeight, cbPlanMount, cbPlanWidth, cbPlanWindow } from "@/lib/curtain-blind";
import CbCtas from "./CbCtas";
import CbIcon from "./CbIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-600 ${
            value === o ? "border-clay-900 bg-clay-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-clay-600"
          }`}
        >
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// A planning summary, not a manufacturing measurement.
export default function CbMeasure() {
  const [win, setWin] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [mount, setMount] = useState("");
  const [cover, setCover] = useState("");
  const [many, setMany] = useState(false);
  const [photos, setPhotos] = useState(false);
  const ready = win && width && height && mount && cover;

  const notes: string[] = [];
  if (width === "Over 3 m") notes.push("A span this wide may need a heavy-duty track with extra supports, or splitting blinds into sections.");
  if (height === "Over 2.5 m" || win === "Floor-to-ceiling") notes.push("High windows need access equipment and often suit a ceiling track.");
  if (mount === "Inside") notes.push("We'll check the recess depth and handle clearance.");
  if (mount === "Ceiling") notes.push("We'll check the ceiling construction for the fixings.");
  if (mount === "Not sure" || width === "Not sure" || height === "Not sure") notes.push("No problem — we can measure on site.");
  if (win === "Sliding door") notes.push("We'll plan the stack so the curtain clears the door and handle.");
  if (many) notes.push("For several windows, matching heights and lines across the room matters.");
  if (photos) notes.push("Send the photos with your request — the full window, surroundings and any existing hardware.");

  return (
    <section id="measurements" aria-label="Measurement guide and planner" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-clay-700">Measurements</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Getting the measurements right</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Measuring only the glass is a common mistake. What matters
              depends on the product and how it&rsquo;s mounted — and there&rsquo;s
              no single rule that works for every blind or curtain. We can
              measure for you before anything is ordered.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {cbMeasurements.map((m) => (
                <li key={m} className="flex items-center gap-2 rounded-xl bg-clay-100/60 px-3 py-2 text-sm text-ink-800">
                  <CbIcon name="measure" className="h-4 w-4 flex-none text-clay-700" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-900/10 bg-clay-100/40 p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-ink-950">Tell us about your window</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <fieldset><legend className="text-sm font-semibold text-ink-950">Window type</legend><Chips name="cb-m-win" options={cbPlanWindow} value={win} onChange={setWin} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Curtain or blind</legend><Chips name="cb-m-cover" options={cbPlanCover} value={cover} onChange={setCover} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Approx. width</legend><Chips name="cb-m-w" options={cbPlanWidth} value={width} onChange={setWidth} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Approx. height</legend><Chips name="cb-m-h" options={cbPlanHeight} value={height} onChange={setHeight} /></fieldset>
                <fieldset><legend className="text-sm font-semibold text-ink-950">Mounting</legend><Chips name="cb-m-mount" options={cbPlanMount} value={mount} onChange={setMount} /></fieldset>
                <div className="space-y-2 pt-1">
                  <label className="flex items-center gap-2 text-sm text-ink-800"><input type="checkbox" checked={many} onChange={() => setMany(!many)} className="h-4 w-4 accent-clay-700" />Several windows</label>
                  <label className="flex items-center gap-2 text-sm text-ink-800"><input type="checkbox" checked={photos} onChange={() => setPhotos(!photos)} className="h-4 w-4 accent-clay-700" />I have photos</label>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-ink-950 p-5 text-sand-50" aria-live="polite">
                {ready ? (
                  <div key={win + width + height + mount + cover} className="animate-fadeIn">
                    <p className="font-serif text-xl">{cover} · {win} · {width} × {height} · {mount} mount</p>
                    <ul className="mt-3 space-y-1.5">
                      {notes.map((n) => <li key={n} className="flex gap-2 text-sm text-ink-300"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{n}</li>)}
                    </ul>
                    <p className="mt-3 text-sm text-ink-300">Your installation may need further assessment based on the covering, mounting surface and available clearance.</p>
                    <CbCtas tone="dark" className="mt-5" primaryLabel="Request a Measurement Visit" />
                  </div>
                ) : (
                  <p className="text-sm text-ink-300">Choose the options above to see what we&rsquo;ll check.</p>
                )}
                <p className="mt-4 border-t border-sand-100/10 pt-3 text-xs text-ink-400">Not a manufacturing measurement — final sizes are confirmed on site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
