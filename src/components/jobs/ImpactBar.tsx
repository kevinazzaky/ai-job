const LEVEL_COLOR: Record<string, string> = {
  Low: "bg-emerald-500",
  Medium: "bg-amber-500",
  High: "bg-rose-500",
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
            index < filledTicks ? LEVEL_COLOR[level] : "bg-slate-100"
          }`}
        />
      ))}
      <span className="ml-2 text-xs font-medium tabular-nums text-slate-500">
        {score}
      </span>
    </div>
  );
}
