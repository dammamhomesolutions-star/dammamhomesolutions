import { dkInside, dkOtherCauses, dkSigns, dkSymptoms } from "@/lib/ac-duct-cleaning";
import DkIcon from "./DkIcon";

export default function DkSigns() {
  return (
    <section aria-label="Signs, other causes and what builds up in ducts" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-copper-700">Signs</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Signs that may justify an inspection</h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dkSigns.map((s) => (
            <li key={s.title} className="group rounded-2xl border border-ink-900/10 bg-steel-100/50 p-6">
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${s.icon === "drop" ? "bg-rust-100 text-rust-700" : "bg-copper-100 text-copper-700"}`}>
                <DkIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ul>

        {/* Not the answer */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-copper-300">Honest advice</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight">When duct cleaning may not be the answer</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              Some symptoms get blamed on ducts when the cause is elsewhere.
              We won&rsquo;t recommend duct cleaning for every AC problem.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {dkSymptoms.map((s) => (
                <li key={s} className="rounded-full border border-sand-100/20 px-3 py-1 text-xs">{s}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-300">These can also be caused by</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {dkOtherCauses.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-xl bg-sand-50/5 px-3 py-2">
                  <DkIcon name="search" className="h-4 w-4 flex-none text-copper-300" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What's inside */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">What&rsquo;s inside your ducts?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Possible buildup varies a lot. Most ducts contain some of these —
              rarely all of them. Pest-related debris or moisture contamination
              only appear in specific situations and need inspection.
            </p>
          </div>
          <figure className="lg:col-span-8">
            <svg viewBox="0 0 520 170" className="h-auto w-full" role="img" aria-labelledby="dk-inside-title">
              <title id="dk-inside-title">Cut-away of a duct showing fine dust, construction debris, loose particles, fibres and foreign material settled along the bottom</title>
              <rect width="520" height="170" rx="16" fill="#eceef0" />
              <path d="M30 40h460v80H30z" fill="#d7dce0" stroke="#666f78" strokeWidth="2" />
              <path d="M30 40c-12 0-12 80 0 80M490 40c12 0 12 80 0 80" fill="none" stroke="#666f78" strokeWidth="2" />
              <path d="M34 112h452v6H34z" fill="#b7bfc6" />
              <g fill="#8a8170">
                <circle cx="70" cy="110" r="2" /><circle cx="84" cy="108" r="1.5" /><circle cx="96" cy="111" r="2" />
              </g>
              <path d="M160 112l8-10 10 4 6-6 8 12z" fill="#9a968a" />
              <g fill="#5c584f">
                <circle cx="250" cy="108" r="3" /><circle cx="264" cy="110" r="2.5" /><circle cx="276" cy="106" r="3.5" />
              </g>
              <path d="M330 110c10-8 20 6 30-2s14 4 20-2" fill="none" stroke="#a67c5b" strokeWidth="2" />
              <rect x="430" y="100" width="22" height="12" rx="2" fill="#c98246" opacity="0.8" />
              <path className="fs-flow" d="M40 70h440" stroke="#5b7d8f" strokeWidth="2" />
              {dkInside.map((d) => (
                <text key={d.label} x={d.x} y="150" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#4d545c">
                  {d.label.toUpperCase()}
                </text>
              ))}
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}
