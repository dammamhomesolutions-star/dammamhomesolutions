import type { CvIconName } from "@/lib/cctv-intercom";

// Line icons for the CCTV & intercom page: 24×24, 1.75 stroke, round caps.
const paths: Record<CvIconName, string[]> = {
  camera: ["M3 7l13-3 2 6-13 3z", "M18 10l3 1", "M8 12l1 4H5v4", "M7.5 8.5h.01"],
  intercom: ["M7 3h10v18H7z", "M9.5 6h5v4h-5z", "M12 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z", "M10 18.5h4"],
  gate: ["M3 21V6M21 21V6", "M3 9h18M3 18h18", "M7 9v9M11 9v9M15 9v9M19 9v9"],
  door: ["M6 3h12v18H6z", "M15 11v2", "M3 21h18"],
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  apartment: ["M5 21V3h14v18", "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2", "M10 21v-3h4v3", "M3 21h18"],
  office: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  shop: ["M4 9l1.5-5h13L20 9", "M4 9c0 1.5 1.3 2.5 2.7 2.5S9.3 10.5 9.3 9c0 1.5 1.3 2.5 2.7 2.5s2.7-1 2.7-2.5c0 1.5 1.3 2.5 2.7 2.5S20 10.5 20 9", "M5 11.5V20h14v-8.5", "M10 20v-5h4v5"],
  warehouse: ["M3 20V9l9-5 9 5v11", "M7 20v-8h10v8", "M7 15h10"],
  coverage: ["M5 18L12 6l7 12", "M8 18a5 5 0 0 1 8 0", "M12 6v0"],
  night: ["M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"],
  recording: ["M3 6h13v12H3z", "M16 10l5-3v10l-5-3", "M7 10h.01"],
  nvr: ["M3 8h18v8H3z", "M6 12h.01M9 12h.01", "M14 12h4", "M5 16v2M19 16v2"],
  cloud: ["M7 18a4 4 0 0 1-.6-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"],
  mobile: ["M7 2h10v20H7z", "M11 18h2", "M9 6h6v8H9z"],
  network: ["M12 3v5", "M5 21v-4h14v4", "M12 13v4", "M9 8h6v5H9z", "M3 21h4M10 21h4M17 21h4"],
  poe: ["M4 12h6", "M14 12h6", "M10 8h4v8h-4z", "M17 6l-2 4h3l-2 4"],
  shield: ["M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z", "M8.5 12l2.5 2.5 4.5-4.5"],
  maintenance: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  motion: ["M13 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z", "M9 21l3-6 3 3v3", "M8 11l3-3 3 2 3 1", "M12 15l-1-4"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  audio: ["M4 10v4h4l5 4V6l-5 4z", "M16 9c1 1 1 5 0 6M19 6c2.5 3 2.5 9 0 12"],
  lock: ["M6 11h12v10H6z", "M8.5 11V8a3.5 3.5 0 0 1 7 0v3", "M12 15v2"],
  eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  user: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  cable: ["M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2", "M2 4h4M18 20h4"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],
};

interface CvIconProps {
  name: CvIconName;
  className?: string;
}

export default function CvIcon({ name, className = "h-6 w-6" }: CvIconProps) {
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
