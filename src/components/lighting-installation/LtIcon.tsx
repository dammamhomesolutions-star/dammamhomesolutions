import type { LtIconName } from "@/lib/lighting-installation";

// Line icons for the lighting page: 24×24, 1.75 stroke, round caps.
const paths: Record<LtIconName, string[]> = {
  ceiling: ["M3 4h18", "M12 4v3", "M6 11a6 4 0 0 1 12 0z", "M9 15l-1 3M12 15v4M15 15l1 3"],
  pendant: ["M12 2v8", "M7 15a5 5 0 0 1 10 0z", "M12 18v2"],
  chandelier: ["M12 2v5", "M5 12a7 3 0 0 0 14 0", "M12 7v5", "M5 12V9M19 12V9M8.5 13.5V10M15.5 13.5V10", "M10 16h4l-2 3z"],
  flush: ["M3 5h18", "M6 5a6 4 0 0 0 12 0", "M9 13l-1 3M12 13v4M15 13l1 3"],
  recessed: ["M3 6h18", "M9 6v2h6V6", "M8 10l-3 9M16 10l3 9", "M10 10l-1 4M14 10l1 4"],
  track: ["M3 5h18", "M7 5v3l-2 3h4L7 8", "M14 5v3l-2 3h4l-2-3", "M5 14l-1 4M16 14l2 4"],
  sconce: ["M4 4v16", "M4 12h4", "M8 8h6l-2 8H10z", "M11 3v4M11 17v4"],
  mirror: ["M7 6h10v14H7z", "M5 3h14", "M8 3v2M12 3v2M16 3v2"],
  outdoor: ["M4 3v18", "M4 8h3", "M7 5h6v8H7z", "M10 13v2", "M15 8l3-1M15 11h4M15 14l3 1"],
  flood: ["M3 10h6v6H3z", "M9 11l4-3v10l-4-3", "M15 8l5-3M16 13h5M15 18l5 3"],
  decorative: ["M3 4h18", "M5 4v3a7 7 0 0 0 14 0V4", "M12 14v3", "M10 20h4"],
  cabinet: ["M3 4h18v7H3z", "M12 4v7", "M3 11h18", "M6 13l-1 3M12 13v4M18 13l1 3", "M2 20h20"],
  switch: ["M7 3h10v18H7z", "M10 8h4v8h-4z", "M10 12h4"],
  dimmer: ["M7 3h10v18H7z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M12 9v2"],
  smart: ["M7 2h10v20H7z", "M11 18h2", "M12 7a3 3 0 0 1 3 3c0 1.2-1 2-1 3h-4c0-1-1-1.8-1-3a3 3 0 0 1 3-3z"],
  motion: ["M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z", "M8 21l3-6 3 3v3", "M7 11l3-3 3 2 3 1", "M11 15l-1-4", "M18 4a6 6 0 0 1 0 6"],
  zones: ["M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"],
  room: ["M3 21V8l9-5 9 5v13", "M3 21h18", "M9 21v-6h6v6"],
  mount: ["M3 4h18", "M9 4v3h6V4", "M12 7v6", "M9 13h6", "M10 16h4"],
  install: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  assess: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  test: ["M12 3a6 6 0 0 1 3.5 10.9V16h-7v-2.1A6 6 0 0 1 12 3z", "M9 19h6", "M10 22h4", "M10 9l1.5 1.5L14 8"],
  ambient: ["M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  task: ["M5 21h10", "M8 21l2-9", "M10 12l6-6", "M14 4l4 4-3 1-2-2z", "M17 12l1 3"],
  accent: ["M4 4l6 6", "M4 4h4M4 4v4", "M12 12l8 8", "M14 6h6v6", "M10 14v6H4"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
};

interface LtIconProps {
  name: LtIconName;
  className?: string;
}

export default function LtIcon({ name, className = "h-6 w-6" }: LtIconProps) {
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
