import { ltControls, ltIndoorOutdoor } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

export default function LtControls() {
  return (
    <section id="controls" aria-label="Lighting controls and indoor versus outdoor" className="border-b border-ink-900/10 bg-ember-100/40 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-ember-700">Controls</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How do you want to control the lighting?</h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ltControls.map((c) => (
            <div key={c.title} className="flex gap-4 rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/10">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ink-950 text-ember-500">
                <LtIcon name={c.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-0.5 text-sm text-ink-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-700">
          Compatibility depends on the fixture, the lamp, the LED driver, the
          dimmer and the control system. A mismatch causes flicker, buzzing or
          lights that won&rsquo;t dim properly — we check before fitting.
        </p>

        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink-950">Indoor vs outdoor lighting</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
            <h3 className="flex items-center gap-2 font-semibold text-ink-950"><LtIcon name="home" className="h-5 w-5 text-ember-700" /> Indoors, think about</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-800">{ltIndoorOutdoor.map((r) => <li key={r.indoor}>{r.indoor}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <h3 className="flex items-center gap-2 font-semibold"><LtIcon name="sun" className="h-5 w-5 text-ember-500" /> Outdoors, think about</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-300">{ltIndoorOutdoor.map((r) => <li key={r.outdoor}>{r.outdoor}</li>)}</ul>
            <p className="mt-4 text-xs text-ink-400">We check that the fixture is made for outdoor use and suits where it will be mounted.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
