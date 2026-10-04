"use client";

import { useState } from "react";
import { scMaterials } from "@/lib/sofa-carpet-cleaning";
import ScIcon from "./ScIcon";

// Woven swatch per material so the selector reads visually, not just as text.
function Swatch({ k }: { k: string }) {
  const map: Record<string, { bg: string; line: string; pattern: "weave" | "pile" | "smooth" | "unknown" }> = {
    cotton: { bg: "#f2e6d5", line: "#cdab8f", pattern: "weave" },
    polyester: { bg: "#d7e4ea", line: "#7fa0b0", pattern: "weave" },
    microfiber: { bg: "#b8ccd4", line: "#5b7d8f", pattern: "smooth" },
    velvet: { bg: "#3d5a6b", line: "#7fa0b0", pattern: "pile" },
    blend: { bg: "#eae7de", line: "#9a968a", pattern: "weave" },
    wool: { bg: "#ded2ba", line: "#9c7752", pattern: "pile" },
    leather: { bg: "#6b4a35", line: "#a67c5b", pattern: "smooth" },
    unknown: { bg: "#eef3f5", line: "#9a968a", pattern: "unknown" },
  };
  const m = map[k];
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 flex-none rounded-lg" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill={m.bg} />
      {m.pattern === "weave" && <path d="M0 10h40M0 20h40M0 30h40M10 0v40M20 0v40M30 0v40" stroke={m.line} strokeWidth="1.2" />}
      {m.pattern === "pile" && <path d="M6 34V24M12 34V22M18 34V25M24 34V21M30 34V24M36 34V23" stroke={m.line} strokeWidth="2" strokeLinecap="round" />}
      {m.pattern === "smooth" && <path d="M6 28c8-6 20-6 28 0" stroke={m.line} strokeWidth="1.5" fill="none" />}
      {m.pattern === "unknown" && <text x="20" y="27" textAnchor="middle" fontSize="18" fill={m.line} fontFamily="serif">?</text>}
    </svg>
  );
}

export default function ScMaterials() {
  const [key, setKey] = useState("cotton");
  const m = scMaterials.find((x) => x.key === key)!;

  return (
    <section id="materials" aria-labelledby="sc-materials" className="border-b border-ink-900/10 bg-glass-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">Material matters</p>
          <h2 id="sc-materials" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not every sofa fabric should be cleaned the same way
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Choose a material to see what&rsquo;s checked before cleaning. This
            is guidance only — we confirm the material on inspection.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div role="radiogroup" aria-label="Material" className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-5 lg:grid-cols-2">
            {scMaterials.map((x) => {
              const on = x.key === key;
              return (
                <button
                  key={x.key}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setKey(x.key)}
                  className={`focus-ring flex items-center gap-3 rounded-xl border p-2.5 text-left text-sm transition-colors ${
                    on ? "border-glass-800 bg-sand-50 font-semibold text-ink-950 ring-2 ring-glass-600" : "border-ink-900/10 bg-sand-50 text-ink-700 hover:border-ink-900/30"
                  }`}
                >
                  <Swatch k={x.key} />
                  {x.label}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div key={m.key} className="animate-fadeIn rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8" aria-live="polite">
              <h3 className="font-serif text-2xl text-ink-950">{m.label}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">What needs checking</dt>
                  <dd className="mt-1 leading-relaxed text-ink-800">{m.check}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Potential considerations</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{m.considerations}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">Why testing matters</dt>
                  <dd className="mt-1 leading-relaxed text-ink-700">{m.testing}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
              <div className="flex items-center gap-3">
                <ScIcon name="search" className="h-6 w-6 text-glass-300" />
                <h3 className="font-serif text-2xl">Why a small test area matters</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Before the full clean, a small, hidden area is tested to see
                how the material responds. It helps evaluate:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Colour stability", "Material response", "Cleaning compatibility"].map((t) => (
                  <li key={t} className="rounded-full bg-sand-50/10 px-3 py-1">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-300">
                Testing is one part of a responsible cleaning assessment — it
                reduces risk but can&rsquo;t remove it entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
