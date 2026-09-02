"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/src/data/jobs";
import { getJobIcon } from "@/lib/icon-map";

const LEVEL_LABEL: Record<string, string> = {
  Low: "Rendah",
  Medium: "Sedang",
  High: "Tinggi",
};

const LEVEL_GRADIENT: Record<string, string> = {
  Low: "from-emerald-400 to-emerald-500",
  Medium: "from-amber-400 to-amber-500",
  High: "from-rose-400 to-rose-500",
};

const ROTATE_INTERVAL_MS = 2500;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % jobs.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const activeJob = jobs[activeIndex];
  const Icon = getJobIcon(activeJob.icon);

  return (
    <section
      id="home"
      className="dark-pattern relative overflow-hidden pt-32 pb-20 text-white md:pb-28"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/5 to-transparent" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Hero Content */}
        <div>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bagaimana AI Akan Mengubah Pekerjaanmu?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            AI tidak akan menggantikan semua pekerjaan. Tapi AI akan mengubah
            cara kita bekerja. Jelajahi berbagai profesi, lihat dampak AI-nya,
            dan temukan skill yang perlu kamu perkuat.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-7 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Jelajahi Pekerjaan
              <ArrowRight size={16} />
            </a>

            <a
              href="#intro"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Pelajari Dulu
            </a>
          </div>
        </div>

        {/* Impact Card */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-(--color-accent)/15 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-white p-7 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-(--color-accent)">
                Dampak AI Saat Ini
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJob.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-primary) text-white">
                    <Icon size={22} />
                  </div>

                  <h2 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                    {activeJob.title}
                  </h2>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                    {activeJob.category}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activeJob.description}
                  </p>

                  <div className="mt-6">
                    <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>Skor Dampak AI</span>

                      <span>
                        {activeJob.impactScore}/100 ·{" "}
                        {LEVEL_LABEL[activeJob.impactLevel]}
                      </span>
                    </div>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        key={`${activeJob.id}-bar`}
                        initial={{ width: 0 }}
                        animate={{ width: `${activeJob.impactScore}%` }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-linear-to-r ${
                          LEVEL_GRADIENT[activeJob.impactLevel]
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Indicator */}
              <div className="mt-6 flex items-center justify-center gap-1.5">
                {jobs.map((job, index) => (
                  <span
                    key={job.id}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-6 bg-(--color-accent)"
                        : "w-1.5 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
