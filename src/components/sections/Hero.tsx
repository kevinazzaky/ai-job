import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 text-white dark-pattern md:pb-28"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Hero Content */}
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-accent)]/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            AI & Masa Depan Karier
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            How Will AI Change Your Job?
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            AI won&apos;t replace every job. But it will change how we work.
            Jelajahi berbagai profesi, lihat dampak AI-nya, dan temukan skill
            yang perlu kamu perkuat.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Explore Jobs
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
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-violet)]/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-7 text-slate-950">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-violet)] text-white">
                <Code2 size={22} />
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-[var(--color-violet)]">
                Contoh Dampak AI
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                Software Developer
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                AI mempercepat proses coding dan testing, tapi keputusan
                arsitektur tetap di tangan developer.
              </p>

              {/* Impact Score */}
              <div className="mt-6">
                <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>AI Impact Score</span>
                  <span>85/100</span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-rose-400 to-rose-500" />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[var(--color-violet-soft)] p-4">
                  <p className="text-lg font-black text-[var(--color-violet)]">
                    6
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Profesi siap dijelajahi
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--color-accent-soft)] p-4">
                  <p className="text-lg font-black text-[var(--color-accent)]">
                    5
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Kategori industri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
