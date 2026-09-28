/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline ceiling SVGs on this page. Rendered once, invisibly.
 */
export default function CrSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="ceiling-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>

        <linearGradient id="ceiling-plaster" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#ebe4d6" />
        </linearGradient>

        <linearGradient id="ceiling-plaster-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#333a49" />
          <stop offset="100%" stopColor="#191d25" />
        </linearGradient>

        <radialGradient id="ceiling-stain" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8e97a8" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#8e97a8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8e97a8" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ceiling-spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8ea" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#fff8ea" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fff8ea" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
