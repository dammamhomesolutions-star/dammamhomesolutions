export default function ElectricalHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="electrical-hero-visual-title"
    >
      <title id="electrical-hero-visual-title">
        A wall switch and socket with a fine circuit-line trace between
        them, suggesting a shared electrical point rather than exposed
        wiring
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#f4f0e8" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#ded2ba" />

      {/* subtle grid */}
      <g stroke="#e6ddc9" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={30 + i * 50} y1="20" x2={30 + i * 50} y2="440" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={30 + i * 50} x2="400" y2={30 + i * 50} />
        ))}
      </g>

      {/* ceiling light */}
      <g transform="translate(210,66)">
        <circle r="26" fill="#ffffff" stroke="#c9bd9e" strokeWidth="1.5" />
        <circle r="10" fill="#2451c4" opacity="0.85">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* wall switch */}
      <g transform="translate(110,220)">
        <rect x="-34" y="-46" width="68" height="92" rx="8" fill="#ffffff" stroke="#c9bd9e" strokeWidth="1.5" />
        <rect x="-16" y="-14" width="32" height="28" rx="4" fill="#e1dccf" />
        <rect x="-16" y="-14" width="32" height="14" rx="3" fill="#2451c4" opacity="0.9" />
      </g>

      {/* wall socket */}
      <g transform="translate(300,260)">
        <rect x="-34" y="-40" width="68" height="80" rx="8" fill="#ffffff" stroke="#c9bd9e" strokeWidth="1.5" />
        <circle cx="-10" cy="-4" r="5" fill="#c9bd9e" />
        <circle cx="10" cy="-4" r="5" fill="#c9bd9e" />
        <circle cx="0" cy="14" r="5" fill="#c9bd9e" />
      </g>

      {/* circuit trace connecting the three points */}
      <path
        d="M210 92 V150 H110 V174 M110 266 V320 H300 V300"
        fill="none"
        stroke="#2451c4"
        strokeWidth="2"
        strokeDasharray="1 9"
        strokeLinecap="round"
        opacity="0.7"
      />

      <circle r="4.5" fill="#2f6bdb">
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="M210 92 V150 H110 V174"
        />
      </circle>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#6b7280">
        <text x="26" y="420">shared circuit — one fault, several points</text>
      </g>
    </svg>
  );
}
