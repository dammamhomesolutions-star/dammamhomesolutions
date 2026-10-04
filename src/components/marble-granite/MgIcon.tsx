import type { MgIconName } from "@/lib/marble-granite";

// Line icons for the marble & granite page: 24×24, 1.75 stroke, round caps.
const paths: Record<MgIconName, string[]> = {
  slab: ["M3 6h18v12H3z", "M7 6c2 3 1 6 4 8s5 1 7 4", "M14 6c0 2 2 3 1 5"],
  sparkle: ["M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z", "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"],
  scratch: ["M3 6h18v12H3z", "M6 15l5-6M10 16l6-7M14 15l3-3"],
  drop: ["M12 3c3 4 5 6.7 5 9.5a5 5 0 0 1-10 0C7 9.7 9 7 12 3z"],
  etch: ["M3 6h18v12H3z", "M9 10c1.5-1.5 4.5-1.5 6 0 1.5 1.5 0 4-3 4s-4.5-2.5-3-4z"],
  residue: ["M3 6h18v12H3z", "M6 10h3M12 9h5M7 14h6M15 13h3"],
  clean: ["M4 20h16", "M7 20l2-9h6l2 9", "M9 11V6a3 3 0 0 1 6 0v5"],
  hone: ["M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M12 4v5M12 15v5M4 12h5M15 12h5"],
  polish: ["M3 18h18", "M5 18l3-10h8l3 10", "M10 8V5h4v3", "M7 14l3-3"],
  restore: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4", "M10 12l2 2 3-3"],
  seal: ["M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z", "M12 8v6", "M9 11h6"],
  crack: ["M3 6h18v12H3z", "M10 6l2 4-3 3 3 5"],
  floor: ["M3 14h18v6H3z", "M9 14v6M15 14v6", "M3 14l4-8h10l4 8"],
  counter: ["M2 9h20v3H2z", "M4 12v8h16v-8", "M12 12v8", "M8 5h2"],
  stairs: ["M3 20h5v-4h4v-4h4V8h5"],
  wall: ["M4 3h16v18H4z", "M4 9h16M4 15h16", "M12 3v6M8 9v6M16 9v6M12 15v6"],
  foot: ["M8 4c2 0 3 2 3 5s-1 5-3 5-3-2-3-5 1-5 3-5z", "M16 10c2 0 3 2 3 5s-1 5-3 5-3-2-3-5 1-5 3-5z"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  building: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  search: ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  replace: ["M4 9a8 8 0 0 1 14-3l2 2", "M20 4v4h-4", "M20 15a8 8 0 0 1-14 3l-2-2", "M4 20v-4h4"],
};

interface MgIconProps {
  name: MgIconName;
  className?: string;
}

export default function MgIcon({ name, className = "h-6 w-6" }: MgIconProps) {
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
