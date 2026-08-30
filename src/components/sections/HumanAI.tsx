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
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          It&apos;s Not Human vs AI. It&apos;s Human + AI.
        </h2>
        <p className="mt-4 text-gray-600">
          Masa depan kerja yang paling produktif adalah kolaborasi, bukan
          kompetisi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
            <Bot size={20} />
          </div>
          <h3 className="mb-3 font-semibold text-gray-900">
            What AI Does Best
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {AI_POINTS.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-gray-400">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-900 bg-gray-900 p-6 text-white">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <User size={20} />
          </div>
          <h3 className="mb-3 font-semibold">What Humans Do Best</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {HUMAN_POINTS.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-gray-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
