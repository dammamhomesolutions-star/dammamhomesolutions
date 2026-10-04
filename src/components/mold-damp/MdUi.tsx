import type { ReactNode } from "react";

// Technical-drawing vocabulary for the mold & damp page: spec labels with a
// leader line, corner-ticked panels and a droplet glyph.

export function Spec({ code, children, dark = false }: { code: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${dark ? "text-glass-300" : "text-glass-700"}`}>
      <span className={dark ? "text-sand-50" : "text-ink-950"}>{code}</span>
      <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-glass-300/50" : "bg-glass-700/40"}`} />
      {children}
    </p>
  );
}

export function Ticks({ dark = false }: { dark?: boolean }) {
  const c = dark ? "border-glass-300/60" : "border-glass-700/50";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className={`absolute left-0 top-0 h-3 w-3 border-l border-t ${c}`} />
      <span className={`absolute right-0 top-0 h-3 w-3 border-r border-t ${c}`} />
      <span className={`absolute bottom-0 left-0 h-3 w-3 border-b border-l ${c}`} />
      <span className={`absolute bottom-0 right-0 h-3 w-3 border-b border-r ${c}`} />
    </span>
  );
}

export function Drop({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3.5c3.5 4.4 6 7.8 6 10.6a6 6 0 0 1-12 0c0-2.8 2.5-6.2 6-10.6z" />
    </svg>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export const chip =
  "cursor-pointer select-none rounded-md border px-3 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-glass-600 has-[:focus-visible]:ring-offset-2";
export const chipOn = "border-glass-800 bg-glass-800 text-sand-50";
export const chipOff = "border-ink-900/15 bg-sand-50 text-ink-800 hover:border-glass-600";
