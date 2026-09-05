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
    <section id="jobs" className="border-t border-slate-200 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-xl">
          <h2 className="font-display text-3xl font-medium text-slate-950">
            Jelajahi dampak AI di berbagai pekerjaan
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Pilih kategori untuk memfilter, lalu klik salah satu pekerjaan
            untuk melihat detail dampaknya.
          </p>
        </div>

        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleFilterChange}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="divide-y divide-slate-100">
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