"use client";

import { useState } from "react";
import { pcComparison } from "@/lib/pest-control";
import PcCtas from "./PcCtas";

const cols = [
  { key: "signs", label: "Common signs" },
  { key: "areas", label: "Typical areas" },
  { key: "why", label: "Why inspection matters" },
  { key: "approach", label: "General approach" },
] as const;

// Comparison table with a row highlight; collapses to cards on small screens.
export default function PcComparison() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section aria-labelledby="pc-compare" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">At a glance</p>
          <h2 id="pc-compare" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Common pests compared
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            A quick reference. Tap a row to highlight it.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Common pests with their signs, typical areas, why inspection matters and the general control approach</caption>
            <thead className="hidden bg-moss-100 md:table-header-group">
              <tr>
                <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-moss-900">Pest</th>
                {cols.map((c) => (
                  <th key={c.key} scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-moss-900">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10">
              {pcComparison.map((row) => {
                const on = active === row.pest;
                return (
                  <tr
                    key={row.pest}
                    onClick={() => setActive(on ? null : row.pest)}
                    className={`block cursor-pointer transition-colors md:table-row ${on ? "bg-moss-100/70" : "hover:bg-sand-100/70"}`}
                  >
                    <th scope="row" className="block px-4 pb-1 pt-4 font-semibold text-ink-950 md:table-cell md:py-4">
                      {row.pest}
                    </th>
                    {cols.map((c) => (
                      <td key={c.key} className="block px-4 py-1 text-ink-700 md:table-cell md:py-4 last:pb-4">
                        <span className="font-medium text-ink-500 md:hidden">{c.label}: </span>
                        {row[c.key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <PcCtas className="mt-8" />
      </div>
    </section>
  );
}
