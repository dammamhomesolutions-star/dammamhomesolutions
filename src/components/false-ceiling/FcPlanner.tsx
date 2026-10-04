"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { fcPlanDesign, fcPlanProject, fcPlanProperty, fcPlanRoom, fcPlanServices } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((o) => (
        <label key={o} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${value === o ? "border-glass-900 bg-glass-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-glass-600"}`}>
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Project summary that becomes a WhatsApp request. No price or engineering output.
export default function FcPlanner() {
  const [property, setProperty] = useState("");
  const [room, setRoom] = useState("");
  const [project, setProject] = useState("");
  const [design, setDesign] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const toggle = (s: string) => setServices((x) => (s === "None" ? ["None"] : x.includes(s) ? x.filter((y) => y !== s) : [...x.filter((y) => y !== "None"), s]));

  const rows: [string, string][] = [
    ["Property", property],
    ["Room", room],
    ["Project", project],
    ["Design", design],
    ["Services", services.join(", ")],
  ];
  const filled = rows.filter(([, v]) => v).length;

  const lines = ["Hello Dammam Home Solutions, I'd like a false ceiling assessment.", ...rows.map(([k, v]) => `${k}: ${v || "—"}`), "I can send photos of the ceiling and room in this chat."];
  const href = buildWhatsAppLink(lines.join("\n"));

  return (
    <section id="project-planner" aria-labelledby="fc-planner" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Project planner</p>
          <h2 id="fc-planner" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Tell us about your ceiling project</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <fieldset><legend className="text-sm font-semibold text-ink-950">Property</legend><Chips name="fc-p-prop" options={fcPlanProperty} value={property} onChange={setProperty} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-ink-950">Room</legend><Chips name="fc-p-room" options={fcPlanRoom} value={room} onChange={setRoom} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-ink-950">Project</legend><Chips name="fc-p-proj" options={fcPlanProject} value={project} onChange={setProject} /></fieldset>
            <fieldset><legend className="text-sm font-semibold text-ink-950">Design</legend><Chips name="fc-p-design" options={fcPlanDesign} value={design} onChange={setDesign} /></fieldset>
            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold text-ink-950">Services to include <span className="font-normal text-ink-500">(pick any)</span></legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {fcPlanServices.map((s) => {
                  const on = services.includes(s);
                  return (
                    <label key={s} className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 ${on ? "border-glass-900 bg-glass-900 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-glass-600"}`}>
                      <input type="checkbox" checked={on} onChange={() => toggle(s)} className="sr-only" />
                      {on ? "✓ " : ""}{s}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-glass-300">Your project summary</p>
              <dl className="mt-4 space-y-2" aria-live="polite">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-sand-100/10 pb-2 text-sm">
                    <dt className="text-ink-400">{k}</dt>
                    <dd className={v ? "text-right text-sand-50" : "text-ink-500"}>{v || "—"}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-800" aria-hidden="true">
                <div className="h-1.5 rounded-full bg-glass-300 transition-[width] duration-500" style={{ width: `${(filled / rows.length) * 100}%` }} />
              </div>
              <a
                href={href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glass-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
              >
                Request Ceiling Assessment
                <FcIcon name="arrow" className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-ink-400">Opens WhatsApp — attach ceiling photos there. No price is calculated here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
