import { buildWhatsAppLink } from "@/lib/site-config";

interface MobileStickyCtaProps {
  label?: string;
  whatsappMessage?: string;
}

export default function MobileStickyCta({
  label = "WhatsApp a Repair Request",
  whatsappMessage = "Hello Dammam Home Solutions, I'd like to send a repair request.",
}: MobileStickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={buildWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="focus-ring flex w-full items-center justify-center rounded-full bg-rust-700 px-5 py-3.5 text-sm font-semibold text-sand-50"
      >
        {label}
      </a>
    </div>
  );
}
