"use client";

import { useState } from "react";
import Link from "next/link";
import { whatHappenedCategories, type ProblemCategoryId } from "@/lib/emergency-repairs";

export default function EhWhatHappened() {
  const [categoryId, setCategoryId] = useState<ProblemCategoryId | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);

  const active = whatHappenedCategories.find((c) => c.id === categoryId) ?? null;

  const selectCategory = (id: ProblemCategoryId) => {
    setCategoryId((current) => (current === id ? null : id));
    setSubcategory(null);
  };

  return (
    <section id="what-happened" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Start here</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What happened?
          </h2>
          <p className="mt-4 text-ink-600">
            Choose the option closest to what you&rsquo;re seeing. This
            isn&rsquo;t a diagnosis — just a starting point.
          </p>
        </div>

        <div
          role="group"
          aria-label="What happened"
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {whatHappenedCategories.map((cat) => {
            const isActive = cat.id === categoryId;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectCategory(cat.id)}
                className={`focus-ring flex min-h-[84px] flex-col justify-center rounded-md border px-5 py-4 text-left transition-colors ${
                  isActive
                    ? "border-ember-600 bg-ember-100/60"
                    : "border-ink-900/10 bg-sand-50 hover:border-ember-600/50"
                }`}
              >
                <span
                  className={`text-[15px] font-semibold ${isActive ? "text-ember-900" : "text-ink-900"}`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {active && (
          <div key={active.id} className="mt-8 animate-fadeIn rounded-md border border-ink-900/10 bg-sand-100/60 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Tell us a little more
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {active.subcategories.map((sub) => {
                const isSelected = sub === subcategory;
                return (
                  <button
                    key={sub}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSubcategory(isSelected ? null : sub)}
                    className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isSelected
                        ? "border-ember-700 bg-ember-700 text-sand-50"
                        : "border-ink-900/15 text-ink-700 hover:border-ember-600"
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-600">{active.note}</p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {active.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 underline decoration-ember-600 decoration-2 underline-offset-4 hover:text-ember-700"
                >
                  {route.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
