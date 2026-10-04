import type { ApIconName } from "@/lib/appliance-repair";

// Line icons for the appliance repair page: 24×24, 1.75 stroke, round caps.
const paths: Record<ApIconName, string[]> = {
  washer: ["M5 3h14v18H5z", "M5 7h14", "M8 5h.01M11 5h.01", "M12 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z", "M10 15c1-1 3-1 4 0"],
  fridge: ["M6 3h12v18H6z", "M6 10h12", "M9 6v2M9 13v3"],
  oven: ["M4 4h16v16H4z", "M4 8h16", "M7 6h.01M10 6h.01M14 6h3", "M7 11h10v6H7z"],
  appliance: ["M4 6h16v12H4z", "M7 9h7v6H7z", "M17 9v.01M17 12v.01M17 15v.01"],
  drum: ["M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 4v4M12 16v4"],
  water: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z"],
  drain: ["M4 5h16", "M12 5v8", "M8 13h8l-1 6H9z"],
  spin: ["M4 12a8 8 0 0 1 14-5.3", "M18 3v4h-4", "M20 12a8 8 0 0 1-14 5.3", "M6 21v-4h4"],
  vibration: ["M8 4h8v16H8z", "M4 8v8M20 8v8", "M2 10v4M22 10v4"],
  leak: ["M5 4h14", "M12 4v5", "M12 12c2 2.7 3.5 4.6 3.5 6.5a3.5 3.5 0 0 1-7 0c0-1.9 1.5-3.8 3.5-6.5z"],
  cooling: ["M12 3v18", "M4.2 7.5l15.6 9M4.2 16.5l15.6-9", "M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5"],
  freezer: ["M6 3h12v18H6z", "M6 9h12", "M12 12v6M9.5 13.5l5 3M9.5 16.5l5-3"],
  thermometer: ["M10 4a2 2 0 0 1 4 0v10a4 4 0 1 1-4 0z", "M12 9v7"],
  seal: ["M5 3h14v18H5z", "M8 6h8v12H8z"],
  airflow: ["M3 8h10a3 3 0 1 0-3-3", "M3 16h14a3 3 0 1 1-3 3", "M3 12h16"],
  heat: ["M8 20c-2-3 2-5 0-8s2-5 0-8", "M16 20c-2-3 2-5 0-8s2-5 0-8", "M12 20c-2-3 2-5 0-8s2-5 0-8"],
  fan: ["M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M12 10c0-4 1-6 4-6 2 0 2 3 0 5", "M14 12c4 0 6 1 6 4 0 2-3 2-5 0", "M12 14c0 4-1 6-4 6-2 0-2-3 0-5", "M10 12c-4 0-6-1-6-4 0-2 3-2 5 0"],
  door: ["M6 3h12v18H6z", "M15 11v2"],
  element: ["M4 8h14a2 2 0 0 1 0 4H6a2 2 0 0 0 0 4h14"],
  control: ["M5 5h14v14H5z", "M9 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z", "M15 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z", "M8 16h8"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  repair: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  replace: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4"],
  technician: ["M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2", "M8.5 6.5h7"],
  checklist: ["M9 6h11M9 12h11M9 18h11", "M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  safety: ["M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z", "M8.5 12l2.5 2.5 4.5-4.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  flame: ["M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 0 2 1 3 2 3 0-3-1-5 .5-8z"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  tag: ["M3 12V4h8l10 10-8 8z", "M7.5 7.5h.01"],
};

interface ApIconProps {
  name: ApIconName;
  className?: string;
}

export default function ApIcon({ name, className = "h-6 w-6" }: ApIconProps) {
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
