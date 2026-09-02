import {
  Brain,
  MessagesSquare,
  LineChart,
  Palette,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";

const SKILLS = [
  {
    icon: Brain,
    tint: "blue",
    title: "Berpikir Kritis & Strategis",
    description:
      "Kemampuan menilai konteks, trade-off, dan dampak keputusan — sesuatu yang AI belum bisa lakukan sendiri.",
  },
  {
    icon: MessagesSquare,
    tint: "accent",
    title: "Berkolaborasi dengan AI (Prompting)",
    description:
      "Memahami cara memberi instruksi yang jelas ke AI dan mengevaluasi hasilnya secara kritis.",
  },
  {
    icon: LineChart,
    tint: "blue",
    title: "Literasi Data",
    description:
      "Membaca, menafsirkan, dan mengambil keputusan berdasarkan data — bukan sekadar menjalankan tools.",
  },
  {
    icon: Palette,
    tint: "accent",
    title: "Penilaian Kreatif & Estetika",
    description:
      "Menilai mana hasil kreatif yang benar-benar relevan dengan brand, audiens, dan konteks.",
  },
  {
    icon: HeartHandshake,
    tint: "blue",
    title: "Komunikasi & Empati",
    description:
      "Membangun kepercayaan, negosiasi, dan memahami kebutuhan orang lain secara manusiawi.",
  },
  {
    icon: RefreshCw,
    tint: "accent",
    title: "Adaptabilitas & Terus Belajar",
    description:
      "Kesediaan terus belajar tools dan cara kerja baru seiring teknologi berubah cepat.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-pattern py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Skill yang Perlu Kamu Kuasai
          </h2>
          <p className="mt-4 text-slate-600">
            Skill-skill ini relevan di hampir semua profesi yang terdampak AI,
            apa pun bidangmu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            const isBlue = skill.tint === "blue";
            return (
              <div
                key={skill.title}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    isBlue
                      ? "bg-[var(--color-blue-soft)] text-[var(--color-blue)]"
                      : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-bold text-slate-950">{skill.title}</h3>
                <p className="text-sm text-slate-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
