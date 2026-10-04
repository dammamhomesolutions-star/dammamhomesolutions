import { fsProcess } from "@/lib/fire-smoke-restoration";
import FsIcon from "./FsIcon";
import FsReveal from "./FsReveal";
import FsCtas from "./FsCtas";

export default function FsProcess() {
  return (
    <section id="process" aria-labelledby="fs-process" className="relative overflow-hidden border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge relative">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-500">The process</p>
          <h2 id="fs-process" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            What happens after you contact Dammam Home Solutions?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Restoration follows an order. Drying before rebuilding, odor
            before painting. Skipping a stage usually means doing it twice.
          </p>
        </div>

        {/* Vertical timeline on mobile, horizontal track on large screens */}
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-7 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-ember-500 via-ink-600 to-ink-700 lg:bottom-auto lg:left-6 lg:right-6 lg:top-[19px] lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {fsProcess.map((step, i) => (
            <FsReveal as="li" key={step.title} delay={i * 0.08} className="relative flex gap-5 lg:flex-col lg:gap-0">
              <span className="group relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ember-500/60 bg-ink-950 text-ember-500">
                <FsIcon name={step.icon} className="h-[18px] w-[18px]" />
              </span>
              <div className="lg:mt-5">
                <p className="font-mono text-[11px] tracking-[0.14em] text-ink-400">STEP {i + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-sand-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
              </div>
            </FsReveal>
          ))}
        </ol>

        <FsCtas tone="dark" className="mt-14" />
      </div>
    </section>
  );
}
