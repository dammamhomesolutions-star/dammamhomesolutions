"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { cvFormFloors, cvFormProperty, cvFormService, cvFormSystem, cvFormYesNo } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-moss-200 ${
            value === o ? "border-moss-200 bg-moss-200 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function CvRequestForm() {
  const [system, setSystem] = useState("");
  const [property, setProperty] = useState("");
  const [service, setService] = useState("");
  const [floors, setFloors] = useState("");
  const [areas, setAreas] = useState("");
  const [existing, setExisting] = useState("");
  const [remote, setRemote] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like to plan a security installation.",
      `System: ${system || "Not sure"}`,
      `Property: ${property || "—"}`,
      `Service: ${service || "—"}`,
    ];
    if (floors) lines.push(`Floors: ${floors}`);
    lines.push(`Areas to monitor: ${areas.trim() || "—"}`);
    if (existing) lines.push(`Existing system: ${existing}`);
    if (remote) lines.push(`Remote viewing needed: ${remote}`);
    lines.push(`Location: ${location.trim() || "—"}`);
    if (note.trim()) lines.push(`Details: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos of the property or the existing cameras / intercom in this chat.");
    return lines.join("\n");
  }, [system, property, service, floors, areas, existing, remote, location, note, name, phone]);

  return (
    <section id="security-plan" aria-labelledby="cv-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-moss-200">Request an assessment</p>
          <h2 id="cv-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Plan your CCTV or intercom installation</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. Photos of the gate, entrances or existing equipment help
            us plan.
          </p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-moss-200">
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
            <legend className="text-sm font-medium text-sand-50">CCTV, intercom or both?</legend>
            <Chips name="cv-f-system" options={cvFormSystem} value={system} onChange={setSystem} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Property type</legend>
            <Chips name="cv-f-property" options={cvFormProperty} value={property} onChange={setProperty} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Service needed</legend>
            <Chips name="cv-f-service" options={cvFormService} value={service} onChange={setService} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Number of floors
              <select value={floors} onChange={(e) => setFloors(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {cvFormFloors.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Existing system?
              <select value={existing} onChange={(e) => setExisting(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {cvFormYesNo.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Remote viewing needed?
              <select value={remote} onChange={(e) => setRemote(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {cvFormYesNo.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Location
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Neighbourhood in Dammam" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              Areas to monitor
              <input type="text" value={areas} onChange={(e) => setAreas(e.target.value)} placeholder="e.g. gate, driveway, front door" className={inputClass} />
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
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. want to see the gate from my phone and open it from the indoor monitor" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-moss-200 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Security Quote
            <CvIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach property or equipment photos there.</p>
        </form>
      </div>
    </section>
  );
}
