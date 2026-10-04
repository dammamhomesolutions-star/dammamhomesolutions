"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { scFormItems, scFormProblems, scPropertyTypes } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

// Builds a WhatsApp booking message, like the site's other request panels.
export default function ScRequestForm() {
  const [items, setItems] = useState<string[]>([]);
  const [problem, setProblem] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like to book sofa / carpet cleaning.",
      `Items: ${items.length ? items.join(", ") : "—"}`,
      `Main problem: ${problem || "—"}`,
      `Material: ${material.trim() || "Not sure"}`,
    ];
    if (size.trim()) lines.push(`Size / seats: ${size.trim()}`);
    lines.push(`Property: ${property || "—"}`, `Location: ${location.trim() || "—"}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    lines.push("I can send photos in this chat.");
    return lines.join("\n");
  }, [items, problem, material, size, property, location, note, name, phone]);

  const toggle = (i: string) => setItems((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <section id="book-cleaning" aria-labelledby="sc-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="section-label !text-glass-300">Book a cleaning</p>
          <h2 id="sc-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Tell us what needs cleaning</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Your answers become a WhatsApp message you can check before
            sending. Add photos of the item and any stains in the chat — and
            the care label if there is one.
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
            <legend className="text-sm font-medium text-sand-50">What needs cleaning?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {scFormItems.map((i) => {
                const on = items.includes(i);
                return (
                  <label
                    key={i}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${
                      on ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                    }`}
                  >
                    <input type="checkbox" checked={on} onChange={() => toggle(i)} className="sr-only" />
                    {on && <ScIcon name="check" className="h-3.5 w-3.5" />}
                    {i}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Main problem</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {scFormProblems.map((p) => (
                <label
                  key={p}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${
                    problem === p ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                  }`}
                >
                  <input type="radio" name="sc-problem" value={p} checked={problem === p} onChange={() => setProblem(p)} className="sr-only" />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Material <span className="font-normal text-ink-400">(if known)</span>
              <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="e.g. velvet, wool rug, leather" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approximate size / number of seats
              <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g. 3-seater + 2 chairs, rug 2×3 m" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {scPropertyTypes.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
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
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. coffee stain on the middle seat, about a week old" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Book a Cleaning
            <ScIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach photos there.</p>
        </form>
      </div>
    </section>
  );
}
