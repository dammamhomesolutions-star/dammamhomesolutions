import { buildTelLink } from "@/lib/site-config";
import DrIcon from "./DrIcon";

export default function DrMobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-sand-50/95 p-3 backdrop-blur [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a
          href={buildTelLink()}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-5 py-3.5 text-sm font-semibold text-ink-950"
        >
          <DrIcon name="phone" className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="#drain-service"
          className="focus-ring inline-flex items-center justify-center rounded-full bg-teal-800 px-5 py-3.5 text-sm font-semibold text-sand-50"
        >
          Request Drain Service
        </a>
      </div>
    </div>
  );
}
