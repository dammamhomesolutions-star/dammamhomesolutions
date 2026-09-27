export default function PaintingHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="painting-hero-visual-title"
    >
      <title id="painting-hero-visual-title">
        Split illustration: a damaged, cracked and stained wall surface on
        the left, and the same surface repaired and freshly finished on
        the right
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#f4efe6" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#ded2ba" />

      {/* left: before */}
      <g>
        <rect x="20" y="20" width="180" height="420" fill="#ece3d1" />
        <g fill="#c9b98f" opacity="0.5">
          {Array.from({ length: 26 }).map((_, i) => {
            const x = 30 + ((i * 41) % 160);
            const y = 40 + ((i * 67) % 380);
            return <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.6 : 0.9} />;
          })}
        </g>
        <path
          d="M60 90 L74 130 L64 160 L88 210"
          fill="none"
          stroke="#8f7c58"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <ellipse cx="140" cy="300" rx="34" ry="18" fill="#a6926a" opacity="0.4" />
        <circle cx="150" cy="120" r="7" fill="#847252" opacity="0.5" />
        <text x="34" y="410" fontSize="12" fill="#6b6046" fontFamily="var(--font-poppins), sans-serif">
          BEFORE
        </text>
      </g>

      {/* seam */}
      <line x1="210" y1="20" x2="210" y2="440" stroke="#b7a377" strokeWidth="1.5" strokeDasharray="2 6" />

      {/* right: after */}
      <g>
        <rect x="220" y="20" width="180" height="420" fill="#faf7f0" />
        <text x="234" y="410" fontSize="12" fill="#94472a" fontFamily="var(--font-poppins), sans-serif">
          AFTER
        </text>
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#8a7a56">
        <text x="20" y="452">illustrative — representative surface condition, not a specific project</text>
      </g>
    </svg>
  );
}
