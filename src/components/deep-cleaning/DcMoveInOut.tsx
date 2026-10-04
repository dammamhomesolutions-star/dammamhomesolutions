import { dcMoveIn, dcMoveOut } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";
import DcCtas from "./DcCtas";

function Column({
  title,
  icon,
  data,
  dark,
}: {
  title: string;
  icon: "movein" | "moveout";
  data: typeof dcMoveIn;
  dark?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${dark ? "bg-ink-950 text-sand-50" : "border border-ink-900/10 bg-sand-50"}`}>
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-full ${dark ? "bg-mint-300 text-ink-950" : "bg-mint-100 text-mint-800"}`}>
          <DcIcon name={icon} className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-mint-300" : "text-mint-700"}`}>Goal</p>
      <p className="mt-1 text-[15px] font-medium leading-relaxed">{data.goal}</p>

      <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-mint-300" : "text-mint-700"}`}>Typical situations</p>
      <ul className={`mt-2 space-y-1.5 text-sm ${dark ? "text-ink-300" : "text-ink-700"}`}>
        {data.situations.map((s) => (
          <li key={s} className="flex gap-2">
            <span className={`mt-2 h-1 w-3 flex-none ${dark ? "bg-mint-300" : "bg-mint-600"}`} aria-hidden="true" />
            {s}
          </li>
        ))}
      </ul>

      <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-mint-300" : "text-mint-700"}`}>Focus</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {data.focus.map((f) => (
          <li key={f} className={`rounded-full px-3 py-1 text-xs ${dark ? "bg-sand-50/10 text-sand-100" : "bg-mint-100 text-mint-900"}`}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DcMoveInOut() {
  return (
    <section id="move-in-move-out" aria-labelledby="dc-mio" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-mint-700">Moving in or out</p>
          <h2 id="dc-mio" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Move-in cleaning and move-out cleaning aren&rsquo;t quite the same
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Both happen in an empty property, but the goal is different — one
            prepares a home for you, the other prepares it for someone else.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Column title="Move-in cleaning" icon="movein" data={dcMoveIn} />
          <Column title="Move-out cleaning" icon="moveout" data={dcMoveOut} dark />
        </div>
        <p className="mt-6 text-sm text-ink-600">Cleaning requirements vary by property condition and handover expectations.</p>
        <DcCtas className="mt-8" />
      </div>
    </section>
  );
}
