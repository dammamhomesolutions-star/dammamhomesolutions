"use client";

import { useState } from "react";
import { drHistory, drSymptoms, drWhere } from "@/lib/drain-unblocking";
import DrCtas from "./DrCtas";
import DrIcon from "./DrIcon";

type Verdict = { title: string; body: string[]; level: "local" | "deeper" | "urgent" | "unsure" };

function verdict(symptom: string, where: string, history: string): Verdict {
  const deeperSymptom = ["Several drains are slow", "Multiple drains backing up", "Wastewater coming back up", "Outdoor drain blocked"].includes(symptom);
  const deeperWhere = ["Several rooms", "Whole property", "Outdoor / main drain"].includes(where);
  const recurring = history === "Frequently" || history === "Keeps returning";

  if (symptom === "Wastewater coming back up") {
    return {
      level: "urgent",
      title: "Wastewater backup needs prompt attention",
      body: [
        "Backup usually means a shared or main line is blocked.",
        "Use as little water as possible and avoid contact with the wastewater until it's assessed.",
      ],
    };
  }
  if (deeperSymptom || deeperWhere) {
    return {
      level: "deeper",
      title: "Multiple drains are affected",
      body: [
        "When several fixtures are slow or backing up together, the restriction is often in a branch, the main drain or the sewer connection.",
        ...(recurring ? ["Because it keeps happening, a camera inspection may be worthwhile."] : []),
        "This usually needs a professional assessment.",
      ],
    };
  }
  if (symptom === "Sewer smell") {
    return {
      level: "unsure",
      title: "A sewer smell has several possible causes",
      body: ["Dry or faulty traps, a partial blockage, a damaged pipe or vent issues can all cause it. It doesn't automatically mean the sewer line needs cleaning."],
    };
  }
  if (symptom === "Not sure" || where === "Not sure") {
    return {
      level: "unsure",
      title: "A short description and a photo will help",
      body: ["Tell us which fixtures are affected and send a photo or video — we'll help work out where to start."],
    };
  }
  return {
    level: "local",
    title: "This may be a localised drain blockage",
    body: [
      "A single slow sink, shower or toilet usually has a cause close to that fixture — hair, grease, soap or an object.",
      ...(recurring ? ["Since it keeps coming back, the cause may be further down the pipe, so inspection may still be needed."] : []),
    ],
  };
}

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-600 ${
            value === o ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-teal-600"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );
}

const levelStyle = {
  local: { icon: "drain" as const, color: "text-teal-300", tag: "Likely local" },
  deeper: { icon: "pipe" as const, color: "text-ember-500", tag: "Possibly deeper" },
  urgent: { icon: "alert" as const, color: "text-rust-500", tag: "Act promptly" },
  unsure: { icon: "search" as const, color: "text-glass-300", tag: "Needs a closer look" },
};

export default function DrDiagnostic() {
  const [symptom, setSymptom] = useState("");
  const [where, setWhere] = useState("");
  const [history, setHistory] = useState("");
  const v = symptom && where && history ? verdict(symptom, where, history) : null;
  const ls = v ? levelStyle[v.level] : null;

  return (
    <section id="where-is-it" aria-labelledby="dr-diag" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Quick guide</p>
          <h2 id="dr-diag" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where is the drain problem?</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">1. What are you experiencing?</legend>
              <Chips name="dr-symptom" options={drSymptoms} value={symptom} onChange={setSymptom} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">2. One location or several?</legend>
              <Chips name="dr-where" options={drWhere} value={where} onChange={setWhere} />
            </fieldset>
            <fieldset>
              <legend className="text-base font-semibold text-ink-950">3. Has this happened before?</legend>
              <Chips name="dr-history" options={drHistory} value={history} onChange={setHistory} />
            </fieldset>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
              {v && ls ? (
                <div key={v.title + v.body.join()} className="animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <DrIcon name={ls.icon} className={`h-7 w-7 ${ls.color}`} />
                    <span className="rounded-full bg-sand-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">{ls.tag}</span>
                  </div>
                  <p className="mt-4 font-serif text-2xl leading-snug">{v.title}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-300">
                    {v.body.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <DrCtas tone="dark" className="mt-6" primaryLabel="Help Me Identify the Problem" />
                </div>
              ) : (
                <p className="text-sm text-ink-300">Answer the three questions to see a suggested direction.</p>
              )}
              <p className="mt-6 border-t border-sand-100/10 pt-4 text-xs text-ink-400">
                This tool provides general guidance, not a plumbing diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
