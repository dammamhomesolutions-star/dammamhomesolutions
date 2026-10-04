import Link from "next/link";
import AiIcon from "./AiIcon";

const piping = ["Correct pipe size for the unit", "A sensible route", "Insulation along the lines", "Good connection quality", "Within the manufacturer's length limits", "Leak checks before handover"];
const drainRisks = ["Water leaking from the unit", "Wall staining", "Ceiling damage", "Damp areas", "Unpleasant conditions"];
const electrical = ["Power supply", "Electrical load", "Circuit suitability", "Isolation / disconnection", "Connection to the unit", "Manufacturer specifications"];

export default function AiTechnical() {
  return (
    <section aria-label="Piping, drainage and electrical" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-16">
        {/* Piping */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-teal-700">
              <AiIcon name="pipe" />
              <p className="section-label !text-teal-700">Refrigerant piping</p>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Refrigerant lines matter more than you can see</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The indoor and outdoor units are linked by refrigerant piping.
              Most of it ends up hidden behind trunking or in walls, which is
              exactly why it needs to be right first time. Refrigerant
              handling is specialist work — it isn&rsquo;t something to
              attempt yourself.
            </p>
          </div>
          <div className="lg:col-span-7">
            <svg viewBox="0 0 520 120" className="h-auto w-full" role="img" aria-labelledby="ai-pipe-title">
              <title id="ai-pipe-title">Cross-section of insulated refrigerant pipes running from indoor to outdoor unit</title>
              <rect width="520" height="120" rx="16" fill="#e0f0f0" />
              <rect x="20" y="30" width="70" height="40" rx="8" fill="#faf8f4" stroke="#333a49" strokeWidth="2" />
              <rect x="430" y="24" width="70" height="60" rx="6" fill="#faf8f4" stroke="#333a49" strokeWidth="2" />
              <path d="M90 45h340" stroke="#f2e6d5" strokeWidth="16" strokeLinecap="round" />
              <path d="M90 45h340" stroke="#b3652f" strokeWidth="5" />
              <path className="fs-flow" d="M90 45h340" stroke="#f5e3d2" strokeWidth="1.5" />
              <path d="M90 62h340" stroke="#f2e6d5" strokeWidth="14" strokeLinecap="round" />
              <path d="M90 62h340" stroke="#c98246" strokeWidth="4" />
              <g fontFamily="ui-monospace, monospace" fontSize="9" fill="#3d5a6b" letterSpacing="1">
                <text x="20" y="100">INDOOR</text>
                <text x="200" y="100">INSULATED COPPER LINES</text>
                <text x="440" y="100">OUTDOOR</text>
              </g>
            </svg>
            <ul className="mt-5 grid gap-2 text-sm text-ink-800 sm:grid-cols-2">
              {piping.map((p) => (
                <li key={p} className="flex gap-2">
                  <AiIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drainage */}
        <div className="grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-teal-300">
              <AiIcon name="drain" />
              <p className="section-label !text-teal-300">Drainage</p>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight">AC drainage: a small line that can cause a big problem</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              Indoor units produce condensate as they cool. It has to run
              steadily downhill to a suitable drainage point. When it
              can&rsquo;t, it can lead to:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {drainRisks.map((d) => (
                <li key={d} className="rounded-full bg-sand-50/10 px-3 py-1 text-xs">{d}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-300">
              Already have water dripping from an AC? See{" "}
              <Link href="/ac-repair/" className="focus-ring rounded-sm font-semibold text-sand-50 underline decoration-teal-500 decoration-2 underline-offset-4 hover:text-teal-300">
                AC repair
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              { ok: true, label: "Correct drainage" },
              { ok: false, label: "Blocked or poorly routed" },
            ].map((s) => (
              <figure key={s.label} className="rounded-xl bg-ink-900 p-4">
                <svg viewBox="0 0 220 150" className="h-auto w-full" aria-hidden="true">
                  <rect x="20" y="20" width="110" height="34" rx="8" fill="#faf8f4" />
                  {s.ok ? (
                    <g>
                      <path d="M120 54v10l70 30v40" fill="none" stroke="#4a9797" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path className="fs-flow" d="M120 54v10l70 30v40" fill="none" stroke="#e0f0f0" strokeWidth="1.5" />
                      <path d="M178 140h24" stroke="#4a9797" strokeWidth="3" />
                    </g>
                  ) : (
                    <g>
                      <path d="M120 54v10h40l20-10h20" fill="none" stroke="#c76a3f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="160" cy="64" r="6" fill="#94472a" />
                      <path d="M60 58v14M80 58v10M100 58v18" stroke="#4a9797" strokeWidth="2.5" strokeLinecap="round" />
                      <ellipse cx="80" cy="132" rx="40" ry="6" fill="#4a9797" opacity="0.5" />
                    </g>
                  )}
                </svg>
                <figcaption className="mt-2 flex items-center gap-2 text-sm">
                  <AiIcon name={s.ok ? "check" : "alert"} className={`h-4 w-4 ${s.ok ? "text-teal-300" : "text-ember-500"}`} />
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Electrical */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-ember-700">
              <AiIcon name="bolt" />
              <p className="section-label !text-ember-700">Electrical</p>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">AC installation also includes electrical considerations</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Every AC has specific electrical requirements. As part of the
              installation we check the supply and make the connection to the
              unit&rsquo;s specifications.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-2 text-sm text-ink-800 sm:grid-cols-2">
              {electrical.map((e) => (
                <li key={e} className="flex gap-2 rounded-xl bg-sand-100/70 px-3 py-2.5">
                  <AiIcon name="bolt" className="mt-0.5 h-4 w-4 flex-none text-ember-700" />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-3 rounded-xl border border-rust-600/30 bg-rust-100/60 p-4 text-sm text-rust-700">
              <AiIcon name="alert" className="mt-0.5 h-5 w-5 flex-none" />
              Electrical work should be carried out by a qualified professional
              and to applicable requirements. Please don&rsquo;t open the
              electrical board or disconnect circuits yourself.
            </p>
            <p className="mt-3 text-sm text-ink-600">
              Wider electrical issues are handled through{" "}
              <Link href="/electrical-repair/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-teal-600 decoration-2 underline-offset-4 hover:text-teal-700">
                electrical repair
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
