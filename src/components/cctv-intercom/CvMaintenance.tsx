import { cvCctvMaint, cvIntercomMaint, cvRepair, cvReplace } from "@/lib/cctv-intercom";
import CvIcon from "./CvIcon";

export default function CvMaintenance() {
  return (
    <section id="maintenance" aria-label="Maintenance, repair and replacement" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <CvIcon name="camera" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">CCTV systems need maintenance too</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Dust, heat and time affect cameras and recorders. How often depends
              on exposure and how critical the system is — the checks are:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cvCctvMaint.map((m) => (
                <li key={m} className="flex gap-2 text-sm text-ink-800"><CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-600" />{m}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <CvIcon name="intercom" className="h-7 w-7 text-moss-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Intercom maintenance</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">Outdoor stations take the most wear. What we check depends on the system:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cvIntercomMaint.map((m) => (
                <li key={m} className="flex gap-2 text-sm text-ink-800"><CvIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-moss-600" />{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-moss-100/60 p-6 sm:p-8">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Should you repair or replace your security system?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-sand-50 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-moss-800"><CvIcon name="maintenance" className="h-5 w-5" /> Repair may make sense when</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-800">{cvRepair.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="rounded-xl bg-ink-950 p-5 text-sand-50">
              <h3 className="flex items-center gap-2 font-semibold"><CvIcon name="arrow" className="h-5 w-5 text-moss-200" /> Replacement may make sense when</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-300">{cvReplace.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <p className="mt-5 text-sm text-ink-600">Often only part of a system needs upgrading — a recorder, a few cameras, or the intercom — not everything.</p>
        </div>
      </div>
    </section>
  );
}
