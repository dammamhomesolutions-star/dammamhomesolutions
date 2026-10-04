"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { aiFormInstall, aiFormProperty, aiFormType } from "@/lib/ac-installation";
import AiIcon from "./AiIcon";

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

// Builds a WhatsApp quote request, like the site's other request panels.
export default function AiRequestForm() {
  const [property, setProperty] = useState("");
  const [install, setInstall] = useState("");
  const [type, setType] = useState("");
  const [units, setUnits] = useState("");
  const [size, setSize] = useState("");
  const [supply, setSupply] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like an AC installation quote.",
      `Property: ${property || "—"}`,
      `Installation: ${install || "Not sure"}`,
      `AC type: ${type || "Not sure"}`,
    ];
    if (units.trim()) lines.push(`Number of units: ${units.trim()}`);
    if (size.trim()) lines.push(`Room size: ${size.trim()}`);
    if (supply) lines.push(`Equipment: ${supply}`);
    lines.push(`Location: ${location.trim() || "—"}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos of the room and outdoor area in this chat.");
    return lines.join("\n");
  }, [property, install, type, units, size, supply, location, note, name, phone]);

  return (
    <section id="installation-quote" aria-labelledby="ai-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-teal-300">Quote</p>
          <h2 id="ai-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Request an AC installation quote</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. Photos of the wall where the indoor unit will go, and of
            the outdoor location, help a lot.
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
            <legend className="text-sm font-medium text-sand-50">Property type</legend>
            <Chips name="ai-property" options={aiFormProperty} value={property} onChange={setProperty} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Installation type</legend>
            <Chips name="ai-install" options={aiFormInstall} value={install} onChange={setInstall} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">AC type, if known</legend>
            <Chips name="ai-type" options={aiFormType} value={type} onChange={setType} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Equipment</legend>
            <Chips name="ai-supply" options={["I have the AC", "Please supply the AC", "Not decided"]} value={supply} onChange={setSupply} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Number of units
              <input type="text" inputMode="numeric" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="e.g. 3" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approximate room size
              <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g. 4 × 5 m bedroom" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Location
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
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
              Message <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. replacing an old window AC with a split unit in the majlis" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request an AC Installation Quote
            <AiIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos there.</p>
        </form>
      </div>
    </section>
  );
}
