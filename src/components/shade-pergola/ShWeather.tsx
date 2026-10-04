import { shAfterWeather, shWeather } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Exposure, and what to do after strong weather (safety first).
export default function ShWeather() {
  return (
    <section aria-labelledby="sh-weather" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge">
        <Tag n="09">Weather &amp; exposure</Tag>
        <h2 id="sh-weather" className="mt-5 max-w-3xl font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Outdoor structures take the weather first.</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">A shade is exposed every day of the year. Over time, that exposure can contribute to deterioration of the cover, the finish and the connections.</p>
        <ul className="mt-10 grid grid-cols-2 gap-px bg-steel-900/10 md:grid-cols-3 lg:grid-cols-6">
          {shWeather.map((w) => (
            <li key={w.label} className="bg-sand-50 p-5">
              <p className="font-serif text-lg text-ink-950">{w.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{w.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-px overflow-hidden bg-copper-600 lg:grid-cols-12">
          <div className="bg-copper-600 p-6 text-sand-50 sm:p-10 lg:col-span-5">
            <h3 className="font-serif text-3xl leading-tight">After strong weather, look before you park.</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-copper-100">
              If you see signs of instability or major damage, keep people and
              vehicles clear of the affected structure until it has been
              appropriately assessed.
            </p>
          </div>
          <div className="bg-sand-50 p-6 sm:p-10 lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-700">Visible issues after a storm can include</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {shAfterWeather.map((x) => <li key={x} className="border-l-2 border-steel-900 pl-3 text-sm font-semibold text-ink-900">{x}</li>)}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-600">Look from a safe distance — don&rsquo;t climb onto or pull at a damaged shade. Send photos and we&rsquo;ll advise on the next step.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
