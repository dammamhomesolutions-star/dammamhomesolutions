import { buildWhatsAppLink } from "@/lib/site-config";

export default function RepairVsMaintenance() {
  return (
    <section className="grid sm:grid-cols-2">
      <div className="bg-ink-950 px-6 py-16 text-sand-100 sm:px-10 sm:py-20 lg:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust-500">
          Something is wrong
        </p>
        <h2 className="mt-4 font-serif text-2xl text-sand-50 sm:text-3xl">
          There&rsquo;s an active problem right now.
        </h2>
        <p className="mt-3 text-sm text-ink-400">
          For customers dealing with an issue they can already see or hear.
        </p>
        <ul className="mt-6 space-y-2.5 text-[15px] text-ink-300">
          {["Not cooling", "Leaking", "Noisy", "Stopped working", "Weak airflow"].map(
            (item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-rust-500" />
                {item}
              </li>
            )
          )}
        </ul>
        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I have an active AC problem. Here's what's happening: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request AC Repair
        </a>
        <p className="mt-4 text-sm text-ink-400">
          If there&rsquo;s more going on than just the AC, our{" "}
          <a href="/general-home-repairs/" className="underline underline-offset-4 hover:text-sand-100">
            general home repairs
          </a>{" "}
          page covers the rest.
        </p>
      </div>

      <div className="bg-sand-100/70 px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
        <p className="section-label text-sky-700">Nothing is wrong — yet</p>
        <h2 className="mt-4 font-serif text-2xl text-ink-950 sm:text-3xl">
          Keeping it that way is the goal.
        </h2>
        <p className="mt-3 text-sm text-ink-600">
          For customers wanting preventative servicing or routine
          maintenance before a problem starts.
        </p>
        <ul className="mt-6 space-y-2.5 text-[15px] text-ink-700">
          {["Cleaning", "Inspection", "Seasonal preparation", "Performance check"].map(
            (item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
                {item}
              </li>
            )
          )}
        </ul>
        <a
          href={buildWhatsAppLink(
            "Hello Dammam Home Solutions, I'd like to ask about AC maintenance. Here's some context: "
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
        >
          Ask About AC Maintenance
        </a>
      </div>
    </section>
  );
}
