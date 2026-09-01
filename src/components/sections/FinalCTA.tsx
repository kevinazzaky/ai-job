import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 text-white dark-pattern">
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-black md:text-4xl">
          Pekerjaanmu Akan Berubah. Pastikan Kamu Berubah Bersamanya.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Mulai dengan memahami dampak AI di bidangmu, lalu perkuat skill yang
          paling sulit digantikan.
        </p>
        <a
          href="#jobs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Jelajahi Kariermu
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
