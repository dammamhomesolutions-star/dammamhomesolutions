import type { RepairCategory } from "@/lib/repair-categories";

const ACCENT = "#4338ca";
const NEUTRAL = "#c9c0a8";

export default function HouseSilhouette({ active }: { active: RepairCategory["id"] | null }) {
  const on = (id: string) => active === id;

  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-sm" aria-hidden="true">
      <rect width="320" height="280" rx="16" fill="#efece5" />
      {/* roof */}
      <path d="M40 130 L160 50 L280 130" fill="none" stroke={NEUTRAL} strokeWidth="3" strokeLinejoin="round" />
      {/* walls */}
      <rect x="60" y="130" width="200" height="120" fill="none" stroke={NEUTRAL} strokeWidth="2" />

      {/* water — pipe left side */}
      <path d="M60 170 H30 V230" fill="none" stroke={on("water") ? ACCENT : NEUTRAL} strokeWidth={on("water") ? 3 : 1.6} />

      {/* power — bolt near roof */}
      <path d="M160 60 L150 85 L165 85 L155 110" fill="none" stroke={on("power") ? ACCENT : NEUTRAL} strokeWidth={on("power") ? 2.4 : 1.4} strokeLinecap="round" strokeLinejoin="round" />

      {/* surfaces — wall panel */}
      <rect x="90" y="150" width="50" height="60" fill="none" stroke={on("surfaces") ? ACCENT : NEUTRAL} strokeWidth={on("surfaces") ? 2.4 : 1.4} />

      {/* doors & hardware */}
      <rect x="150" y="170" width="36" height="80" fill="none" stroke={on("doors") ? ACCENT : NEUTRAL} strokeWidth={on("doors") ? 2.4 : 1.4} />
      <circle cx="178" cy="212" r="2" fill={on("doors") ? ACCENT : NEUTRAL} />

      {/* rooms & fixtures — right room */}
      <rect x="210" y="150" width="40" height="40" fill="none" stroke={on("rooms") ? ACCENT : NEUTRAL} strokeWidth={on("rooms") ? 2.4 : 1.4} />
      <circle cx="230" cy="170" r="6" fill="none" stroke={on("rooms") ? ACCENT : NEUTRAL} strokeWidth="1.4" />

      {/* general repairs — small toolbox mark bottom right */}
      <rect x="240" y="210" width="16" height="10" rx="1" fill="none" stroke={on("general") ? ACCENT : NEUTRAL} strokeWidth={on("general") ? 2 : 1.2} />
    </svg>
  );
}
