"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { wpFormProblem, wpFormType, wpProperty, wpWhere } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${
            value === o ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function WpRequestForm() {
  const [problem, setProblem] = useState("");
  const [where, setWhere] = useState("");
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I need help with a water pump.",
      `Main problem: ${problem || "—"}`,
      `Affected area: ${where || "—"}`,
      `Pump type: ${type || "Not sure"}`,
    ];
    if (model.trim()) lines.push(`Pump model: ${model.trim()}`);
    lines.push(`Property: ${property || "—"}`, `Location: ${location.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Details: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send a photo or video of the pump in this chat.");
    return lines.join("\n");
  }, [problem, where, type, model, property, location, date, note, name, phone]);

  return (
    <section id="pump-service" aria-labelledby="wp-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-glass-300">Request service</p>
          <h2 id="wp-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us what&rsquo;s happening with your water pump</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. A short video with the sound and a photo of the pump label
            help a lot.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-glass-300">
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
            <legend className="text-sm font-medium text-sand-50">Main problem</legend>
            <Chips name="wp-f-problem" options={wpFormProblem} value={problem} onChange={setProblem} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Affected area</legend>
            <Chips name="wp-f-where" options={wpWhere} value={where} onChange={setWhere} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Pump type, if known</legend>
            <Chips name="wp-f-type" options={wpFormType} value={type} onChange={setType} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Pump model <span className="font-normal text-ink-400">(if visible)</span>
              <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {wpProperty.map((a) => <option key={a}>{a}</option>)}
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
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. booster on the roof keeps switching on every few seconds, pressure upstairs is weak" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request Water Pump Service
            <WpIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach a photo or video there.</p>
        </form>
      </div>
    </section>
  );
}
