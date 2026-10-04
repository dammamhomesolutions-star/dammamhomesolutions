import { buildTelLink } from "@/lib/site-config";
import DcIcon from "./DcIcon";

interface DcCtasProps {
  tone?: "light" | "dark";
  secondaryLabel?: string;
  className?: string;
}

// Consistent pair everywhere: on-page quote request and a call.
export default function DcCtas({ tone = "light", secondaryLabel = "Call Now", className = "" }: DcCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#request-quote"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-mint-300 text-ink-950" : "bg-mint-800 text-sand-50"
        }`}
      >
        Request a Cleaning Quote
        <DcIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={buildTelLink()}
        className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${
          dark ? "border-sand-100/25 text-sand-50 hover:bg-sand-100/10" : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5"
        }`}
      >
        <DcIcon name="phone" className="h-4 w-4" />
        {secondaryLabel}
      </a>
    </div>
  );
}
