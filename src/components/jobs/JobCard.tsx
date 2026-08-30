"use client";

import clsx from "clsx";
import { getJobIcon } from "@/lib/icon-map";
import type { Job } from "@/src/data/jobs";

const LEVEL_BADGE: Record<string, string> = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-rose-100 text-rose-700",
};

export default function JobCard({
  job,
  isActive,
  onSelect,
}: {
  job: Job;
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = getJobIcon(job.icon);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={clsx(
        "flex w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-md",
        isActive
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 bg-white text-gray-900",
      )}
    >
      <div
        className={clsx(
          "inline-flex h-10 w-10 items-center justify-center rounded-xl",
          isActive ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900",
        )}
      >
        <Icon size={20} />
      </div>

      <div>
        <h3 className="font-semibold">{job.title}</h3>
        <p
          className={clsx(
            "text-xs",
            isActive ? "text-gray-300" : "text-gray-500",
          )}
        >
          {job.category}
        </p>
      </div>

      <span
        className={clsx(
          "rounded-full px-2 py-1 text-xs font-medium",
          isActive ? "bg-white/15 text-white" : LEVEL_BADGE[job.impactLevel],
        )}
      >
        {job.impactLevel} Impact
      </span>
    </button>
  );
}
