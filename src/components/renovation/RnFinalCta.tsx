import { buildWhatsAppLink } from "@/lib/site-config";
import { Arrow } from "./RnUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, I'm planning a renovation. Here are photos of the rooms I'd like to change.");
const steps = ["Rooms", "Scope", "Photos", "Assessment"];

export default function RnFinalCta() {
  return (
    <section aria-labelledby="rn-final" className="relative overflow-hidden bg-ink-950 py-24 text-sand-50 sm:py-32">
      <svg aria-hidden="true" viewBox="0 0 600 400" className="pointer-events-none absolute -right-24 top-0 hidden h-full w-auto opacity-[0.12] sm:block" fill="none" stroke="#faf8f4" strokeWidth="2">
        <path d="M40 40H560V360H40ZM300 40V200M40 200H420M420 200V360M180 200V360" />
        <path d="M300 200a60 60 0 0 1 60 -60" strokeDasharray="4 6" />
      </svg>
      <div className="container-edge relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember-500">Start the conversation</p>
        <h2 id="rn-final" className="mt-6 max-w-3xl font-serif text-5xl font-light leading-[1.02] tracking-tight sm:text-7xl">Ready to change the space?</h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-sand-200 sm:text-base">
          Tell us what you want to improve, which rooms are involved and what the
          home currently looks like. We&rsquo;ll help define the appropriate next step.
        </p>
        <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.2em]">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className={i === steps.length - 1 ? "text-ember-500" : "text-sand-100"}>{s}</span>
              {i < steps.length - 1 && <span aria-hidden="true" className="text-sand-50/40">→</span>}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#request" className="focus-ring group inline-flex items-center justify-center gap-3 bg-ember-500 px-7 py-4 text-sm font-semibold text-ink-950 hover:bg-ember-600">
            Plan My Renovation <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-3 border border-sand-50/40 px-7 py-4 text-sm font-semibold hover:bg-sand-50/10">
            Send Photos
          </a>
        </div>
      </div>
    </section>
  );
}
