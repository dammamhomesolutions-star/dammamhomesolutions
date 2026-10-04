import { pcCycle, pcReturnFactors } from "@/lib/pest-control";

// Six-node cycle drawn on a circle; a slow rotating dash shows it repeating.
export default function PcRecurring() {
  const cx = 200;
  const cy = 200;
  const r = 140;
  const nodes = pcCycle.map((label, i) => {
    const a = (i / pcCycle.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });

  return (
    <section aria-labelledby="pc-return" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <p className="section-label !text-moss-200">Why pests keep coming back</p>
          <h2 id="pc-return" className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            Treating the pest is only part of the solution
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            Spraying the insect you can see doesn&rsquo;t change why it was
            there. As long as food, water, shelter and a way in remain, new
            activity follows. Recurring problems are often associated with:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {pcReturnFactors.map((f) => (
              <li key={f} className="rounded-full border border-sand-100/15 px-3 py-1 text-xs text-sand-100">
                {f}
              </li>
            ))}
          </ul>
        </div>

        <figure className="lg:col-span-6">
          <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-md" role="img" aria-labelledby="pc-cycle-title">
            <title id="pc-cycle-title">
              {`The pest cycle: ${pcCycle.join(", then ")}. Prevention breaks the loop back to food and water.`}
            </title>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#333a49" strokeWidth="2" />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#dbe1cd" strokeWidth="2" strokeDasharray="30 850" className="pc-spin" />
            {nodes.map((n, i) => {
              const breaker = i >= 4;
              return (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="34" fill={breaker ? "#4b5a3f" : "#191d25"} stroke={breaker ? "#dbe1cd" : "#69748a"} strokeWidth="1.5" />
                  <text x={n.x} y={n.y - 2} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8.5" fill={breaker ? "#eaeee0" : "#b4bac6"} letterSpacing="0.6">
                    {n.label.toUpperCase().split(" ")[0]}
                  </text>
                  {n.label.includes(" ") && (
                    <text x={n.x} y={n.y + 10} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8.5" fill={breaker ? "#eaeee0" : "#b4bac6"} letterSpacing="0.6">
                      {n.label.toUpperCase().split(" ").slice(1).join(" ")}
                    </text>
                  )}
                </g>
              );
            })}
            <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="serif" fontSize="18" fill="#f4f0e8">Break the</text>
            <text x={cx} y={cy + 16} textAnchor="middle" fontFamily="serif" fontSize="18" fill="#f4f0e8">cycle</text>
          </svg>
        </figure>
      </div>
    </section>
  );
}
