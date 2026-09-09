"use client";

import { motion } from "framer-motion";

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
    <section id="intro" className="relative border-t border-white/10 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <div>
            <span className="eyebrow">Konsep Dasar</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white">
              AI mengubah cara kerja, bukan cuma pekerjaan
            </h2>
          </div>

          <div>
            {CONCEPTS.map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid gap-2 border-b border-white/10 py-7 first:pt-0 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-semibold text-transparent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {concept.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
