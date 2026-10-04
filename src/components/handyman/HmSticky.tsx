"use client";

import { buildTelLink } from "@/lib/site-config";
import HmIcon from "./HmIcon";
import { useJobs } from "./HmJobList";

// Mobile bar showing the live task count; a floating chip on desktop.
export default function HmSticky() {
  const { total } = useJobs();
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-5 py-3.5 text-sm font-semibold text-ink-950">
            <HmIcon name="phone" className="h-4 w-4" /> Call Now
          </a>
          <a href="#job-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3.5 text-sm font-semibold text-sand-50">
            My Job List
            <span className="rounded-full bg-ember-500 px-2 py-0.5 font-mono text-xs text-ink-950" aria-label={`${total} tasks`}>{total}</span>
          </a>
        </div>
      </div>
      {total > 0 && (
        <a href="#job-request" className="focus-ring fixed bottom-6 right-6 z-40 hidden animate-fadeIn items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-sand-50 shadow-2xl lg:inline-flex">
          <HmIcon name="maintain" className="h-4 w-4 text-ember-500" />
          My job list
          <span className="rounded-full bg-ember-500 px-2 py-0.5 font-mono text-xs text-ink-950">{total}</span>
        </a>
      )}
    </>
  );
}
