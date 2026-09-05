"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/src/data/jobs";
import ImpactBar from "@/src/components/jobs/ImpactBar";

const LEVEL_LABEL: Record<string, string> = {
  Low: "Rendah",
  Medium: "Sedang",
  High: "Tinggi",
};

export default function JobDetail({ job }: { job: Job | undefined }) {
  return (
    <div aria-live="polite" className="border-l border-slate-200 pl-8">
      <AnimatePresence mode="wait">
        {job ? (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs text-slate-500">{job.category}</p>
            <h3 className="font-display mt-1 text-2xl font-medium text-slate-950">
              {job.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {job.description}
            </p>

            <div className="mt-5 border-y border-slate-200 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Skor dampak AI</span>
                <span className="font-semibold text-slate-950">
                  {LEVEL_LABEL[job.impactLevel]}
                </span>
              </div>
              <div className="mt-2.5">
                <ImpactBar
                  score={job.impactScore}
                  level={job.impactLevel}
                  size="md"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-medium text-slate-400">
                  Dibantu AI
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {job.aiTasks.map((task) => (
                    <li key={task} className="flex gap-2">
                      <span className="text-slate-300">–</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-slate-400">
                  Kekuatan manusia
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {job.humanSkills.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="text-slate-300">–</span>
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
