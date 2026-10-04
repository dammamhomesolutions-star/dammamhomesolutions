import type { RrIconName } from "@/lib/roof-replacement";

// Line icons for the roof replacement page: 24×24, 1.75 stroke, round caps
// and joins. pathLength="1" lets CSS redraw the strokes on hover.
const paths: Record<RrIconName, string[]> = {
  roof: ["M2.5 12L12 4.5l9.5 7.5", "M5 10.5V19h14v-8.5", "M15.5 6.5V4h2.5v4.5"],
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  droplet: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z"],
  shield: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  heat: ["M10 4a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z", "M12 10v6"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"],
  drain: ["M3 8h18", "M5 8l2 4h10l2-4", "M12 12v5", "M9.5 20h5", "M12 17v3"],
  waterproof: ["M3 15h18", "M3 19h18", "M12 3c2 2.7 3.5 4.6 3.5 6.5a3.5 3.5 0 0 1-7 0C8.5 7.6 10 5.7 12 3z"],
  insulation: ["M3 6h18M3 18h18", "M3 12c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0 3 3 4.5 0"],
  tools: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
    "M3.5 5.5l2-2 4 4-2 2z",
  ],
  hammer: ["M14 6l4 4", "M11 5l3-2 7 7-2 3-3-3-2 2", "M11.5 9.5L4 17a1.8 1.8 0 0 0 2.5 2.5L14 12"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3.5v4M16 3.5v4", "M8 14h3"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  layers: ["M12 3l9 5-9 5-9-5z", "M3 12.5l9 5 9-5", "M3 16.5l9 5 9-5"],
};

interface RrIconProps {
  name: RrIconName;
  className?: string;
}

export default function RrIcon({ name, className = "h-6 w-6" }: RrIconProps) {
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
