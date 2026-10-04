import { buildWhatsAppLink } from "@/lib/site-config";
import CvIcon from "./CvIcon";

interface CvCtasProps {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

const quoteHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I'd like a quote for CCTV and / or intercom installation. I can send photos of the property.",
);

// Primary → on-page planning form. Secondary → WhatsApp quote request.
export default function CvCtas({
  tone = "light",
  primaryLabel = "Request a Security Assessment",
  secondaryLabel = "Get a CCTV & Intercom Quote",
  className = "",
}: CvCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#security-plan"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-moss-200 text-ink-950" : "bg-moss-800 text-sand-50"
        }`}
      >
        {primaryLabel}
        <CvIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={quoteHref}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${
          dark ? "border-sand-100/25 text-sand-50 hover:bg-sand-100/10" : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5"
        }`}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
