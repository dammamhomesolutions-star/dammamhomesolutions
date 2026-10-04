import type { SpIconName } from "@/lib/swimming-pool";

// Line icons for the swimming pool page: 24×24, 1.75 stroke, round caps.
const paths: Record<SpIconName, string[]> = {
  pool: ["M4 5h16v14H4z", "M4 12c2-1.5 4-1.5 6 0s4 1.5 6 0 2-1.5 4 0"],
  water: ["M2 9c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5 0", "M2 15c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5 0"],
  level: ["M4 4v16h16V4", "M4 11h16", "M12 14v4M10 16l2 2 2-2"],
  circulation: ["M4 12a8 8 0 0 1 14-5.3", "M18 3v4h-4", "M20 12a8 8 0 0 1-14 5.3", "M6 21v-4h4"],
  clarity: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z", "M9.5 13a2.5 2.5 0 0 0 2.5 2.5"],
  pump: ["M4 9h10v8H4z", "M14 11h3a2 2 0 0 1 0 4h-3", "M9 9V5h6", "M6 17v3M12 17v3", "M9 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"],
  filter: ["M7 3h10v4l-2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9L7 7z", "M10 12h4M10 15h4"],
  pipe: ["M3 7h10a4 4 0 0 1 4 4v10", "M3 12h7a2 2 0 0 1 2 2v7"],
  valve: ["M3 12h6M15 12h6", "M9 8l6 8M9 16l6-8", "M12 8V4M9 4h6"],
  skimmer: ["M4 8h16v10H4z", "M8 8V5h8v3", "M8 12h8"],
  drain: ["M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z", "M8 10h8M8 14h8"],
  tile: ["M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3z", "M13 13h8v8h-8z", "M15 15l4 4"],
  light: ["M12 3a6 6 0 0 1 3.5 10.9V16h-7v-2.1A6 6 0 0 1 12 3z", "M9 19h6", "M10 22h4"],
  heater: ["M5 4h14v16H5z", "M9 8c1 1.5-1 2.5 0 4M12 8c1 1.5-1 2.5 0 4M15 8c1 1.5-1 2.5 0 4", "M8 16h8"],
  chlorinator: ["M8 3h8v18H8z", "M8 8h8", "M11 12h2M12 11v2"],
  control: ["M5 4h14v16H5z", "M8 8h8v4H8z", "M8 16h.01M12 16h.01M16 16h.01"],
  edge: ["M3 8h18v4H3z", "M3 12v8", "M3 16c3-1.5 6-1.5 9 0s6 1.5 9 0"],
  area: ["M3 3h18v18H3z", "M7 7h10v10H7z", "M3 3l4 4M21 3l-4 4M3 21l4-4M21 21l-4-4"],
  calendar: ["M4 5h16v15H4z", "M4 9h16", "M8 3v4M16 3v4", "M8 13h2M12 13h2M8 16h2"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  repair: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],
};

interface SpIconProps {
  name: SpIconName;
  className?: string;
}

export default function SpIcon({ name, className = "h-6 w-6" }: SpIconProps) {
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
