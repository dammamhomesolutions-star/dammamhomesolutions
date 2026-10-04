import type { FcIconName } from "@/lib/false-ceiling";

// Line icons for the false ceiling page: 24×24, 1.75 stroke, round caps.
const paths: Record<FcIconName, string[]> = {
  slab: ["M2 4h20v4H2z", "M5 6h.01M10 6h.01M15 6h.01M19 6h.01"],
  frame: ["M2 4h20", "M6 4v6M12 4v6M18 4v6", "M3 10h18", "M3 13h18"],
  board: ["M2 4h20", "M2 14h20v3H2z", "M7 4v10M17 4v10"],
  cavity: ["M2 4h20", "M2 16h20", "M5 8h14M5 12h14"],
  downlight: ["M2 6h20", "M9 6v2h6V6", "M8 10l-3 9M16 10l3 9", "M10 10l-1 4M14 10l1 4"],
  cove: ["M2 4h20", "M2 12h4v4h12v-4h4", "M7 14c3-3 7-3 10 0"],
  diffuser: ["M3 10h18v6H3z", "M6 12h12M6 14h12", "M8 19l-2 2M12 19v2M16 19l2 2"],
  access: ["M3 4h18v16H3z", "M7 8h10v8H7z", "M15 12h.01"],
  levels: ["M2 4h20", "M2 9h5v4h10V9h5", "M7 13v3h10v-3"],
  height: ["M12 3v18", "M8 7l4-4 4 4", "M8 17l4 4 4-4", "M4 3h16M4 21h16"],
  grid: ["M3 5h18v14H3z", "M3 10h18M3 15h18M9 5v14M15 5v14"],
  feature: ["M2 4h20", "M6 4v4h12V4", "M9 8v3h6V8", "M12 11v5", "M10 16h4l-2 3z"],
  flat: ["M2 5h20", "M2 9h20", "M7 9v2M17 9v2"],
  pendant: ["M12 2v8", "M7 15a5 5 0 0 1 10 0z", "M12 18v2"],
  drop: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z"],
  repair: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  replace: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4"],
  paint: ["M4 4h13v5H4z", "M17 6h3v6h-8v3", "M11 15h2v6h-2z"],
  curtain: ["M3 3h18", "M5 3v18c2-1 3-6 3-18", "M19 3v18c-2-1-3-6-3-18"],
  wall: ["M4 3v18", "M4 6h16", "M8 6v4M14 6v4", "M4 10h16"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  plan: ["M3 3h18v18H3z", "M3 9h8v12", "M11 3v6", "M15 13h6"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
};

interface FcIconProps {
  name: FcIconName;
  className?: string;
}

export default function FcIcon({ name, className = "h-6 w-6" }: FcIconProps) {
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
