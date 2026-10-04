import type { CbIconName } from "@/lib/curtain-blind";

// Line icons for the curtain & blind page: 24×24, 1.75 stroke, round caps.
const paths: Record<CbIconName, string[]> = {
  window: ["M4 4h16v16H4z", "M12 4v16", "M4 12h16"],
  curtain: ["M3 3h18", "M5 3v18c2-1 3-6 3-18", "M19 3v18c-2-1-3-6-3-18", "M9 21h6"],
  rod: ["M2 5h20", "M4 5v2M20 5v2", "M6 5v14M10 5v14M14 5v14M18 5v14"],
  track: ["M3 4h18v2H3z", "M6 6v1M10 6v1M14 6v1M18 6v1", "M5 7c1 4 1 9 0 14M9 7c1 4 1 9 0 14M13 7c-1 4-1 9 0 14"],
  ceiling: ["M2 3h20", "M4 5h16", "M6 5v16M10 5v16M14 5v16M18 5v16"],
  roller: ["M3 4h18", "M4 4a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4", "M5 8v9h14V8", "M10 17h4v2h-4z"],
  venetian: ["M3 4h18", "M4 7h16M4 10h16M4 13h16M4 16h16M4 19h16", "M20 4v15"],
  vertical: ["M3 4h18", "M5 4v16M8 4v16M11 4v16M14 4v16M17 4v16M20 4v16"],
  roman: ["M3 4h18", "M5 4v4h14V4", "M5 8c0 2 14 2 14 0", "M5 10c0 2 14 2 14 0", "M5 12v6h14v-6"],
  blackout: ["M4 4h16v16H4z", "M4 4l16 16", "M20 4L4 20", "M8 8h8v8H8z"],
  sheer: ["M3 3h18", "M5 3c0 6 2 12 0 18M9 3c0 6 2 12 0 18M13 3c0 6 2 12 0 18M17 3c0 6 2 12 0 18"],
  layered: ["M3 3h18", "M4 3v18c3-2 4-8 4-18", "M20 3v18c-3-2-4-8-4-18", "M10 3c0 6 1 12 0 18M14 3c0 6-1 12 0 18"],
  handle: ["M10 4v16", "M10 10h6a2 2 0 0 1 0 4h-6"],
  bracket: ["M5 4h4v16H5z", "M9 8h8l2 2-2 2H9"],
  measure: ["M3 8h18v8H3z", "M7 8v3M11 8v4M15 8v3M19 8v4"],
  align: ["M3 12h18", "M12 3v18", "M7 8l-4 4 4 4M17 8l4 4-4 4"],
  slider: ["M3 4h18v16H3z", "M12 4v16", "M7 12h3M14 12h3", "M3 2h18"],
  motor: ["M3 4h18", "M5 4v9h14V4", "M9 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0z", "M12 13v1"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],
  eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  key: ["M8 14a4 4 0 1 1 3.5-6", "M11.5 8H21v3h-2v2h-3v-2h-4.5"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  tools: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z", "M4 4l5 5", "M3 7l4-4"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
};

interface CbIconProps {
  name: CbIconName;
  className?: string;
}

export default function CbIcon({ name, className = "h-6 w-6" }: CbIconProps) {
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
