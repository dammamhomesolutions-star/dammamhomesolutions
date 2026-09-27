"use client";

import { useState } from "react";
import Link from "next/link";
import { whatWeMaintainCategories } from "@/lib/property-maintenance";

export default function PmWhatWeMaintain() {
  const [activeId, setActiveId] = useState(whatWeMaintainCategories[0].id);
  const active = whatWeMaintainCategories.find((c) => c.id === activeId)!;

  return (
    <section id="what-we-maintain" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">What we maintain</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The categories property maintenance usually falls into.
          </h2>
        </div>

        <label htmlFor="pm-category-select" className="sr-only">
          Choose a category
        </label>
        <select
          id="pm-category-select"
          value={activeId}
          onChange={(e) => setActiveId(e.target.value)}
          className="focus-ring mt-8 w-full rounded-md border border-ink-900/15 bg-sand-50 px-4 py-3 text-sm font-medium text-ink-900 lg:hidden"
        >
          {whatWeMaintainCategories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>

        <div className="mt-4 grid gap-10 lg:mt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <nav aria-label="Maintenance categories" className="hidden lg:block">
            <ul className="space-y-1 border-t border-ink-900/10">
              {whatWeMaintainCategories.map((c, i) => {
                const isActive = c.id === activeId;
                return (
                  <li key={c.id} className="border-b border-ink-900/10">
                    <button
                      type="button"
                      aria-current={isActive}
                      onClick={() => setActiveId(c.id)}
                      className="focus-ring flex w-full items-baseline gap-4 py-3.5 text-left"
                    >
                      <span className="font-mono text-xs text-ink-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[15px] font-medium transition-colors ${
                          isActive ? "text-moss-700" : "text-ink-700 hover:text-ink-950"
                        }`}
                      >
                        {c.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div key={active.id} className="animate-fadeIn max-w-2xl border-t border-moss-700 pt-6 lg:border-t-2">
            <h3 className="font-serif text-xl text-ink-950">{active.label}</h3>
            <p className="mt-1 text-sm font-medium text-ink-500">{active.summary}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{active.body}</p>
            <Link
              href={active.href}
              className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700"
            >
              {active.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
