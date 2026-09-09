"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { jobs } from "@/src/data/jobs";
import { JobIcon } from "@/lib/icon-map";
import ImpactBar from "@/src/components/jobs/ImpactBar";

const ROTATE_INTERVAL_MS = 2500;
const ROW_HEIGHT = 52;

const sortedJobs = [...jobs].sort((a, b) => b.impactScore - a.impactScore);

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sortedJobs.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="glow-hero" />

      <div className="container mx-auto grid gap-16 px-4 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="eyebrow">
            <Sparkles size={12} />
            Pahami Dampak AI ke Kariermu
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Bagaimana AI akan mengubah{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              pekerjaanmu?
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
            AI tidak akan menggantikan semua pekerjaan. Tapi ia akan mengubah
            cara kita bekerja. Lihat daftar di samping, lalu jelajahi profesi
            yang paling relevan denganmu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#jobs" className="btn-primary">
              Jelajahi Pekerjaan
              <ArrowRight size={15} />
            </a>

            <a href="#intro" className="btn-secondary">
              Pelajari dulu
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6 text-sm text-slate-500">
            <div>
              <p className="text-xl font-semibold text-white">
                {jobs.length}+
              </p>
              <p>Profesi dianalisis</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">6</p>
              <p>Kategori industri</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">2026</p>
              <p>Data diperbarui</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="glass-panel relative rounded-2xl p-3 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.45)] sm:p-4"
        >
          <div className="flex items-center gap-1.5 px-2 pb-3">
            <span className="size-2.5 rounded-full bg-rose-400/70" />
            <span className="size-2.5 rounded-full bg-amber-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-slate-500">
              Peringkat Dampak AI
            </span>
          </div>

          <div className="rounded-xl border border-white/5 bg-black/20 p-3 sm:p-4">
            <div className="flex items-center justify-between px-2 pb-2 text-xs text-slate-500">
              <span>Profesi</span>
              <span>Skor</span>
            </div>

            <div className="relative">
              <div
                className="absolute left-0 w-0.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] transition-transform duration-500 ease-out"
                style={{
                  height: ROW_HEIGHT - 16,
                  transform: `translateY(${activeIndex * ROW_HEIGHT + 8}px)`,
                }}
              />

              {sortedJobs.map((job, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={job.id}
                    className={`flex items-center gap-3 rounded-lg pl-4 pr-2 transition-colors ${
                      isActive ? "bg-blue-500/10" : ""
                    }`}
                    style={{ height: ROW_HEIGHT }}
                  >
                    <span className="w-5 shrink-0 text-xs tabular-nums text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <JobIcon
                      name={job.icon}
                      size={16}
                      className={
                        isActive
                          ? "shrink-0 text-blue-300"
                          : "shrink-0 text-slate-500"
                      }
                    />

                    <span
                      className={`flex-1 truncate text-sm ${
                        isActive
                          ? "font-semibold text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {job.title}
                    </span>

                    <div className="hidden sm:block">
                      <ImpactBar
                        score={job.impactScore}
                        level={job.impactLevel}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
