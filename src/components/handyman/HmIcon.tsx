import type { HmIconName } from "@/lib/handyman";

// Line icons for the handyman page: 24×24, 1.75 stroke, round caps.
const paths: Record<HmIconName, string[]> = {
  install: ["M4 4v16", "M4 9h10", "M14 6v6", "M18 9h2"],
  assemble: ["M4 9h7v11H4z", "M13 4h7v7h-7z", "M13 15h7v5h-7z", "M11 14h2"],
  repair: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  adjust: ["M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0", "M14 4v4M8 10v4M16 16v4"],
  maintain: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  utility: ["M12 3v5", "M8 8h8v4a4 4 0 0 1-8 0z", "M12 16v5"],
  curtain: ["M3 3h18", "M5 3v18c2-1 3-6 3-18", "M19 3v18c-2-1-3-6-3-18"],
  shelf: ["M3 8h18", "M3 16h18", "M6 8v3M18 8v3M6 16v3M18 16v3"],
  mirror: ["M12 3c4 0 6 4 6 8s-2 10-6 10-6-6-6-10 2-8 6-8z", "M10 8l3-2"],
  frame: ["M4 5h16v14H4z", "M7 8h10v8H7z", "M12 2l-3 3h6z"],
  tv: ["M3 5h18v12H3z", "M8 21h8", "M12 17v4"],
  hook: ["M12 3v8a3 3 0 1 1-3 3", "M9 3h6"],
  sofa: ["M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", "M2 12h20v5H2z", "M4 17v2M20 17v2"],
  desk: ["M2 8h20", "M4 8v12M20 8v12", "M14 8v7h6", "M16 11h2"],
  cabinet: ["M5 3h14v17H5z", "M12 3v17", "M10 10v3M14 10v3"],
  wall: ["M3 4h18v16H3z", "M3 9h18M3 14h18", "M9 4v5M15 9v5M9 14v6", "M17 17h.01"],
  seal: ["M3 18c3-2 6-2 9 0s6 2 9 0", "M3 13h18", "M8 13V6h8v7"],
  door: ["M6 3h12v18H6z", "M15 11v2", "M3 21h18"],
  drawer: ["M4 6h16v13H4z", "M4 11h16", "M10 8.5h4M10 15h4"],
  tap: ["M4 10h9a3 3 0 0 1 3 3v2", "M8 10V6h4", "M6 6h8", "M16 18v1M16 21v0"],
  bulb: ["M12 3a6 6 0 0 1 3.5 10.9V16h-7v-2.1A6 6 0 0 1 12 3z", "M9 19h6", "M10 22h4"],
  socket: ["M5 5h14v14H5z", "M10 10v2M14 10v2", "M10 15h4"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  key: ["M8 14a4 4 0 1 1 3.5-6", "M11.5 8H21v3h-2v2h-3v-2h-4.5"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  plus: ["M12 5v14", "M5 12h14"],
  minus: ["M5 12h14"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  pin: ["M12 3a4 4 0 0 1 4 4c0 3-4 7-4 7s-4-4-4-7a4 4 0 0 1 4-4z", "M12 14v7"],
};

interface HmIconProps {
  name: HmIconName;
  className?: string;
}

export default function HmIcon({ name, className = "h-6 w-6" }: HmIconProps) {
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
