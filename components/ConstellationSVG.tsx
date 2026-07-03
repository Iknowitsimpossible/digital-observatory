/**
 * Inline SVG constellation icons — one per observatory domain.
 *
 * Earth:  Sextant / compass rose (measurement, precision)
 * Sky:    Big Dipper (navigation, tradition)
 * Human:  Stylized eye (observation, knowledge)
 */

type Props = {
  variant: "earth" | "sky" | "human";
  className?: string;
};

export default function ConstellationSVG({ variant, className }: Props) {
  const accent = {
    earth: "var(--earth-accent)",
    sky: "var(--sky-accent)",
    human: "var(--human-accent)",
  }[variant];

  const stroke = accent;
  const fill = "rgba(255,255,255,0.15)";

  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "auto", maxWidth: 120 }}
    >
      {variant === "earth" && (
        <>
          {/* Compass / Sextant — 6 radial points */}
          <circle cx="60" cy="50" r="28" stroke={stroke} strokeWidth="0.6" strokeOpacity="0.3" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 60 + Math.cos(rad) * 28;
            const y2 = 50 + Math.sin(rad) * 28;
            return (
              <line
                key={i}
                x1="60" y1="50" x2={x2} y2={y2}
                stroke={stroke} strokeWidth="0.5" strokeOpacity="0.25"
              />
            );
          })}
          {/* Star points at tips */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 60 + Math.cos(rad) * 28;
            const cy = 50 + Math.sin(rad) * 28;
            return (
              <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 1.8 : 1.0}
                fill={stroke} opacity={i % 2 === 0 ? 0.9 : 0.5} />
            );
          })}
          {/* Center */}
          <circle cx="60" cy="50" r="1.5" fill={stroke} opacity="0.7" />
        </>
      )}

      {variant === "sky" && (
        <>
          {/* Big Dipper — 7 stars in the familiar ladle shape */}
          {[
            [35, 20],   // Dubhe
            [52, 28],   // Merak
            [58, 42],   // Phecda
            [62, 56],   // Megrez
            [48, 56],   // Alioth
            [35, 70],   // Mizar
            [24, 82],   // Alkaid
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i < 2 ? 2.0 : 1.4}
              fill={stroke} opacity={i < 2 ? 0.95 : 0.65} />
          ))}
          {/* Connecting lines — the ladle */}
          <polyline points="35,20 52,28 58,42 62,56 48,56 35,70 24,82"
            stroke={stroke} strokeWidth="0.7" strokeOpacity="0.4" fill="none" />
          {/* Handle line */}
          <line x1="62" y1="56" x2="48" y2="56"
            stroke={stroke} strokeWidth="0.7" strokeOpacity="0.4" />
        </>
      )}

      {variant === "human" && (
        <>
          {/* Stylized eye — observation & knowledge */}
          {/* Upper lid */}
          <path d="M25 50 Q60 20 95 50"
            stroke={stroke} strokeWidth="1" strokeOpacity="0.6" fill="none" />
          {/* Lower lid */}
          <path d="M25 50 Q60 80 95 50"
            stroke={stroke} strokeWidth="1" strokeOpacity="0.35" fill="none" />
          {/* Iris */}
          <circle cx="60" cy="50" r="12"
            stroke={stroke} strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
          {/* Pupil */}
          <circle cx="60" cy="50" r="4" fill={stroke} opacity="0.7" />
          {/* Light reflection */}
          <circle cx="57" cy="47" r="1.5" fill="white" opacity="0.5" />
          {/* Eyelashes — 3 lines radiating up */}
          {[40, 60, 80].map((x, i) => (
            <line key={i} x1={x} y1={i === 0 ? 28 : i === 2 ? 28 : 25}
              x2={x} y2={i === 0 ? 22 : i === 2 ? 22 : 19}
              stroke={stroke} strokeWidth="0.5" strokeOpacity="0.3" />
          ))}
        </>
      )}
    </svg>
  );
}
