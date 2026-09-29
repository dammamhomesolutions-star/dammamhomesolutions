"use client";

import { useState } from "react";

const MAX_MONTHS = 24;

function statusFor(months: number) {
  if (months <= 6) return { label: "Generally fine", tone: "text-mint-700" };
  if (months <= 12) return { label: "Worth keeping an eye on", tone: "text-copper-700" };
  return { label: "Cleaning recommended", tone: "text-rust-700" };
}

export default function WtBuildupSimulator() {
  const [months, setMonths] = useState(3);
  const sedimentHeight = 8 + (months / MAX_MONTHS) * 90;
  const murkiness = Math.min(1, months / MAX_MONTHS);
  const status = statusFor(months);

  return (
    <section id="buildup-simulator" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-mint-300">See it build up</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            Drag the slider forward in time.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            An illustrative simulation of how sediment can accumulate in a
            tank over time without cleaning — not a model of your specific
            tank.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-md border border-sand-50/10 bg-ink-900 p-6">
            <svg viewBox="0 0 200 240" className="h-auto w-full" aria-hidden="true">
              <title>A water tank cross-section showing sediment building up at the bottom over time</title>
              <rect x="30" y="20" width="140" height="200" rx="10" fill="none" stroke="#4a5468" strokeWidth="3" />
              <rect x="34" y="24" width="132" height={192 - sedimentHeight} fill="url(#wt-clean-water)" style={{ opacity: 1 - murkiness * 0.55 }} />
              <rect x="34" y="24" width="132" height={192 - sedimentHeight} fill="url(#wt-murky-water)" style={{ opacity: murkiness * 0.55 }} />
              <rect x="34" y={216 - sedimentHeight} width="132" height={sedimentHeight} fill="url(#wt-sediment)" />
            </svg>
          </div>

          <div>
            <label htmlFor="months-slider" className="block text-sm font-medium text-ink-200">
              Months since last cleaning: <span className="font-semibold text-sand-50">{months}</span>
            </label>
            <input
              id="months-slider"
              type="range"
              min={0}
              max={MAX_MONTHS}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-4 w-full max-w-md accent-mint-500"
            />
            <div className="mt-2 flex max-w-md justify-between text-xs text-ink-400">
              <span>0</span>
              <span>{MAX_MONTHS} months</span>
            </div>

            <p key={status.label} className={`mt-6 animate-fadeIn text-sm font-semibold ${status.tone}`}>
              {status.label}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">
              Sediment tends to build up gradually rather than all at once —
              which is part of why it&rsquo;s easy to miss until it starts
              affecting water quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
