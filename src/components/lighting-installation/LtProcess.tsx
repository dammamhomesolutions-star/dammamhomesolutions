import { buildWhatsAppLink } from "@/lib/site-config";
import { ltPrep, ltProcess } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

const photosHref = buildWhatsAppLink(
  "Hello Dammam Home Solutions, I'd like to send photos and details for a lighting installation.",
);

export default function LtProcess() {
  return (
    <section id="process" aria-label="Installation process and preparation" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What happens during a lighting installation?</h2>
        </div>
        <ol className="relative mt-12 grid gap-4 md:grid-cols-7 md:gap-3">
          <span aria-hidden="true" className="absolute left-[19px] top-4 bottom-4 w-px bg-ember-600/30 md:left-6 md:right-6 md:top-5 md:bottom-auto md:h-px md:w-auto" />
          {ltProcess.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-3">
              <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink-950 text-ember-500">
                <LtIcon name={s.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs text-ember-700">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-0.5 text-[15px] font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LtIcon name="camera" className="h-7 w-7 text-ember-500" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">What should you prepare before installation?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              The more we can see up front, the better we can plan the visit.
            </p>
            <a
              href={photosHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              Send Photos &amp; Details
              <LtIcon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
            {ltPrep.map((p) => (
              <li key={p} className="flex gap-2 rounded-xl bg-ink-900 p-3 text-sm text-sand-100">
                <LtIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-ember-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
