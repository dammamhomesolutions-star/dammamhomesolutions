/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline roof/rooftop SVGs on this page. Uses a new restrained
 * teal accent (water/drainage theme) paired with the existing ink/sand base.
 */
export default function RfSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="rf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#e0f0f0" />
        </linearGradient>

        <linearGradient id="rf-surface" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4c0b4" />
          <stop offset="100%" stopColor="#9a968a" />
        </linearGradient>

        <linearGradient id="rf-structure" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5468" />
          <stop offset="100%" stopColor="#232833" />
        </linearGradient>

        <linearGradient id="rf-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8fc4c4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2f7a7a" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="rf-water-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4a9797" stopOpacity="0" />
          <stop offset="50%" stopColor="#4a9797" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4a9797" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="rf-stain" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7a5a3f" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#7a5a3f" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7a5a3f" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="rf-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="rf-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
}
