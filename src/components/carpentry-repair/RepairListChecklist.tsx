"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const jobs = [
  "Bedroom door",
  "Loose handle",
  "Cabinet hinge",
  "Lock",
  "Drawer",
  "Other",
];

export default function RepairListChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (job: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(job)) next.delete(job);
      else next.add(job);
      return next;
    });
  };

  const message = useMemo(() => {
    const base = "Hi, I have a few small door/carpentry jobs in Dammam:";
    if (checked.size === 0) return `${base} (add your items here)`;
    const list = Array.from(checked).map((j) => `- ${j}`).join("\n");
    return `${base}\n${list}`;
  }, [checked]);

  return (
    <section className="border-y border-ink-900/10 bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
            One message, several jobs
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Have a list instead of one problem?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            Several small jobs are common — a bedroom door, a loose
            handle, a cabinet hinge. Instead of separate requests, tick
            what applies and send it as one message.
          </p>
        </div>

        <div className="rounded-2xl border border-sand-100/15 bg-ink-900 p-6 sm:p-8">
          <ul className="divide-y divide-sand-100/10">
            {jobs.map((job) => {
              const isChecked = checked.has(job);
              return (
                <li key={job}>
                  <label className="flex cursor-pointer items-center gap-3.5 py-3.5 text-[15px] text-sand-100 transition-colors hover:bg-sand-100/5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(job)}
                      className="focus-ring h-4.5 w-4.5 flex-none rounded border-sand-100/30 text-amber-600 accent-amber-600"
                    />
                    <span className={isChecked ? "text-sand-50" : undefined}>{job}</span>
                  </label>
                </li>
              );
            })}
          </ul>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            Send My Repair List
          </a>
        </div>
      </div>
    </section>
  );
}
