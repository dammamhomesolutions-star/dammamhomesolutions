import { buildWhatsAppLink } from "@/lib/site-config";
import MgIcon from "./MgIcon";

interface MgCtasProps {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

const quoteHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I would like a marble / granite assessment. I can send photos of the stone.",
);

// Primary → on-page planning form. Secondary → WhatsApp quote request.
export default function MgCtas({
  tone = "light",
  primaryLabel = "Request a Stone Assessment",
  secondaryLabel = "Send Photos for Assessment",
  className = "",
}: MgCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#stone-request"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-concrete-300 text-ink-950" : "bg-concrete-900 text-sand-50"
        }`}
      >
        {primaryLabel}
        <MgIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
