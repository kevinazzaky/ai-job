"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/src/data/jobs";
import ImpactBar from "@/src/components/jobs/ImpactBar";

export default function JobDetail({ job }: { job: Job | undefined }) {
  return (
    <div
      aria-live="polite"
      className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
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
            <p className="text-sm font-medium text-gray-500">{job.category}</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {job.title}
            </h3>
            <p className="mt-3 text-gray-600">{job.description}</p>

            <div className="mt-6">
              <ImpactBar score={job.impactScore} level={job.impactLevel} />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                  Tasks AI Can Assist
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {job.aiTasks.map((task) => (
                    <li key={task} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                  Human Strengths
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {job.humanSkills.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">
            Pilih salah satu pekerjaan di atas untuk melihat detail dampak
            AI-nya.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}
