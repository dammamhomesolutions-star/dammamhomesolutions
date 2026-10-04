const items = [
  { title: "Local Dammam service", text: "Serving Dammam, Al Khobar, Dhahran and Qatif.", icon: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  { title: "Available 24/7", text: "Urgent leaks, faults and breakdowns, any time.", icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" },
  { title: "WhatsApp booking", text: "Describe the problem and send photos first.", icon: "M4 20l1.4-4A8 8 0 1 1 8 18.6zM9 10h6M9 13h4" },
  { title: "Clear scope before work", text: "We agree what will be done before we start.", icon: "M9 4h6l1 2h3v14H5V6h3zM9 13l2 2 4-4" },
];

export default function HpTrust() {
  return (
    <section aria-label="Why customers contact us" className="border-b border-ink-900/10 bg-ink-950 text-sand-50">
      <ul className="container-edge grid grid-cols-2 gap-px bg-sand-50/10 lg:grid-cols-4">
        {items.map((i) => (
          <li key={i.title} className="flex gap-3 bg-ink-950 px-2 py-6 sm:px-5">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 flex-none text-rust-500" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={i.icon} /></svg>
            <div>
              <p className="text-sm font-semibold">{i.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-300">{i.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
