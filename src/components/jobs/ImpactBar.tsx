"use client";

import { motion } from "framer-motion";

const LEVEL_COLORS: Record<string, string> = {
  Low: "bg-emerald-500",
  Medium: "bg-amber-500",
  High: "bg-rose-500",
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
      <div className="mb-1 flex items-center justify-between text-sm font-medium text-gray-700">
        <span>AI Impact Score</span>
        <span>{score}/100</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${LEVEL_COLORS[level]}`}
        />
      </div>
    </div>
  );
}
