const LEVEL_COLOR: Record<string, string> = {
  Low: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]",
  Medium: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.7)]",
  High: "bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.7)]",
};

export default function ImpactBar({
  score,
  level,
  size = "sm",
}: {
  score: number;
  level: "Low" | "Medium" | "High";
  size?: "sm" | "md";
}) {
  const filledTicks = Math.round(score / 10);
  const tickHeight = size === "md" ? "h-3.5" : "h-2.5";

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={`w-1 rounded-sm ${tickHeight} ${
            index < filledTicks ? LEVEL_COLOR[level] : "bg-white/10"
          }`}
        />
      ))}
      <span className="ml-2 text-xs font-medium tabular-nums text-slate-400">
        {score}
      </span>
    </div>
  );
}
