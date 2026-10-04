import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";

interface MobileStickyCtaProps {
  label?: string;
  whatsappMessage?: string;
}

// Mobile-only bottom bar: Call + a page-specific WhatsApp message.
export default function MobileStickyCta({
  label = "WhatsApp a Repair Request",
  whatsappMessage = "Hello Dammam Home Solutions, I'd like to send a repair request.",
}: MobileStickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a
          href={buildTelLink()}
          className="focus-ring inline-flex items-center justify-center rounded-full border border-ink-900/20 px-5 py-3.5 text-sm font-semibold text-ink-950"
        >
          Call Now
        </a>
        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="focus-ring flex items-center justify-center rounded-full bg-rust-700 px-5 py-3.5 text-sm font-semibold text-sand-50"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
