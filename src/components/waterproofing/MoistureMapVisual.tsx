function Path({
  x,
  labels,
}: {
  x: number;
  labels: [string, string, string];
}) {
  return (
    <g transform={`translate(${x},0)`}>
      <g>
        <rect x="-64" y="0" width="128" height="40" rx="6" fill="#e6e2d6" stroke="#cfc7b2" />
        <text x="0" y="24" textAnchor="middle" fontSize="12" fill="#4a4638" fontFamily="var(--font-poppins), sans-serif">
          {labels[0]}
        </text>
      </g>

      <path d="M0 40 V88" stroke="#1f8f96" strokeWidth="2" strokeDasharray="1 8" opacity="0.8" />
      <circle r="3.5" fill="#17767c">
        <animateMotion dur="3.6s" repeatCount="indefinite" path="M0 40 V88" />
      </circle>

      <g transform="translate(0,88)">
        <rect x="-64" y="0" width="128" height="40" rx="6" fill="#e6e2d6" stroke="#cfc7b2" />
        <text x="0" y="24" textAnchor="middle" fontSize="12" fill="#4a4638" fontFamily="var(--font-poppins), sans-serif">
          {labels[1]}
        </text>
      </g>

      <path d="M0 128 V176" stroke="#1f8f96" strokeWidth="2" strokeDasharray="1 8" opacity="0.8" />
      <circle r="3.5" fill="#17767c">
        <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path="M0 128 V176" />
      </circle>

      <g transform="translate(0,176)">
        <rect x="-70" y="0" width="140" height="46" rx="6" fill="#f2efe6" stroke="#b7a377" strokeWidth="1.5" />
        <text x="0" y="27" textAnchor="middle" fontSize="12" fill="#5c5238" fontFamily="var(--font-poppins), sans-serif">
          {labels[2]}
        </text>
      </g>
    </g>
  );
}

export default function MoistureMapVisual() {
  return (
    <svg
      viewBox="0 0 520 240"
      className="w-full"
      role="img"
      aria-labelledby="moisture-map-title"
    >
      <title id="moisture-map-title">
        Two possible moisture paths: roof to ceiling to wall or surface, and
        separately bathroom to wet area to an adjacent wall or floor
      </title>

      <Path x={140} labels={["Roof", "Ceiling", "Wall / Surface"]} />
      <Path x={380} labels={["Bathroom", "Wet area", "Adjacent wall / floor"]} />
    </svg>
  );
}
