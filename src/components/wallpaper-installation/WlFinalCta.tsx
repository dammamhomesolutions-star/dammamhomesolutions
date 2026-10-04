import { buildTelLink, buildWhatsAppLink } from "@/lib/site-config";
import WlIcon from "./WlIcon";

export default function WlFinalCta() {
  return (
    <section aria-labelledby="wl-final" className="relative overflow-hidden bg-teal-900 py-24 text-sand-50 sm:py-28">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
        <defs>
          <pattern id="wl-final-pat" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 6c10 10 10 18 0 28-10-10-10-18 0-28z" fill="#8fc4c4" />
            <circle cx="30" cy="46" r="4" fill="#8fc4c4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wl-final-pat)" />
      </svg>
      <div className="container-edge relative max-w-3xl text-center">
        <h2 id="wl-final" className="font-serif text-3xl tracking-tight sm:text-5xl">Ready to refresh your walls?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-teal-100">
          Tell us which room you want to update, what wallpaper you&rsquo;ve
          chosen, and whether the wall is new, painted, previously wallpapered
          or needs preparation.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#wallpaper-request" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5">
            Request Wallpaper Installation
            <WlIcon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to send photos of walls for wallpaper installation.")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10"
          >
            Send Wall Photos
          </a>
          <a href={buildTelLink()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-6 py-3.5 text-sm font-semibold hover:bg-sand-100/10">
            <WlIcon name="phone" className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
