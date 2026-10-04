"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { wlChecklist, wlFormCondition, wlFormJob, wlFormProperty, wlFormType } from "@/lib/wallpaper-installation";
import WlIcon from "./WlIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${
            value === o ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Builds a WhatsApp request, like the site's other request panels.
export default function WlRequestForm() {
  const [job, setJob] = useState("");
  const [type, setType] = useState("");
  const [cond, setCond] = useState("");
  const [rooms, setRooms] = useState("");
  const [walls, setWalls] = useState("");
  const [dims, setDims] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [code, setCode] = useState("");
  const [roll, setRoll] = useState("");
  const [repeat, setRepeat] = useState("");
  const [count, setCount] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like wallpaper work done.",
      `Job: ${job || "—"}`,
      `Wallpaper type: ${type || "—"}`,
      `Wall condition: ${cond || "—"}`,
    ];
    if (rooms.trim()) lines.push(`Rooms: ${rooms.trim()}`);
    if (walls.trim()) lines.push(`Walls: ${walls.trim()}`);
    if (dims.trim()) lines.push(`Approx. dimensions: ${dims.trim()}`);
    const product = [brand.trim() && `brand ${brand.trim()}`, code.trim() && `code ${code.trim()}`, roll.trim() && `roll/panel ${roll.trim()}`, repeat.trim() && `repeat ${repeat.trim()}`, count.trim() && `${count.trim()} rolls/panels`].filter(Boolean);
    if (product.length) lines.push(`Wallpaper details: ${product.join(", ")}`);
    lines.push(`Property: ${property || "—"}`, `Area: ${area.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push("I can send photos of the walls and the wallpaper label in this chat.");
    return lines.join("\n");
  }, [job, type, cond, rooms, walls, dims, brand, code, roll, repeat, count, property, area, date, note, name, phone, email]);

  return (
    <section id="wallpaper-request" aria-labelledby="wl-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-teal-300">Request installation</p>
          <h2 id="wl-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Send us photos of your walls</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Photos showing the full wall, corners, windows and doors and the
            existing surface help us understand the project before an
            assessment. Your answers become a WhatsApp message — attach the
            photos there.
          </p>
          <p className="mt-3 text-sm text-ink-400">We may need to see the wall before giving an exact quote.</p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-teal-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-8 rounded-2xl bg-ink-900 p-5">
            <h3 className="font-semibold text-sand-50">Before the wallpaper installation</h3>
            <ul className="mt-3 space-y-1.5">
              {wlChecklist.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-300"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className="rounded-2xl bg-ink-900 p-6 sm:p-8 lg:col-span-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <fieldset>
            <legend className="text-sm font-medium text-sand-50">What do you need?</legend>
            <Chips name="wl-f-job" options={wlFormJob} value={job} onChange={setJob} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Wallpaper type</legend>
            <Chips name="wl-f-type" options={wlFormType} value={type} onChange={setType} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Wall condition</legend>
            <Chips name="wl-f-cond" options={wlFormCondition} value={cond} onChange={setCond} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <label className="block text-sm font-medium text-sand-100">
              Rooms
              <input type="text" inputMode="numeric" value={rooms} onChange={(e) => setRooms(e.target.value)} placeholder="e.g. 2" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Walls
              <input type="text" inputMode="numeric" value={walls} onChange={(e) => setWalls(e.target.value)} placeholder="e.g. 3" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approx. size
              <input type="text" value={dims} onChange={(e) => setDims(e.target.value)} placeholder="e.g. 4 × 2.8 m" className={inputClass} />
            </label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {wlFormProperty.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Area
              <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Preferred date <span className="font-normal text-ink-400">(optional)</span>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${inputClass} [color-scheme:dark]`} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Phone <span className="font-normal text-ink-400">(optional)</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Email <span className="font-normal text-ink-400">(optional)</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className={inputClass} />
            </label>
          </div>

          <details className="group mt-6 rounded-xl border border-sand-100/15 p-4">
            <summary className="focus-ring cursor-pointer list-none text-sm font-medium text-sand-50 [&::-webkit-details-marker]:hidden">
              <span className="mr-2 inline-block transition-transform group-open:rotate-90" aria-hidden="true">›</span>
              Add wallpaper product details <span className="font-normal text-ink-400">(optional)</span>
            </summary>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-sand-100">Brand / product name<input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} /></label>
              <label className="block text-sm font-medium text-sand-100">Product code<input type="text" value={code} onChange={(e) => setCode(e.target.value)} className={inputClass} /></label>
              <label className="block text-sm font-medium text-sand-100">Roll / panel size<input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="e.g. 0.53 × 10 m" className={inputClass} /></label>
              <label className="block text-sm font-medium text-sand-100">Pattern repeat, if known<input type="text" value={repeat} onChange={(e) => setRepeat(e.target.value)} className={inputClass} /></label>
              <label className="block text-sm font-medium text-sand-100 sm:col-span-2">Number of rolls / panels<input type="text" inputMode="numeric" value={count} onChange={(e) => setCount(e.target.value)} className={inputClass} /></label>
            </div>
            <p className="mt-3 text-xs text-ink-400">Installation requirements vary by product, so the label and the manufacturer&rsquo;s instructions help us plan. A photo of the label in WhatsApp works too.</p>
          </details>

          <label className="mt-6 block text-sm font-medium text-sand-100">
            Notes <span className="font-normal text-ink-400">(optional)</span>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. feature wall behind the bed, old wallpaper on one wall" className={inputClass} />
          </label>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request Wallpaper Installation
            <WlIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your wall photos there.</p>
        </form>
      </div>
    </section>
  );
}
