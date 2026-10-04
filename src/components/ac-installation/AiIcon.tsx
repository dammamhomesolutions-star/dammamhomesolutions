import type { AiIconName } from "@/lib/ac-installation";

// Line icons for the AC installation page: 24×24, 1.75 stroke, round caps.
const paths: Record<AiIconName, string[]> = {
  ac: ["M3 6h18v8H3z", "M6 11h12", "M7 17c1 1.5 1 3 0 4M12 17c1 1.5 1 3 0 4M17 17c1 1.5 1 3 0 4"],
  snowflake: ["M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7", "M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5"],
  fan: ["M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M12 10c0-4 1-7 4-7 2 3-1 6-4 7zM14 12c4 0 7 1 7 4-3 2-6-1-7-4zM12 14c0 4-1 7-4 7-2-3 1-6 4-7zM10 12c-4 0-7-1-7-4 3-2 6 1 7 4z"],
  thermometer: ["M10 4a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z", "M12 10v6"],
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  apartment: ["M5 21V3h14v18", "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2", "M10 21v-3h4v3", "M3 21h18"],
  villa: ["M2 21h20", "M4 21V10h16v11", "M3 10h18", "M8 10V6h8v4", "M8 15h3v6H8zM14 14h3v3h-3z"],
  outdoor: ["M3 5h18v14H3z", "M10 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M17 8v8M19 8v8"],
  indoor: ["M3 5h18v7H3z", "M6 9.5h12", "M8 15l-1 3M12 15v3M16 15l1 3"],
  pipe: ["M4 6h7a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h3", "M4 10h5a1 1 0 0 1 1 1v4a7 7 0 0 0 7 7"],
  drop: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z"],
  drain: ["M12 3v10", "M8 13h8l-1 4H9z", "M12 17v2", "M10 21h4"],
  bolt: ["M13 2L4 14h7l-1 8 9-12h-7z"],
  tools: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
    "M3.5 5.5l2-2 4 4-2 2z",
  ],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  airflow: ["M3 9h11a3 3 0 1 0-3-3", "M3 15h14a3 3 0 1 1-3 3", "M3 12h7"],
  shield: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3.5v4M16 3.5v4"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  duct: ["M3 8h14v8H3z", "M17 10h4v4h-4", "M6 16v4M14 16v4", "M6 11h2M11 11h2"],
  window: ["M4 4h16v16H4z", "M4 12h16", "M8 15h8v3H8z"],
};

interface AiIconProps {
  name: AiIconName;
  className?: string;
}

export default function AiIcon({ name, className = "h-6 w-6" }: AiIconProps) {
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
