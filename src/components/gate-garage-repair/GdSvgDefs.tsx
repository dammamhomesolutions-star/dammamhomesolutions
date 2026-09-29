/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline gate/garage-door SVGs on this page. Uses the site's
 * existing ink/sand/rust brand palette rather than a new accent group.
 */
export default function GdSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="gd-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="6" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="gd-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f0e8" />
          <stop offset="100%" stopColor="#ded2ba" />
        </linearGradient>

        <linearGradient id="gd-panel-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5468" />
          <stop offset="100%" stopColor="#232833" />
        </linearGradient>

        <linearGradient id="gd-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b4bac6" />
          <stop offset="100%" stopColor="#69748a" />
        </linearGradient>

        <linearGradient id="gd-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="gd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#f4f0e8" />
        </linearGradient>

        <radialGradient id="gd-spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#fff8ea" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff8ea" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
