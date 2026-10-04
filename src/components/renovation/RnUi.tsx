import type { ReactNode } from "react";

// Small shared pieces for the renovation page's architectural look:
// numbered eyebrow labels, hairline rules and an arrow glyph.

export function Eyebrow({ n, children, dark = false }: { n: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] ${dark ? "text-clay-300" : "text-walnut-700"}`}>
      <span className={`border px-1.5 py-0.5 ${dark ? "border-clay-300/40" : "border-walnut-700/30"}`}>{n}</span>
      {children}
    </p>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export const btnPrimary =
  "focus-ring group inline-flex items-center justify-center gap-3 bg-ink-950 px-6 py-4 text-sm font-semibold tracking-wide text-sand-50 transition-colors hover:bg-walnut-900";
export const btnGhost =
  "focus-ring inline-flex items-center justify-center gap-3 border border-ink-950/25 px-6 py-4 text-sm font-semibold tracking-wide text-ink-950 transition-colors hover:border-ink-950 hover:bg-ink-950/5";
