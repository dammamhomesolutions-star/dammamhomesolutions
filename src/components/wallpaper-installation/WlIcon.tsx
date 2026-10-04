import type { WlIconName } from "@/lib/wallpaper-installation";

// Line icons for the wallpaper page: 24×24, 1.75 stroke, round caps.
const paths: Record<WlIconName, string[]> = {
  roll: ["M5 6a3 3 0 1 0 0 6h11", "M5 6h11a3 3 0 0 1 0 6", "M16 12v8H5V9", "M5 15h5"],
  sheet: ["M6 3h12v18H6z", "M6 7h12", "M9 11l3 3 3-3"],
  wall: ["M3 4h18v16H3z", "M3 9h18M3 14h18", "M9 4v5M15 9v5M9 14v6"],
  seam: ["M4 3h7v18H4z", "M13 3h7v18h-7z", "M12 3v18"],
  pattern: ["M4 4h16v16H4z", "M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"],
  corner: ["M4 4v16h16", "M4 4l8 4v12", "M12 20h8"],
  window: ["M4 4h16v16H4z", "M12 4v16", "M4 12h16"],
  door: ["M6 3h12v18H6z", "M15 11v2", "M3 21h18"],
  measure: ["M3 8h18v8H3z", "M7 8v3M11 8v4M15 8v3M19 8v4"],
  brush: ["M4 20c3 0 5-2 5-4l-2-2c-2 0-4 2-3 6z", "M9 16l10-10-2-2L7 14"],
  prepared: ["M3 4h18v16H3z", "M7 9h10M7 13h6", "M15 15l2 2 3-4"],
  feature: ["M3 4h18v16H3z", "M9 4v16", "M12 8c1 1 2 1 3 0M12 12c1 1 2 1 3 0M17 10c1 1 2 1 3 0"],
  mural: ["M3 4h18v16H3z", "M3 16l5-6 4 4 3-3 6 6", "M15 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"],
  room: ["M3 21V8l9-5 9 5v13", "M3 21h18", "M9 21v-6h6v6"],
  scraper: ["M4 20l8-8", "M12 12l4-8 4 4-8 4z"],
  drop: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  key: ["M8 14a4 4 0 1 1 3.5-6", "M11.5 8H21v3h-2v2h-3v-2h-4.5"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  level: ["M3 9h18v6H3z", "M10 9v6M14 9v6", "M11 12h2"],
};

interface WlIconProps {
  name: WlIconName;
  className?: string;
}

export default function WlIcon({ name, className = "h-6 w-6" }: WlIconProps) {
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
