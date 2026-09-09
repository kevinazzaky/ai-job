"use client";

import { useMemo, useState } from "react";
import { jobs, categories } from "@/src/data/jobs";
import FilterBar from "@/src/components/jobs/FilterBar";
import JobCard from "@/src/components/jobs/JobCard";
import JobDetail from "@/src/components/jobs/JobDetail";

export default function JobExplorer() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id);

  const filteredJobs = useMemo(() => {
    if (activeCategory === "Semua") return jobs;
    return jobs.filter((job) => job.category === activeCategory);
  }, [activeCategory]);

  const selectedJob =
    filteredJobs.find((job) => job.id === selectedJobId) ?? filteredJobs[0];

  function handleFilterChange(category: string) {
    setActiveCategory(category);
    const nextJobs =
      category === "Semua"
        ? jobs
        : jobs.filter((job) => job.category === category);
    setSelectedJobId(nextJobs[0]?.id);
  }

  return (
    <section id="jobs" className="relative border-t border-white/10 py-24">
      <div className="glow-spot -left-40 top-1/3 size-96 opacity-40" />

      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-xl">
          <span className="eyebrow">Jelajahi</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
            Jelajahi dampak AI di berbagai pekerjaan
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Pilih kategori untuk memfilter, lalu klik salah satu pekerjaan
            untuk melihat detail dampaknya.
          </p>
        </div>

        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleFilterChange}
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
          <div className="grid gap-3">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isActive={job.id === selectedJob?.id}
                onSelect={() => setSelectedJobId(job.id)}
              />
            ))}
          </div>

          <JobDetail job={selectedJob} />
        </div>
      </div>
    </section>
  );
}
