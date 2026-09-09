import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-28">
      <div className="glow-spot left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container relative mx-auto max-w-2xl px-4 text-center">
        <span className="eyebrow">Sebelum Kamu Pergi</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Pekerjaanmu akan berubah. Pastikan kamu berubah bersamanya.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
          Mulai dengan memahami dampak AI di bidangmu, lalu perkuat skill yang
          paling sulit digantikan.
        </p>
        <a href="#jobs" className="btn-primary mt-8">
          Jelajahi kariermu
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
