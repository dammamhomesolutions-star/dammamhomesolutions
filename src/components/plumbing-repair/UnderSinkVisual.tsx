export default function UnderSinkVisual() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="w-full max-w-sm"
      role="img"
      aria-labelledby="under-sink-visual-title"
    >
      <title id="under-sink-visual-title">
        Simplified cutaway of the cabinet under a kitchen sink, showing the
        pipe connections
      </title>

      <rect x="0" y="0" width="360" height="260" rx="16" fill="#12262a" />

      {/* cabinet frame */}
      <rect x="24" y="24" width="312" height="212" rx="8" fill="none" stroke="#264a4f" strokeWidth="2" />

      {/* sink basin above (partially visible) */}
      <path d="M60 24 Q180 -6 300 24" fill="none" stroke="#3a7d85" strokeWidth="3" />

      {/* drain assembly */}
      <g stroke="#7fb0b5" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M180 40 V90" />
        <path d="M150 90 H210" />
        <path d="M160 90 V120 H200 V90" />
        <path d="M180 120 V150 H240 V210" />
      </g>

      {/* connection joints, flagged */}
      <circle cx="180" cy="90" r="5" fill="#57c2cb" />
      <circle cx="180" cy="120" r="5" fill="#57c2cb" />

      {/* leak detail at one joint */}
      <g transform="translate(180,120)">
        <circle r="4" fill="#c76a3f">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* shutoff valve */}
      <g transform="translate(110,150)">
        <rect x="-10" y="-8" width="20" height="16" rx="3" fill="#e7edf1" />
        <path d="M0 -8 V-24" stroke="#7fb0b5" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#9fc7ca">
        <text x="200" y="115">connection joint</text>
        <text x="60" y="200">shutoff valve</text>
        <text x="240" y="230">drain to wall</text>
      </g>
    </svg>
  );
}
