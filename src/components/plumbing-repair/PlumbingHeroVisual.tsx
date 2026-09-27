export default function PlumbingHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="plumbing-hero-visual-title"
    >
      <title id="plumbing-hero-visual-title">
        Wall cross-section showing a hidden pipe behind the surface, with a
        damp mark appearing where the water has traveled to
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#f4f0e8" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#ded2ba" />

      {/* visible surface layer (tiled wall) */}
      <g stroke="#ded2ba" strokeWidth="1">
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={30 + col * 60}
              y={30 + row * 56}
              width="60"
              height="56"
              fill="none"
            />
          ))
        )}
      </g>

      {/* hidden pipe behind the wall, dashed to read as "behind the surface" */}
      <g fill="none" stroke="#1c6b73" strokeWidth="5" strokeLinecap="round" opacity="0.9">
        <path d="M340 60 V220 H150 V392" strokeDasharray="1 14" />
      </g>

      {/* animated flow travelling along the hidden pipe */}
      <circle r="5" fill="#2f9aa6">
        <animateMotion
          dur="4.5s"
          repeatCount="indefinite"
          path="M340 60 V220 H150 V392"
        />
      </circle>

      {/* leak point on the pipe */}
      <g transform="translate(150,300)">
        <path d="M0 0 L-14 10" stroke="#c76a3f" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="-16" cy="16" r="3.4" fill="#c76a3f">
          <animate attributeName="cy" values="16;26;16" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* visible damp mark on the surface, offset from the actual source */}
      <g transform="translate(210,380)" opacity="0.85">
        <ellipse cx="0" cy="0" rx="46" ry="26" fill="#c9b98f" opacity="0.45" />
        <ellipse cx="6" cy="-4" rx="30" ry="16" fill="#b7a377" opacity="0.5" />
      </g>

      <g fontFamily="var(--font-poppins), sans-serif">
        <text x="26" y="428" fontSize="11" fill="#8a7a56">
          visible mark — surface layer
        </text>
        <text x="240" y="70" fontSize="11" fill="#3a7d85">
          hidden pipe run
        </text>
      </g>
    </svg>
  );
}
