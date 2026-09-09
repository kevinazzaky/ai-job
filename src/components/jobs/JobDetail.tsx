"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, UserRound } from "lucide-react";
import { JobIcon } from "@/lib/icon-map";
import type { Job } from "@/src/data/jobs";
import ImpactBar from "@/src/components/jobs/ImpactBar";

const LEVEL_LABEL: Record<string, string> = {
  Low: "Rendah",
  Medium: "Sedang",
  High: "Tinggi",
};

export default function JobDetail({ job }: { job: Job | undefined }) {
  return (
    <div
      aria-live="polite"
      className="glass-panel rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24"
    >
      <AnimatePresence mode="wait">
        {job ? (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                <JobIcon name={job.icon} size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500">{job.category}</p>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {job.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {job.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Skor dampak AI</span>
                <span className="font-semibold text-white">
                  {LEVEL_LABEL[job.impactLevel]}
                </span>
              </div>
              <div className="mt-3">
                <ImpactBar
                  score={job.impactScore}
                  level={job.impactLevel}
                  size="md"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <BrainCircuit size={13} className="text-blue-300" />
                  Dibantu AI
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {job.aiTasks.map((task) => (
                    <li key={task} className="flex gap-2">
                      <span className="text-blue-400">–</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <UserRound size={13} className="text-emerald-300" />
                  Kekuatan manusia
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {job.humanSkills.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="text-emerald-400">–</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-sm text-slate-500">
            Pilih salah satu pekerjaan di samping untuk melihat detail dampak
            AI-nya.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}
