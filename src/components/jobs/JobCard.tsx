"use client";

import clsx from "clsx";
import { JobIcon } from "@/lib/icon-map";
import type { Job } from "@/src/data/jobs";
import ImpactBar from "@/src/components/jobs/ImpactBar";

export default function JobCard({
  job,
  isActive,
  onSelect,
}: {
  job: Job;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={clsx(
        "flex w-full flex-col gap-3 rounded-2xl border px-4 py-4 text-left transition-all",
        isActive
          ? "glass-panel-active"
          : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]",
      )}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={clsx(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            isActive
              ? "bg-blue-500/20 text-blue-300"
              : "bg-white/5 text-slate-400",
          )}
        >
          <JobIcon name={job.icon} size={15} />
        </span>
        <h3 className="text-sm font-semibold text-white">{job.title}</h3>
      </div>

      <p className="text-xs text-slate-500">{job.category}</p>

      <ImpactBar score={job.impactScore} level={job.impactLevel} size="sm" />
    </button>
  );
}
