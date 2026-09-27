"use client";

import { useState } from "react";
import { repairCategories } from "@/lib/repair-categories";
import { buildWhatsAppLink } from "@/lib/site-config";
import HouseSilhouette from "./HouseSilhouette";

export default function HouseRepairMap() {
  const [activeId, setActiveId] = useState(repairCategories[0].id);
  const active = repairCategories.find((c) => c.id === activeId)!;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-indigo-700">One home, many possible repair types</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The repair router.
          </h2>
          <p className="mt-4 text-ink-700">
            Pick the part of the house this relates to. This is
            conceptual, not a diagnosis — it points you toward the right
            place to start.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="flex justify-center rounded-2xl border border-ink-900/10 bg-sand-50 p-6 lg:justify-start">
            <HouseSilhouette active={activeId} />
          </div>

          <div>
            <div role="tablist" aria-label="Repair categories" className="flex flex-wrap gap-2">
              {repairCategories.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(cat.id)}
                    className={`focus-ring rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-indigo-700 bg-indigo-700/10 text-indigo-800"
                        : "border-ink-900/10 bg-sand-50 text-ink-700 hover:border-ink-900/25"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-5 animate-fadeUp rounded-2xl border border-ink-900/10 bg-stone-100/60 p-6 sm:p-7">
              <h3 className="font-serif text-lg text-ink-950">{active.label}</h3>
              <p className="mt-3 text-sm font-semibold text-ink-500">What you might notice</p>
              <ul className="mt-1.5 flex flex-wrap gap-2">
                {active.notice.map((n) => (
                  <li key={n} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-700">
                    {n}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-semibold text-ink-500">Possible service area</p>
              <p className="mt-1.5 flex flex-wrap gap-x-2 text-sm">
                {active.serviceArea.map((s, i) => (
                  <span key={s.href}>
                    <a href={s.href} className="text-indigo-700 underline underline-offset-4 hover:text-indigo-800">
                      {s.label}
                    </a>
                    {i < active.serviceArea.length - 1 ? "," : ""}
                  </span>
                ))}
              </p>

              <p className="mt-4 text-sm font-semibold text-ink-500">What helps us assess it</p>
              <p className="mt-1.5 text-sm text-ink-700">{active.helps}</p>

              <a
                href={buildWhatsAppLink(`Hello Dammam Home Solutions, I have a problem related to: ${active.label}. Here's what I'm noticing: `)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center rounded-full bg-rust-700 px-5 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Send a Photo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
