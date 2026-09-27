const supported = ["Alignment", "Hinges", "Handles", "Latches", "Locks", "Minor door damage", "Closing issues"];
const sequence = ["Door", "Frame", "Hardware", "Adjustment / repair"];

export default function DoorRepairSection() {
  return (
    <section className="bg-ink-950 py-20 text-sand-100 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
            Doors
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-sand-50 sm:text-4xl">
            When the door is the problem.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-300">
            A door that doesn&rsquo;t close properly can involve the door
            itself, the frame, or the hardware connecting them — and it
            may need adjustment, repair, or a hardware swap depending on
            what&rsquo;s found.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {supported.map((s) => (
            <span key={s} className="rounded-full border border-sand-100/15 px-4 py-2 text-sm text-ink-300">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
          {sequence.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-amber-600/40 bg-amber-600/10 px-4 py-2 text-sm text-amber-200">
                {step}
              </span>
              {i < sequence.length - 1 && (
                <span aria-hidden="true" className="text-amber-500">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
