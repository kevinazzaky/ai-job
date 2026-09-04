"use client";

import { useEffect, useState } from "react";
import { Fraunces } from "next/font/google";
import { jobs } from "@/src/data/jobs";
import { getJobIcon } from "@/lib/icon-map";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const LEVEL_COLOR: Record<string, string> = {
  Low: "bg-emerald-500",
  Medium: "bg-amber-500",
  High: "bg-rose-500",
};

const ROTATE_INTERVAL_MS = 2500;
const ROW_HEIGHT = 56;

const sortedJobs = [...jobs].sort((a, b) => b.impactScore - a.impactScore);

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sortedJobs.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="max-w-xl">
          <p className="mb-5 text-sm text-slate-500">
            Indeks dampak AI dari 6 profesi
          </p>

          <h1
            className={`${fraunces.className} text-4xl font-medium leading-[1.1] tracking-tight text-slate-950 sm:text-5xl`}
          >
            Bagaimana AI akan mengubah pekerjaanmu?
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
            AI tidak akan menggantikan semua pekerjaan. Tapi ia akan mengubah
            cara kita bekerja. Lihat daftar di samping, lalu jelajahi profesi
            yang paling relevan denganmu.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#jobs"
              className="rounded-md bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Jelajahi pekerjaan
            </a>

            <a
              href="#intro"
              className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-600"
            >
              Pelajari dulu
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-slate-300 pb-2 text-xs text-slate-500">
            <span>Profesi</span>
            <span>Skor</span>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 w-0.5 bg-[var(--color-accent)] transition-transform duration-500 ease-out"
              style={{
                height: ROW_HEIGHT - 16,
                transform: `translateY(${activeIndex * ROW_HEIGHT + 8}px)`,
              }}
            />

            {sortedJobs.map((job, index) => {
              const Icon = getJobIcon(job.icon);
              const filledTicks = Math.round(job.impactScore / 10);
              const isActive = index === activeIndex;

              return (
                <div
                  key={job.id}
                  className="flex items-center gap-4 border-b border-slate-200 pl-5"
                  style={{ height: ROW_HEIGHT }}
                >
                  <span className="w-5 shrink-0 text-xs tabular-nums text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={16}
                    className={
                      isActive
                        ? "shrink-0 text-slate-950"
                        : "shrink-0 text-slate-400"
                    }
                  />

                  <span
                    className={`flex-1 truncate text-sm ${
                      isActive
                        ? "font-semibold text-slate-950"
                        : "text-slate-600"
                    }`}
                  >
                    {job.title}
                  </span>

                  <span className="hidden items-center gap-0.5 sm:flex">
                    {Array.from({ length: 10 }).map((_, tickIndex) => (
                      <span
                        key={tickIndex}
                        className={`h-3 w-1 rounded-sm ${
                          tickIndex < filledTicks
                            ? LEVEL_COLOR[job.impactLevel]
                            : "bg-slate-100"
                        }`}
                      />
                    ))}
                  </span>

                  <span className="w-8 shrink-0 text-right text-sm tabular-nums text-slate-500">
                    {job.impactScore}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}