import type { BwIconName } from "@/lib/boundary-wall";

// Line icons for the boundary wall page: 24×24, 1.75 stroke, round caps.
const paths: Record<BwIconName, string[]> = {
  wall: ["M3 6h18v14H3z", "M3 10h18M3 15h18", "M9 6v4M15 6v4M6 10v5M12 10v5M18 10v5M9 15v5M15 15v5"],
  crack: ["M3 4h18v16H3z", "M12 4l-2 5 3 3-2 4 2 4"],
  paint: ["M4 4h13v5H4z", "M17 6h3v6h-8v3", "M11 15h2v6h-2z"],
  plaster: ["M4 20l6-6", "M10 14l8-8 2 2-8 8z", "M3 4h8v6H3z"],
  drop: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z"],
  coping: ["M2 6h20v3H2z", "M4 9v11h16V9", "M8 4l2-1M14 4l2-1"],
  loose: ["M3 6h18v14H3z", "M14 10l5 2-2 5-5-2z"],
  lean: ["M6 20l4-16h6l-4 16z", "M3 20h18"],
  corner: ["M4 20V8l8-4v16", "M12 4l8 4v12", "M10 10l-2 2"],
  gate: ["M3 21V6M21 21V6", "M3 9h18M3 18h18", "M7 9v9M11 9v9M15 9v9M19 9v9"],
  ground: ["M2 16h20", "M4 20l2-2M9 20l2-2M14 20l2-2M19 20l2-2", "M6 16V6h12v10"],
  block: ["M3 7h18v12H3z", "M3 13h18", "M9 7v6M15 13v6", "M7 9h.01"],
  brick: ["M3 6h18v14H3z", "M3 10h18M3 14h18M3 18h18", "M8 6v4M14 10v4M8 14v4M17 6v4"],
  stone: ["M4 8l5-4 6 1 5 5-2 8-7 2-6-4z", "M9 4l2 7 6-1M11 11l-3 7"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  map: ["M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z", "M9 3v15M15 6v15"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  tools: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z", "M4 4l5 5", "M3 7l4-4"],
  rebuild: ["M3 20h18", "M5 20v-5h6v5", "M11 15v-5h6v10", "M7 10l3-3 3 3"],
};

interface BwIconProps {
  name: BwIconName;
  className?: string;
}

export default function BwIcon({ name, className = "h-6 w-6" }: BwIconProps) {
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
