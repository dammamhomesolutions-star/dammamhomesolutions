import { buildWhatsAppLink } from "@/lib/site-config";

export default function WtHero() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-16 sm:py-20">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mint-700">
            <span className="inline-block h-1.5 w-1.5 bg-mint-600" aria-hidden="true" />
            Water tank cleaning
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
            What&rsquo;s actually inside your water tank?
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600 sm:text-base">
            Rooftop and underground tanks quietly build up sediment over
            time. Most people never look — until the water starts to
            smell, taste or look different.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a water tank cleaning. ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
            >
              Request Tank Cleaning
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send a photo of my water tank. ")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-mint-700"
            >
              Send a Photo
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm">
          <svg viewBox="0 0 320 300" className="h-auto w-full" aria-hidden="true">
            <title>A rooftop water tank with a cutaway showing clean water inside</title>
            <rect x="0" y="0" width="320" height="300" fill="url(#wt-clean-water)" opacity="0.25" />
            <rect x="90" y="40" width="140" height="200" rx="16" fill="url(#wt-tank-body)" stroke="#9a968a" strokeWidth="2" />
            <rect x="102" y="52" width="116" height="176" rx="8" fill="url(#wt-clean-water)" />
            <rect x="102" y="52" width="116" height="176" rx="8" fill="url(#wt-sheen)" opacity="0.4" />
            <rect x="150" y="26" width="20" height="18" fill="#9a968a" />
            <rect x="0" y="260" width="320" height="40" fill="#eae7de" />
          </svg>
        </div>
      </div>
    </section>
  );
}
