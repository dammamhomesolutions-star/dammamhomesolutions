"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { dkFormConcern, dkFormProperty } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

// Builds a WhatsApp quote request, like the site's other request panels.
export default function DkRequestForm() {
  const [property, setProperty] = useState("");
  const [concern, setConcern] = useState("");
  const [rooms, setRooms] = useState("");
  const [systems, setSystems] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like a quote for AC duct cleaning.",
      `Property: ${property || "—"}`,
      `Main concern: ${concern || "Not sure"}`,
    ];
    if (rooms.trim()) lines.push(`Rooms: ${rooms.trim()}`);
    if (systems.trim()) lines.push(`AC systems: ${systems.trim()}`);
    lines.push(`Location: ${location.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Details: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos of the vents / AC in this chat.");
    return lines.join("\n");
  }, [property, concern, rooms, systems, location, date, note, name, phone]);

  const chips = (name: string, options: string[], value: string, set: (v: string) => void) => (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-300 ${
            value === o ? "border-copper-300 bg-copper-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => set(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );

  return (
    <section id="duct-quote" aria-labelledby="dk-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-copper-300">Quote</p>
          <h2 id="dk-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us about your AC ducts</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. A photo of a vent or the AC setup helps. We only use your
            details to reply to your request.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-copper-300">
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
            <legend className="text-sm font-medium text-sand-50">Property type</legend>
            {chips("dk-f-property", dkFormProperty, property, setProperty)}
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Main concern</legend>
            {chips("dk-f-concern", dkFormConcern, concern, setConcern)}
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Number of rooms
              <input type="text" inputMode="numeric" value={rooms} onChange={(e) => setRooms(e.target.value)} placeholder="e.g. 6" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Number of AC systems
              <input type="text" inputMode="numeric" value={systems} onChange={(e) => setSystems(e.target.value)} placeholder="e.g. 2 ducted units" className={inputClass} />
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
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. dust blowing from two bedroom vents after renovation" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
            <DkIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos there.</p>
        </form>
      </div>
    </section>
  );
}
