import { buildTelLink } from "@/lib/site-config";
import SpIcon from "./SpIcon";

export default function SpMobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-100/10 bg-ink-950/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-5 py-3.5 text-sm font-semibold text-sand-50">
          <SpIcon name="phone" className="h-4 w-4" />
          Call Now
        </a>
        <a href="#pool-request" className="focus-ring inline-flex items-center justify-center rounded-full bg-teal-300 px-5 py-3.5 text-sm font-semibold text-ink-950">
          Book a Pool Assessment
        </a>
      </div>
    </div>
  );
}
