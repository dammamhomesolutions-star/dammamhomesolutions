import type { FcStyle } from "@/lib/false-ceiling";

// Small ceiling-profile previews (section view looking at the ceiling edge).
export default function FcStylePreview({ style, className = "h-full w-full" }: { style: FcStyle; className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={className} aria-hidden="true">
      <rect width="160" height="80" fill="#eef3f5" />
      <rect width="160" height="10" fill="#7fa0b0" />
      {style === "flat" && (
        <>
          <rect x="0" y="22" width="160" height="6" fill="#26333f" />
          {[40, 80, 120].map((x) => <path key={x} d={`M${x - 5} 28h10l6 30h-22z`} fill="#f6dfb4" opacity="0.6" />)}
        </>
      )}
      {style === "modern" && (
        <>
          <rect x="0" y="22" width="160" height="6" fill="#26333f" />
          <rect x="30" y="28" width="100" height="3" fill="#f6dfb4" />
          <path d="M30 31h100l10 30H20z" fill="#f6dfb4" opacity="0.35" />
        </>
      )}
      {style === "cove" && (
        <>
          <path d="M0 22h30v12h100V22h30v6h-24v12H24V28H0z" fill="#26333f" />
          <path d="M30 34c10-6 20-8 30-8M130 34c-10-6-20-8-30-8" stroke="#f6dfb4" strokeWidth="3" fill="none" />
        </>
      )}
      {style === "multi" && (
        <>
          <path d="M0 20h160v6H0z" fill="#26333f" />
          <path d="M20 26h120v8H20z" fill="#3d5a6b" />
          <path d="M45 34h70v8H45z" fill="#5b7d8f" />
        </>
      )}
      {style === "feature" && (
        <>
          <rect x="0" y="20" width="160" height="6" fill="#26333f" />
          <ellipse cx="80" cy="30" rx="40" ry="6" fill="#3d5a6b" />
          <path d="M80 36v14" stroke="#26333f" strokeWidth="2" />
          <path d="M70 50h20l-10 10z" fill="#f6dfb4" />
        </>
      )}
      {style === "grid" && (
        <>
          <rect x="0" y="22" width="160" height="6" fill="#b8ccd4" />
          {[0, 32, 64, 96, 128, 160].map((x) => <path key={x} d={`M${x} 20v10`} stroke="#26333f" strokeWidth="2" />)}
        </>
      )}
      <rect y="70" width="160" height="10" fill="#d7e4ea" />
    </svg>
  );
}
