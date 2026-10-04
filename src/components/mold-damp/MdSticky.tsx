"use client";

import { buildTelLink } from "@/lib/site-config";
import { useReport } from "./MdReport";

// Mobile bar with the number of report entries; desktop floating chip.
export default function MdSticky() {
  const { locations, signs } = useReport();
  const n = locations.length + signs.length;
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center rounded-lg border border-ink-900/20 px-5 py-3.5 text-sm font-semibold text-ink-950">Call</a>
          <a href="#report" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-glass-900 px-5 py-3.5 text-sm font-semibold text-sand-50">
            {n ? "My Damp Report" : "Request a Damp Assessment"}
            {n > 0 && <span className="rounded bg-glass-300 px-2 py-0.5 font-mono text-xs text-glass-900" aria-label={`${n} items`}>{n}</span>}
          </a>
        </div>
      </div>
      {n > 0 && (
        <a href="#report" className="focus-ring fixed bottom-6 right-6 z-40 hidden animate-fadeIn items-center gap-2 rounded-lg bg-glass-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-2xl lg:inline-flex">
          Damp report <span className="rounded bg-glass-300 px-2 py-0.5 font-mono text-xs text-glass-900">{n}</span>
        </a>
      )}
    </>
  );
}
