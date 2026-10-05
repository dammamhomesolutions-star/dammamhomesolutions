import Link from "next/link";

// Visible breadcrumb for Arabic pages (schema is emitted by each page).
export default function ArBreadcrumb({ items, dark = false }: { items: { label: string; href?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="مسار التنقل">
      <ol className={`flex flex-wrap items-center gap-2 text-xs ${dark ? "text-ink-300" : "text-ink-500"}`}>
        <li><Link href="/ar/" className={`focus-ring rounded-sm ${dark ? "hover:text-sand-50" : "hover:text-rust-700"}`}>الرئيسية</Link></li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {it.href ? (
              <Link href={it.href} className={`focus-ring rounded-sm ${dark ? "hover:text-sand-50" : "hover:text-rust-700"}`}>{it.label}</Link>
            ) : (
              <span className={dark ? "text-sand-50" : "text-ink-800"} aria-current="page">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
