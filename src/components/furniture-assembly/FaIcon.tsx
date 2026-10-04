import type { FaIconName } from "@/lib/furniture-assembly";

// Line icons for the furniture assembly page: 24×24, 1.75 stroke, round caps.
const paths: Record<FaIconName, string[]> = {
  box: ["M3 7l9-4 9 4v10l-9 4-9-4z", "M3 7l9 4 9-4", "M12 11v10", "M7.5 5l9 4"],
  panels: ["M4 4h7v16H4z", "M13 4h7v7h-7z", "M13 13h7v7h-7z"],
  screw: ["M9 3h6v3H9z", "M12 6v14", "M10 9l4 1M10 12l4 1M10 15l4 1", "M12 20l-1 1h2z"],
  frame: ["M4 3h16v18H4z", "M4 9h16", "M4 15h16"],
  wardrobe: ["M4 3h16v17H4z", "M12 3v17", "M10 11v2M14 11v2", "M5 20v1M19 20v1"],
  bed: ["M3 18v-7h18v7", "M3 14h18", "M3 18v2M21 18v2", "M5 11V7h6v4"],
  dresser: ["M4 4h16v15H4z", "M4 9h16M4 14h16", "M11 6.5h2M11 11.5h2M11 16.5h2", "M5 19v2M19 19v2"],
  cabinet: ["M5 3h14v17H5z", "M12 3v17", "M10 10v3M14 10v3", "M5 20v1M19 20v1"],
  desk: ["M2 8h20", "M4 8v12M20 8v12", "M14 8v7h6", "M16 11h2"],
  table: ["M3 9h18", "M5 9v11M19 9v11", "M5 13h14"],
  chair: ["M7 3v10h10V3", "M6 13h12", "M7 13v8M17 13v8", "M7 8h10"],
  tv: ["M4 3h16v10H4z", "M9 13v2h6v-2", "M3 15h18v5H3z", "M12 15v5"],
  bookshelf: ["M5 3h14v18H5z", "M5 9h14M5 15h14", "M8 5v4M10 5v4M15 11v4M8 17v4"],
  shelving: ["M4 3v18M20 3v18", "M4 7h16M4 12h16M4 17h16"],
  shoe: ["M4 4h16v16H4z", "M4 10h16M4 15h16", "M10 7h4"],
  sideboard: ["M2 8h20v10H2z", "M8 8v10M16 8v10", "M4 18v2M20 18v2", "M6 12v2M10 12v2M18 12v2"],
  storage: ["M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"],
  cot: ["M3 7v13M21 7v13", "M3 10h18M3 17h18", "M7 10v7M11 10v7M15 10v7M19 10v7"],
  outdoor: ["M12 3v9", "M4 8a8 4 0 0 1 16 0z", "M6 21l2-6h8l2 6", "M8 15v-3h8v3"],
  drawer: ["M4 6h16v13H4z", "M4 11h16", "M10 8.5h4M10 15h4", "M2 6h2M20 6h2"],
  anchor: ["M4 3v18", "M4 9h4", "M8 6h10v15H8z", "M8 9h0"],
  level: ["M3 9h18v6H3z", "M10 9v6M14 9v6", "M11 12h2"],
  door: ["M6 3h12v18H6z", "M15 11v2", "M3 21h18"],
  truck: ["M2 6h12v10H2z", "M14 9h4l3 3v4h-7z", "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  glass: ["M6 3h12v18H6z", "M9 7l3-3M9 12l6-6M11 16l4-4"],
  office: ["M4 21V5l8-2v18", "M12 9h8v12", "M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2", "M2 21h20"],
  home: ["M3 11l9-7 9 7", "M5 9.5V20h14V9.5", "M10 20v-5.5h4V20"],
  camera: ["M4 7h4l2-3h4l2 3h4v12H4z", "M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  alert: ["M12 4l9 16H3z", "M12 10v4", "M12 17h.01"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  phone: ["M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
  repair: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z"],
  quote: ["M6 3h9l4 4v14H6z", "M14 3v5h5", "M9 12h7M9 16h5"],
  tools: ["M14.7 5.3a4 4 0 0 0 4.9 5.4l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-2.4z", "M4 4l5 5", "M3 7l4-4"],
};

interface FaIconProps {
  name: FaIconName;
  className?: string;
}

export default function FaIcon({ name, className = "h-6 w-6" }: FaIconProps) {
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
