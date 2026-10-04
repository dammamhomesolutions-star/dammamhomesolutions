"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { apFormAge, apFormAppliance } from "@/lib/appliance-repair";
import ApIcon from "./ApIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-300 ${
            value === o ? "border-copper-300 bg-copper-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function ApRequestForm() {
  const [appliance, setAppliance] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");
  const [code, setCode] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I need an appliance repaired.",
      `Appliance: ${appliance || "—"}`,
      `Brand: ${brand.trim() || "—"}`,
      `Model: ${model.trim() || "Not known"}`,
      `Problem: ${problem.trim() || "—"}`,
    ];
    if (code.trim()) lines.push(`Error code: ${code.trim()}`);
    lines.push(`Approximate age: ${age || "Don't know"}`, `Location: ${location.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send a photo of the model label and the problem in this chat.");
    return lines.join("\n");
  }, [appliance, brand, model, problem, code, age, location, date, name, phone]);

  return (
    <section id="appliance-service" aria-labelledby="ap-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-copper-300">Book a repair</p>
          <h2 id="ap-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us about your appliance</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. A photo of the model label and a short video of the
            problem help a lot.
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
            <legend className="text-sm font-medium text-sand-50">Appliance</legend>
            <Chips name="ap-f-appliance" options={apFormAppliance} value={appliance} onChange={setAppliance} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Brand
              <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Model number <span className="font-normal text-ink-400">(if known)</span>
              <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100 sm:col-span-2">
              What is it doing?
              <textarea value={problem} onChange={(e) => setProblem(e.target.value)} rows={3} placeholder="e.g. washing machine stops mid-cycle and won't drain" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Error code <span className="font-normal text-ink-400">(if shown)</span>
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approximate age
              <select value={age} onChange={(e) => setAge(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {apFormAge.map((a) => <option key={a}>{a}</option>)}
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
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Book Appliance Repair
            <ApIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos or a video there.</p>
        </form>
      </div>
    </section>
  );
}
