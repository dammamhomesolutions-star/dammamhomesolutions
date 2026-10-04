import type { ScIconName } from "@/lib/sofa-carpet-cleaning";

// Line icons for the sofa & carpet page: 24×24, 1.75 stroke, round caps.
const paths: Record<ScIconName, string[]> = {
  sofa: [
    "M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3",
    "M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z",
    "M6 18v2M18 18v2",
  ],
  carpet: ["M4 6h16v12H4z", "M7 9h10v6H7z", "M4 6V4M8 6V4M12 6V4M16 6V4M20 6V4M4 18v2M8 18v2M12 18v2M16 18v2M20 18v2"],
  rug: ["M12 5c5 0 9 3 9 7s-4 7-9 7-9-3-9-7 4-7 9-7z", "M12 8.5c3 0 5 1.6 5 3.5s-2 3.5-5 3.5-5-1.6-5-3.5 2-3.5 5-3.5z"],
  chair: ["M7 4h10v8H7z", "M5 12h14v4H5z", "M7 16v4M17 16v4"],
  vacuum: ["M7 3v11", "M7 14a4 4 0 0 0 4 4h4", "M15 15h5v4h-5z", "M4 21h17"],
  machine: ["M6 8h10v10H6z", "M16 11h3v4h-3", "M9 18v3M13 18v3", "M8 8V5h6v3", "M9 12h4"],
  water: ["M3 12c2-2 4 2 6 0s4 2 6 0 4 2 6 0", "M3 17c2-2 4 2 6 0s4 2 6 0 4 2 6 0", "M3 7c2-2 4 2 6 0s4 2 6 0 4 2 6 0"],
  drop: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z"],
  stain: ["M8 7c2-3 7-3 9 0s3 6 0 9-9 4-11 1-0-7 2-10z", "M18 5h.01M5 17h.01"],
  odor: ["M8 20c-2-3 2-5 0-8s2-5 0-8", "M12 20c-2-3 2-5 0-8s2-5 0-8", "M16 20c-2-3 2-5 0-8s2-5 0-8"],
  fabric: ["M4 4h16v16H4z", "M4 9h16M4 14h16M9 4v16M14 4v16"],
  fiber: ["M6 20c0-6 2-10 2-16", "M10 20c0-6 2-10 1-16", "M14 20c0-6 1-10 3-16", "M18 20c0-5-1-9 0-15"],
  brush: ["M15.5 3.5l5 5-6 6-5-5z", "M9.5 9.5L5 14v6h6l4.5-4.5", "M8 17.5h.01"],
  shield: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  office: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3.5v4M16 3.5v4"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  wind: ["M3 9h11a3 3 0 1 0-3-3", "M3 15h14a3 3 0 1 1-3 3", "M3 12h7"],
};

interface ScIconProps {
  name: ScIconName;
  className?: string;
}

export default function ScIcon({ name, className = "h-6 w-6" }: ScIconProps) {
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
