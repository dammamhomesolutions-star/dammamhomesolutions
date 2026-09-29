/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline flooring SVGs on this page. Rendered once, invisibly.
 */
export default function FlSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="fl-stone-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="9" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <filter id="fl-worn-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" seed="3" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.12 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="fl-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eae7de" />
          <stop offset="100%" stopColor="#c4c0b4" />
        </linearGradient>

        <linearGradient id="fl-tile-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#78746a" />
          <stop offset="100%" stopColor="#464339" />
        </linearGradient>

        <linearGradient id="fl-stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9bfa0" />
          <stop offset="100%" stopColor="#9c7752" />
        </linearGradient>

        <linearGradient id="fl-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="fl-footprint" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5c584f" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#5c584f" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#5c584f" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="fl-spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#fff8ea" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff8ea" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="fl-ivory" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#f4f0e8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
