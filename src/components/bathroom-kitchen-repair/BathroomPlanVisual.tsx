export default function BathroomPlanVisual() {
  return (
    <svg viewBox="0 0 320 260" className="w-full max-w-sm" aria-hidden="true">
      <rect width="320" height="260" rx="14" fill="#eceae4" stroke="#d8d4ca" />
      {/* sink */}
      <rect x="24" y="24" width="70" height="34" rx="8" fill="#ffffff" stroke="#c7c2b8" />
      <circle cx="59" cy="41" r="6" fill="#f4f2ee" stroke="#c7c2b8" />
      {/* toilet */}
      <rect x="230" y="24" width="46" height="30" rx="6" fill="#ffffff" stroke="#c7c2b8" />
      <ellipse cx="253" cy="70" rx="26" ry="18" fill="#ffffff" stroke="#c7c2b8" />
      {/* shower / wet area */}
      <rect x="180" y="120" width="110" height="110" rx="8" fill="#e2ece9" stroke="#a9c9c0" />
      <circle cx="270" cy="140" r="3" fill="#0f766e" />
      {/* drain */}
      <circle cx="235" cy="200" r="5" fill="none" stroke="#0f766e" strokeWidth="1.6" />
      {/* floor tiles */}
      <g stroke="#d8d4ca" strokeWidth="1">
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={24 + c * 30} y={110 + r * 30} width="30" height="30" fill="none" />
          ))
        )}
      </g>
      {/* door */}
      <rect x="24" y="230" width="4" height="26" fill="#8a8375" />
      <path d="M28 230 A 40 40 0 0 1 68 230" fill="none" stroke="#c7c2b8" strokeDasharray="2 4" />
    </svg>
  );
}
