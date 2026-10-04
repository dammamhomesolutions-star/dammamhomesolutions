import { buildWhatsAppLink } from "@/lib/site-config";
import DkIcon from "./DkIcon";

interface DkCtasProps {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

const askHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I have a question about my AC ducts.",
);

// Primary → on-page quote form. Secondary → WhatsApp question.
export default function DkCtas({
  tone = "light",
  primaryLabel = "Request a Duct Cleaning Quote",
  secondaryLabel = "Ask About My Ducts",
  className = "",
}: DkCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#duct-quote"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-copper-300 text-ink-950" : "bg-copper-700 text-sand-50"
        }`}
      >
        {primaryLabel}
        <DkIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={askHref}
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
