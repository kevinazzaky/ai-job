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
    title: "Critical & Strategic Thinking",
    description:
      "Kemampuan menilai konteks, trade-off, dan dampak keputusan — sesuatu yang AI belum bisa lakukan sendiri.",
  },
  {
    icon: MessagesSquare,
    title: "Berkolaborasi dengan AI (Prompting)",
    description:
      "Memahami cara memberi instruksi yang jelas ke AI dan mengevaluasi hasilnya secara kritis.",
  },
  {
    icon: LineChart,
    title: "Data Literacy",
    description:
      "Membaca, menafsirkan, dan mengambil keputusan berdasarkan data — bukan sekadar menjalankan tools.",
  },
  {
    icon: Palette,
    title: "Creative & Aesthetic Judgment",
    description:
      "Menilai mana hasil kreatif yang benar-benar relevan dengan brand, audiens, dan konteks.",
  },
  {
    icon: HeartHandshake,
    title: "Communication & Empathy",
    description:
      "Membangun kepercayaan, negosiasi, dan memahami kebutuhan orang lain secara manusiawi.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability & Continuous Learning",
    description:
      "Kesediaan terus belajar tools dan cara kerja baru seiring teknologi berubah cepat.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Skills to Build Next
          </h2>
          <p className="mt-4 text-gray-600">
            Skill-skill ini relevan di hampir semua profesi yang terdampak AI,
            apa pun bidangmu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}