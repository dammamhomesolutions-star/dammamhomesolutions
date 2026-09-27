export default function RoomHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="room-hero-visual-title"
    >
      <title id="room-hero-visual-title">
        Split illustration of a simplified bathroom on the left and a
        simplified kitchen on the right
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#f4f2ee" />
      <rect x="0" y="0" width="420" height="460" rx="20" fill="none" stroke="#dcd8d0" />
      <line x1="210" y1="20" x2="210" y2="440" stroke="#c7c2b8" strokeWidth="1.5" strokeDasharray="2 6" />

      {/* bathroom side */}
      <g>
        <rect x="30" y="60" width="110" height="50" rx="10" fill="#e4e1da" stroke="#c7c2b8" />
        <circle cx="70" cy="85" r="10" fill="#ffffff" stroke="#c7c2b8" />
        <rect x="45" y="150" width="120" height="140" rx="14" fill="#e4e1da" stroke="#c7c2b8" />
        <circle cx="105" cy="220" r="4" fill="#0f766e">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="35" y="340" fontSize="12" fill="#6b6a63" fontFamily="var(--font-poppins), sans-serif">
          Bathroom
        </text>
      </g>

      {/* kitchen side */}
      <g>
        <rect x="240" y="60" width="150" height="46" rx="6" fill="#e4e1da" stroke="#c7c2b8" />
        <circle cx="270" cy="83" r="8" fill="#ffffff" stroke="#c7c2b8" />
        <rect x="240" y="150" width="150" height="90" rx="4" fill="#e4e1da" stroke="#c7c2b8" />
        <line x1="315" y1="150" x2="315" y2="240" stroke="#c7c2b8" />
        <circle cx="360" cy="195" r="4" fill="#0f766e">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <text x="245" y="340" fontSize="12" fill="#6b6a63" fontFamily="var(--font-poppins), sans-serif">
          Kitchen
        </text>
      </g>

      <text x="30" y="420" fontSize="11" fill="#928f86" fontFamily="var(--font-poppins), sans-serif">
        illustrative room layout — Dammam residential property
      </text>
    </svg>
  );
}
