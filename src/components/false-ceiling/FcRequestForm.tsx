"use client";

import { useMemo, useState } from "react";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import { fcChecklist, fcPlanDesign, fcPlanProject, fcPlanProperty, fcPlanRoom } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

const inputClass =
  "focus-ring mt-1.5 w-full rounded-lg border border-sand-100/15 bg-ink-950 px-3.5 py-2.5 text-sm text-sand-50 placeholder:text-ink-400";

const yesNo = ["Yes", "No", "Not sure"];

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-300 ${
            value === o ? "border-glass-300 bg-glass-300 text-ink-950" : "border-sand-100/20 text-sand-100 hover:border-sand-100/50"
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
export default function FcRequestForm() {
  const [project, setProject] = useState("");
  const [design, setDesign] = useState("");
  const [existing, setExisting] = useState("");
  const [property, setProperty] = useState("");
  const [room, setRoom] = useState("");
  const [dims, setDims] = useState("");
  const [problem, setProblem] = useState("");
  const [lighting, setLighting] = useState("");
  const [ac, setAc] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Hello Dammam Home Solutions, I'd like a false ceiling assessment.",
      `Project: ${project || "—"}`,
      `Design: ${design || "—"}`,
      `Existing false ceiling: ${existing || "—"}`,
      `Property: ${property || "—"}`,
      `Room: ${room || "—"}`,
    ];
    if (dims.trim()) lines.push(`Approx. room size: ${dims.trim()}`);
    if (problem.trim()) lines.push(`Current problem: ${problem.trim()}`);
    if (lighting.trim()) lines.push(`Lighting: ${lighting.trim()}`);
    if (ac.trim()) lines.push(`AC / services: ${ac.trim()}`);
    lines.push(`Area: ${area.trim() || "—"}`);
    if (date) lines.push(`Preferred date: ${date}`);
    if (note.trim()) lines.push(`Notes: ${note.trim()}`);
    if (name.trim()) lines.push(`Name: ${name.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    if (email.trim()) lines.push(`Email: ${email.trim()}`);
    lines.push("I can send photos of the ceiling and room in this chat.");
    return lines.join("\n");
  }, [project, design, existing, property, room, dims, problem, lighting, ac, area, date, note, name, phone, email]);

  return (
    <section id="ceiling-request" aria-labelledby="fc-request" className="scroll-mt-20 border-b border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <p className="section-label !text-glass-300">Request an assessment</p>
          <h2 id="fc-request" className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">Send photos of your ceiling</h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Photos showing the full ceiling, the room, walls, existing lights,
            AC vents and any visible damage help us understand the project
            before an assessment. Your answers become a WhatsApp message —
            attach the photos there.
          </p>
          <p className="mt-3 text-sm text-ink-400">An exact quote follows an on-site assessment.</p>
          <p className="mt-6 text-sm text-ink-300">
            Prefer to talk?{" "}
            <a href={buildTelLink()} className="focus-ring rounded-sm font-semibold text-sand-50 underline underline-offset-4 hover:text-glass-300">
              Call {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-8 rounded-2xl bg-ink-900 p-5">
            <h3 className="font-semibold text-sand-50">Before your ceiling project</h3>
            <ul className="mt-3 space-y-1.5">
              {fcChecklist.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-300"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />{p}</li>
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
            <legend className="text-sm font-medium text-sand-50">Project type</legend>
            <Chips name="fc-f-project" options={fcPlanProject} value={project} onChange={setProject} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Ceiling style</legend>
            <Chips name="fc-f-design" options={fcPlanDesign} value={design} onChange={setDesign} />
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-sand-50">Is there an existing false ceiling?</legend>
            <Chips name="fc-f-existing" options={yesNo} value={existing} onChange={setExisting} />
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-sand-100">
              Property type
              <select value={property} onChange={(e) => setProperty(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {fcPlanProperty.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Room
              <select value={room} onChange={(e) => setRoom(e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {fcPlanRoom.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Approx. room size
              <input type="text" value={dims} onChange={(e) => setDims(e.target.value)} placeholder="e.g. 5 × 6 m, 3.2 m high" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Current ceiling problem <span className="font-normal text-ink-400">(if any)</span>
              <input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="e.g. cracks, water stain" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              Lighting requirement
              <input type="text" value={lighting} onChange={(e) => setLighting(e.target.value)} placeholder="e.g. downlights + cove" className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-sand-100">
              AC / service requirement
              <input type="text" value={ac} onChange={(e) => setAc(e.target.value)} placeholder="e.g. 2 diffusers, access panel" className={inputClass} />
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
              Notes <span className="font-normal text-ink-400">(optional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="e.g. cove ceiling in the majlis with a curtain pocket at the windows" className={inputClass} />
            </label>
          </div>

          <button
            type="submit"
            className="focus-ring group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            Request a Ceiling Assessment
            <FcIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp with your message ready. Attach your ceiling photos there.</p>
        </form>
      </div>
    </section>
  );
}
