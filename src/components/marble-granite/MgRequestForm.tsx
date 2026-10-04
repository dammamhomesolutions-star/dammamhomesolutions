"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { mgFormProblem, mgFormProperty, mgFormStone } from "@/lib/marble-granite";
import MgIcon from "./MgIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

const photoTips = ["A wide photo of the whole floor or surface", "A close-up of the problem", "A low-angle photo to show the shine", "Edges, stairs or countertops if included"];

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-concrete-300 ${
            value === o ? "border-concrete-300 bg-concrete-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function MgRequestForm() {
  const [stone, setStone] = useState("");
  const [problem, setProblem] = useState("");
  const [property, setProperty] = useState("");
  const [where, setWhere] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like a marble / granite assessment.",
      `Stone: ${stone || "Not sure"}`,
      `Problem: ${problem || "—"}`,
      `Property: ${property || "—"}`,
    ];
    if (where.trim()) lines.push(`Room / location: ${where.trim()}`);
    if (area.trim()) lines.push(`Approx. area: ${area.trim()}`);
    lines.push(`Area of Dammam: ${location.trim() || "—"}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos of the stone in this chat.");
    return lines.join("\n");
  }, [stone, problem, property, where, area, location, note, name, phone]);

  return (
    <section id="stone-request" aria-labelledby="mg-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-concrete-300">Photo assessment</p>
          <h2 id="mg-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Not sure what your stone needs?</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Tell us about the stone and send photos — we&rsquo;ll suggest the
            likely treatment and arrange an assessment. Your answers become a
            WhatsApp message; attach the photos there.
          </p>
          <div className="mt-6 rounded-2xl bg-ink-900 p-5">
            <h3 className="flex items-center gap-2 font-semibold text-sand-50"><MgIcon name="camera" className="h-5 w-5 text-concrete-300" /> Helpful photos</h3>
            <ul className="mt-3 space-y-1.5">{photoTips.map((p) => <li key={p} className="flex gap-2 text-sm text-ink-300"><MgIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-concrete-300" />{p}</li>)}</ul>
          </div>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-concrete-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>

        <form
          className="rounded-2xl bg-ink-900 p-6 sm:p-8 lg:col-span-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <fieldset>
            <legend className="text-sm font-medium text-sand-50">Stone type</legend>
            <Chips name="mg-f-stone" options={mgFormStone} value={stone} onChange={setStone} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Main problem</legend>
            <Chips name="mg-f-problem" options={mgFormProblem} value={problem} onChange={setProblem} />
          </fieldset>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {mgFormProperty.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Room / location of the stone
              <input type="text" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="e.g. entrance floor, kitchen countertop" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approximate area
              <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. 60 m² or 3 rooms" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Area of Dammam
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Phone / WhatsApp <span className="font-normal text-ink-400">(optional)</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Additional notes <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. entrance marble has dull paths and a few scratches" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-concrete-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Stone Assessment
            <MgIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your photos there.</p>
        </form>
      </div>
    </section>
  );
}
