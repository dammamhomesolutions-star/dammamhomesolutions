export default function PlumbingPathVisual() {
  return (
    <svg
      viewBox="0 0 800 320"
      className="w-full"
      role="img"
      aria-labelledby="plumbing-path-visual-title"
    >
      <title id="plumbing-path-visual-title">
        Simplified house cross-section showing water travelling from a
        kitchen pipe, along a wall, and appearing on a ceiling in another
        room
      </title>

      <rect x="0" y="0" width="800" height="320" rx="18" fill="#12262a" />

      {/* room dividers */}
      <g stroke="#264a4f" strokeWidth="1.5">
        <line x1="266" y1="20" x2="266" y2="300" />
        <line x1="0" y1="200" x2="800" y2="200" />
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fill="#7fb0b5" fontSize="12">
        <text x="24" y="40">Kitchen</text>
        <text x="300" y="40">Wall cavity</text>
        <text x="24" y="230">Room below</text>
      </g>

      {/* kitchen sink + pipe start */}
      <g transform="translate(40,60)">
        <rect x="0" y="0" width="120" height="46" rx="6" fill="#e7edf1" />
        <rect x="12" y="14" width="60" height="8" rx="4" fill="#a9b8c2" />
      </g>

      {/* pipe path: down from sink, across floor, up the wall cavity, along ceiling */}
      <path
        d="M100 106 V150 H600 V60 H660"
        fill="none"
        stroke="#3a7d85"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 13"
      />

      <circle r="5" fill="#57c2cb">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M100 106 V150 H600 V60 H660"
        />
      </circle>

      {/* leak point along the run */}
      <g transform="translate(600,140)">
        <circle r="4" fill="#c76a3f">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* visible ceiling mark, offset from the leak point */}
      <g transform="translate(690,64)" opacity="0.9">
        <ellipse cx="0" cy="0" rx="42" ry="20" fill="#d7c9a2" opacity="0.5" />
        <ellipse cx="6" cy="-3" rx="26" ry="12" fill="#c3b088" opacity="0.55" />
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#9fc7ca">
        <text x="596" y="120">pipe run behind the wall</text>
        <text x="600" y="105">possible leak point</text>
        <text x="618" y="46" fill="#d7c9a2">
          visible mark on ceiling
        </text>
      </g>
    </svg>
  );
}
