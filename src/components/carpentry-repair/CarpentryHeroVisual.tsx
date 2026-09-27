export default function CarpentryHeroVisual() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-labelledby="carpentry-hero-visual-title"
    >
      <title id="carpentry-hero-visual-title">
        Close-up of a door meeting its frame, showing a hinge, a handle
        and the latch point
      </title>

      <rect x="0" y="0" width="420" height="460" rx="20" fill="#241d16" />

      {/* frame */}
      <rect x="40" y="30" width="24" height="400" fill="#3a2e21" stroke="#4d3d2b" />
      {/* door edge */}
      <rect x="64" y="30" width="230" height="400" fill="#6b4f34" />
      <rect x="64" y="30" width="10" height="400" fill="#5a4128" opacity="0.7" />

      {/* wood grain lines */}
      <g stroke="#5a4128" strokeWidth="1" opacity="0.4">
        <path d="M90 40 Q 160 60, 90 90 T 90 160 T 90 240 T 90 320 T 90 400" fill="none" />
        <path d="M180 30 Q 240 80, 190 140 T 210 260 T 190 400" fill="none" />
      </g>

      {/* top hinge */}
      <g transform="translate(64,90)">
        <rect x="-6" y="-16" width="16" height="32" rx="3" fill="#c9c2b4" stroke="#8a8375" />
        <circle cx="2" cy="-10" r="1.6" fill="#5c574c" />
        <circle cx="2" cy="0" r="1.6" fill="#5c574c" />
        <circle cx="2" cy="10" r="1.6" fill="#5c574c" />
      </g>

      {/* bottom hinge */}
      <g transform="translate(64,340)">
        <rect x="-6" y="-16" width="16" height="32" rx="3" fill="#c9c2b4" stroke="#8a8375" />
        <circle cx="2" cy="-10" r="1.6" fill="#5c574c" />
        <circle cx="2" cy="0" r="1.6" fill="#5c574c" />
        <circle cx="2" cy="10" r="1.6" fill="#5c574c" />
      </g>

      {/* handle + lock */}
      <g transform="translate(270,225)">
        <rect x="-8" y="-46" width="16" height="92" rx="8" fill="#d8b978" />
        <circle cx="0" cy="-46" r="9" fill="#d8b978" stroke="#b9925a" />
        <rect x="-22" y="-14" width="14" height="28" rx="3" fill="#e7c98a" stroke="#b9925a" />
      </g>

      {/* latch meeting the frame, subtly highlighted */}
      <g transform="translate(295,225)">
        <rect x="0" y="-18" width="22" height="36" rx="4" fill="#3a2e21" stroke="#8a8375" />
        <circle r="3" fill="#d8b978">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      <g fontFamily="var(--font-poppins), sans-serif" fontSize="11" fill="#a89b85">
        <text x="40" y="440">door, frame and hardware — where alignment usually shows up</text>
      </g>
    </svg>
  );
}
