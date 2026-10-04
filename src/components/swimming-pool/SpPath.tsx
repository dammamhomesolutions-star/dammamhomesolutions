import SpIcon from "./SpIcon";

const repair = ["Equipment", "Surface", "Leak concern", "Circulation"];
const routine = ["Cleaning", "Inspection", "Water care", "Preventive checks"];
const recur = ["Visible problem", "Quick fix", "Problem returns", "Underlying cause", "Proper assessment", "Appropriate repair"];
const examples = ["Water loss that keeps returning", "Cloudy water after every top-up of chemicals", "Tiles that keep coming loose in the same area", "A pump that trips again after a reset"];

// Repair vs routine maintenance, then why problems recur.
export default function SpPath() {
  return (
    <section aria-label="Repair or routine maintenance, and why problems come back" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">Repair or maintenance?</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Two different jobs that work together</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Maintenance keeps a working pool clean and running. Repair fixes something that has failed. Good maintenance often catches repairs early.</p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-teal-100/60 p-6 sm:p-10">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <span className="rounded-full bg-ink-950 px-5 py-2 text-sm font-semibold text-sand-50">Something changed</span>
            <span aria-hidden="true" className="h-8 w-px bg-teal-700/40" />
            <span className="rounded-2xl bg-sand-50 px-5 py-3 text-sm font-semibold text-ink-950 ring-1 ring-teal-700/20">Is it affecting how the pool works?</span>
            <span aria-hidden="true" className="h-8 w-px bg-teal-700/40" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-ink-950 p-6 text-sand-50">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Yes →</p>
              <h3 className="mt-2 flex items-center gap-2 font-serif text-2xl"><SpIcon name="repair" className="h-6 w-6 text-teal-300" />Repair assessment</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">{repair.map((r) => <li key={r} className="rounded-xl bg-sand-100/10 px-3 py-2 text-sm">{r}</li>)}</ul>
            </div>
            <div className="rounded-3xl bg-sand-50 p-6 ring-1 ring-teal-700/20">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">No →</p>
              <h3 className="mt-2 flex items-center gap-2 font-serif text-2xl text-ink-950"><SpIcon name="calendar" className="h-6 w-6 text-teal-700" />Routine maintenance</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">{routine.map((r) => <li key={r} className="rounded-xl bg-teal-100 px-3 py-2 text-sm text-teal-900">{r}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Why fixing the symptom isn&rsquo;t always enough</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Not every issue has a hidden cause — but when the same problem keeps coming back, it usually does.</p>
            <ul className="mt-5 space-y-1.5">{examples.map((e) => <li key={e} className="flex gap-2 text-sm text-ink-800"><SpIcon name="circulation" className="mt-0.5 h-4 w-4 flex-none text-teal-700" />{e}</li>)}</ul>
          </div>
          <ol className="relative grid gap-2 lg:col-span-7">
            {recur.map((r, i) => (
              <li key={r} className="flex items-center gap-4">
                <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full font-mono text-xs ${i >= 3 ? "bg-teal-800 text-sand-50" : "bg-teal-100 text-teal-900"}`}>{i + 1}</span>
                <span className={`flex-1 rounded-2xl px-4 py-3 text-sm font-medium ${i >= 3 ? "bg-ink-950 text-sand-50" : i === 2 ? "bg-rust-100 text-rust-700" : "bg-sand-100 text-ink-800"}`}>{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
