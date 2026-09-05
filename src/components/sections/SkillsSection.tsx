const SKILLS = [
  {
    title: "Berpikir kritis & strategis",
    description:
      "Kemampuan menilai konteks, trade-off, dan dampak keputusan — sesuatu yang AI belum bisa lakukan sendiri.",
  },
  {
    title: "Berkolaborasi dengan AI (prompting)",
    description:
      "Memahami cara memberi instruksi yang jelas ke AI dan mengevaluasi hasilnya secara kritis.",
  },
  {
    title: "Literasi data",
    description:
      "Membaca, menafsirkan, dan mengambil keputusan berdasarkan data — bukan sekadar menjalankan tools.",
  },
  {
    title: "Penilaian kreatif & estetika",
    description:
      "Menilai mana hasil kreatif yang benar-benar relevan dengan brand, audiens, dan konteks.",
  },
  {
    title: "Komunikasi & empati",
    description:
      "Membangun kepercayaan, negosiasi, dan memahami kebutuhan orang lain secara manusiawi.",
  },
  {
    title: "Adaptabilitas & terus belajar",
    description:
      "Kesediaan terus belajar tools dan cara kerja baru seiring teknologi berubah cepat.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display max-w-md text-3xl font-medium text-slate-950">
          Skill yang perlu kamu kuasai
        </h2>

        <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.title}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-200 py-6"
            >
              <span className="font-display text-xl text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">
                  {skill.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
