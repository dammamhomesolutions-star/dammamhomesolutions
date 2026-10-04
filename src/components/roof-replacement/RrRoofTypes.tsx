import { rrRoofTypes } from "@/lib/roof-replacement";

// Small line illustrations, one per roof context.
function TypeArt({ k }: { k: (typeof rrRoofTypes)[number]["key"] }) {
  const common = { fill: "none", stroke: "#333a49", strokeWidth: 1.6, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 200 110" className="h-auto w-full" aria-hidden="true">
      <path d="M10 100h180" stroke="#c4c0b4" strokeWidth="1.5" />
      {k === "flat" && (
        <g {...common}>
          <path d="M40 100V50h120v50" />
          <path d="M34 50h132v-6H34z" fill="#eae7de" />
          <path d="M70 100V76h18v24M110 70h24v14h-24z" />
          <path d="M150 44v-10" stroke="#4a9797" />
          <path d="M60 44c10-4 20-4 30 0" stroke="#4a9797" />
        </g>
      )}
      {k === "villa" && (
        <g {...common}>
          <path d="M24 100V44h152v56" />
          <path d="M18 44h164v-8H18z" fill="#eae7de" />
          <path d="M60 36V16h40v20" fill="#faf8f4" />
          <path d="M44 100V72h24v28M96 60h24v18H96zM136 60h24v18h-24z" />
          <path d="M100 100V80h20v20" />
        </g>
      )}
      {k === "commercial" && (
        <g {...common}>
          <path d="M14 100V40h172v60" />
          <path d="M10 40h180v-6H10z" fill="#eae7de" />
          <path d="M30 100V70h50v30M100 70h70v18h-70z" />
          <path d="M40 34V22h26v12M120 34V24h20v10M160 34V26h14v8" fill="#faf8f4" />
        </g>
      )}
      {k === "equipment" && (
        <g {...common}>
          <path d="M30 100V56h140v44" />
          <path d="M26 56h148v-6H26z" fill="#eae7de" />
          <path d="M44 50V30h34v20" fill="#faf8f4" />
          <circle cx="61" cy="40" r="6" />
          <path d="M96 50V22M90 22h12" />
          <path d="M120 50l10-24h40l-10 24" fill="#d7e4ea" />
          <path d="M78 46c8 0 10 4 18 4" strokeDasharray="3 3" />
        </g>
      )}
    </svg>
  );
}

export default function RrRoofTypes() {
  return (
    <section aria-labelledby="rr-types" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">Roof types</p>
          <h2 id="rr-types" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            What type of roof needs replacing?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Most roofs in Dammam are flat concrete roofs, but each context
            brings its own concerns.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rrRoofTypes.map((t) => (
            <li key={t.key} className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5">
              <div className="rounded-xl bg-sand-100/70 p-3">
                <TypeArt k={t.key} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-950">{t.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-3 flex-none bg-teal-600" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
