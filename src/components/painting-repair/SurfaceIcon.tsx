import type { SurfaceId } from "@/lib/wall-surfaces";

export default function SurfaceIcon({ id }: { id: SurfaceId }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "cracks":
      return (
        <svg {...common}>
          <path d="M4 3 L10 10 L7 13 L14 21" />
        </svg>
      );
    case "peeling-paint":
      return (
        <svg {...common}>
          <path d="M4 20 V6 a2 2 0 0 1 2-2 h14" />
          <path d="M4 20 C 8 14, 8 9, 15 8" />
        </svg>
      );
    case "stains":
      return (
        <svg {...common}>
          <path d="M12 3 C 16 8, 19 11, 15 15 C 12 18, 7 16, 7 12 C 7 8, 9 5, 12 3 Z" />
        </svg>
      );
    case "holes":
      return (
        <svg {...common}>
          <circle cx="9" cy="10" r="2.4" />
          <circle cx="16" cy="15" r="1.6" />
        </svg>
      );
    case "damp-mark":
      return (
        <svg {...common}>
          <path d="M4 9 Q 8 6, 12 9 T 20 9" />
          <path d="M4 15 Q 8 12, 12 15 T 20 15" />
        </svg>
      );
    case "old-paint":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="10" height="14" opacity="0.4" />
          <rect x="10" y="5" width="10" height="14" />
        </svg>
      );
    case "ceiling":
      return (
        <svg {...common}>
          <path d="M4 6 H20" />
          <path d="M12 6 V18" />
          <path d="M8 10 L12 6 L16 10" />
        </svg>
      );
    case "full-room":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" />
          <path d="M15 20 V15 H20" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M9 9a3 3 0 1 1 4 2.8c-.8.5-1.3 1-1.3 2.2" />
          <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
