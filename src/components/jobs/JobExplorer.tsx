"use client";

import { useMemo, useState } from "react";
import { jobs, categories } from "@/src/data/jobs";
import JobCard from "@/src/components/jobs/JobCard";
import JobDetail from "@/src/components/jobs/JobDetail";
import FilterBar from "@/src/components/jobs/FilterBar";

export default function JobExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id);

  const filteredJobs = useMemo(() => {
    if (activeCategory === "All") return jobs;
    return jobs.filter((job) => job.category === activeCategory);
  }, [activeCategory]);

  const selectedJob =
    filteredJobs.find((job) => job.id === selectedJobId) ?? filteredJobs[0];

  function handleFilterChange(category: string) {
    setActiveCategory(category);
    const nextJobs =
      category === "All"
        ? jobs
        : jobs.filter((job) => job.category === category);
    setSelectedJobId(nextJobs[0]?.id);
  }

  return (
    <section id="jobs" className="container mx-auto px-4 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Explore How AI Impacts Different Jobs
        </h2>
        <p className="mt-4 text-gray-600">
          Pilih kategori untuk memfilter, lalu klik salah satu pekerjaan untuk
          melihat detail dampaknya.
        </p>
      </div>

      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onChange={handleFilterChange}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="grid gap-4 sm:grid-cols-2">
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
    </section>
  );
}
