"use client";

import { shConditions, shMainIssues, shProperties } from "@/lib/shade-pergola";
import { useShade } from "./ShPlan";
import { opt, optOff, optOn } from "./ShUi";

const structures = [
  { label: "Single", v: "1" as const },
  { label: "Double", v: "2" as const },
  { label: "Multiple", v: "3+" as const },
];

// Scope estimator — no price, just the likely kind of work.
export default function ShScope() {
  const s = useShade();
  const done = s.vehicles && s.mainIssue && s.severity && s.property;
  const kind =
    s.severity === "Significant" || s.mainIssue === "Multiple" || s.mainIssue === "Base"
      ? "refurbishment, component replacement or a broader assessment"
      : s.severity === "Moderate"
        ? "component replacement or refurbishment"
        : s.severity === "Minor"
          ? "localised repair"
          : "localised repair, component replacement, refurbishment or a broader assessment";

  const group = (legend: string, opts: { label: string; on: boolean; set: () => void }[], name: string) => (
    <fieldset>
      <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-600">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {opts.map((o) => (
          <label key={o.label} className={`${opt} ${o.on ? optOn : optOff}`}>
            <input type="radio" name={name} checked={o.on} onChange={o.set} className="sr-only" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div className="border border-steel-900/15 bg-sand-50">
      <div className="space-y-5 p-5 sm:p-6">
        <p className="font-serif text-2xl text-ink-950">Scope estimator</p>
        {group("Structure", structures.map((x) => ({ label: x.label, on: s.vehicles === x.v, set: () => s.setVehicles(x.v) })), "sh-sc-struct")}
        {group("Main issue", shMainIssues.map((x) => ({ label: x, on: s.mainIssue === x, set: () => s.setMainIssue(x) })), "sh-sc-issue")}
        {group("Condition", shConditions.map((x) => ({ label: x, on: s.severity === x, set: () => s.setSeverity(x) })), "sh-sc-cond")}
        {group("Property", shProperties.map((x) => ({ label: x, on: s.property === x, set: () => s.setProperty(x) })), "sh-sc-prop")}
      </div>
      <div className="bg-steel-900 p-5 text-sand-50 sm:p-6" aria-live="polite">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-300">Likely scope</p>
        <p className="mt-2 text-[15px] leading-relaxed">
          {done ? <>Your shade may require <strong className="text-copper-300">{kind}</strong>. </> : "Your shade may require localized repair, component replacement, refurbishment, or a broader assessment. "}
          Send photos to help define the scope.
        </p>
      </div>
    </div>
  );
}
