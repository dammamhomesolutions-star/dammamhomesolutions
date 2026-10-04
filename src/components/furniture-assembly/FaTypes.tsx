import { faTypes, type FaLevel } from "@/lib/furniture-assembly";
import FaIcon from "./FaIcon";

const dots: Record<FaLevel, number> = { Simple: 1, Moderate: 2, "More complex": 3 };

export default function FaTypes() {
  return (
    <section id="furniture-types" aria-labelledby="fa-types" className="border-b border-ink-900/10 bg-walnut-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-walnut-700">What we assemble</p>
          <h2 id="fa-types" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Furniture we put together</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">The complexity shown is typical — the actual item decides.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {faTypes.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-sand-50 p-4 ring-1 ring-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-walnut-600 sm:p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-walnut-800 text-walnut-100">
                <FaIcon name={t.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-950">{t.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{t.body}</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-walnut-700">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`h-1.5 w-3 rounded-full ${n <= dots[t.level] ? "bg-walnut-600" : "bg-walnut-300/50"}`} />
                  ))}
                </span>
                {t.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
