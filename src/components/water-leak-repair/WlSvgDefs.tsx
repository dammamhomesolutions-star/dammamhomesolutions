/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline water-leak SVGs on this page. Uses a new restrained
 * copper accent (pipe/fitting theme) paired with the existing ink/sand base.
 */
export default function WlSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="wl-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f4" />
          <stop offset="100%" stopColor="#f4f0e8" />
        </linearGradient>

        <linearGradient id="wl-pipe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0b28a" />
          <stop offset="100%" stopColor="#8f4f2f" />
        </linearGradient>

        <radialGradient id="wl-damp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8fc4c4" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#8fc4c4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8fc4c4" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="wl-stain" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7a5a3f" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#7a5a3f" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7a5a3f" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="wl-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="wl-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
}
