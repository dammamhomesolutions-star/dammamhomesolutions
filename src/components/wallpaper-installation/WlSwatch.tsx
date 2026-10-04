// Abstract wallpaper swatches drawn with SVG patterns — illustrations of pattern
// type and scale, not reproductions of any manufacturer's design. `uid` keeps
// the pattern ids unique when several swatches share a page.
export type WlSwatchKind = "plain" | "pattern" | "texture" | "floral" | "geo" | "mural" | "stripe";

export default function WlSwatch({ kind, uid, className = "h-full w-full" }: { kind: WlSwatchKind; uid: string; className?: string }) {
  const id = `wl-sw-${uid}`;
  return (
    <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <pattern id={`${id}-pattern`} width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#e0f0f0" />
          <path d="M10 3l3 7-3 7-3-7z" fill="#4a9797" />
        </pattern>
        <pattern id={`${id}-texture`} width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#ebe4d6" />
          <path d="M0 6L6 0" stroke="#ded2ba" strokeWidth="1.5" />
        </pattern>
        <pattern id={`${id}-floral`} width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="#f4f0e8" />
          <circle cx="15" cy="15" r="4" fill="#c76a3f" />
          <circle cx="15" cy="9" r="3.5" fill="#e0b28a" /><circle cx="15" cy="21" r="3.5" fill="#e0b28a" />
          <circle cx="9" cy="15" r="3.5" fill="#e0b28a" /><circle cx="21" cy="15" r="3.5" fill="#e0b28a" />
          <path d="M0 0l4 4M30 30l-4-4" stroke="#79895f" strokeWidth="2" />
        </pattern>
        <pattern id={`${id}-geo`} width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="#164848" />
          <path d="M0 12l12-12 12 12-12 12z" fill="none" stroke="#8fc4c4" strokeWidth="1.5" />
        </pattern>
        <pattern id={`${id}-stripe`} width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#e0f0f0" />
          <rect width="5" height="16" fill="#8fc4c4" />
        </pattern>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fc4c4" />
          <stop offset="1" stopColor="#e0f0f0" />
        </linearGradient>
      </defs>
      {kind === "plain" && <rect width="120" height="90" fill="#ebe4d6" />}
      {kind === "mural" ? (
        <>
          <rect width="120" height="90" fill={`url(#${id}-sky)`} />
          <path d="M0 70l25-28 20 18 22-30 25 26 28-14v48H0z" fill="#2f7a7a" />
          <path d="M0 80l30-16 30 10 30-14 30 12v18H0z" fill="#164848" />
          <circle cx="90" cy="22" r="8" fill="#f3e4d1" />
        </>
      ) : (
        kind !== "plain" && <rect width="120" height="90" fill={`url(#${id}-${kind})`} />
      )}
    </svg>
  );
}
