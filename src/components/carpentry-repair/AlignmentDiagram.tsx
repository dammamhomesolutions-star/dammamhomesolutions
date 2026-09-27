import type { AlignmentPoint } from "@/lib/carpentry-issues";

const ACTIVE = "#d8b978";
const NEUTRAL = "#5c5548";

export default function AlignmentDiagram({ highlight }: { highlight: AlignmentPoint }) {
  const frameOn = highlight === "frame";
  const doorOn = highlight === "door";
  const hingeOn = highlight === "hinge";
  const latchOn = highlight === "latch";

  return (
    <svg viewBox="0 0 260 300" className="w-full max-w-[220px]" role="img" aria-label="Simplified door and frame diagram with hinge and latch points">
      {/* frame */}
      <rect
        x="20"
        y="16"
        width="220"
        height="268"
        rx="6"
        fill="none"
        stroke={frameOn ? ACTIVE : NEUTRAL}
        strokeWidth={frameOn ? 3 : 1.6}
      />

      {/* door leaf */}
      <rect
        x="40"
        y="34"
        width="160"
        height="232"
        rx="3"
        fill={doorOn ? "rgba(216,185,120,0.15)" : "none"}
        stroke={doorOn ? ACTIVE : NEUTRAL}
        strokeWidth={doorOn ? 3 : 1.6}
      />

      {/* hinges */}
      {[90, 150, 210].map((y) => (
        <rect
          key={y}
          x="34"
          y={y - 12}
          width="10"
          height="24"
          rx="2"
          fill={hingeOn ? ACTIVE : "none"}
          stroke={hingeOn ? ACTIVE : NEUTRAL}
          strokeWidth="1.6"
        />
      ))}

      {/* latch / lock */}
      <rect
        x="192"
        y="138"
        width="16"
        height="26"
        rx="3"
        fill={latchOn ? ACTIVE : "none"}
        stroke={latchOn ? ACTIVE : NEUTRAL}
        strokeWidth="1.6"
      />
      <circle cx="200" cy="151" r="2" fill={latchOn ? "#2a2118" : NEUTRAL} />

      {/* handle, drawn regardless as context */}
      <circle cx="185" cy="151" r="4" fill="none" stroke={NEUTRAL} strokeWidth="1.4" />
    </svg>
  );
}
