import { whDiy } from "@/lib/water-heater";
import WhIcon from "./WhIcon";

const safety = [
  { title: "Electrical safety", body: "Water and electricity together need correct wiring, earthing and protection." },
  { title: "Water leakage", body: "Connections and valves are tested under pressure before handover." },
  { title: "Pressure & temperature", body: "A working safety valve with a safe discharge route is essential." },
  { title: "Correct installation", body: "Following the manufacturer's requirements and applicable rules." },
  { title: "Mounting & support", body: "Brackets and walls strong enough for a full tank." },
  { title: "Testing", body: "Heating, temperature control and connections checked before we leave." },
];

export default function WhSafety() {
  return (
    <section aria-label="Safety and what to leave to a professional" className="border-b border-ink-900/10 bg-ink-950 py-20 text-sand-50 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WhIcon name="safety" className="h-8 w-8 text-ember-500" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">Water heater safety</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
              Water heater installation involves water and, for most systems,
              electricity or gas. Professional installation is recommended.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {safety.map((s) => (
              <li key={s.title} className="rounded-xl bg-sand-50/5 p-4">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-300">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-16 font-serif text-3xl tracking-tight">What you can do — and what to leave to us</h2>
        {/* Two columns of task cards: no wide table on small screens */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 text-ink-900">
            <h3 className="flex items-center gap-2 font-semibold"><WhIcon name="check" className="h-5 w-5 text-moss-700" /> You can</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {whDiy.filter((d) => d.you).map((d) => <li key={d.task}>{d.task}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-ember-500/40 p-6">
            <h3 className="flex items-center gap-2 font-semibold"><WhIcon name="technician" className="h-5 w-5 text-ember-500" /> Leave to a professional</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-300">
              {whDiy.filter((d) => !d.you).map((d) => <li key={d.task}>{d.task}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
