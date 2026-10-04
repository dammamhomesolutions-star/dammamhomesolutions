import { dcMoveInSteps, dcMoveOutSteps } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";

function Steps({ steps, dark }: { steps: { title: string; body: string }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-6 space-y-5">
      <span aria-hidden="true" className={`absolute bottom-3 left-[15px] top-3 w-px ${dark ? "bg-mint-300/40" : "bg-mint-600/40"}`} />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4">
          <span
            className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs ${
              dark ? "bg-mint-300 text-ink-950" : "border border-mint-600/50 bg-sand-50 text-mint-800"
            }`}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-[15px] font-semibold">{s.title}</h3>
            <p className={`mt-0.5 text-sm leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function DcProcesses() {
  return (
    <section aria-label="How move-in and move-out cleaning work" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-6 text-ink-950 sm:p-8">
          <div className="flex items-center gap-3 text-mint-700">
            <DcIcon name="movein" />
            <p className="section-label !text-mint-700">Move-in</p>
          </div>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">How move-in cleaning works</h2>
          <Steps steps={dcMoveInSteps} />
        </div>
        <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
          <div className="flex items-center gap-3 text-mint-300">
            <DcIcon name="moveout" />
            <p className="section-label !text-mint-300">Move-out</p>
          </div>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">How move-out cleaning works</h2>
          <Steps steps={dcMoveOutSteps} dark />
          <p className="mt-6 rounded-xl bg-sand-50/5 p-4 text-sm leading-relaxed text-ink-300">
            Cleaning doesn&rsquo;t guarantee a landlord&rsquo;s inspection or
            deposit outcome — those depend on the property&rsquo;s condition
            and the rental agreement.
          </p>
        </div>

        {/* Handover */}
        <div className="grid gap-6 rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-8 lg:col-span-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-mint-700">
              <DcIcon name="key" />
              <p className="section-label !text-mint-700">Rental handover</p>
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Preparing a rental property for handover</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              For tenants, landlords and property managers, the handover is
              where cleaning matters most. Share any checklist or notes from
              your landlord or agent when you book, and we&rsquo;ll prioritise
              those areas.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Cleaning can help prepare</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Empty rooms", "Kitchen", "Bathrooms", "Floors", "Cabinets", "Doors", "Fixtures", "Visible dust and residue"].map((t) => (
                <li key={t} className="rounded-full bg-mint-100 px-3 py-1 text-sm text-mint-900">{t}</li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-3 rounded-xl border border-ember-600/30 bg-ember-100/60 p-4 text-sm leading-relaxed text-ink-800">
              <DcIcon name="alert" className="mt-0.5 h-5 w-5 flex-none text-ember-700" />
              The exact handover standard depends on the landlord, property
              manager and tenancy agreement. Damage, wear and repairs are
              separate from cleaning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
