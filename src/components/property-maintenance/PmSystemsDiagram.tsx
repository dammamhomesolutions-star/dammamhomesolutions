"use client";

import { useState } from "react";
import Link from "next/link";
import { systemNodes } from "@/lib/property-maintenance";

const COUNT = systemNodes.length;
const VIEW_W = 1040;
const VIEW_H = 210;
const TRUNK_X = VIEW_W / 2;
const BUS_Y = 78;
const LEAF_Y = 150;
const MARGIN = 60;
const STEP = (VIEW_W - MARGIN * 2) / (COUNT - 1);

export default function PmSystemsDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = systemNodes.find((n) => n.id === activeId) ?? null;

  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">One property, many systems</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A property is a collection of systems.
          </h2>
          <p className="mt-4 text-ink-600">
            Cooling, water, power, surfaces and fixtures all sit inside the
            same property. Select one below to see how it connects to a
            service.
          </p>
        </div>

        <div className="mt-12">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            aria-hidden="true"
            className="h-auto w-full"
          >
            <rect
              x={TRUNK_X - 90}
              y={16}
              width={180}
              height={40}
              rx={2}
              fill="#191d25"
            />
            <text
              x={TRUNK_X}
              y={41}
              textAnchor="middle"
              fontSize="13"
              letterSpacing="1.5"
              fill="#faf8f4"
              fontFamily="var(--font-poppins), sans-serif"
            >
              PROPERTY
            </text>

            <line x1={TRUNK_X} y1={56} x2={TRUNK_X} y2={BUS_Y} stroke="#b4bac6" strokeWidth="1.4" />
            <line x1={MARGIN} y1={BUS_Y} x2={VIEW_W - MARGIN} y2={BUS_Y} stroke="#b4bac6" strokeWidth="1.4" />

            {systemNodes.map((node, i) => {
              const x = MARGIN + i * STEP;
              const isActive = node.id === activeId;
              return (
                <g key={node.id}>
                  <line
                    x1={x}
                    y1={BUS_Y}
                    x2={x}
                    y2={LEAF_Y}
                    stroke={isActive ? "#5f7050" : "#b4bac6"}
                    strokeWidth={isActive ? 2 : 1.4}
                  />
                  <circle
                    cx={x}
                    cy={LEAF_Y}
                    r={4}
                    fill={isActive ? "#5f7050" : "#b4bac6"}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div
          role="group"
          aria-label="Property systems"
          className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8"
        >
          {systemNodes.map((node) => {
            const isActive = node.id === activeId;
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(isActive ? null : node.id)}
                className={`focus-ring rounded-sm border px-3 py-3 text-left transition-colors ${
                  isActive
                    ? "border-moss-600 bg-moss-100"
                    : "border-ink-900/10 hover:border-moss-600/60"
                }`}
              >
                <span
                  className={`block text-sm font-medium ${
                    isActive ? "text-moss-800" : "text-ink-800"
                  }`}
                >
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-6 min-h-[3.5rem] border-t border-ink-900/10 pt-6"
        >
          {active ? (
            <p className="animate-fadeIn text-sm text-ink-700">
              <span className="text-ink-500">{active.note}.</span>{" "}
              <Link
                href={active.href}
                className="focus-ring font-semibold text-ink-950 underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700"
              >
                {active.linkLabel}
              </Link>
            </p>
          ) : (
            <p className="text-sm text-ink-400">
              Select a system above to see how it connects to a service.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
