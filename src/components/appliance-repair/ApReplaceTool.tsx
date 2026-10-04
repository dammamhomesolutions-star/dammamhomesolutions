"use client";

import { useState } from "react";
import { apToolAge, apToolFault, apToolRepairs } from "@/lib/appliance-repair";
import ApCtas from "./ApCtas";
import ApIcon from "./ApIcon";

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 ${
            value === o ? "border-copper-800 bg-copper-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-copper-600"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

// Leans the answer toward repair or replacement; never decides on age alone.
export default function ApReplaceTool() {
  const [age, setAge] = useState("");
  const [repairs, setRepairs] = useState("");
  const [fault, setFault] = useState("");
  const ready = age && repairs && fault;

  let lean = 0;
  if (age === "Older") lean += 1;
  if (repairs === "Several times") lean += 1;
  if (repairs === "Frequently") lean += 2;
  if (fault === "Major failure") lean += 2;
  if (fault === "Physical damage") lean += 1;
  if (fault === "Minor performance issue" || fault === "Replaceable component") lean -= 1;

  const result =
    lean <= 0
      ? { title: "Repair is likely worth considering.", body: "A contained fault on an appliance without a long repair history is often worth fixing." }
      : lean <= 2
        ? { title: "It’s worth a proper assessment before deciding.", body: "Repair could still make sense — it depends on the fault, the part and its price." }
        : { title: "Replacement may be worth comparing.", body: "With repeated or major failures, compare the repair quote against a replacement before going ahead." };

  return (
    <section aria-labelledby="ap-tool" className="border-b border-ink-900/10 bg-steel-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Decision helper</p>
          <h2 id="ap-tool" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Should you repair or replace your appliance?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. How old is the appliance?</legend>
              <Chips name="ap-t-age" options={apToolAge} value={age} onChange={setAge} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. Has it been repaired before?</legend>
              <Chips name="ap-t-repairs" options={apToolRepairs} value={repairs} onChange={setRepairs} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. What kind of problem is it?</legend>
              <Chips name="ap-t-fault" options={apToolFault} value={fault} onChange={setFault} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {ready ? (
                <div key={age + repairs + fault} className="animate-fadeIn">
                  <ApIcon name={lean <= 0 ? "repair" : lean <= 2 ? "search" : "replace"} className="h-7 w-7 text-copper-300" />
                  <p className="mt-3 font-serif text-2xl leading-snug">{result.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{result.body}</p>
                  <ApCtas tone="dark" className="mt-6" primaryLabel="Get an Honest Assessment" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the three questions to see which way it leans.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                General guidance only. The real answer depends on the diagnosis,
                the part and its availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
