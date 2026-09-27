/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline tile SVGs on this page. Rendered once, invisibly.
 */
export default function TrSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="tile-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.045 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="tile-stone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2ede2" />
          <stop offset="100%" stopColor="#e4dcc7" />
        </linearGradient>

        <linearGradient id="tile-stone-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a4152" />
          <stop offset="100%" stopColor="#232833" />
        </linearGradient>
      </defs>
    </svg>
  );
}
