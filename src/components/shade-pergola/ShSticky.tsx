"use client";

import { buildTelLink } from "@/lib/site-config";
import { useShade } from "./ShPlan";

// Mobile bar with the number of noted issues; desktop floating chip.
export default function ShSticky() {
  const { issues, mainIssue } = useShade();
  const n = issues.length + (mainIssue ? 1 : 0);
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-steel-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center border border-steel-900/25 px-5 py-3.5 text-sm font-semibold text-ink-950">Call</a>
          <a href="#request" className="focus-ring inline-flex items-center justify-center gap-2 bg-copper-600 px-5 py-3.5 text-sm font-semibold text-sand-50">
            {n ? "My Shade Request" : "Request a Shade Assessment"}
            {n > 0 && <span className="bg-steel-900 px-2 py-0.5 font-mono text-xs" aria-label={`${n} items noted`}>{n}</span>}
          </a>
        </div>
      </div>
      {n > 0 && (
        <a href="#request" className="focus-ring fixed bottom-6 right-6 z-40 hidden animate-fadeIn items-center gap-2 bg-steel-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-2xl lg:inline-flex">
          Shade request <span className="bg-copper-600 px-2 py-0.5 font-mono text-xs">{n}</span>
        </a>
      )}
    </>
  );
}
