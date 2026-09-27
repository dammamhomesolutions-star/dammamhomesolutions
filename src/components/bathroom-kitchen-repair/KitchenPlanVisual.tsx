export default function KitchenPlanVisual() {
  return (
    <svg viewBox="0 0 320 260" className="w-full max-w-sm" aria-hidden="true">
      <rect width="320" height="260" rx="14" fill="#eceae4" stroke="#d8d4ca" />
      {/* counter run along back wall */}
      <rect x="24" y="24" width="272" height="46" rx="6" fill="#ffffff" stroke="#c7c2b8" />
      {/* sink + tap */}
      <rect x="50" y="34" width="50" height="26" rx="5" fill="#f4f2ee" stroke="#c7c2b8" />
      <circle cx="75" cy="30" r="3" fill="#0f766e" />
      {/* drain */}
      <circle cx="75" cy="47" r="4" fill="none" stroke="#0f766e" strokeWidth="1.4" />
      {/* counter area open */}
      <rect x="160" y="34" width="120" height="26" rx="4" fill="#f4f2ee" stroke="#c7c2b8" />

      {/* cabinets below counter */}
      <rect x="24" y="90" width="272" height="80" rx="6" fill="#e4e1da" stroke="#c7c2b8" />
      <line x1="90" y1="90" x2="90" y2="170" stroke="#c7c2b8" />
      <line x1="160" y1="90" x2="160" y2="170" stroke="#c7c2b8" />
      <line x1="230" y1="90" x2="230" y2="170" stroke="#c7c2b8" />
      {/* drawers */}
      <rect x="98" y="100" width="54" height="16" rx="2" fill="#ffffff" stroke="#c7c2b8" />
      <rect x="98" y="122" width="54" height="16" rx="2" fill="#ffffff" stroke="#c7c2b8" />

      {/* tiles strip (backsplash) */}
      <g stroke="#d8d4ca" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, c) => (
          <rect key={c} x={24 + c * 30} y={70} width="30" height="20" fill="none" />
        ))}
      </g>

      {/* floor */}
      <rect x="24" y="180" width="272" height="56" rx="4" fill="#f4f2ee" stroke="#d8d4ca" />
    </svg>
  );
}
