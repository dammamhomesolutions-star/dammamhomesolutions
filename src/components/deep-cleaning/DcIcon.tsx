import type { DcIconName } from "@/lib/deep-cleaning";

// Line icons for the cleaning page: 24×24, 1.75 stroke, round caps and joins.
const paths: Record<DcIconName, string[]> = {
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  apartment: ["M5 21V3h14v18", "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2", "M10 21v-3h4v3", "M3 21h18"],
  villa: ["M2 21h20", "M4 21V10h16v11", "M3 10h18", "M8 10V6h8v4", "M8 15h3v6H8zM14 14h3v3h-3z"],
  kitchen: ["M4 4h16v16H4z", "M4 10h16", "M8 7h.01M12 7h.01", "M8 14h8v3H8z"],
  bathroom: ["M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z", "M5 12V5a2 2 0 0 1 4 0", "M7 19l-1 2M17 19l1 2"],
  bedroom: ["M3 19V8", "M3 14h18v5", "M3 14v-3h7v3", "M21 14v-2a3 3 0 0 0-3-3h-5v5"],
  sofa: [
    "M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3",
    "M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z",
    "M6 18v2M18 18v2",
  ],
  cabinet: ["M4 4h16v16H4z", "M12 4v16", "M9.5 11v2M14.5 11v2"],
  floor: ["M2.5 18.5l4.5-11h10l4.5 11z", "M10 7.5l-1.5 11M14 7.5l1.5 11", "M4.6 13.5h14.8"],
  window: ["M5 4h14v16H5z", "M12 4v16M5 12h14"],
  sink: ["M3 12h18", "M5 12v2a7 7 0 0 0 14 0v-2", "M12 12V6a2 2 0 0 1 4 0"],
  toilet: ["M6 3h7v6H6z", "M4 9h14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z", "M9 14l-1 7h7l-1-7"],
  bucket: ["M4 8h16l-2 12H6z", "M4 8a8 4 0 0 1 16 0", "M9 12h6"],
  cloth: ["M5 6h14l-2 14H7z", "M8 10c2 1.5 6 1.5 8 0M8.5 14c2 1.5 5 1.5 7 0"],
  vacuum: ["M7 3v11", "M7 14a4 4 0 0 0 4 4h4", "M15 15h5v4h-5z", "M4 21h17"],
  brush: ["M15.5 3.5l5 5-6 6-5-5z", "M9.5 9.5L5 14v6h6l4.5-4.5", "M8 17.5h.01"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  movein: ["M4 10l8-6 8 6v10H4z", "M2 15h9", "M8 12l3 3-3 3"],
  moveout: ["M4 10l8-6 8 6v10H4z", "M11 15h11", "M19 12l3 3-3 3"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3.5v4M16 3.5v4"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  key: ["M8 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M12 11h9", "M18 11v3M15 11v2"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
};

interface DcIconProps {
  name: DcIconName;
  className?: string;
}

export default function DcIcon({ name, className = "h-6 w-6" }: DcIconProps) {
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
