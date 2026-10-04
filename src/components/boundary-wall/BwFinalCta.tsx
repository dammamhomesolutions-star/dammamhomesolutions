import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import BwIcon from "./BwIcon";

export default function BwFinalCta() {
  return (
    <section aria-labelledby="bw-final" className="relative overflow-hidden bg-clay-900 py-24 text-sand-50 sm:py-28">
      <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full opacity-20" aria-hidden="true">
        <rect x="0" y="40" width="1200" height="14" fill="#d9bfa0" />
        <rect x="0" y="54" width="1200" height="106" fill="#b8916c" />
        {[80, 107, 134].map((y) => <path key={y} d={`M0 ${y}h1200`} stroke="#9c7752" />)}
        <path className="bw-crack" pathLength={1} d="M760 54l14 16-6 14 16 18-6 14 12 22" stroke="#4a3626" strokeWidth="3" fill="none" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="bw-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Book an outdoor wall assessment</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-clay-100">
          See the damage, understand what it may mean, choose the right next
          step. Send us photos or book a visit and we&rsquo;ll tell you honestly
          whether it needs a surface repair, a deeper repair or a closer look.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#wall-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-clay-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Book an Outdoor Wall Assessment
            <BwIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of an outdoor / boundary wall.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            WhatsApp Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <BwIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
