import { ArrowRight } from "lucide-react";
import { jobs } from "@/src/data/jobs";
import { getJobIcon } from "@/lib/icon-map";

const LEVEL_COLOR: Record<string, string> = {
  Low: "bg-emerald-500",
  Medium: "bg-amber-500",
  High: "bg-rose-500",
};

const sortedJobs = [...jobs].sort((a, b) => b.impactScore - a.impactScore);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 text-white dark-pattern md:pb-28"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-accent)]/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            AI & Masa Depan Karier
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bagaimana AI Akan Mengubah Pekerjaanmu?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            AI tidak akan menggantikan semua pekerjaan. Tapi AI akan mengubah
            cara kita bekerja. Jelajahi berbagai profesi, lihat dampak AI-nya,
            dan temukan skill yang perlu kamu perkuat.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:opacity-90"
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
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-accent)]/15 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950 sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Dampak AI di 6 Pekerjaan
              </p>

              <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">
                Cek Skor Dampaknya
              </h2>

              <div className="mt-5 space-y-3.5">
                {sortedJobs.map((job) => {
                  const Icon = getJobIcon(job.icon);

                  return (
                    <div key={job.id} className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-sm font-bold text-slate-900">
                            {job.title}
                          </p>

                          <span className="shrink-0 text-xs font-bold text-slate-500">
                            {job.impactScore}
                          </span>
                        </div>

                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${LEVEL_COLOR[job.impactLevel]}`}
                            style={{ width: `${job.impactScore}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detail CTA */}
              <a
                href="#jobs"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-black text-white transition hover:opacity-90"
              >
                Lihat Detail Lengkap
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
