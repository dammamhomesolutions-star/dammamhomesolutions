import { wpDiy, wpMistakes, wpWarnings } from "@/lib/water-pump";
import WpIcon from "./WpIcon";

export default function WpSafety() {
  return (
    <section aria-label="Warning signs, mistakes and what to leave to a professional" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-8 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <WpIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Get professional help if you notice</h2>
            <p className="mt-3 text-sm text-ink-700">Stop using the pump if there&rsquo;s an immediate safety concern. Never bypass electrical protection.</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {wpWarnings.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-900">
                <WpIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">What not to do</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {wpMistakes.map((m) => (
                <li key={m} className="flex gap-3 rounded-xl border border-ink-900/10 bg-glass-100/30 p-4 text-sm text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rust-100 text-[11px] font-bold text-rust-700" aria-hidden="true">✕</span>
                  <span>Don&rsquo;t {m.charAt(0).toLowerCase() + m.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl tracking-tight text-ink-950">You vs a professional</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl bg-moss-100 p-5">
                <h3 className="flex items-center gap-2 font-semibold text-moss-900"><WpIcon name="check" className="h-5 w-5" /> You can</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-moss-900">
                  {wpDiy.filter((d) => d.you).map((d) => <li key={d.task}>{d.task}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl bg-ink-950 p-5 text-sand-50">
                <h3 className="flex items-center gap-2 font-semibold"><WpIcon name="technician" className="h-5 w-5 text-glass-300" /> Leave to a professional</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-300">
                  {wpDiy.filter((d) => !d.you).map((d) => <li key={d.task}>{d.task}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
