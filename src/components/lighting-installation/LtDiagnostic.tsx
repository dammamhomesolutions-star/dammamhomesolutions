import { ltCauses, ltWarnings } from "@/lib/lighting-installation";
import LtIcon from "./LtIcon";

export default function LtDiagnostic() {
  return (
    <section id="troubleshooting" aria-label="Lighting problems and warning signs" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label !text-ember-700">Troubleshooting</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Is the fixture actually the problem?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              A light that flickers, buzzes or won&rsquo;t turn on isn&rsquo;t
              always a bad fixture. We trace it through the chain — and you
              shouldn&rsquo;t open fittings or test live parts yourself.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {ltCauses.map((c, i) => (
              <li key={c.title} className="flex gap-3 rounded-2xl border border-ink-900/10 p-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ember-100 font-mono text-xs text-ember-900">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-ink-950">{c.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-600">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid gap-8 rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LtIcon name="alert" className="h-8 w-8 text-rust-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">When a lighting problem needs professional attention</h2>
            <p className="mt-3 text-sm text-ink-700">
              Switch off at the breaker if it&rsquo;s safe to reach, don&rsquo;t keep
              resetting a tripping circuit, and get it checked.
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {ltWarnings.map((w) => (
              <li key={w} className="flex items-center gap-2 rounded-xl bg-sand-50 px-3 py-2.5 text-sm text-ink-900">
                <LtIcon name="alert" className="h-4 w-4 flex-none text-rust-700" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
