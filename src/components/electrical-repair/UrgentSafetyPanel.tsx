const guidance = [
  "Do not touch damaged wiring.",
  "Do not continue using a visibly damaged socket or switch.",
  "Do not repeatedly reset a breaker when the problem continues.",
  "Seek appropriate professional assistance.",
  "If there is an immediate fire or life-safety emergency, contact the relevant emergency service.",
];

export default function UrgentSafetyPanel() {
  return (
    <section className="bg-ink-950 py-16 sm:py-20">
      <div className="container-edge">
        <div className="rounded-2xl border-l-4 border-rust-500 bg-ink-900 p-7 sm:p-9">
          <h2 className="font-serif text-2xl text-sand-50 sm:text-3xl">
            If you see smoke, sparks or burning, stop using the affected
            point.
          </h2>
          <ul className="mt-6 space-y-2.5 text-[15px] text-ink-300">
            {guidance.map((g) => (
              <li key={g} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-500" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
