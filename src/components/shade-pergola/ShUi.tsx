import type { ReactNode } from "react";

// Engineered, angular vocabulary for the shade page: slanted section tags,
// sharp buttons and a sun-copper accent rule.

export function Tag({ n, children, dark = false }: { n: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className="flex items-center gap-3">
      <span className="bg-copper-600 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-sand-50 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">{n}</span>
      <span className={`font-mono text-[11px] uppercase tracking-[0.22em] ${dark ? "text-steel-300" : "text-steel-700"}`}>{children}</span>
    </p>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export const btnPrimary =
  "focus-ring group inline-flex items-center justify-center gap-2 bg-copper-600 px-6 py-4 text-sm font-semibold text-sand-50 transition-colors hover:bg-copper-700";
export const btnDark =
  "focus-ring group inline-flex items-center justify-center gap-2 bg-steel-900 px-6 py-4 text-sm font-semibold text-sand-50 transition-colors hover:bg-ink-950";
export const btnGhost =
  "focus-ring inline-flex items-center justify-center gap-2 border border-steel-900/30 px-6 py-4 text-sm font-semibold text-steel-900 transition-colors hover:border-steel-900";
export const opt =
  "cursor-pointer select-none border px-3 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-600 has-[:focus-visible]:ring-offset-2";
export const optOn = "border-steel-900 bg-steel-900 text-sand-50";
export const optOff = "border-steel-900/15 bg-sand-50 text-ink-800 hover:border-copper-600";
