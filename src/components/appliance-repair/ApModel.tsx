import ApIcon from "./ApIcon";

const spots = [
  { appliance: "Washing machine", where: "Inside the door frame or on the back panel" },
  { appliance: "Refrigerator", where: "Inside the fridge compartment wall or near the bottom front" },
  { appliance: "Oven / cooker", where: "Around the door frame, or on the side or back" },
  { appliance: "Dishwasher", where: "On the edge of the door" },
];

// Model-number guide. Locations vary by brand, so wording stays general.
export default function ApModel() {
  return (
    <section aria-labelledby="ap-model" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="section-label !text-copper-700">Before you message us</p>
          <h2 id="ap-model" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Where to find your appliance model number</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            The model number tells us which parts the appliance uses and how
            it&rsquo;s built. It&rsquo;s usually on a sticker or plate — the
            exact spot varies by brand.
          </p>
          <div className="mt-6 flex gap-3 rounded-2xl bg-ink-950 p-5 text-sand-50">
            <ApIcon name="tag" className="h-6 w-6 flex-none text-copper-300" />
            <p className="text-sm leading-relaxed text-ink-300">
              <span className="font-semibold text-sand-50">Not sure if we service your brand?</span>{" "}
              Send us the model number or a photo of the label and we&rsquo;ll
              confirm before booking.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-steel-100 p-5 sm:p-6">
            <div className="rounded-xl border-2 border-dashed border-ink-900/20 bg-sand-50 p-4 font-mono text-xs text-ink-700" aria-hidden="true">
              <p className="text-ink-500">EXAMPLE LABEL</p>
              <p className="mt-2">MODEL: <span className="rounded bg-copper-100 px-1.5 py-0.5 font-semibold text-copper-800">AB-1234XYZ</span></p>
              <p className="mt-1">SERIAL: 00000000</p>
              <p className="mt-1">220–240V ~ 60Hz</p>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {spots.map((s) => (
                <li key={s.appliance} className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/10">
                  <p className="text-sm font-semibold text-ink-950">{s.appliance}</p>
                  <p className="mt-0.5 text-sm text-ink-600">{s.where}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-500">Can&rsquo;t find it? Check the manual or receipt, or just send a photo of the appliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
