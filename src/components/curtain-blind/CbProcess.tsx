import { cbProcess, cbReuse } from "@/lib/curtain-blind";
import CbIcon from "./CbIcon";

const replacement = ["Remove the old covering", "Check the existing hardware", "Confirm it suits the new product", "Hang the replacement"];
const fresh = ["Measure", "Decide mounting position", "Choose hardware", "Fit new brackets, track or rod", "Check the wall or ceiling"];

export default function CbProcess() {
  return (
    <section id="process" aria-label="Installation process, replacement and existing hardware" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-clay-700">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What happens during curtain &amp; blind installation?</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cbProcess.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-clay-600">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay-900 text-clay-100"><CbIcon name={s.icon} className="h-5 w-5" /></span>
                <span className="font-mono text-xs text-clay-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">Replacing existing curtains or installing new hardware?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-clay-100/60 p-5">
                <h3 className="font-semibold text-ink-950">Replacement</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-800">{replacement.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
              <div className="rounded-2xl bg-ink-950 p-5 text-sand-50">
                <h3 className="font-semibold">New installation</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-300">{fresh.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-600">Existing holes and brackets aren&rsquo;t always in the right place for a new product — we check before reusing them.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border-2 border-clay-600/30 p-6">
              <CbIcon name="bracket" className="h-7 w-7 text-clay-700" />
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Can you reuse the existing rod or track?</h2>
              <p className="mt-2 text-sm text-ink-600">Sometimes. It depends on:</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {cbReuse.map((r) => <li key={r} className="rounded-full bg-clay-100 px-2.5 py-1 text-xs text-ink-800">{r}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
