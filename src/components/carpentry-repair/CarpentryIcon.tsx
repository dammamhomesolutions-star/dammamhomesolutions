import type { CarpentryIssueId } from "@/lib/carpentry-issues";

export default function CarpentryIcon({ id }: { id: CarpentryIssueId }) {
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
    case "door-wont-close":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="1" />
          <circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none" />
          <path d="M18 8 L21 8" opacity="0.5" />
        </svg>
      );
    case "lock-problem":
      return (
        <svg {...common}>
          <rect x="6" y="11" width="12" height="9" rx="1.5" />
          <path d="M9 11 V8 a3 3 0 0 1 6 0 v3" />
          <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "handle-problem":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="6" height="4" rx="1.5" />
          <path d="M10 12 H18" />
          <path d="M18 9 V15" opacity="0.6" />
        </svg>
      );
    case "hinge-problem":
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="18" rx="2" />
          <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "cabinet-door":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M12 4 V20" opacity="0.6" />
          <circle cx="9" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "drawer":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <path d="M10 12 H14" />
        </svg>
      );
    case "wood-damage":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M9 8 L15 14 M9 17 L12 14" />
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
