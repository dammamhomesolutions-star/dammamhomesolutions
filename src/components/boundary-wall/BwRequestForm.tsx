"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { bwEstSize, bwFormIssue, bwFormProperty } from "@/lib/boundary-wall";
import BwIcon from "./BwIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-clay-300 ${
            value === o ? "border-clay-300 bg-clay-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function BwRequestForm() {
  const [issue, setIssue] = useState("");
  const [size, setSize] = useState("");
  const [property, setProperty] = useState("");
  const [where, setWhere] = useState("");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like an outdoor / boundary wall assessment.",
      `Main issue: ${issue || "—"}`,
      `Approx. size: ${size || "—"}`,
      `Property: ${property || "—"}`,
    ];
    if (where.trim()) lines.push(`Wall location: ${where.trim()}`);
    lines.push(`Area of Dammam: ${area.trim() || "—"}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send wide photos and close-ups of the wall in this chat.");
    return lines.join("\n");
  }, [issue, size, property, where, area, note, name, phone]);

  return (
    <section id="wall-request" aria-labelledby="bw-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-clay-300">Photo assessment</p>
          <h2 id="bw-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Send photos of your wall</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            A wide photo helps us understand the overall wall. Close-ups help
            show cracks, surface damage and affected areas. Your answers become
            a WhatsApp message — attach the photos there.
          </p>
          <p className="mt-3 text-sm text-ink-400">Anything that may be structural still needs an on-site assessment before we quote.</p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-clay-300">
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
            <legend className="text-sm font-medium text-sand-50">Main issue</legend>
            <Chips name="bw-f-issue" options={bwFormIssue} value={issue} onChange={setIssue} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Approximate wall size</legend>
            <Chips name="bw-f-size" options={bwEstSize} value={size} onChange={setSize} />
          </fieldset>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {bwFormProperty.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Wall location
              <input type="text" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="e.g. front boundary by the gate" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Area of Dammam
              <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Neighbourhood" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Phone / WhatsApp <span className="font-normal text-ink-400">(optional)</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Additional notes <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. crack by the gate has come back twice since last year" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request an Assessment
            <BwIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your photos there.</p>
        </form>
      </div>
    </section>
  );
}
