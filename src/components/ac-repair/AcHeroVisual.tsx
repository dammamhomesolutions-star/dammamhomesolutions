export default function AcHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="ac-hero-visual-title"
    >
      <title id="ac-hero-visual-title">
        Simplified line diagram of a wall-mounted split AC indoor unit with
        airflow and a drainage detail
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#101823" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#22303f" />

      {/* wall guide lines */}
      <g stroke="#1b2733" strokeWidth="1">
        <line x1="0" y1="120" x2="420" y2="120" />
        <line x1="0" y1="360" x2="420" y2="360" />
      </g>

      {/* indoor unit */}
      <g transform="translate(90,70)">
        <rect x="0" y="0" width="240" height="64" rx="10" fill="#e7edf1" />
        <rect x="16" y="16" width="140" height="8" rx="4" fill="#a9b8c2" />
        <rect x="16" y="34" width="100" height="8" rx="4" fill="#c3ced5" />
        <circle cx="214" cy="20" r="4" fill="#3fa6c9" />
        <circle cx="230" cy="20" r="4" fill="#22303f" />
        <rect x="0" y="58" width="240" height="10" rx="4" fill="#c3ced5" />
      </g>

      {/* airflow lines */}
      <g stroke="#3fa6c9" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M120 140 C 100 175, 100 205, 120 235">
          <animate attributeName="opacity" values="0.15;0.9;0.15" dur="2.6s" repeatCount="indefinite" />
        </path>
        <path d="M170 140 C 165 180, 165 210, 170 245">
          <animate attributeName="opacity" values="0.15;0.9;0.15" dur="2.6s" begin="0.4s" repeatCount="indefinite" />
        </path>
        <path d="M220 140 C 225 180, 225 210, 220 245">
          <animate attributeName="opacity" values="0.15;0.9;0.15" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
        </path>
        <path d="M270 140 C 290 175, 290 205, 270 235">
          <animate attributeName="opacity" values="0.15;0.9;0.15" dur="2.6s" begin="1.2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* drainage detail */}
      <g transform="translate(90,134)">
        <path d="M0 0 L-4 20" stroke="#c76a3f" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="-4.5" cy="28" r="3.6" fill="#c76a3f">
          <animate attributeName="cy" values="28;40;28" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>

      <g fontFamily="var(--font-poppins), sans-serif">
        <text x="90" y="330" fontSize="12" fill="#7e93a3" letterSpacing="0.02em">
          indoor unit — drainage point flagged
        </text>
        <text x="90" y="352" fontSize="12" fill="#4f6274">
          Dammam residential property, split AC
        </text>
      </g>
    </svg>
  );
}
