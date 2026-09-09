"use client";

import { motion } from "framer-motion";
import { Bot, UserRound } from "lucide-react";

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
    <section id="human-ai" className="relative border-t border-white/10 py-24">
      <div className="container mx-auto px-4">
        <span className="eyebrow">Kolaborasi</span>
        <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-tight text-white">
          Bukan manusia vs AI. Tapi manusia + AI.
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-400">
          Masa depan kerja yang paling produktif adalah kolaborasi, bukan
          kompetisi.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="glass-panel rounded-2xl p-7"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <Bot size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Yang paling bisa dilakukan AI
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {AI_POINTS.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-blue-400">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-panel rounded-2xl p-7"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <UserRound size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Yang paling bisa dilakukan manusia
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {HUMAN_POINTS.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-emerald-400">–</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
