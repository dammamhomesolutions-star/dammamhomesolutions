"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import {
  fsDamageExtent,
  fsPropertyTypes,
  fsWhatHappened,
} from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

// Like the site's other request panels, this builds a WhatsApp message rather
// than posting to a server. Photos are attached in the WhatsApp chat.
export default function FsRequestForm() {
  const [happened, setHappened] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [extent, setExtent] = useState("");
  const [accessible, setAccessible] = useState("");
  const [name, setName] = useState("");
  const [callback, setCallback] = useState("");
  const [contactBy, setContactBy] = useState("WhatsApp");
  const [details, setDetails] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like to request a fire damage assessment.",
      `What happened: ${happened || "—"}`,
      `Property type: ${property || "—"}`,
      `Location in Dammam: ${location.trim() || "—"}`,
    ];
    if (extent) lines.push(`Damage area: ${extent}`);
    if (accessible) lines.push(`Property accessible: ${accessible}`);
    if (details.trim()) lines.push(`Details: ${details.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (callback.trim()) lines.push(`Phone: ${callback.trim()}`);
    lines.push(`Preferred contact: ${contactBy}`);
    lines.push("I can send photos in this chat.");
    return lines.join("\n");
  }, [happened, property, location, extent, accessible, details, name, callback, contactBy]);

  return (
    <section id="request-assessment" aria-labelledby="fs-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-label !text-ember-500">Request an assessment</p>
          <h2 id="fs-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Tell us what happened
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-300">
            We only need the basics to understand the situation. Your answers
            are turned into a WhatsApp message you can review before sending
            — then add photos in the same chat.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-ink-300">
            <li className="flex gap-3">
              <FsIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />
              Photos taken from a safe position are very helpful.
            </li>
            <li className="flex gap-3">
              <FsIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />
              Don&rsquo;t go back into an unsafe property to take them.
            </li>
            <li className="flex gap-3">
              <FsIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />
              Prefer to talk?{" "}
              <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-ember-500">
                Call {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <form
          className="rounded-2xl bg-ink-900 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <fieldset>
            <legend className="text-sm font-medium text-sand-50">What happened?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {fsWhatHappened.map((opt) => (
                <label
                  key={opt}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ember-500 ${
                    happened === opt
                      ? "border-ember-500 bg-ember-500 text-ink-950"
                      : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="fs-happened"
                    value={opt}
                    checked={happened === opt}
                    onChange={() => setHappened(opt)}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {fsPropertyTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Location in Dammam
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Neighbourhood or area"
                autoComplete="address-level3"
                className={inputClass}
              />
            </label>
          </div>

          <button
            type="button"
            aria-expanded={moreOpen}
            aria-controls="fs-more-fields"
            onClick={() => setMoreOpen((v) => !v)}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-ember-500 hover:text-ember-100"
          >
            <span aria-hidden="true" className={`transition-transform ${moreOpen ? "rotate-90" : ""}`}>›</span>
            {moreOpen ? "Fewer details" : "Add more details (optional)"}
          </button>

          <div id="fs-more-fields" hidden={!moreOpen} className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-sand-100">
                Approximate damage area
                <select value={extent} onChange={(e) => setExtent(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  {fsDamageExtent.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Is the property accessible?
                <select value={accessible} onChange={(e) => setAccessible(e.target.value)} className={inputClass}>
                  <option value="">Select…</option>
                  <option>Yes</option>
                  <option>Partly</option>
                  <option>No / not yet cleared</option>
                  <option>Not sure</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-sand-100">
                Phone / WhatsApp
                <input
                  type="tel"
                  value={callback}
                  onChange={(e) => setCallback(e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="If different from this WhatsApp"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-sand-100">
              Anything else we should know?
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder="e.g. kitchen fire last night, smoke reached the hallway, firefighters used water"
                className={inputClass}
              />
            </label>
            <fieldset>
              <legend className="text-sm font-medium text-sand-100">Preferred contact method</legend>
              <div className="mt-2 flex flex-wrap gap-4">
                {["WhatsApp", "Phone call"].map((c) => (
                  <label key={c} className="inline-flex items-center gap-2 text-sm text-sand-100">
                    <input
                      type="radio"
                      name="fs-contact"
                      value={c}
                      checked={contactBy === c}
                      onChange={() => setContactBy(c)}
                      className="h-4 w-4 accent-ember-500"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Fire Damage Assessment
            <FsIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">
            Opens WhatsApp with your message ready to send. Attach photos there.
          </p>
        </form>
      </div>
    </section>
  );
}
