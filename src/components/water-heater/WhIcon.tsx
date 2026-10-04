import type { WhIconName } from "@/lib/water-heater";

// Line icons for the water heater page: 24×24, 1.75 stroke, round caps.
const paths: Record<WhIconName, string[]> = {
  heater: ["M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M9 1.5V4M15 1.5V4", "M10 15h4", "M12 8v4"],
  hot: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z", "M12 11v5M10 13.5h4"],
  cold: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z", "M10 14h4"],
  repair: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
  ],
  replace: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4"],
  install: ["M12 3v12", "M7 10l5 5 5-5", "M4 21h16"],
  leak: ["M5 4h14", "M12 4v5", "M12 12c2 2.7 3.5 4.6 3.5 6.5a3.5 3.5 0 0 1-7 0c0-1.9 1.5-3.8 3.5-6.5z"],
  thermostat: ["M10 4a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z", "M12 10v6"],
  heating: ["M6 20c0-3 2-3 2-6s-2-3-2-6M12 20c0-3 2-3 2-6s-2-3-2-6M18 20c0-3 2-3 2-6s-2-3-2-6"],
  safety: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  plumbing: ["M4 6h7a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h3", "M4 10h5a1 1 0 0 1 1 1v4a7 7 0 0 0 7 7"],
  bolt: ["M13 2L4 14h7l-1 8 9-12h-7z"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  technician: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2", "M8.5 6.5h7"],
  quote: ["M6 3h9l4 4v14H6z", "M15 3v4h4", "M9 12h7M9 16h5"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  flame: ["M12 3c1 3.5 5 5.6 5 10.2a5 5 0 0 1-10 0c0-2.2 1.1-3.7 2.4-4.7.2 1.6.9 2.7 2 3.2-.4-3.2-.2-6.2.6-8.7z"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
};

interface WhIconProps {
  name: WhIconName;
  className?: string;
}

export default function WhIcon({ name, className = "h-6 w-6" }: WhIconProps) {
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
