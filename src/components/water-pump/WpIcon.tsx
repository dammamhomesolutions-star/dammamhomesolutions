import type { WpIconName } from "@/lib/water-pump";

// Line icons for the water pump page: 24×24, 1.75 stroke, round caps.
const paths: Record<WpIconName, string[]> = {
  pump: ["M4 9h10v8H4z", "M14 11h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3", "M9 9V5h6", "M6 17v3M12 17v3", "M9 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"],
  tank: ["M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3v12c0 1.7-3.1 3-7 3s-7-1.3-7-3z", "M5 6c0 1.7 3.1 3 7 3s7-1.3 7-3", "M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"],
  pressure: ["M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z", "M12 12l4-4", "M8 16h8"],
  flow: ["M3 9h11a3 3 0 1 0-3-3", "M3 15h14a3 3 0 1 1-3 3", "M3 12h7"],
  repair: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
  ],
  replace: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4"],
  install: ["M12 3v12", "M7 10l5 5 5-5", "M4 21h16"],
  leak: ["M5 4h14", "M12 4v5", "M12 12c2 2.7 3.5 4.6 3.5 6.5a3.5 3.5 0 0 1-7 0c0-1.9 1.5-3.8 3.5-6.5z"],
  motor: ["M4 7h12v10H4z", "M16 10h3v4h-3", "M7 7v10M10 7v10M13 7v10"],
  controller: ["M6 3h12v18H6z", "M9 7h6v4H9z", "M9 15h.01M12 15h.01M15 15h.01"],
  valve: ["M3 12h6M15 12h6", "M9 8l6 8M9 16l6-8", "M12 8V4M9 4h6"],
  pipe: ["M3 7h10a4 4 0 0 1 4 4v10", "M3 12h7a2 2 0 0 1 2 2v7"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  technician: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2", "M8.5 6.5h7"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  apartment: ["M5 21V3h14v18", "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2", "M10 21v-3h4v3", "M3 21h18"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  sound: ["M4 10v4h4l5 4V6l-5 4z", "M16 9c1 1 1 5 0 6M19 6c2.5 3 2.5 9 0 12"],
  bolt: ["M13 2L4 14h7l-1 8 9-12h-7z"],
};

interface WpIconProps {
  name: WpIconName;
  className?: string;
}

export default function WpIcon({ name, className = "h-6 w-6" }: WpIconProps) {
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
