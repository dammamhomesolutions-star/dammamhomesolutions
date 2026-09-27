export default function RepairHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="repair-hero-visual-title"
    >
      <title id="repair-hero-visual-title">
        A simplified living space with several small marked details — a
        loose handle, a damaged wall corner, a dripping tap, a misaligned
        cabinet and a switch — the kind of everyday things a home
        accumulates
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#efece5" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#ddd6c8" />

      {/* room outline */}
      <rect x="24" y="24" width="372" height="412" fill="none" stroke="#ddd6c8" />

      {/* door with handle marker */}
      <rect x="50" y="70" width="70" height="160" rx="2" fill="#e4ddc9" stroke="#c9c0a8" />
      <circle cx="108" cy="150" r="3" fill="#c9c0a8" />
      <circle cx="108" cy="150" r="9" fill="none" stroke="#4338ca" strokeWidth="1.4" strokeDasharray="2 3">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* wall corner damage */}
      <path d="M170 90 L200 120 L180 140" fill="none" stroke="#8a8375" strokeWidth="2" strokeLinecap="round" />
      <circle cx="185" cy="115" r="14" fill="none" stroke="#4338ca" strokeWidth="1.4" strokeDasharray="2 3" />

      {/* tap / sink with drip */}
      <g transform="translate(260,80)">
        <rect x="-30" y="0" width="80" height="32" rx="6" fill="#ffffff" stroke="#c9c0a8" />
        <path d="M0 0 V-14 H16" stroke="#8a8375" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="-2" r="2.4" fill="#4338ca">
          <animate attributeName="cy" values="-2;10;-2" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* cabinet, slightly misaligned */}
      <g transform="translate(60,300)">
        <rect x="0" y="0" width="130" height="100" fill="#e4ddc9" stroke="#c9c0a8" />
        <path d="M62 4 L68 96 L2 100 L0 4 Z" fill="none" stroke="#4338ca" strokeWidth="1.2" strokeDasharray="1 4" />
      </g>

      {/* switch */}
      <g transform="translate(320,300)">
        <rect x="-18" y="-18" width="36" height="52" rx="4" fill="#ffffff" stroke="#c9c0a8" />
        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#e4ddc9" />
        <circle cx="18" cy="-24" r="4" fill="#4338ca" opacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#7a7461">
        <text x="24" y="420">a normal home, a handful of small things worth attending to</text>
      </g>
    </svg>
  );
}
