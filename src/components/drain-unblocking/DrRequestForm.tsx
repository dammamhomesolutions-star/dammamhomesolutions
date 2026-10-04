"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { drFormArea, drFormBefore, drFormCount, drFormProperty, drFormSymptom } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

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

// Builds a WhatsApp service request, like the site's other request panels.
export default function DrRequestForm() {
  const [area, setArea] = useState("");
  const [symptom, setSymptom] = useState("");
  const [count, setCount] = useState("");
  const [before, setBefore] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [chem, setChem] = useState(false);
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I need help with a drain problem.",
      `Affected area: ${area || "—"}`,
      `Main symptom: ${symptom || "—"}`,
      `Drains affected: ${count || "Not sure"}`,
      `Happened before: ${before || "—"}`,
      `Property: ${property || "—"}`,
      `Location: ${location.trim() || "—"}`,
    ];
    if (chem) lines.push("Note: drain chemical was used recently.");
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Details: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send a photo or video in this chat.");
    return lines.join("\n");
  }, [area, symptom, count, before, property, location, chem, date, note, name, phone]);

  return (
    <section id="drain-service" aria-labelledby="dr-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-teal-300">Request service</p>
          <h2 id="dr-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us about your drain problem</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. A short video of the drain draining (or not) is often more
            useful than a photo.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-teal-300">
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
            <legend className="text-sm font-medium text-sand-50">Affected area</legend>
            <Chips name="dr-f-area" options={drFormArea} value={area} onChange={setArea} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Main symptom</legend>
            <Chips name="dr-f-symptom" options={drFormSymptom} value={symptom} onChange={setSymptom} />
          </fieldset>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <fieldset>
              <legend className="text-sm font-medium text-sand-50">Number of affected drains</legend>
              <Chips name="dr-f-count" options={drFormCount} value={count} onChange={setCount} />
            </fieldset>
            <fieldset>
              <legend className="text-sm font-medium text-sand-50">Has it happened before?</legend>
              <Chips name="dr-f-before" options={drFormBefore} value={before} onChange={setBefore} />
            </fieldset>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {drFormProperty.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Location
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Preferred date <span className="font-normal text-ink-400">(optional)</span>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${inputClass} [color-scheme:dark]`} />
            </label>
            <label className="flex items-center gap-3 self-end rounded-lg border border-sand-100/15 px-3.5 py-2.5 text-sm text-sand-100">
              <input type="checkbox" checked={chem} onChange={(e) => setChem(e.target.checked)} className="h-4 w-4 accent-teal-300" />
              Drain chemical used recently
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Phone <span className="font-normal text-ink-400">(optional)</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Additional details <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. kitchen sink and floor drain both slow, cleared last month" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request Drain Service
            <DrIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach a photo or video there.</p>
        </form>
      </div>
    </section>
  );
}
