const TONES = {
  light: ["#f5f5f7", "#ececee", "#7a7a7a"],
  white: ["#ffffff", "#ececee", "#7a7a7a"],
  dark: ["#2f2f31", "#252527", "#cccccc"],
} as const;

type Props = {
  label: string;
  ratio: string;
  tone?: keyof typeof TONES;
  stripe?: number;
  radius?: string;
  chip?: boolean;
  fontSize?: number;
  className?: string;
};

// Striped image placeholder; swap for a real image with the same ratio.
export default function Placeholder({
  label,
  ratio,
  tone = "light",
  stripe = 12,
  radius = "18px 18px 0 0",
  chip = false,
  fontSize = 13,
  className = "",
}: Props) {
  const [a, b, fg] = TONES[tone];
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        aspectRatio: ratio,
        borderRadius: radius,
        background: `repeating-linear-gradient(135deg,${a} 0 ${stripe}px,${b} ${stripe}px ${stripe * 2}px)`,
      }}
    >
      <span
        className={`font-mono ${chip ? "rounded-lg bg-white px-2.5 py-1.5" : ""}`}
        style={{ fontSize, color: fg, letterSpacing: 0 }}
      >
        {label}
      </span>
    </div>
  );
}
