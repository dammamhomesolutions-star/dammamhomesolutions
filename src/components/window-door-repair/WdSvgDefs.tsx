/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline window/door SVGs on this page. Rendered once, invisibly.
 */
export default function WdSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="wd-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.03 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="wd-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef3f5" />
          <stop offset="100%" stopColor="#d7e4ea" />
        </linearGradient>

        <linearGradient id="wd-frame-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3d5a6b" />
          <stop offset="100%" stopColor="#1c2733" />
        </linearGradient>

        <linearGradient id="wd-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef3f5" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#d7e4ea" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#b8ccd4" stopOpacity="0.35" />
        </linearGradient>

        <linearGradient id="wd-glass-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="wd-spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#fff8ea" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#fff8ea" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="wd-sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#f4f0e8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
