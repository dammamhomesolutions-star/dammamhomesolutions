import { buildWhatsAppLink } from "@/lib/site-config";
import { Arrow, btnPrimary } from "./ShUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, here are photos of my parking shade / pergola for an assessment.");

export default function ShFinalCta() {
  return (
    <section aria-labelledby="sh-final" className="relative overflow-hidden bg-steel-900 py-24 text-sand-50 sm:py-32">
      <svg aria-hidden="true" viewBox="0 0 800 300" className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-auto opacity-20 md:block" fill="none" stroke="#e0b28a" strokeWidth="2">
        <path d="M100 120L700 60L700 80L100 140Z" />
        <path d="M120 140V300M680 82V300M110 130L690 70" />
      </svg>
      <div className="container-edge relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper-300">Before you spend money on replacement</p>
        <h2 id="sh-final" className="mt-5 max-w-3xl font-serif text-4xl tracking-tight sm:text-6xl">Is your shade ready for another season?</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel-300 sm:text-base">
          Send us photos of the structure, the damaged area and the surrounding
          space. We&rsquo;ll help define the appropriate next step based on the
          visible condition and required scope.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#request" className={btnPrimary}>Request a Shade Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
          <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center border border-sand-50/40 px-6 py-4 text-sm font-semibold hover:bg-steel-700">Send Photos</a>
        </div>
      </div>
    </section>
  );
}
