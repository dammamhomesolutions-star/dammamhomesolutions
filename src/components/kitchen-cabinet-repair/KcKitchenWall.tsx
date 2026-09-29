"use client";

import { useState } from "react";

type InspectId = "door" | "hinge" | "handle" | "drawer" | "runner" | "panel" | "edge";

interface KcKitchenWallProps {
  inspectMode?: boolean;
  onSelect?: (id: InspectId) => void;
}

const labelPositions: { id: InspectId; label: string; x: string; y: string }[] = [
  { id: "door", label: "DOOR", x: "22%", y: "62%" },
  { id: "hinge", label: "HINGE", x: "9%", y: "58%" },
  { id: "handle", label: "HANDLE", x: "34%", y: "70%" },
  { id: "drawer", label: "DRAWER", x: "58%", y: "80%" },
  { id: "runner", label: "RUNNER", x: "58%", y: "95%" },
  { id: "panel", label: "PANEL", x: "82%", y: "62%" },
  { id: "edge", label: "EDGE", x: "82%", y: "38%" },
];

export default function KcKitchenWall({ inspectMode = false, onSelect }: KcKitchenWallProps) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [doorAngle, setDoorAngle] = useState(0);
  const [handleActive, setHandleActive] = useState(false);
  const [hingeActive, setHingeActive] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [panelInspected, setPanelInspected] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<InspectId | null>(null);

  const select = (id: InspectId) => {
    setSelectedLabel(id);
    onSelect?.(id);
  };

  const toggleDoor = () => {
    setDoorOpen((v) => {
      const next = !v;
      setDoorAngle(next ? -68 : 0);
      return next;
    });
    select("door");
  };

  const toggleHandle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setHandleActive((v) => !v);
    select("handle");
  };

  const toggleHinge = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setHingeActive((v) => {
      const next = !v;
      setDoorAngle(next ? -20 : doorOpen ? -68 : 0);
      return next;
    });
    select("hinge");
  };

  const toggleDrawer = () => {
    setDrawerOpen((v) => !v);
    select("drawer");
  };

  const togglePanel = () => {
    setPanelInspected((v) => !v);
    select("panel");
  };

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-md border border-walnut-900/15 bg-gradient-to-b from-sand-50 to-sand-100 p-4 sm:p-6"
        style={{ perspective: "1400px" }}
      >
        {/* wall */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${inspectMode ? "bg-ink-950/55" : "bg-transparent"}`} />

        <div className="relative">
          {/* upper cabinets */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-16 flex-1 rounded-sm border border-walnut-900/20 sm:h-20"
                style={{
                  background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                  opacity: inspectMode ? 0.35 : 1,
                  transition: "opacity 400ms ease-out",
                }}
              >
                <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-steel-300/70" />
              </div>
            ))}
          </div>

          {/* countertop */}
          <div
            className="relative mt-3 h-3 rounded-sm sm:h-4"
            style={{ background: "linear-gradient(180deg, #eceef0, #b7bfc6)" }}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/60" />
          </div>

          {/* lower cabinets */}
          <div className="mt-3 flex gap-2" style={{ transformStyle: "preserve-3d" }}>
            {/* Unit A: interactive door with handle + hinge */}
            <div className="relative h-40 flex-[1.2] overflow-visible rounded-sm sm:h-48" style={{ transformStyle: "preserve-3d" }}>
              {/* cabinet interior, revealed when door opens */}
              <div className="pointer-events-none absolute inset-0 rounded-sm border border-walnut-900/30 bg-ink-950/85">
                <div className="absolute inset-2 rounded-sm border border-dashed border-steel-300/30" />
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={toggleDoor}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDoor();
                  }
                }}
                aria-pressed={doorOpen}
                aria-label="Cabinet door — click to open or close"
                className="focus-ring absolute inset-0 rounded-sm border border-walnut-900/25 shadow-md"
                style={{
                  background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                  transformOrigin: "left center",
                  transform: `rotateY(${doorAngle}deg)`,
                  transition: "transform 620ms cubic-bezier(0.65,0,0.35,1)",
                  transformStyle: "preserve-3d",
                  opacity: inspectMode ? 0.5 : 1,
                }}
              >
                {panelInspected && (
                  <span className="pointer-events-none absolute inset-3 rounded-sm border border-dashed border-glass-500/60" />
                )}

                {/* hinge markers, left edge */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={toggleHinge}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleHinge(e);
                    }
                  }}
                  aria-pressed={hingeActive}
                  aria-label="Hinge — click to inspect"
                  className="absolute -left-1 top-1/4 h-6 w-3 rounded-sm border border-steel-900/40"
                  style={{
                    background: "#838d96",
                    opacity: hingeActive ? 1 : 0.55,
                    boxShadow: hingeActive ? "0 0 0 3px rgba(127,160,176,0.4)" : "none",
                    transition: "opacity 250ms, box-shadow 250ms",
                  }}
                />
                <span
                  role="button"
                  tabIndex={0}
                  onClick={toggleHinge}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleHinge(e);
                    }
                  }}
                  aria-hidden="true"
                  className="absolute -left-1 bottom-1/4 h-6 w-3 rounded-sm border border-steel-900/40"
                  style={{
                    background: "#838d96",
                    opacity: hingeActive ? 1 : 0.55,
                    boxShadow: hingeActive ? "0 0 0 3px rgba(127,160,176,0.4)" : "none",
                    transition: "opacity 250ms, box-shadow 250ms",
                  }}
                />

                {/* handle, right edge */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={toggleHandle}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleHandle(e);
                    }
                  }}
                  aria-pressed={handleActive}
                  aria-label="Handle — click to highlight"
                  className="absolute right-2 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-full"
                  style={{
                    background: "#eceef0",
                    boxShadow: handleActive ? "0 0 0 5px rgba(184,204,212,0.55)" : "0 1px 2px rgba(0,0,0,0.3)",
                    transition: "box-shadow 250ms",
                  }}
                />
              </div>
            </div>

            {/* Unit B: drawer stack */}
            <div className="relative h-40 flex-1 sm:h-48">
              <div className="absolute inset-0 flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={toggleDrawer}
                  aria-pressed={drawerOpen}
                  aria-label="Drawer — click to open or close"
                  className="focus-ring relative flex-1 rounded-sm border border-walnut-900/25 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #a67c5b, #6b4a35)",
                    transform: drawerOpen ? "translateZ(38px) scale(1.04)" : "translateZ(0px)",
                    transition: "transform 480ms cubic-bezier(0.34,1.56,0.64,1)",
                    opacity: inspectMode ? 0.5 : 1,
                    boxShadow: drawerOpen ? "0 14px 18px -8px rgba(20,24,31,0.45)" : undefined,
                  }}
                >
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-100" />
                </button>
                <div
                  className="flex-1 rounded-sm border border-walnut-900/25"
                  style={{ background: "linear-gradient(135deg, #8a6248, #513825)", opacity: inspectMode ? 0.35 : 1 }}
                />
              </div>
            </div>

            {/* Unit C: plain panel for surface inspection */}
            <div className="relative h-40 flex-1 sm:h-48">
              <button
                type="button"
                onClick={togglePanel}
                aria-pressed={panelInspected}
                aria-label="Cabinet panel — click to inspect the surface"
                className="focus-ring relative h-full w-full rounded-sm border border-walnut-900/25 shadow-sm"
                style={{ background: "linear-gradient(135deg, #a67c5b, #6b4a35)", opacity: inspectMode ? 0.5 : 1 }}
              >
                {panelInspected && (
                  <>
                    <span className="pointer-events-none absolute inset-3 rounded-sm border border-dashed border-glass-500/70" />
                    <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink-950/80 px-2.5 py-1 text-[10px] font-medium text-sand-50">
                      Surface inspected
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* inspect-mode technical labels */}
        {inspectMode &&
          labelPositions.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => select(l.id)}
              aria-pressed={selectedLabel === l.id}
              style={{ left: l.x, top: l.y }}
              className={`focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-sm border px-2 py-1 font-mono text-[10px] tracking-[0.12em] transition-colors ${
                selectedLabel === l.id
                  ? "border-glass-100 bg-glass-600 text-sand-50"
                  : "border-glass-300/60 bg-ink-950/80 text-glass-200 hover:border-glass-100"
              }`}
            >
              {l.label}
            </button>
          ))}
      </div>

      <p className="mt-3 text-xs text-ink-500">
        <span className="hidden sm:inline">Click a door, drawer, handle, hinge or panel to inspect it.</span>
        <span className="sm:hidden">Tap a door, drawer, handle, hinge or panel to inspect it.</span>
      </p>
    </div>
  );
}
