/**
 * Shared SVG filter/gradient definitions referenced by id (url(#...)) from
 * the other inline water-tank SVGs on this page. Uses a new restrained
 * mint accent (clean-water theme) paired with the existing ink/sand base.
 */
export default function WtSvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="wt-clean-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2f2ee" />
          <stop offset="100%" stopColor="#94cabd" />
        </linearGradient>

        <linearGradient id="wt-murky-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94cabd" />
          <stop offset="100%" stopColor="#6b5f3f" />
        </linearGradient>

        <linearGradient id="wt-tank-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eae7de" />
          <stop offset="100%" stopColor="#c4c0b4" />
        </linearGradient>

        <linearGradient id="wt-sediment" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a7550" />
          <stop offset="100%" stopColor="#5c4a2e" />
        </linearGradient>

        <linearGradient id="wt-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="wt-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  );
}
