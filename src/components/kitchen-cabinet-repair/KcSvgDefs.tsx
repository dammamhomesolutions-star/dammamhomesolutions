/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline kitchen cabinet SVGs on this page. Rendered once, invisibly.
 */
export default function KcSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="kc-wood-grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.3" numOctaves="3" seed="11" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.09 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <filter id="kc-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="5" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.03 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="kc-walnut" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a67c5b" />
          <stop offset="100%" stopColor="#6b4a35" />
        </linearGradient>

        <linearGradient id="kc-walnut-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b4a35" />
          <stop offset="100%" stopColor="#3d2b1f" />
        </linearGradient>

        <linearGradient id="kc-ivory" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#f4f0e8" />
        </linearGradient>

        <linearGradient id="kc-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eceef0" />
          <stop offset="100%" stopColor="#b7bfc6" />
        </linearGradient>

        <linearGradient id="kc-gloss-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="kc-spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#fff8ea" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#fff8ea" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
