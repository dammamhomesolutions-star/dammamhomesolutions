import PcIcon from "./PcIcon";
import type { PcIconName } from "@/lib/pest-control";

const control: { label: string; icon: PcIconName }[] = [
  { label: "Identify", icon: "search" },
  { label: "Inspect", icon: "house" },
  { label: "Treat", icon: "spray" },
  { label: "Monitor", icon: "calendar" },
];
const prevention: { label: string; icon: PcIconName }[] = [
  { label: "Seal gaps", icon: "crack" },
  { label: "Clean", icon: "check" },
  { label: "Remove food sources", icon: "food" },
  { label: "Control moisture", icon: "droplet" },
  { label: "Manage waste", icon: "trash" },
  { label: "Reduce entry points", icon: "shield" },
  { label: "Watch for activity", icon: "search" },
];

export default function PcControlPrevention() {
  return (
    <section aria-labelledby="pc-cvp" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-moss-700">Two jobs, one plan</p>
          <h2 id="pc-cvp" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Control the current problem. Reduce the chance of it returning.
          </h2>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2 lg:gap-0">
          <div className="rounded-2xl bg-moss-800 p-6 text-sand-50 sm:p-8 lg:rounded-r-none">
            <p className="font-mono text-xs tracking-[0.18em] text-moss-200">PEST CONTROL</p>
            <h3 className="mt-2 font-serif text-2xl">Deal with what&rsquo;s there now</h3>
            <ol className="mt-6 grid grid-cols-2 gap-3">
              {control.map((c, i) => (
                <li key={c.label} className="group flex items-center gap-3 rounded-xl bg-moss-900/60 p-3 text-sm">
                  <PcIcon name={c.icon} className="h-5 w-5 text-moss-200" />
                  <span>
                    <span className="mr-1 font-mono text-xs text-moss-200">{i + 1}</span>
                    {c.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-moss-100/60 p-6 sm:p-8 lg:rounded-l-none lg:border-l-0">
            <p className="font-mono text-xs tracking-[0.18em] text-moss-700">PEST PREVENTION</p>
            <h3 className="mt-2 font-serif text-2xl text-ink-950">Make the property less inviting</h3>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {prevention.map((p) => (
                <li key={p.label} className="group flex items-center gap-3 rounded-xl bg-sand-50 p-3 text-sm text-ink-800">
                  <PcIcon name={p.icon} className="h-5 w-5 text-moss-700" />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-sand-50 bg-ink-950 font-serif text-xl text-sand-50 lg:flex"
          >
            +
          </span>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-600">
          Prevention lowers the chance of pests returning. It can&rsquo;t
          guarantee they never will — especially in buildings shared with
          neighbours.
        </p>
      </div>
    </section>
  );
}
