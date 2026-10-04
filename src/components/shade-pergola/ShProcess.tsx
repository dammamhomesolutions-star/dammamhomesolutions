"use client";

import { useState } from "react";
import { shProcess } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Workbench view: stages as tabs on a technical sheet.
export default function ShProcess() {
  const [i, setI] = useState(0);

  return (
    <section id="process" aria-labelledby="sh-process" className="scroll-mt-20 bg-steel-900 py-20 text-sand-50 sm:py-28">
      <div className="container-edge">
        <Tag n="12" dark>How we work</Tag>
        <h2 id="sh-process" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight sm:text-5xl">From observation to final check</h2>
        <div className="mt-12 border border-steel-300/20">
          <div className="grid grid-cols-3 border-b border-steel-300/20 sm:grid-cols-6" role="group" aria-label="Stage">
            {shProcess.map((p, n) => (
              <button key={p.stage} type="button" aria-pressed={i === n} aria-controls="sh-stage" onClick={() => setI(n)} className={`focus-ring border-r border-steel-300/20 px-3 py-4 text-left transition-colors last:border-r-0 [&:nth-child(3)]:border-r-0 sm:[&:nth-child(3)]:border-r ${n < 3 ? "border-b border-steel-300/20 sm:border-b-0" : ""} ${i === n ? "bg-copper-600" : "hover:bg-steel-700/50"}`}>
                <span className={`block font-mono text-[10px] ${i === n ? "text-copper-100" : "text-steel-300"}`}>{String(n + 1).padStart(2, "0")}</span>
                <span className="mt-1 block font-mono text-xs uppercase tracking-[0.14em] sm:text-sm">{p.stage}</span>
              </button>
            ))}
          </div>
          <div id="sh-stage" aria-live="polite" className="grid gap-6 bg-[linear-gradient(rgba(183,191,198,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(183,191,198,0.06)_1px,transparent_1px)] bg-[size:24px_24px] p-6 sm:grid-cols-[10rem_1fr] sm:p-10">
            <p className="font-mono text-6xl font-light text-copper-500">{String(i + 1).padStart(2, "0")}</p>
            <div>
              <h3 className="font-serif text-3xl">{shProcess[i].stage}</h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel-300">{shProcess[i].text}</p>
            </div>
          </div>
        </div>
        <ol className="sr-only">{shProcess.map((p) => <li key={p.stage}>{p.stage}: {p.text}</li>)}</ol>
      </div>
    </section>
  );
}
