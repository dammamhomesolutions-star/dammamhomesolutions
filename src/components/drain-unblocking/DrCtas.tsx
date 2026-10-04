import { buildWhatsAppLink } from "@/lib/site-config";
import DrIcon from "./DrIcon";

interface DrCtasProps {
  tone?: "light" | "dark";
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
}

const describeHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I'd like to describe a drain problem. I can send a photo or video.",
);

// Primary → on-page request form. Secondary → WhatsApp description.
export default function DrCtas({
  tone = "light",
  primaryLabel = "Request Drain Service",
  secondaryLabel = "Describe My Drain Problem",
  className = "",
}: DrCtasProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <a
        href="#drain-service"
        className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
          dark ? "bg-teal-300 text-ink-950" : "bg-teal-800 text-sand-50"
        }`}
      >
        {primaryLabel}
        <DrIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href={describeHref}
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
