import type { DkIconName } from "@/lib/ac-duct-cleaning";

// Line icons for the duct cleaning page: 24×24, 1.75 stroke, round caps.
const paths: Record<DkIconName, string[]> = {
  duct: ["M2 8h12v8H2z", "M14 10h4l4-3v10l-4-3h-4", "M6 8v8M10 8v8"],
  airflow: ["M3 9h11a3 3 0 1 0-3-3", "M3 15h14a3 3 0 1 1-3 3", "M3 12h7"],
  vent: ["M4 5h16v14H4z", "M7 9h10M7 12h10M7 15h10"],
  filter: ["M4 4h16v16H4z", "M4 8l4-4M4 13l9-9M4 18l14-14M8 20l12-12M13 20l7-7M18 20l2-2"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  vacuum: ["M7 3v11", "M7 14a4 4 0 0 0 4 4h4", "M15 15h5v4h-5z", "M4 21h17"],
  debris: ["M5 18h14", "M7 15h.01M10 13h.01M13 15h.01M16 12h.01M9 10h.01M14 9h.01", "M4 6c3-2 5 2 8 0s5 2 8 0"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  office: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  technician: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2", "M8.5 6.5h7"],
  shield: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  quote: ["M6 3h9l4 4v14H6z", "M15 3v4h4", "M9 12h7M9 16h5"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  drop: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z"],
  odor: ["M8 20c-2-3 2-5 0-8s2-5 0-8", "M12 20c-2-3 2-5 0-8s2-5 0-8", "M16 20c-2-3 2-5 0-8s2-5 0-8"],
  tools: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
    "M3.5 5.5l2-2 4 4-2 2z",
  ],
  brush: ["M15.5 3.5l5 5-6 6-5-5z", "M9.5 9.5L5 14v6h6l4.5-4.5", "M8 17.5h.01"],
  fan: ["M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M12 10c0-4 1-7 4-7 2 3-1 6-4 7zM14 12c4 0 7 1 7 4-3 2-6-1-7-4zM12 14c0 4-1 7-4 7-2-3 1-6 4-7zM10 12c-4 0-7-1-7-4 3-2 6 1 7 4z"],
};

interface DkIconProps {
  name: DkIconName;
  className?: string;
}

export default function DkIcon({ name, className = "h-6 w-6" }: DkIconProps) {
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
