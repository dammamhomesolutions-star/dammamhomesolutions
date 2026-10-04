import { shMaintain } from "@/lib/shade-pergola";
import { Tag } from "./ShUi";

// Maintenance plan as a dial of six checks.
export default function ShMaintain() {
  return (
    <section aria-labelledby="sh-maintain" className="bg-sand-50 py-20 sm:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Tag n="11">Maintenance</Tag>
          <h2 id="sh-maintain" className="mt-5 font-serif text-3xl tracking-tight text-ink-950 sm:text-5xl">Keep your shade ready</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">Simple visual checks from the ground catch problems while they&rsquo;re still small. Nothing here involves climbing or touching the structure.</p>
          <svg viewBox="0 0 240 240" className="mt-8 hidden h-56 w-56 lg:block" aria-hidden="true">
            <circle cx="120" cy="120" r="100" fill="none" stroke="#b7bfc6" strokeWidth="2" />
            {shMaintain.map((_, i) => {
              const a = (i / shMaintain.length) * Math.PI * 2 - Math.PI / 2;
              return <circle key={i} cx={120 + Math.cos(a) * 100} cy={120 + Math.sin(a) * 100} r="10" fill={i === shMaintain.length - 1 ? "#b3652f" : "#2b2f33"} />;
            })}
            <circle cx="120" cy="120" r="40" fill="#f5e3d2" />
            <text x="120" y="125" textAnchor="middle" fontSize="13" className="font-mono" fill="#8f4f2f">CHECK</text>
          </svg>
        </div>
        <ol className="grid grid-cols-2 gap-px bg-steel-900/10 lg:col-span-7">
          {shMaintain.map((m, i) => (
            <li key={m.label} className={`p-4 sm:p-6 ${i === shMaintain.length - 1 ? "bg-steel-900 text-sand-50" : "bg-sand-50"}`}>
              <span className={`font-mono text-[10px] ${i === shMaintain.length - 1 ? "text-copper-300" : "text-copper-700"}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl">{m.label}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${i === shMaintain.length - 1 ? "text-steel-300" : "text-ink-600"}`}>{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
