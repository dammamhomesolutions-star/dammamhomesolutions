"use client";

import { useState } from "react";
import { rnCommercial, rnCommercialConsider, rnMoveIn, rnRental } from "@/lib/renovation";
import { Check, Eyebrow } from "./RnUi";

const tabs = [
  { key: "move-in", label: "Moving in" },
  { key: "rental", label: "Rental & property refresh" },
  { key: "commercial", label: "Commercial" },
] as const;
type Tab = (typeof tabs)[number]["key"];

// Three renovation pathways. Every panel stays in the HTML.
export default function RnPathways() {
  const [tab, setTab] = useState<Tab>("move-in");
  const [done, setDone] = useState<string[]>([]);
  const total = rnMoveIn.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="pathways" aria-labelledby="rn-paths" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="11">Renovation pathways</Eyebrow>
            <h2 id="rn-paths" className="mt-5 font-serif text-4xl font-light tracking-tight text-ink-950 sm:text-5xl">A new phase for the property</h2>
          </div>
          <div className="flex flex-wrap gap-0 border border-ink-950/15 lg:col-span-5 lg:justify-self-end" role="group" aria-label="Pathway">
            {tabs.map((t) => (
              <button key={t.key} type="button" aria-pressed={tab === t.key} aria-controls={`rn-path-${t.key}`} onClick={() => setTab(t.key)} className={`focus-ring flex-1 whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${tab === t.key ? "bg-ink-950 text-sand-50" : "text-ink-800 hover:bg-sand-100"}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div id="rn-path-move-in" hidden={tab !== "move-in"} className="mt-12 grid [&[hidden]]:hidden gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl text-ink-950">Renovating before you move in?</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Empty rooms are the easiest rooms to renovate. Floors, walls, ceilings
              and lighting can be done in a clear order without moving furniture
              around — and you start life in the home with the work behind you.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">Checklist</p>
            <p className="font-serif text-4xl text-ink-950" aria-live="polite">{done.length}<span className="text-ink-400">/{total}</span></p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-ink-950/10 lg:col-span-8">
            {rnMoveIn.map((g) => (
              <fieldset key={g.group} className="bg-sand-50 p-4 sm:p-5">
                <legend className="sr-only">{g.group}</legend>
                <p aria-hidden="true" className="font-serif text-xl text-ink-950">{g.group}</p>
                <ul className="mt-3 space-y-1">
                  {g.items.map((it) => {
                    const id = `${g.group}:${it}`;
                    const on = done.includes(id);
                    return (
                      <li key={it}>
                        <label className="flex cursor-pointer items-center gap-3 py-1.5 text-sm text-ink-800 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-walnut-600">
                          <input type="checkbox" checked={on} onChange={() => setDone((d) => (on ? d.filter((x) => x !== id) : [...d, id]))} className="sr-only" />
                          <span aria-hidden="true" className={`flex h-4 w-4 flex-none items-center justify-center border ${on ? "border-walnut-700 bg-walnut-700 text-sand-50" : "border-ink-950/30"}`}>{on && <Check className="h-3 w-3" />}</span>
                          <span className={on ? "text-ink-950" : ""}>{it}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            ))}
          </div>
        </div>

        <div id="rn-path-rental" hidden={tab !== "rental"} className="mt-12 grid [&[hidden]]:hidden gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl text-ink-950">Preparing a property for its next occupant?</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Between tenants — or before a sale — the aim is a property that
              presents well and works properly. We don&rsquo;t promise higher rents or
              faster lettings; we make the property ready.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {rnRental.map((r, n) => (
              <li key={r.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink-950/10 py-5 sm:grid-cols-[2.5rem_14rem_1fr]">
                <span className="font-mono text-xs text-walnut-700">{String(n + 1).padStart(2, "0")}</span>
                <h4 className="font-serif text-xl text-ink-950">{r.title}</h4>
                <p className="col-start-2 text-sm leading-relaxed text-ink-600 sm:col-start-3">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div id="rn-path-commercial" hidden={tab !== "commercial"} className="mt-12 grid [&[hidden]]:hidden gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl text-ink-950">Commercial and small-business renovation</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The same planning approach applies to working spaces — with extra
              attention to access, scheduling and keeping the business running.
            </p>
            <ul className="mt-6 space-y-3">
              {rnCommercial.map((c) => (
                <li key={c.title}>
                  <p className="text-sm font-semibold text-ink-950">{c.title}</p>
                  <p className="text-sm text-ink-600">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-px bg-ink-950/10 sm:grid-cols-2 lg:col-span-8">
            {rnCommercialConsider.map((c) => (
              <div key={c.title} className="bg-sand-100 p-6">
                <h4 className="font-serif text-xl text-ink-950">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.text}</p>
              </div>
            ))}
            <div className="bg-ink-950 p-6 text-sand-100">
              <p className="text-sm leading-relaxed">Permits and building approvals depend on the property and the work. Check with your landlord or building management before work begins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
