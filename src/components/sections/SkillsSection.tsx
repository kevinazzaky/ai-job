"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  MessagesSquare,
  Palette,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const SKILLS = [
  {
    title: "Berpikir kritis & strategis",
    description:
      "Kemampuan menilai konteks, trade-off, dan dampak keputusan — sesuatu yang AI belum bisa lakukan sendiri.",
    icon: Brain,
  },
  {
    title: "Berkolaborasi dengan AI (prompting)",
    description:
      "Memahami cara memberi instruksi yang jelas ke AI dan mengevaluasi hasilnya secara kritis.",
    icon: Sparkles,
  },
  {
    title: "Literasi data",
    description:
      "Membaca, menafsirkan, dan mengambil keputusan berdasarkan data — bukan sekadar menjalankan tools.",
    icon: BarChart3,
  },
  {
    title: "Penilaian kreatif & estetika",
    description:
      "Menilai mana hasil kreatif yang benar-benar relevan dengan brand, audiens, dan konteks.",
    icon: Palette,
  },
  {
    title: "Komunikasi & empati",
    description:
      "Membangun kepercayaan, negosiasi, dan memahami kebutuhan orang lain secara manusiawi.",
    icon: MessagesSquare,
  },
  {
    title: "Adaptabilitas & terus belajar",
    description:
      "Kesediaan terus belajar tools dan cara kerja baru seiring teknologi berubah cepat.",
    icon: RefreshCw,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-white/10 py-24">
      <div className="container mx-auto px-4">
        <span className="eyebrow">Bekal Masa Depan</span>
        <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-tight text-white">
          Skill yang perlu kamu kuasai
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className="glass-panel rounded-2xl p-6 transition-colors hover:border-blue-400/30"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <skill.icon size={18} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
