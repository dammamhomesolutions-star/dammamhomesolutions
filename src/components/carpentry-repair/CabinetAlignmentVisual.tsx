export default function CabinetAlignmentVisual() {
  return (
    <svg viewBox="0 0 320 240" className="w-full max-w-sm" role="img" aria-label="Simplified cabinet front showing two doors with an alignment guide line between them">
      <rect width="320" height="240" rx="16" fill="#2b2118" />
      <rect x="30" y="30" width="120" height="180" rx="4" fill="#4a3826" stroke="#6b5438" />
      <rect x="170" y="30" width="120" height="180" rx="4" fill="#4a3826" stroke="#6b5438" />

      {/* alignment guide showing a slight offset on the right door */}
      <line x1="160" y1="20" x2="160" y2="220" stroke="#d8b978" strokeWidth="1" strokeDasharray="2 6" />
      <line x1="0" y1="30" x2="320" y2="30" stroke="#d8b978" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
      <line x1="0" y1="34" x2="320" y2="34" stroke="#d8b978" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />

      <circle cx="140" cy="120" r="4" fill="#c9c2b4" />
      <circle cx="180" cy="120" r="4" fill="#c9c2b4" />

      <text x="30" y="222" fontSize="11" fill="#a89b85" fontFamily="var(--font-poppins), sans-serif">
        left door — aligned
      </text>
      <text x="170" y="222" fontSize="11" fill="#d8b978" fontFamily="var(--font-poppins), sans-serif">
        right door — slightly high
      </text>
    </svg>
  );
}
