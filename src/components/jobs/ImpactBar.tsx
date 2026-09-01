"use client";

import { motion } from "framer-motion";

const LEVEL_GRADIENT: Record<string, string> = {
  Low: "from-emerald-400 to-emerald-500",
  Medium: "from-amber-400 to-amber-500",
  High: "from-rose-400 to-rose-500",
};

export default function ImpactBar({
  score,
  level,
}: {
  score: number;
  level: "Low" | "Medium" | "High";
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-slate-700">
        <span>AI Impact Score</span>
        <span>{score}/100</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${LEVEL_GRADIENT[level]}`}
        />
      </div>
    </div>
  );
}