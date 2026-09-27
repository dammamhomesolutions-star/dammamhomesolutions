import { buildWhatsAppLink } from "@/lib/site-config";

export default function DontReplaceYet() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-xl">
          <p className="section-label text-sky-700">Before you decide</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            A cooling problem doesn&rsquo;t automatically mean you need a new
            AC.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-700">
            The same symptom can have different causes depending on the
            unit, its age and how it&rsquo;s been maintained. In some cases
            a repair, a clean, drainage work or routine maintenance
            addresses it. In others, replacement genuinely makes more
            sense. We don&rsquo;t assume either way before looking at it.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            Repair isn&rsquo;t always the cheaper or better option — it
            depends on the fault and the condition of the unit.
          </p>

          <a
            href={buildWhatsAppLink(
              "Hello Dammam Home Solutions, I'd like to ask about AC repair. Here's the situation: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
          >
            Ask About AC Repair
          </a>
        </div>

        <div className="rounded-2xl border border-ink-900/10 bg-sand-100/70 p-7">
          <p className="text-sm font-semibold text-ink-900">
            What actually decides it
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink-700">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
              The specific fault, once inspected
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
              The age and general condition of the unit
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
              Whether the issue is isolated or recurring
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
              What the repair actually involves
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
