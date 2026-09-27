export default function WaterproofingHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="waterproofing-hero-visual-title"
    >
      <title id="waterproofing-hero-visual-title">
        Close-up of a ceiling-to-wall corner with a visible stain, and a
        faint line suggesting where moisture may have traveled from
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#efece4" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#d8d2c2" />

      {/* ceiling plane */}
      <rect x="20" y="20" width="380" height="90" fill="#e6e2d6" />
      {/* wall plane */}
      <rect x="20" y="110" width="380" height="330" fill="#f2efe6" />
      {/* corner line */}
      <line x1="20" y1="110" x2="400" y2="110" stroke="#cfc7b2" strokeWidth="1.5" />

      {/* subtle stone/concrete texture flecks */}
      <g fill="#d8d2c2" opacity="0.5">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = 30 + ((i * 47) % 360);
          const y = 130 + ((i * 83) % 290);
          return <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 1.6 : 0.9} />;
        })}
      </g>

      {/* the visible stain, offset from the corner */}
      <g transform="translate(150,150)" opacity="0.9">
        <ellipse cx="0" cy="0" rx="70" ry="34" fill="#b7a377" opacity="0.35" />
        <ellipse cx="10" cy="-6" rx="44" ry="20" fill="#a6926a" opacity="0.4" />
        <ellipse cx="-4" cy="10" rx="30" ry="14" fill="#8f7c58" opacity="0.35" />
      </g>

      {/* faint suggested path upward, toward the roofline, deliberately understated */}
      <path
        d="M150 128 C 150 90, 160 60, 190 30"
        fill="none"
        stroke="#1f8f96"
        strokeWidth="1.5"
        strokeDasharray="1 8"
        opacity="0.55"
      >
        <animate attributeName="opacity" values="0.25;0.6;0.25" dur="3.4s" repeatCount="indefinite" />
      </path>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#6b6554">
        <text x="40" y="410">visible stain — ceiling / wall corner</text>
        <text x="40" y="428" fill="#8a8272">source not yet confirmed</text>
      </g>
    </svg>
  );
}
