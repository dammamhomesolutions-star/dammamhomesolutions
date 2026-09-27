import Link from "next/link";
import { electricalDangerSigns } from "@/lib/emergency-repairs";

export default function EhElectricalSafety() {
  return (
    <section className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge max-w-2xl">
        <p className="section-label !text-ember-700">Electrical</p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
          Electrical problems are different.
        </h2>

        <p className="mt-5 text-sm text-ink-600">
          Situations that call for immediate caution:
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {electricalDangerSigns.map((item) => (
            <li key={item} className="text-sm text-ink-700">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-md border border-ember-700/30 bg-ember-100/40 p-5 font-medium text-ink-950">
          Do not attempt electrical repair yourself if you are not qualified.
          If there is immediate danger, use the appropriate emergency
          service.
        </p>

        <Link
          href="/electrical-repair/"
          className="focus-ring mt-6 inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
        >
          Request Electrical Repair
        </Link>
      </div>
    </section>
  );
}
