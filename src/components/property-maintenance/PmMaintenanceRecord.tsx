const recordFields = [
  { label: "Date noticed", value: "—" },
  { label: "Area", value: "e.g. Bathroom, AC unit" },
  { label: "What was noticed", value: "e.g. Slow drain, dripping tap" },
  { label: "Photos", value: "Attached / not yet" },
  { label: "Repair completed", value: "Yes / No" },
  { label: "Follow-up needed", value: "Yes / No" },
];

export default function PmMaintenanceRecord() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-100/50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="max-w-lg">
          <p className="section-label !text-moss-700">Property record</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Keep the next repair from becoming a forgotten repair.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-600">
            A short, informal record helps — even a note on your phone. What
            was noticed, where it happened, a photo, the date, whether it
            was repaired, and whether it needs a follow-up.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            Useful information to keep for your property — not a customer
            account or a dashboard we currently provide.
          </p>
        </div>

        <div className="rounded-md border border-ink-900/10 bg-sand-50 p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
            Suggested record format
          </p>
          <dl className="mt-5 divide-y divide-ink-900/10 border-t border-ink-900/10">
            {recordFields.map((field) => (
              <div key={field.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm text-ink-700">{field.label}</dt>
                <dd className="text-right text-sm text-ink-400">{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
