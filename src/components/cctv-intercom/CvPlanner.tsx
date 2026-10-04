"use client";

import { useState } from "react";
import { cvPlanMonitor, cvPlanNeed, cvPlanPriority, cvPlanProperty } from "@/lib/cctv-intercom";
import CvCtas from "./CvCtas";
import CvIcon from "./CvIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-moss-600 ${
            value === o ? "border-moss-800 bg-moss-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-moss-600"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

const visitorPriorities = ["See visitors before opening", "Access control"];
const entryAreas = ["Main entrance", "Gate", "Office entrance"];

// General planning guidance only — never a camera count or a specification.
export default function CvPlanner() {
  const [property, setProperty] = useState("");
  const [monitor, setMonitor] = useState("");
  const [need, setNeed] = useState("");
  const [priority, setPriority] = useState("");
  const ready = property && monitor && need && priority;

  const wantsVisitor = visitorPriorities.includes(priority);
  const wantsCctv = !visitorPriorities.includes(priority) || need === "CCTV only";

  let system: string;
  if (need === "CCTV only") system = wantsVisitor ? "CCTV — with an intercom worth considering" : "A CCTV system";
  else if (need === "Intercom only") system = wantsVisitor ? "A video intercom" : "An intercom — and possibly a camera or two";
  else if (need === "CCTV + Intercom") system = "CCTV plus a video intercom";
  else system = wantsVisitor ? (entryAreas.includes(monitor) ? "A video intercom, possibly with an entrance camera" : "CCTV plus a video intercom") : "A CCTV system";

  const reasons: string[] = [];
  if (wantsVisitor) reasons.push("You want to know who's there before opening — that's what an intercom does; video lets you see them too.");
  if (priority === "Access control") reasons.push("Gate or door release needs a compatible electric lock or gate opener connected to the intercom.");
  if (wantsCctv && priority !== "See visitors before opening") reasons.push("Cameras give you ongoing visibility and a recording of what happened.");
  if (priority === "Remote viewing") reasons.push("Remote viewing needs compatible equipment, a reliable internet connection and the app set up.");
  if (priority === "Night visibility") reasons.push("Night performance depends on the camera, the available light and where it's mounted.");
  if (priority === "Recording") reasons.push("Recording length depends on storage, the number of cameras, resolution and recording mode.");
  if (monitor === "Multiple areas" || monitor === "Outdoor perimeter" || monitor === "Driveway") reasons.push("Larger or open areas need careful lens choice and placement to avoid blind spots.");
  if (["Apartment", "Building entrance"].includes(property)) reasons.push("Shared entrances may need building permission and a multi-unit intercom.");
  if (["Shop", "Office", "Warehouse"].includes(property)) reasons.push("For commercial premises, plan who can view footage and keep staff-only private areas out of view.");

  return (
    <section id="planner" aria-labelledby="cv-plan" className="border-b border-ink-900/10 bg-moss-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Security planner</p>
          <h2 id="cv-plan" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What does your property need?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Four quick questions to point you in the right direction.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What are you protecting?</legend>
              <Chips name="cv-p-property" options={cvPlanProperty} value={property} onChange={setProperty} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. What do you want to monitor?</legend>
              <Chips name="cv-p-monitor" options={cvPlanMonitor} value={monitor} onChange={setMonitor} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. What do you think you need?</legend>
              <Chips name="cv-p-need" options={cvPlanNeed} value={need} onChange={setNeed} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">4. What matters most?</legend>
              <Chips name="cv-p-priority" options={cvPlanPriority} value={priority} onChange={setPriority} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {ready ? (
                <div key={property + monitor + need + priority} className="animate-fadeIn">
                  <CvIcon name={wantsVisitor ? "intercom" : "camera"} className="h-7 w-7 text-moss-200" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-moss-200">May fit your needs</p>
                  <p className="mt-1 font-serif text-2xl leading-snug">{system}</p>
                  <ul className="mt-4 space-y-2">
                    {reasons.slice(0, 4).map((r) => (
                      <li key={r} className="flex gap-2 text-sm leading-relaxed text-ink-300">
                        <CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-200" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <CvCtas tone="dark" className="mt-6" primaryLabel="Plan My System" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the four questions to see a suggested starting point.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                This planner provides general guidance. A site assessment is
                needed for final camera placement and system specification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
