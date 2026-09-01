import { Sparkles, TrendingUp, HeartHandshake } from "lucide-react";

const CONCEPTS = [
  {
    icon: Sparkles,
    tint: "blue",
    title: "AI Mengubah Tugas, Bukan Menghapus Semua Pekerjaan",
    description:
      "AI paling efektif mengambil alih tugas yang repetitif dan berbasis pola. Sebagian besar pekerjaan akan berubah bentuk, bukan hilang sepenuhnya.",
  },
  {
    icon: TrendingUp,
    tint: "accent",
    title: "Sebagian Skill Akan Semakin Bernilai",
    description:
      "Kemampuan berpikir kritis, berkolaborasi dengan AI, dan mengambil keputusan berbasis konteks akan makin dicari di berbagai industri.",
  },
  {
    icon: HeartHandshake,
    tint: "blue",
    title: "Manusia Tetap Memegang Kendali",
    description:
      "Empati, penilaian etis, kreativitas, dan hubungan antarmanusia adalah area yang paling sulit digantikan AI dalam waktu dekat.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="section-pattern py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
            Kenapa Ini Penting
          </p>
          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            AI Mengubah Cara Kerja — Bukan Cuma Pekerjaan
          </h2>
          <p className="mt-4 text-slate-600">
            Sebelum melihat dampaknya ke pekerjaan spesifik, penting untuk
            memahami tiga hal dasar tentang bagaimana AI benar-benar mengubah
            cara kita bekerja.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CONCEPTS.map((concept) => {
            const Icon = concept.icon;
            const isBlue = concept.tint === "blue";
            return (
              <div
                key={concept.title}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    isBlue
                      ? "bg-[var(--color-blue-soft)] text-[var(--color-blue)]"
                      : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-950">
                  {concept.title}
                </h3>
                <p className="text-sm text-slate-600">{concept.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
