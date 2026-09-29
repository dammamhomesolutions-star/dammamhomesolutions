"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";

const jobs = [
  "Broken or misaligned door",
  "Lock or hinge repair",
  "Damaged wall in need of patching",
  "Interior painting touch-up",
  "Loose or cracked tiles",
  "Fixture that needs replacing",
  "Minor carpentry / cabinet repair",
  "General repair — not listed here",
];

export default function RepairChecklist() {
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
    const base = "Hello Dammam Home Solutions, here's my repair list:";
    if (checked.size === 0) {
      return `${base} (add your items here)`;
    }
    const list = Array.from(checked)
      .map((j) => `- ${j}`)
      .join("\n");
    return `${base}\n${list}`;
  }, [checked]);

  return (
    <section id="home-repairs" className="py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="section-label">Home repairs</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            The jobs that keep getting put off.
          </h2>
          <p className="mt-4 text-ink-700">
            Small jobs are easy to postpone one at a time, but they add up.
            Tick what applies and send it straight through — one message
            covers all of it.
          </p>
          <p className="mt-4 hidden text-sm text-ink-500 lg:block">
            Nothing you select here is sent anywhere until you press the
            WhatsApp button.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8">
          <ul className="divide-y divide-ink-900/10">
            {jobs.map((job) => {
              const isChecked = checked.has(job);
              return (
                <li key={job}>
                  <label className="focus-within:bg-ink-900/5 flex cursor-pointer items-center gap-3.5 py-3.5 text-[15px] text-ink-800 transition-colors hover:bg-ink-900/5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(job)}
                      className="focus-ring h-4.5 w-4.5 flex-none rounded border-ink-900/30 text-rust-700 accent-rust-700"
                    />
                    <span className={isChecked ? "text-ink-950" : undefined}>{job}</span>
                  </label>
                </li>
              );
            })}
          </ul>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-rust-700 px-6 py-3.5 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            Send us your repair list
          </a>
        </div>
      </div>
    </section>
  );
}
