import AiIcon from "./AiIcon";

const newItems = ["A new indoor location", "A new outdoor location", "New refrigerant piping", "New drainage", "New electrical planning", "A new wall penetration"];
const replaceItems = ["The existing mounting location", "Existing piping — only if compatible", "Existing drainage — where suitable", "The existing electrical arrangement — after checking"];
const reuseChecks = [
  { title: "Refrigerant lines", body: "Size, condition and compatibility with the new unit." },
  { title: "Drainage", body: "Whether the old drain still falls properly and isn't blocked." },
  { title: "Electrical connection", body: "Whether the circuit suits the new unit's requirements." },
  { title: "Mounting", body: "Whether the old bracket or position suits the new unit's size and weight." },
  { title: "Outdoor support", body: "Condition of the old bracket or base after years outdoors." },
  { title: "Wall opening", body: "Whether it lines up with the new unit and is properly sealed." },
];

const ducted = ["Air distribution", "Ductwork", "Return air", "Supply air", "Equipment location", "Access for servicing", "Controls", "Insulation", "Balancing during commissioning"];

export default function AiNewReplace() {
  return (
    <section aria-label="New installation, replacement and ducted systems" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">New or replacement</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Installing a new AC or replacing an old one?</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 bg-sand-100/50 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-ink-950">New installation</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">May involve</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-800">
              {newItems.map((n) => (
                <li key={n} className="flex gap-2">
                  <AiIcon name="tools" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-teal-800 p-6 text-sand-50 sm:p-8">
            <h3 className="font-serif text-2xl">Replacement</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-300">May allow</p>
            <ul className="mt-4 space-y-2 text-sm text-teal-100">
              {replaceItems.map((n) => (
                <li key={n} className="flex gap-2">
                  <AiIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-teal-100">We remove the old unit as part of the job when needed.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Replacing an old AC? Don&rsquo;t automatically reuse everything</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Existing components should be inspected for compatibility with
              the replacement equipment. Reusing them can save work — but only
              when they&rsquo;re suitable.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {reuseChecks.map((r) => (
              <li key={r.title} className="rounded-xl border border-ink-900/10 bg-sand-100/50 p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                  <AiIcon name="search" className="h-4 w-4 text-teal-700" />
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Central & ducted */}
        <div className="mt-14 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-teal-300">
              <AiIcon name="duct" />
              <p className="section-label !text-teal-300">Central &amp; ducted</p>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight">Central &amp; ducted AC installation</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              Ducted systems cool several rooms from one set of equipment, with
              air delivered through ducts and grilles. They take more planning
              than split units and always need a site visit to quote.
            </p>
          </div>
          <div className="lg:col-span-7">
            <svg viewBox="0 0 520 150" className="h-auto w-full" role="img" aria-labelledby="ai-duct-title">
              <title id="ai-duct-title">Ducted system: indoor equipment in the ceiling void sends supply air through ducts to three rooms, with return air going back to the unit</title>
              <rect width="520" height="150" rx="14" fill="#191d25" />
              <rect x="20" y="20" width="90" height="40" rx="6" fill="#333a49" stroke="#8fc4c4" />
              <path d="M110 34h390" stroke="#4a9797" strokeWidth="12" />
              <path className="fs-flow" d="M110 34h390" stroke="#e0f0f0" strokeWidth="1.5" />
              {[180, 310, 440].map((x) => (
                <g key={x}>
                  <path d={`M${x} 40v40`} stroke="#4a9797" strokeWidth="8" />
                  <path d={`M${x - 20} 84h40`} stroke="#8fc4c4" strokeWidth="3" />
                  <path className="fs-flow" d={`M${x} 90v30`} stroke="#8fc4c4" strokeWidth="2" />
                </g>
              ))}
              <path d="M110 52h40v60" stroke="#c98246" strokeWidth="8" fill="none" />
              <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#b4bac6">
                <text x="26" y="78">UNIT</text>
                <text x="200" y="20">SUPPLY</text>
                <text x="64" y="132">RETURN</text>
              </g>
            </svg>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ducted.map((d) => (
                <li key={d} className="rounded-full bg-sand-50/10 px-3 py-1 text-xs">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
