"use client";

import { buildTelLink } from "@/lib/site-config";
import { usePlan } from "./RnPlan";

// Mobile bar with the live room count; a small floating plan chip on desktop.
export default function RnSticky() {
  const { roomLabels, work } = usePlan();
  const n = roomLabels.length;
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-950/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center border border-ink-950/25 px-5 py-3.5 text-sm font-semibold text-ink-950">Call</a>
          <a href="#request" className="focus-ring inline-flex items-center justify-center gap-2 bg-ink-950 px-5 py-3.5 text-sm font-semibold text-sand-50">
            {n ? "My Renovation Plan" : "Plan My Renovation"}
            {n > 0 && <span className="bg-ember-500 px-2 py-0.5 font-mono text-xs text-ink-950" aria-label={`${n} rooms`}>{n}</span>}
          </a>
        </div>
      </div>
      {(n > 0 || work.length > 0) && (
        <a href="#request" className="focus-ring fixed bottom-6 right-6 z-40 hidden animate-fadeIn items-center gap-3 bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50 shadow-2xl lg:inline-flex">
          Renovation plan
          <span className="font-mono text-xs text-ember-500">{n} room{n === 1 ? "" : "s"} · {work.length} item{work.length === 1 ? "" : "s"}</span>
        </a>
      )}
    </>
  );
}
