import { buildTelLink } from "@/lib/site-config";
import PcIcon from "./PcIcon";

interface PcCtasProps {
  tone?: "light" | "dark";
  secondaryLabel?: string;
  className?: string;
}

// One consistent pair everywhere: inspection request (on-page) and a call.
export default function PcCtas({ tone = "light", secondaryLabel = "Call Now", className = "" }: PcCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#request-inspection"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-moss-200 text-ink-950" : "bg-moss-800 text-sand-50"
        }`}
      >
        Request a Pest Inspection
        <PcIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={buildTelLink()}
        className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${
          dark ? "border-sand-100/25 text-sand-50 hover:bg-sand-100/10" : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5"
        }`}
      >
        <PcIcon name="phone" className="h-4 w-4" />
        {secondaryLabel}
      </a>
    </div>
  );
}
