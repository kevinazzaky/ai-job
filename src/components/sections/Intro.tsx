const CONCEPTS = [
  {
    title: "AI mengubah tugas, bukan menghapus semua pekerjaan",
    description:
      "AI paling efektif mengambil alih tugas yang repetitif dan berbasis pola. Sebagian besar pekerjaan akan berubah bentuk, bukan hilang sepenuhnya.",
  },
  {
    title: "Sebagian skill akan semakin bernilai",
    description:
      "Kemampuan berpikir kritis, berkolaborasi dengan AI, dan mengambil keputusan berbasis konteks akan makin dicari di berbagai industri.",
  },
  {
    title: "Manusia tetap memegang kendali",
    description:
      "Empati, penilaian etis, kreativitas, dan hubungan antarmanusia adalah area yang paling sulit digantikan AI dalam waktu dekat.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="border-t border-slate-200 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight text-slate-950">
            AI mengubah cara kerja, bukan cuma pekerjaan
          </h2>

          <div>
            {CONCEPTS.map((concept, index) => (
              <div
                key={concept.title}
                className="grid gap-2 border-b border-slate-200 py-6 first:pt-0 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="font-display text-2xl text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {concept.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {concept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
