"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { spFormPool, spFormProblem, spFormProperty, spFormSize, spPhotoTips } from "@/lib/swimming-pool";
import SpIcon from "./SpIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-xl border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${value === o ? "border-teal-300 bg-teal-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"}`}>
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// "Show us what you're seeing" — builds a WhatsApp request; photos go in the chat.
export default function SpRequestForm() {
  const [problem, setProblem] = useState("");
  const [pool, setPool] = useState("");
  const [size, setSize] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like a pool assessment.",
      `Main problem: ${problem || "—"}`,
      `Pool type: ${pool || "—"}`,
      `Approx. size: ${size || "—"}`,
      `Property: ${property || "—"}`,
      `Area of Dammam: ${area.trim() || "—"}`,
    ];
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push(photos.length ? `I'll send photos of: ${photos.join(", ").toLowerCase()}.` : "I can send photos in this chat.");
    return lines.join("\n");
  }, [problem, pool, size, property, area, note, name, phone, photos]);

  return (
    <section id="pool-request" aria-labelledby="sp-request" className="scroll-mt-20 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Pool assessment</p>
          <h2 id="sp-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-5xl">Show us what you&rsquo;re seeing</h2>
          <p className="mt-4 leading-relaxed text-ink-300">Your answers become a WhatsApp message you can check before sending — attach photos there. Leaks and equipment faults still need an on-site check.</p>
        </div>
        <form
          className="mt-10 grid gap-6 lg:grid-cols-12"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <fieldset className="rounded-[2rem] bg-gradient-to-br from-teal-800 to-teal-900 p-6 lg:col-span-5">
            <legend className="sr-only">Photos you can send</legend>
            <p className="flex items-center gap-2 font-semibold text-sand-50"><SpIcon name="camera" className="h-5 w-5 text-teal-300" />Photos you can send</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {spPhotoTips.map((t) => {
                const on = photos.includes(t);
                return (
                  <label key={t} className={`flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed p-2 text-center text-xs transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300 ${on ? "border-teal-300 bg-teal-300/20 text-sand-50" : "border-sand-100/25 text-teal-100 hover:border-sand-100/50"}`}>
                    <input type="checkbox" checked={on} onChange={() => setPhotos((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))} className="sr-only" />
                    <SpIcon name={on ? "check" : "camera"} className="h-5 w-5" />
                    {t}
                  </label>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-teal-100/80">Tick the photos you have — you&rsquo;ll attach them in WhatsApp.</p>
          </fieldset>

          <div className="rounded-[2rem] bg-ink-900 p-6 sm:p-8 lg:col-span-7">
            <fieldset>
              <legend className="text-sm font-medium text-sand-50">Main problem</legend>
              <Chips name="sp-f-problem" options={spFormProblem} value={problem} onChange={setProblem} />
            </fieldset>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <fieldset><legend className="text-sm font-medium text-sand-50">Pool type</legend><Chips name="sp-f-pool" options={spFormPool} value={pool} onChange={setPool} /></fieldset>
              <fieldset><legend className="text-sm font-medium text-sand-50">Approximate size</legend><Chips name="sp-f-size" options={spFormSize} value={size} onChange={setSize} /></fieldset>
              <label className="block text-sm font-medium text-sand-100">
                Property type
                <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  {spFormProperty.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Area of Dammam
                <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Neighbourhood" className={inputClass} />
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
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. topping up every two days, pump louder than usual" className={inputClass} />
              </label>
            </div>
            <button type="submit" className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
              Request Pool Assessment
              <SpIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="mt-3 text-center text-xs text-ink-400">
              Opens WhatsApp with your message ready. Prefer to talk?{" "}
              <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4">Call {siteConfig.phoneDisplay}</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
