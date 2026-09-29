"use client";

import { useState } from "react";
import KcKitchenWall from "./KcKitchenWall";

type InspectId = "door" | "hinge" | "handle" | "drawer" | "runner" | "panel" | "edge";

const explanations: Record<InspectId, string> = {
  door: "The front panel that opens and closes.",
  hinge: "Lets the door swing on its axis — a common source of visible misalignment.",
  handle: "Used to open the door or drawer by hand.",
  drawer: "The sliding storage box, moving on its runner.",
  runner: "The track a drawer slides along inside the cabinet.",
  panel: "A flat surface section of the cabinet body or door.",
  edge: "The exposed border of a door or panel — prone to chipping over time.",
};

export default function KcInspectMode() {
  const [inspectMode, setInspectMode] = useState(false);
  const [selected, setSelected] = useState<InspectId | null>(null);

  return (
    <div>
      <div role="tablist" aria-label="View mode" className="mb-4 inline-flex rounded-full border border-walnut-900/15 bg-sand-50 p-1">
        {(["normal", "inspect"] as const).map((mode) => {
          const isActive = (mode === "inspect") === inspectMode;
          return (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setInspectMode(mode === "inspect");
                setSelected(null);
              }}
              className={`focus-ring rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                isActive ? "bg-walnut-700 text-sand-50" : "text-ink-700 hover:text-walnut-700"
              }`}
            >
              {mode === "normal" ? "Normal View" : "Inspect View"}
            </button>
          );
        })}
      </div>

      <KcKitchenWall inspectMode={inspectMode} onSelect={(id) => setSelected(id)} />

      {inspectMode && (
        <div className="mt-4 min-h-[3.5rem] rounded-md border border-glass-500/25 bg-ink-950/90 p-4">
          {selected ? (
            <>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-glass-300">{selected}</span>
              <p className="mt-1 text-sm text-sand-50">{explanations[selected]}</p>
            </>
          ) : (
            <p className="text-sm text-glass-300">Select a labeled component to see what it does.</p>
          )}
        </div>
      )}
    </div>
  );
}
