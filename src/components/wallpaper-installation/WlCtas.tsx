import { buildWhatsAppLink } from "@/lib/site-config";
import WlIcon from "./WlIcon";

interface WlCtasProps {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

const quoteHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I need wallpaper installed. I can send photos of the walls.",
);

// Primary → on-page planning form. Secondary → WhatsApp quote request.
export default function WlCtas({
  tone = "light",
  primaryLabel = "Request Wallpaper Installation",
  secondaryLabel = "Send Wall Photos",
  className = "",
}: WlCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#wallpaper-request"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-teal-300 text-ink-950" : "bg-teal-900 text-sand-50"
        }`}
      >
        {primaryLabel}
        <WlIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
