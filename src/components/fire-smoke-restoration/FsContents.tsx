const items: { label: string; lane: "save" | "assess" | "replace" }[] = [
  { label: "Hard furniture", lane: "save" },
  { label: "Decorative items", lane: "save" },
  { label: "Clothing", lane: "assess" },
  { label: "Curtains", lane: "assess" },
  { label: "Rugs", lane: "assess" },
  { label: "Documents", lane: "assess" },
  { label: "Upholstery", lane: "assess" },
  { label: "Appliances", lane: "replace" },
  { label: "Electronics", lane: "replace" },
];

const lanes = [
  {
    key: "save" as const,
    title: "Often cleanable",
    body: "Hard, non-porous items with light residue and no heat damage.",
    color: "#5f7050",
  },
  {
    key: "assess" as const,
    title: "Depends on exposure",
    body: "Fabrics and paper — it depends how close they were, and whether they got wet.",
    color: "#c17f3e",
  },
  {
    key: "replace" as const,
    title: "Specialist check first",
    body: "Appliances and electronics shouldn't be switched on until checked; heat or water damage may mean replacement.",
    color: "#94472a",
  },
];

const factors = [
  "How close it was to the heat",
  "How much smoke reached it",
  "What it's made of",
  "Whether it got wet",
  "How long it stayed that way",
  "Its structural condition",
];

export default function FsContents() {
  return (
    <section aria-labelledby="fs-contents" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Contents &amp; belongings</p>
          <h2 id="fs-contents" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Not everything affected by smoke needs to be thrown away
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Restoring belongings starts with assessment, not the bin.
            Every item passes through the same question — what can
            realistically be saved? — and the answer depends on a few
            factors. Nothing here is a guarantee; it&rsquo;s how the decision
            is usually made.
          </p>
        </div>

        {/* SAVE / ASSESS / REPLACE flow */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1.2fr_auto_1.6fr] lg:items-center">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Affected items</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((it) => (
                <li key={it.label} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-ink-800 ring-1 ring-ink-900/10">
                  {it.label}
                </li>
              ))}
            </ul>
          </div>

          <svg viewBox="0 0 40 24" className="mx-auto h-6 w-10 rotate-90 text-ink-400 lg:rotate-0" aria-hidden="true">
            <path className="fs-flow" d="M2 12h32" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M28 6l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>

          <div className="rounded-2xl bg-ink-950 p-5 text-sand-50">
            <p className="font-mono text-xs tracking-[0.18em] text-ember-500">ASSESS</p>
            <ul className="mt-3 space-y-1.5 text-sm text-sand-100">
              {factors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <svg viewBox="0 0 40 24" className="mx-auto h-6 w-10 rotate-90 text-ink-400 lg:rotate-0" aria-hidden="true">
            <path className="fs-flow" d="M2 12h32" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M28 6l7 6-7 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>

          <ul className="space-y-3">
            {lanes.map((lane) => (
              <li key={lane.key} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-4" style={{ borderLeft: `4px solid ${lane.color}` }}>
                <p className="text-sm font-semibold text-ink-950">{lane.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{lane.body}</p>
                <p className="mt-2 text-xs text-ink-500">
                  e.g. {items.filter((i) => i.lane === lane.key).map((i) => i.label.toLowerCase()).join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-600">
          Before moving or discarding anything, photograph it where it is.
          Those photos help with the assessment and with any documentation
          you may need for your own records.
        </p>
      </div>
    </section>
  );
}
