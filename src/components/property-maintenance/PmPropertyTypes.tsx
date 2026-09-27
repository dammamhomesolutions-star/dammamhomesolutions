"use client";

import { useState } from "react";
import { propertyTypes } from "@/lib/property-maintenance";

export default function PmPropertyTypes() {
  const [activeId, setActiveId] = useState(propertyTypes[0].id);
  const active = propertyTypes.find((t) => t.id === activeId)!;

  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Property types</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Different properties have different maintenance needs.
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Property types"
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-ink-900/10"
        >
          {propertyTypes.map((type) => {
            const isActive = type.id === activeId;
            return (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`property-type-panel-${type.id}`}
                onClick={() => setActiveId(type.id)}
                className={`focus-ring relative pb-4 text-[15px] font-medium transition-colors ${
                  isActive ? "text-ink-950" : "text-ink-500 hover:text-ink-800"
                }`}
              >
                {type.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-moss-700"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id={`property-type-panel-${active.id}`}
          role="tabpanel"
          key={active.id}
          className="mt-8 max-w-2xl animate-fadeIn"
        >
          <p className="text-lg leading-relaxed text-ink-700">{active.body}</p>
        </div>
      </div>
    </section>
  );
}
