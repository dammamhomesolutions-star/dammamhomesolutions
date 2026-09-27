const situations = [
  "A loose door handle",
  "A cabinet that no longer closes properly",
  "A damaged wall corner",
  "A dripping fixture",
  "A broken fitting",
  "A drawer that sticks",
  "Minor surface damage",
  "A small repair that keeps getting postponed",
];

export default function DailyAnnoyancesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label text-indigo-700">Worth sorting out</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          The things you keep meaning to fix.
        </h2>
        <p className="mt-4 text-ink-700">
          None of these are urgent on their own. But small things get used
          every day, which is exactly why they end up bothering people
          the most.
        </p>

        <ul className="mt-8 space-y-2.5">
          {situations.map((s) => (
            <li key={s} className="flex gap-3 border-b border-ink-900/10 py-3 text-[15px] text-ink-800">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
