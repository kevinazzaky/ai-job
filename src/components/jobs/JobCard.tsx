"use client";

import clsx from "clsx";
import { getJobIcon } from "@/lib/icon-map";
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
  const Icon = getJobIcon(job.icon);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={clsx(
        "flex w-full flex-col gap-3 border-l-2 px-4 py-4 text-left transition-colors",
        isActive
          ? "border-[var(--color-accent)] bg-slate-50"
          : "border-transparent hover:bg-slate-50",
      )}
    >
      <div className="flex items-center gap-2.5">
        <Icon size={16} className="shrink-0 text-slate-400" />
        <h3 className="text-sm font-semibold text-slate-950">{job.title}</h3>
      </div>

      <p className="text-xs text-slate-500">{job.category}</p>

      <ImpactBar score={job.impactScore} level={job.impactLevel} size="sm" />
    </button>
  );
}
