import { Bot, User } from "lucide-react";

const AI_POINTS = [
  "Memproses data dalam jumlah besar dengan cepat",
  "Mengenali pola berulang dan otomatisasi tugas repetitif",
  "Menghasilkan draft awal (teks, kode, desain) dalam hitungan detik",
];

const HUMAN_POINTS = [
  "Memahami konteks, nuansa, dan emosi manusia",
  "Mengambil keputusan etis dan bertanggung jawab",
  "Membangun hubungan, kepercayaan, dan kepemimpinan",
];

export default function HumanAI() {
  return (
    <section id="human-ai" className="container mx-auto px-4 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-violet)]">
          Kolaborasi, Bukan Kompetisi
        </p>
        <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
          It&apos;s Not Human vs AI. It&apos;s Human + AI.
        </h2>
        <p className="mt-4 text-slate-600">
          Masa depan kerja yang paling produktif adalah kolaborasi, bukan
          kompetisi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-[var(--color-violet-soft)] p-6">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-violet)] text-white">
            <Bot size={20} />
          </div>
          <h3 className="mb-3 font-black text-slate-950">What AI Does Best</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {AI_POINTS.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-[var(--color-violet)]">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[var(--color-accent-soft)] p-6">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white">
            <User size={20} />
          </div>
          <h3 className="mb-3 font-black text-slate-950">
            What Humans Do Best
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {HUMAN_POINTS.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-[var(--color-accent)]">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
