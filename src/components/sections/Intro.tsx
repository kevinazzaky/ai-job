import { Sparkles, TrendingUp, HeartHandshake } from "lucide-react";

const CONCEPTS = [
  {
    icon: Sparkles,
    title: "AI Mengubah Tugas, Bukan Menghapus Semua Pekerjaan",
    description:
      "AI paling efektif mengambil alih tugas yang repetitif dan berbasis pola. Sebagian besar pekerjaan akan berubah bentuk, bukan hilang sepenuhnya.",
  },
  {
    icon: TrendingUp,
    title: "Sebagian Skill Akan Semakin Bernilai",
    description:
      "Kemampuan berpikir kritis, berkolaborasi dengan AI, dan mengambil keputusan berbasis konteks akan makin dicari di berbagai industri.",
  },
  {
    icon: HeartHandshake,
    title: "Manusia Tetap Memegang Kendali",
    description:
      "Empati, penilaian etis, kreativitas, dan hubungan antarmanusia adalah area yang paling sulit digantikan AI dalam waktu dekat.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="container mx-auto px-4 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          AI Is Changing Work Not Just Jobs
        </h2>
        <p className="mt-4 text-gray-600">
          Sebelum melihat dampaknya ke pekerjaan spesifik, penting untuk
          memahami tiga hal dasar tentang bagaimana AI benar-benar mengubah cara
          kita bekerja.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {CONCEPTS.map((concept) => {
          const Icon = concept.icon;
          return (
            <div
              key={concept.title}
              className="rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {concept.title}
              </h3>
              <p className="text-sm text-gray-600">{concept.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
