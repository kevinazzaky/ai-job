"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/src/data/jobs";
import ImpactBar from "@/src/components/jobs/ImpactBar";

export default function JobDetail({ job }: { job: Job | undefined }) {
  return (
    <div
      aria-live="polite"
      className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
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
            <p className="text-xs font-black uppercase tracking-[0.15em] text-(--color-violet)]">
              {job.category}
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">{job.title}</h3>
            <p className="mt-3 text-slate-600">{job.description}</p>

            <div className="mt-6">
              <ImpactBar score={job.impactScore} level={job.impactLevel} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-(--color-violet-soft)] p-4">
                <h4 className="mb-2 text-sm font-black text-(--color-violet)]">
                  Tasks AI Can Assist
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {job.aiTasks.map((task) => (
                    <li key={task} className="flex gap-2">
                      <span className="text-(--color-violet)]">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-(--color-accent-soft)] p-4">
                <h4 className="mb-2 text-sm font-black text-(--color-accent)]">
                  Human Strengths
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {job.humanSkills.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="text-(--color-accent)]">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-center text-slate-500">
            Pilih salah satu pekerjaan di atas untuk melihat detail dampak AI-nya.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}