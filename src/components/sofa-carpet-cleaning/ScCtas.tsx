import { buildWhatsAppLink } from "@/lib/site-config";
import ScIcon from "./ScIcon";

interface ScCtasProps {
  tone?: "light" | "dark";
  className?: string;
  /** Swap order for the final CTA, which leads with the quote. */
  quoteFirst?: boolean;
}

const quoteHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I'd like a quote for sofa / carpet cleaning. I can send photos.",
);

// Book → on-page booking form. Quote → WhatsApp with a ready message.
export default function ScCtas({ tone = "light", className = "", quoteFirst = false }: ScCtasProps) {
  const dark = tone === "dark";
  const book = (
    <a
      key="book"
      href="#book-cleaning"
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
        dark ? "bg-glass-300 text-ink-950" : "bg-glass-800 text-sand-50"
      }`}
    >
      Book a Cleaning
      <ScIcon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
  const quote = (
    <a
      key="quote"
      href={quoteHref}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${
        dark ? "border-sand-100/25 text-sand-50 hover:bg-sand-100/10" : "border-ink-900/20 text-ink-900 hover:bg-ink-900/5"
      }`}
    >
      Request a Quote
    </a>
  );
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      {quoteFirst ? [quote, book] : [book, quote]}
    </div>
  );
}
