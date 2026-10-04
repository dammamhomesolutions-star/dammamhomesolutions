import { wlProcess, wlRoomPrep } from "@/lib/wallpaper-installation";
import WlIcon from "./WlIcon";

export default function WlProcess() {
  return (
    <section id="process" aria-label="Installation process and room preparation" className="border-b border-ink-900/10 bg-teal-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-teal-700">How it works</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">What happens during wallpaper installation?</h2>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wlProcess.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10 transition-colors hover:ring-teal-600">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-teal-100"><WlIcon name={s.icon} className="h-5 w-5" /></span>
                <span className="font-mono text-xs text-teal-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <WlIcon name="room" className="h-8 w-8 text-teal-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">How to prepare the room</h2>
            <p className="mt-3 text-sm text-ink-300">A clear room lets us protect your floors and work efficiently. Ask us if you need help moving larger furniture.</p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8">
            {wlRoomPrep.map((r) => (
              <li key={r} className="flex gap-2 rounded-xl bg-ink-900 p-3 text-sm text-sand-100"><WlIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-300" />{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
