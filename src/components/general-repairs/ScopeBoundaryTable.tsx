const rows = [
  { involves: "AC not cooling / HVAC issue", explore: "AC Repair", href: "/ac-repair/" },
  { involves: "Water leaks / drainage", explore: "Plumbing", href: "/plumbing-repair/" },
  { involves: "Electrical fault", explore: "Electrical Repair", href: "/electrical-repair/" },
  { involves: "Damp / moisture ingress", explore: "Waterproofing", href: "/waterproofing/" },
  { involves: "Wall damage / paint", explore: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { involves: "Doors / locks / carpentry", explore: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { involves: "Bathroom or kitchen issue", explore: "Bathroom & Kitchen Repair", href: "/bathroom-kitchen-repair/" },
  { involves: "Unclear / mixed household repair", explore: "General Home Repairs", href: "/general-home-repairs/" },
];

export default function ScopeBoundaryTable() {
  return (
    <section className="border-y border-ink-900/10 bg-stone-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label text-indigo-700">Scope</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Some repairs need a specialist.
          </h2>
          <p className="mt-4 text-ink-700">
            This page exists to help identify the appropriate service —
            not to treat every job as a generic handyman task.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-sand-50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-ink-900/10 text-xs uppercase tracking-[0.08em] text-ink-500">
                <th scope="col" className="px-5 py-3 font-semibold">If the problem involves</th>
                <th scope="col" className="px-5 py-3 font-semibold">Explore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/10">
              {rows.map((row) => (
                <tr key={row.involves}>
                  <td className="px-5 py-4 text-ink-800">{row.involves}</td>
                  <td className="px-5 py-4">
                    <a href={row.href} className="focus-ring rounded-sm font-medium text-indigo-700 underline underline-offset-4 hover:text-indigo-800">
                      {row.explore}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
