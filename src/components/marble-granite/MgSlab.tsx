// Abstract marble slab drawn in SVG — an illustration, not a photo of a project.
export default function MgSlab({ className = "h-full w-full", tone = "marble", uid = "a" }: { className?: string; tone?: "marble" | "granite"; uid?: string }) {
  if (tone === "granite") {
    const dots = Array.from({ length: 140 }, (_, i) => ({
      x: (i * 53) % 400,
      y: (i * 97) % 260,
      r: 1 + ((i * 7) % 4) * 0.7,
      c: ["#35332e", "#78746a", "#c4c0b4", "#94472a"][i % 4],
    }));
    return (
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
        <rect width="400" height="260" fill="#9a968a" />
        {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} />)}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`mg-slab-bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f4ef" />
          <stop offset="1" stopColor="#e4e0d6" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#mg-slab-bg-${uid})`} />
      <path d="M-10 40c60 10 80 50 140 60s90 40 120 90 80 60 160 70" stroke="#b9b4a6" strokeWidth="2.5" fill="none" />
      <path d="M40 -10c10 40 50 60 60 100s-10 70 30 110" stroke="#c9c4b7" strokeWidth="1.5" fill="none" />
      <path d="M200 0c-10 40 20 60 60 80s60 50 50 100" stroke="#a8a294" strokeWidth="1.2" fill="none" />
      <path d="M300 20c20 30 60 40 110 30" stroke="#c4c0b4" strokeWidth="1" fill="none" />
      <path d="M0 200c50-20 90 0 130 30" stroke="#bcb7aa" strokeWidth="1.2" fill="none" />
      <path d="M110 120c20 10 30 30 20 50" stroke="#a69f8f" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
