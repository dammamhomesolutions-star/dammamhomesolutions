import { buildWhatsAppLink } from "@/lib/site-config";
import RepairHeroVisual from "./RepairHeroVisual";

const heroWhatsAppMessage =
  "Hello Dammam Home Solutions, I have something that needs fixing but I'm not sure what to call it.";

export default function RepairHero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div className="container-edge grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-xl animate-fadeUp">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            Dammam · General home repairs
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            General home repairs in Dammam — start with the problem.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            You don&rsquo;t need to know which trade you need. Tell us
            what is wrong, where it is happening, or simply send a photo
            — we&rsquo;ll help you identify the right type of repair.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#request-service"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-rust-700 px-7 py-3.5 text-sm font-semibold text-sand-50 shadow-sm transition-transform hover:scale-[1.02]"
            >
              Send a Repair Request
            </a>
            <a
              href="#whats-wrong"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900/5"
            >
              I&rsquo;m Not Sure What I Need
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            <a href={buildWhatsAppLink(heroWhatsAppMessage)} target="_blank" rel="nofollow noopener noreferrer" className="underline underline-offset-4 hover:text-ink-800">
              Or WhatsApp us directly
            </a>{" "}
            if you&rsquo;d rather just describe it.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-fadeIn [animation-delay:150ms]">
            <RepairHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
