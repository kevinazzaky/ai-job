const AI_POINTS = [
  "Memproses data dalam jumlah besar dengan cepat",
  "Mengenali pola berulang dan otomatisasi tugas repetitif",
  "Menghasilkan draf awal (teks, kode, desain) dalam hitungan detik",
];

const HUMAN_POINTS = [
  "Memahami konteks, nuansa, dan emosi manusia",
  "Mengambil keputusan etis dan bertanggung jawab",
  "Membangun hubungan, kepercayaan, dan kepemimpinan",
];

export default function HumanAI() {
  return (
    <section id="human-ai" className="border-t border-slate-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display max-w-lg text-3xl font-medium text-slate-950">
          Bukan manusia vs AI. Tapi manusia + AI.
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Masa depan kerja yang paling produktif adalah kolaborasi, bukan
          kompetisi.
        </p>

        <div className="mt-10 grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="pb-8 sm:pb-0 sm:pr-10">
            <h3 className="text-sm font-semibold text-slate-950">
              Yang paling bisa dilakukan AI
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {AI_POINTS.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-slate-300">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8 sm:pl-10 sm:pt-0">
            <h3 className="text-sm font-semibold text-slate-950">
              Yang paling bisa dilakukan manusia
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {HUMAN_POINTS.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-slate-300">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
