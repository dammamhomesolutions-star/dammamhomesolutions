"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { faFormJob, faFormProperty, faFormQty, faPreVisit } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-300 ${
            value === o ? "border-walnut-300 bg-walnut-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function FaRequestForm() {
  const [furniture, setFurniture] = useState("");
  const [qty, setQty] = useState("");
  const [job, setJob] = useState("");
  const [brand, setBrand] = useState("");
  const [property, setProperty] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I need furniture assembly.",
      `Furniture: ${furniture.trim() || "—"}`,
      `Quantity: ${qty || "—"}`,
      `Job: ${job || "—"}`,
    ];
    if (brand.trim()) lines.push(`Brand / model: ${brand.trim()}`);
    lines.push(`Property: ${property || "—"}`, `Area: ${area.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push("I can send photos of the furniture, box, instructions or room in this chat.");
    return lines.join("\n");
  }, [furniture, qty, job, brand, property, area, date, note, name, phone, email]);

  return (
    <section id="assembly-request" aria-labelledby="fa-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-walnut-300">Request assembly</p>
          <h2 id="fa-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Send us the furniture details</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Photos of the furniture, packaging or instruction sheet help us
            understand the item before the appointment. Your answers become a
            WhatsApp message — attach the photos there.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-walnut-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-8 rounded-2xl bg-ink-900 p-5">
            <h3 className="font-semibold text-sand-50">Before the assembly visit</h3>
            <ul className="mt-3 space-y-1.5">
              {faPreVisit.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-300"><FaIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-walnut-300" />{p}</li>
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
          <label className="block text-sm font-medium text-sand-100">
            Furniture type
            <input type="text" value={furniture} onChange={(e) => setFurniture(e.target.value)} placeholder="e.g. sliding-door wardrobe, bed, 2 bedside tables" className={inputClass} />
          </label>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Quantity</legend>
            <Chips name="fa-f-qty" options={faFormQty} value={qty} onChange={setQty} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">What do you need?</legend>
            <Chips name="fa-f-job" options={faFormJob} value={job} onChange={setJob} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Brand / model <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {faFormProperty.map((a) => <option key={a}>{a}</option>)}
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
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Additional notes <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. 4th floor with lift, wardrobe needs fixing to the wall" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-walnut-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request Furniture Assembly
            <FaIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your photos there.</p>
        </form>
      </div>
    </section>
  );
}
