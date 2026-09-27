import { healthMapAreas } from "@/lib/property-maintenance";

const VIEW_W = 800;
const VIEW_H = 440;

export default function PmHeroVisual() {
  return (
    <figure className="w-full">
      <div className="blueprint-grid overflow-hidden rounded-md border border-ink-900/10 bg-sand-50">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          role="img"
          aria-labelledby="pm-hero-visual-title"
          className="h-auto w-full"
        >
          <title id="pm-hero-visual-title">
            Line illustration of a Dammam villa with numbered points marking areas covered by property maintenance
          </title>

          {/* ground line */}
          <line x1="40" y1="372" x2="760" y2="372" stroke="#b4bac6" strokeWidth="1" />

          {/* utility wing (left) */}
          <rect x="60" y="300" width="120" height="72" fill="#f4f0e8" stroke="#4b5a3f" strokeWidth="1.2" />
          <rect x="90" y="330" width="26" height="42" fill="none" stroke="#4b5a3f" strokeWidth="1" />

          {/* main villa body */}
          <rect
            x="200"
            y="150"
            width="420"
            height="222"
            fill="#faf8f4"
            stroke="#191d25"
            strokeWidth="1.6"
            pathLength={1}
            className="animate-drawLine"
            style={{ strokeDasharray: 1, strokeDashoffset: 1, animationDelay: "80ms" }}
          />
          <rect
            x="200"
            y="128"
            width="420"
            height="24"
            fill="#eaeee0"
            stroke="#191d25"
            strokeWidth="1.4"
            pathLength={1}
            className="animate-drawLine"
            style={{ strokeDasharray: 1, strokeDashoffset: 1, animationDelay: "160ms" }}
          />

          {/* windows */}
          <rect x="234" y="196" width="52" height="64" fill="none" stroke="#333a49" strokeWidth="1.2" />
          <line x1="260" y1="196" x2="260" y2="260" stroke="#333a49" strokeWidth="1" />
          <rect x="316" y="196" width="52" height="64" fill="none" stroke="#333a49" strokeWidth="1.2" />
          <line x1="342" y1="196" x2="342" y2="260" stroke="#333a49" strokeWidth="1" />

          {/* door */}
          <rect x="404" y="228" width="46" height="96" fill="none" stroke="#333a49" strokeWidth="1.2" />
          <circle cx="440" cy="278" r="1.6" fill="#333a49" />

          {/* second-floor windows */}
          <rect x="234" y="150" width="0" height="0" />
          <rect x="480" y="196" width="106" height="46" fill="none" stroke="#333a49" strokeWidth="1.2" />
          <line x1="533" y1="196" x2="533" y2="242" stroke="#333a49" strokeWidth="1" />

          {/* AC condenser unit, exterior */}
          <rect x="622" y="320" width="52" height="30" fill="#eaeee0" stroke="#4b5a3f" strokeWidth="1.2" />
          <line x1="628" y1="326" x2="668" y2="326" stroke="#4b5a3f" strokeWidth="0.8" />
          <line x1="628" y1="332" x2="668" y2="332" stroke="#4b5a3f" strokeWidth="0.8" />
          <line x1="628" y1="338" x2="668" y2="338" stroke="#4b5a3f" strokeWidth="0.8" />

          {/* foundation / floor-plan hint lines */}
          <line x1="200" y1="372" x2="200" y2="386" stroke="#b4bac6" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="620" y1="372" x2="620" y2="386" stroke="#b4bac6" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="200" y1="386" x2="620" y2="386" stroke="#b4bac6" strokeWidth="1" strokeDasharray="2 3" />

          {/* inspection pins */}
          {healthMapAreas.map((area) => {
            const cx = (area.pin.x / 100) * VIEW_W;
            const cy = (area.pin.y / 100) * VIEW_H * 0.86 + 6;
            return (
              <g key={area.id}>
                <circle cx={cx} cy={cy} r="9" fill="#faf8f4" stroke="#4b5a3f" strokeWidth="1.2" />
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="#374330"
                  fontFamily="var(--font-poppins), sans-serif"
                >
                  {area.tag.slice(2)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-500">
        {healthMapAreas.map((area) => (
          <span key={area.id} className="inline-flex items-center gap-1.5">
            <span className="font-mono text-[11px] text-moss-700">{area.tag}</span>
            {area.label}
          </span>
        ))}
      </figcaption>
      <p className="mt-2 text-xs text-ink-400">
        A general property overview, not an inspection or diagnosis.
      </p>
    </figure>
  );
}
