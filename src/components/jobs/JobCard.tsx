"use client";

import clsx from "clsx";
import { getJobIcon } from "@/lib/icon-map";
import type { Job } from "@/src/data/jobs";

const LEVEL_LABEL: Record<string, string> = {
  Low: "Rendah",
  Medium: "Sedang",
  High: "Tinggi",
};

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
        "card-hover flex w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left",
        isActive
          ? "border-transparent bg-[var(--color-primary)] text-white"
          : "border-slate-200 bg-white text-slate-950",
      )}
    >
      <div
        className={clsx(
          "inline-flex h-10 w-10 items-center justify-center rounded-xl",
          isActive
            ? "bg-[var(--color-accent)] text-white"
            : "bg-slate-100 text-slate-950",
        )}
      >
        <Icon size={20} />
      </div>

      <div>
        <h3 className="font-bold">{job.title}</h3>
        <p
          className={clsx(
            "text-xs",
            isActive ? "text-white/60" : "text-slate-500",
          )}
        >
          {job.category}
        </p>
      </div>

      <span
        className={clsx(
          "rounded-full px-2.5 py-1 text-xs font-bold",
          isActive ? "bg-white/15 text-white" : LEVEL_BADGE[job.impactLevel],
        )}
      >
        Dampak {LEVEL_LABEL[job.impactLevel]}
      </span>
    </button>
  );
}
