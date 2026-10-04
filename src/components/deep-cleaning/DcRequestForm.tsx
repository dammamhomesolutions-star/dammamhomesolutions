"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { dcAddOns, dcBathrooms, dcBedrooms, dcCleaningTypes, dcConditions, dcPropertyTypes } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

// Builds a WhatsApp message like the site's other request panels. The
// add-on toggles are the "add to scope" control.
export default function DcRequestForm() {
  const [type, setType] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [condition, setCondition] = useState("");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like a cleaning quote.",
      `Cleaning type: ${type || "Not sure"}`,
      `Property: ${property || "—"}${bedrooms ? `, ${bedrooms} bedroom(s)` : ""}${bathrooms ? `, ${bathrooms} bathroom(s)` : ""}`,
      `Location: ${location.trim() || "—"}`,
    ];
    if (condition) lines.push(`Condition: ${condition}`);
    if (addOns.length) lines.push(`Add-ons: ${addOns.join(", ")}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos in this chat.");
    return lines.join("\n");
  }, [type, property, bedrooms, bathrooms, location, condition, addOns, note, name, phone]);

  const toggleAddOn = (label: string) =>
    setAddOns((a) => (a.includes(label) ? a.filter((x) => x !== label) : [...a, label]));

  return (
    <section id="request-quote" aria-labelledby="dc-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-mint-300">Request a cleaning quote</p>
          <h2 id="dc-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us about your property</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. Photos of the kitchen and bathrooms help us quote
            accurately.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-mint-300">
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
            <legend className="text-sm font-medium text-sand-50">Cleaning type</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {dcCleaningTypes.map((t) => (
                <label
                  key={t}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mint-300 ${
                    type === t ? "border-mint-300 bg-mint-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                  }`}
                >
                  <input type="radio" name="dc-type" value={t} checked={type === t} onChange={() => setType(t)} className="sr-only" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {dcPropertyTypes.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Bedrooms
              <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {dcBedrooms.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Bathrooms
              <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {dcBathrooms.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Current condition
              <select value={condition} onChange={(e) => setCondition(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {dcConditions.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100 lg:col-span-2">
              Location
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Add to scope <span className="font-normal text-ink-400">(optional)</span></legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {dcAddOns.map((a) => {
                const checked = addOns.includes(a.label);
                return (
                  <label
                    key={a.key}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-mint-300 ${
                      checked ? "border-mint-300 bg-mint-300/15 text-mint-100" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                    }`}
                  >
                    <input type="checkbox" checked={checked} onChange={() => toggleAddOn(a.label)} className="sr-only" />
                    <span aria-hidden="true" className={`flex h-4 w-4 items-center justify-center rounded border ${checked ? "border-mint-300 bg-mint-300 text-ink-950" : "border-sand-100/40"}`}>
                      {checked && <DcIcon name="check" className="h-3 w-3" />}
                    </span>
                    {a.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Name <span className="font-normal text-ink-400">(optional)</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Phone / WhatsApp <span className="font-normal text-ink-400">(optional)</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="If different from this WhatsApp" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Message <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. handover on the 15th, landlord wants the oven cleaned" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Cleaning Quote
            <DcIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos there.</p>
        </form>
      </div>
    </section>
  );
}
