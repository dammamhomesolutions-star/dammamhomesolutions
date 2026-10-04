"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { cbChecklist, cbFormCover, cbFormJob, cbFormProperty, cbFormQty, cbFormYesNo, cbPlanMount, cbPlanWindow } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

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
export default function CbRequestForm() {
  const [cover, setCover] = useState("");
  const [type, setType] = useState("");
  const [qty, setQty] = useState("");
  const [job, setJob] = useState("");
  const [existing, setExisting] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [winType, setWinType] = useState("");
  const [size, setSize] = useState("");
  const [mount, setMount] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like curtains / blinds installed.",
      `Covering: ${cover || "—"}${type.trim() ? ` (${type.trim()})` : ""}`,
      `Number of windows: ${qty || "—"}`,
      `Job: ${job || "—"}`,
      `Existing rod / track / brackets: ${existing || "—"}`,
    ];
    if (winType) lines.push(`Window type: ${winType}`);
    if (size.trim()) lines.push(`Approx. size: ${size.trim()}`);
    if (mount) lines.push(`Mounting preference: ${mount}`);
    lines.push(`Property: ${property || "—"}`, `Area: ${area.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push("I can send photos of the windows in this chat.");
    return lines.join("\n");
  }, [cover, type, qty, job, existing, winType, size, mount, property, area, date, note, name, phone, email]);

  return (
    <section id="curtain-request" aria-labelledby="cb-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-clay-300">Request installation</p>
          <h2 id="cb-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Send us a photo of your window</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            A photo showing the full window, the wall or ceiling around it, the
            handles and any existing curtain or blind hardware helps us
            understand the job. Your answers become a WhatsApp message — attach
            the photos there.
          </p>
          <p className="mt-3 text-sm text-ink-400">We may need to measure on site before giving an exact quote.</p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-clay-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-8 rounded-2xl bg-ink-900 p-5">
            <h3 className="font-semibold text-sand-50">Before the installation</h3>
            <ul className="mt-3 space-y-1.5">
              {cbChecklist.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-300"><CbIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-clay-300" />{p}</li>
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
            <legend className="text-sm font-medium text-sand-50">What are you installing?</legend>
            <Chips name="cb-f-cover" options={cbFormCover} value={cover} onChange={setCover} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Number of windows</legend>
            <Chips name="cb-f-qty" options={cbFormQty} value={qty} onChange={setQty} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">What do you need?</legend>
            <Chips name="cb-f-job" options={cbFormJob} value={job} onChange={setJob} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Existing rod, track or brackets?</legend>
            <Chips name="cb-f-existing" options={cbFormYesNo} value={existing} onChange={setExisting} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Covering type <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="e.g. blackout roller, sheer + blackout" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {cbFormProperty.map((a) => <option key={a}>{a}</option>)}
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
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Email <span className="font-normal text-ink-400">(optional)</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className={inputClass} />
            </label>
          </div>

          <details className="group mt-6 rounded-xl border border-sand-100/15 p-4">
            <summary className="focus-ring cursor-pointer list-none text-sm font-medium text-sand-50 [&::-webkit-details-marker]:hidden">
              <span className="mr-2 inline-block transition-transform group-open:rotate-90" aria-hidden="true">›</span>
              Add window information <span className="font-normal text-ink-400">(optional)</span>
            </summary>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <label className="block text-sm font-medium text-sand-100">
                Window type
                <select value={winType} onChange={(e) => setWinType(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  {cbPlanWindow.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Approx. width × height
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g. 2.4 × 1.8 m" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Mounting preference
                <select value={mount} onChange={(e) => setMount(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  {cbPlanMount.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
            </div>
            <p className="mt-3 text-xs text-ink-400">Final measurements and installation requirements may need to be confirmed for the chosen product and site.</p>
          </details>

          <label className="mt-6 block text-sm font-medium text-sand-100">
            Notes <span className="font-normal text-ink-400">(optional)</span>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. ceiling track for the living room sliding door, blackout in two bedrooms" className={inputClass} />
          </label>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request Installation
            <CbIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your window photos there.</p>
        </form>
      </div>
    </section>
  );
}
