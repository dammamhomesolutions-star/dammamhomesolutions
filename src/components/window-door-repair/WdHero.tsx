import { buildWhatsAppLink } from "@/lib/site-config";
import WdAssemblyScene from "./WdAssemblyScene";

export default function WdHero() {
  return (
    <section className="border-b border-glass-900/10 bg-sand-50 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="container-edge">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-glass-700">
          <span className="inline-block h-1.5 w-1.5 bg-glass-600" aria-hidden="true" />
          Window, door &amp; glass repair
        </p>

        <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-ink-950 sm:text-5xl">
          When the door or window stops working properly, you notice.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:text-base">
          A door that sticks, a handle that&rsquo;s loose, glass that&rsquo;s
          cracked, a seal that&rsquo;s worn, or a window that&rsquo;s become
          difficult to slide — we assess the assembly and repair what&rsquo;s
          actually affected.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#what-stopped"
            className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Show Us the Problem
          </a>
          <a
            href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to request a door or window repair. Here's what I've noticed: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-glass-700"
          >
            Request a Repair
          </a>
        </div>
      </div>

      <div className="container-edge mt-12">
        <WdAssemblyScene />
      </div>
    </section>
  );
}
