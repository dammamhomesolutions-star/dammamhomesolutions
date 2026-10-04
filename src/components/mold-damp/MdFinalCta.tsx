import { buildWhatsAppLink } from "@/lib/site-config";
import { Arrow, Drop } from "./MdUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, here are photos of a damp or mold problem I'd like checked.");

export default function MdFinalCta() {
  return (
    <section aria-labelledby="md-final" className="relative overflow-hidden bg-glass-900 py-24 text-sand-50 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#eef3f5_1px,transparent_1px),linear-gradient(to_bottom,#eef3f5_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="container-edge relative max-w-3xl text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-glass-300/40 text-glass-300"><Drop className="h-5 w-5" /></span>
        <h2 id="md-final" className="mt-6 font-serif text-4xl tracking-tight sm:text-6xl">Let&rsquo;s find out what&rsquo;s behind the dampness.</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-glass-200 sm:text-base">
          Send us photos and describe what you&rsquo;re seeing. We&rsquo;ll review the
          information and help determine the appropriate next step.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#report" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-lg bg-glass-300 px-6 py-4 text-sm font-semibold text-glass-900 hover:bg-sand-50">
            Request a Damp Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-glass-300/40 px-6 py-4 text-sm font-semibold hover:bg-glass-800">
            Send Photos
          </a>
        </div>
        <p className="mt-6 text-xs text-glass-300">Photos help us plan the next step; confirming the source usually needs an on-site check.</p>
      </div>
    </section>
  );
}
