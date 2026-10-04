import type { FsIconName } from "@/lib/fire-smoke-restoration";

// One consistent line-icon set for this page: 24×24 grid, 1.75 stroke,
// round caps and joins. pathLength="1" lets CSS redraw each stroke on hover.
const paths: Record<FsIconName, string[]> = {
  fire: [
    "M12 3c1 3.5 5 5.6 5 10.2a5 5 0 0 1-10 0c0-2.2 1.1-3.7 2.4-4.7.2 1.6.9 2.7 2 3.2-.4-3.2-.2-6.2.6-8.7z",
  ],
  smoke: [
    "M4 17c2-2 4 2 6 0s4 2 6 0 3.2 1 4 0",
    "M5 12c2-2 4 2 6 0s4 2 6 0",
    "M8 7c1.5-1.5 3 1.5 4.5 0s3 1.5 4 0",
  ],
  soot: [
    "M4 4h16v16H4z",
    "M8.5 9.5h.01M13 8h.01M11 13h.01M15.5 13.5h.01M8 16.5h.01M16 17h.01",
  ],
  house: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  shield: ["M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z", "M9 12l2 2 4-4"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  droplet: ["M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z", "M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"],
  air: ["M3 9h11a3 3 0 1 0-3-3", "M3 15h14a3 3 0 1 1-3 3", "M3 12h7"],
  sofa: [
    "M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3",
    "M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z",
    "M6 18v2M18 18v2",
  ],
  brush: ["M15.5 3.5l5 5-6 6-5-5z", "M9.5 9.5L5 14v6h6l4.5-4.5", "M8 17.5h.01"],
  odor: [
    "M8 20c-2-3 2-5 0-8s2-5 0-8",
    "M12 20c-2-3 2-5 0-8s2-5 0-8",
    "M16 20c-2-3 2-5 0-8s2-5 0-8",
  ],
  wall: [
    "M3 5h18v14H3z",
    "M3 9.7h18M3 14.3h18",
    "M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19",
  ],
  floor: ["M2.5 18.5l4.5-11h10l4.5 11z", "M10 7.5l-1.5 11M14 7.5l1.5 11", "M4.6 13.5h14.8"],
  cabinet: ["M4 4h16v16H4z", "M12 4v16", "M9.5 11v2M14.5 11v2"],
  tools: [
    "M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z",
    "M3.5 5.5l2-2 4 4-2 2z",
  ],
  clipboard: ["M9 3.5h6v3H9z", "M7 5H5v16h14V5h-2", "M8.5 12h7M8.5 16h4.5"],
  phone: [
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  ],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  roller: ["M4 4h13v5H4z", "M17 6.5h3v5.5h-8v2.5", "M11 14.5h2v6h-2z"],
  building: [
    "M4 21V5l8-2v18",
    "M12 9h8v12",
    "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2",
    "M2 21h20",
  ],
};

interface FsIconProps {
  name: FsIconName;
  className?: string;
  title?: string;
}

export default function FsIcon({ name, className = "h-6 w-6", title }: FsIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`fs-icon ${className}`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} pathLength={1} />
      ))}
    </svg>
  );
}
