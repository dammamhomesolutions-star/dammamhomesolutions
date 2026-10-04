"use client";

import { useState } from "react";
import { drCameraWhen, drFindings, drJettingUses, drMethods, type DrFindingKey } from "@/lib/drain-unblocking";
import DrIcon from "./DrIcon";

// A pipe interior seen from the camera's point of view. Each finding
// changes what's drawn inside the circle. Examples only.
function CameraView({ k }: { k: DrFindingKey }) {
  return (
    <svg viewBox="0 0 240 240" className="h-auto w-full" aria-hidden="true">
      <defs>
        <radialGradient id="dr-pipe" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#14181f" />
          <stop offset="0.55" stopColor="#333a49" />
          <stop offset="1" stopColor="#9a968a" />
        </radialGradient>
      </defs>
      <rect width="240" height="240" rx="20" fill="#14181f" />
      <circle cx="120" cy="120" r="100" fill="url(#dr-pipe)" />
      {[85, 60, 35].map((r) => (
        <circle key={r} cx="120" cy="120" r={r} fill="none" stroke="#69748a" strokeOpacity="0.4" />
      ))}
      {k === "buildup" && <path d="M20 120a100 100 0 0 0 200 0l-20 0a80 80 0 0 1-160 0z" fill="#a67c5b" opacity="0.8" />}
      {k === "blockage" && <circle cx="120" cy="125" r="48" fill="#6b4a35" />}
      {k === "crack" && <path d="M60 60l30 20-10 30 30 20-6 40" fill="none" stroke="#e0b28a" strokeWidth="3" />}
      {k === "joint" && <path d="M45 120a75 75 0 0 1 150 0M55 130a70 70 0 0 0 140 0" fill="none" stroke="#e0b28a" strokeWidth="5" />}
      {k === "roots" && (
        <g stroke="#79895f" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M120 30c-5 30 10 40 0 70M120 60c-20 10-30 20-35 40M120 70c20 10 25 25 30 40" />
        </g>
      )}
      {k === "standing" && <path d="M28 150a100 100 0 0 0 184 0z" fill="#4a9797" opacity="0.75" />}
      {k === "damaged" && <path d="M20 120c40-30 60 40 100 10s60 30 100 -10a100 100 0 0 1-200 0z" fill="#5c584f" />}
      <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#8fc4c4">
        <text x="16" y="24">CAM ● REC</text>
        <text x="170" y="228">2.4 m</text>
      </g>
    </svg>
  );
}

export default function DrMethods() {
  const [f, setF] = useState<DrFindingKey>("buildup");
  const finding = drFindings.find((x) => x.key === f)!;

  return (
    <section id="methods" aria-label="Cleaning methods, water jetting and camera inspection" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Equipment</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Drain cleaning methods</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The right method depends on the pipe&rsquo;s condition and material,
            the blockage, access and how the drainage is laid out.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {drMethods.map((m) => (
            <li key={m.title} className="group rounded-2xl border border-ink-900/10 bg-concrete-100/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-teal-300">
                <DrIcon name={m.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{m.body}</p>
              <p className="mt-3 text-sm text-ink-600"><span className="font-semibold">Suits: </span>{m.suits}</p>
            </li>
          ))}
        </ul>

        {/* Jetting */}
        <div className="mt-14 grid gap-8 rounded-2xl bg-teal-900 p-6 text-sand-50 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <DrIcon name="jet" className="h-8 w-8 text-teal-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">When is high-pressure drain cleaning useful?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-teal-100">
              Water jetting scours the pipe walls rather than just punching a
              hole through the blockage. The method should be chosen based on
              the condition and construction of the drainage system — fragile
              or damaged pipes may need a different approach.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-6">
            {drJettingUses.map((u) => (
              <li key={u} className="rounded-full bg-sand-50/10 px-4 py-2 text-sm">{u}</li>
            ))}
          </ul>
        </div>

        {/* Camera */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-teal-700">Camera inspection</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950">When does a drain need camera inspection?</h2>
            <ul className="mt-6 space-y-2 text-sm text-ink-800">
              {drCameraWhen.map((c) => (
                <li key={c} className="flex gap-2">
                  <DrIcon name="camera" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl text-ink-950">What does the camera see?</h3>
            <p className="mt-1 text-sm text-ink-600">Examples of possible findings — not a claim about your pipe.</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="mx-auto w-full max-w-[260px]">
                <CameraView k={f} />
              </div>
              <div>
                <div role="radiogroup" aria-label="Example finding" className="flex flex-wrap gap-1.5">
                  {drFindings.map((x) => (
                    <button
                      key={x.key}
                      type="button"
                      role="radio"
                      aria-checked={f === x.key}
                      onClick={() => setF(x.key)}
                      className={`focus-ring rounded-full border px-3 py-1 text-xs transition-colors ${
                        f === x.key ? "border-teal-800 bg-teal-800 text-sand-50" : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
                      }`}
                    >
                      {x.label}
                    </button>
                  ))}
                </div>
                <p key={finding.key} className="mt-4 animate-fadeIn rounded-xl bg-concrete-100/60 p-4 text-sm leading-relaxed text-ink-800" aria-live="polite">
                  <span className="font-semibold">{finding.label}: </span>
                  {finding.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
