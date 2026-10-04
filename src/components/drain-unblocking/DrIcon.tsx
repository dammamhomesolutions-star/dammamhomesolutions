import type { DrIconName } from "@/lib/drain-unblocking";

// Line icons for the drain page: 24×24, 1.75 stroke, round caps.
const paths: Record<DrIconName, string[]> = {
  drain: ["M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z", "M8 10h8M7.5 13h9M8.5 16h7"],
  pipe: ["M3 7h10a4 4 0 0 1 4 4v10", "M3 12h7a2 2 0 0 1 2 2v7", "M3 5v9M15 21h8"],
  sewer: ["M2 14h20", "M2 19h20", "M7 14v-4h4v4", "M16 14V6"],
  wastewater: ["M3 14c2-2 4 2 6 0s4 2 6 0 4 2 6 0", "M3 18c2-2 4 2 6 0s4 2 6 0 4 2 6 0", "M12 3v7M9 7l3 3 3-3"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  camera: ["M3 8h12v8H3z", "M15 11l6-3v8l-6-3", "M7 12h.01"],
  jet: ["M3 12h8", "M11 9h3v6h-3z", "M14 12h3M18 8l3-2M18 12h4M18 16l3 2"],
  snake: ["M4 20c0-4 4-4 4-8s-4-4-4-8", "M8 12h6c3 0 3 4 6 4", "M18 14l2 2-2 2"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  kitchen: ["M3 12h18", "M5 12v2a7 7 0 0 0 14 0v-2", "M12 12V6a2 2 0 0 1 4 0"],
  bathroom: ["M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z", "M5 12V5a2 2 0 0 1 4 0", "M7 19l-1 2M17 19l1 2"],
  toilet: ["M6 3h7v6H6z", "M4 9h14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z", "M9 14l-1 7h7l-1-7"],
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  repair: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
  ],
  cleaning: ["M15.5 3.5l5 5-6 6-5-5z", "M9.5 9.5L5 14v6h6l4.5-4.5", "M8 17.5h.01"],
  technician: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2", "M8.5 6.5h7"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  odor: ["M8 20c-2-3 2-5 0-8s2-5 0-8", "M12 20c-2-3 2-5 0-8s2-5 0-8", "M16 20c-2-3 2-5 0-8s2-5 0-8"],
  plunger: ["M12 3v10", "M6 18a6 4 0 0 1 12 0z", "M5 18h14"],
};

interface DrIconProps {
  name: DrIconName;
  className?: string;
}

export default function DrIcon({ name, className = "h-6 w-6" }: DrIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`fs-icon ${className}`}
      aria-hidden="true"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} pathLength={1} />
      ))}
    </svg>
  );
}
