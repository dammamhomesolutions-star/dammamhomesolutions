import { dcBathroom, dcKitchen, dcLiving } from "@/lib/deep-cleaning";
import DcIcon from "./DcIcon";
import type { DcIconName } from "@/lib/deep-cleaning";

const blocks: { title: string; icon: DcIconName; items: string[]; note: string; extra?: string }[] = [
  {
    title: "Kitchen deep cleaning",
    icon: "kitchen",
    items: dcKitchen,
    note: "Some stains, burned-on residue or damaged surfaces may not be fully removable.",
  },
  {
    title: "Bathroom deep cleaning",
    icon: "bathroom",
    items: dcBathroom,
    extra: "Typical buildup: soap residue, water marks, mineral deposits, dust and surface grime.",
    note: "Heavy limescale can be reduced, but etched surfaces and damaged grout can't be restored by cleaning.",
  },
  {
    title: "Bedrooms, living rooms & common areas",
    icon: "bedroom",
    items: dcLiving,
    note: "Empty rooms can be cleaned more thoroughly — more floor and wall-adjacent areas are reachable.",
  },
];

export default function DcRoomDetails() {
  return (
    <section aria-label="Kitchen, bathroom and living area cleaning" className="border-b border-ink-900/10 bg-sand-100/60 py-20 sm:py-24">
      <div className="container-edge grid gap-6 lg:grid-cols-3">
        {blocks.map((b) => (
          <article key={b.title} className="flex flex-col rounded-2xl border border-ink-900/10 bg-sand-50 p-6 sm:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-100 text-mint-800">
              <DcIcon name={b.icon} />
            </span>
            <h2 className="mt-5 font-serif text-2xl tracking-tight text-ink-950">{b.title}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-ink-800 sm:grid-cols-2 lg:grid-cols-1">
              {b.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <DcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-mint-600" />
                  {i}
                </li>
              ))}
            </ul>
            {b.extra && <p className="mt-4 text-sm leading-relaxed text-ink-600">{b.extra}</p>}
            <p className="mt-auto pt-5 text-sm leading-relaxed text-ink-600">
              <span className="font-semibold text-ink-900">Honest limit: </span>
              {b.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
