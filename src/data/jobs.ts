export type Job = {
  id: string;
  title: string;
  category: string;
  icon: string; // nama icon Lucide, dipetakan di JobCard
  impactScore: number; // 0–100
  impactLevel: "Low" | "Medium" | "High";
  aiTasks: string[];
  humanSkills: string[];
  description: string;
};

export const jobs: Job[] = [
  {
    id: "software-developer",
    title: "Pengembang Perangkat Lunak",
    category: "Teknologi",
    icon: "Code2",
    impactScore: 85,
    impactLevel: "High",
    aiTasks: [
      "Menulis dan melengkapi kode secara otomatis",
      "Membantu debugging dan mendeteksi error",
      "Membuat pengujian (testing) otomatis",
      "Menyusun dokumentasi teknis",
    ],
    humanSkills: [
      "Merancang arsitektur sistem",
      "Memecahkan masalah kompleks",
      "Berpikir strategis soal produk",
    ],
    description:
      "AI mempercepat proses menulis dan menguji kode, tapi keputusan arsitektur dan pemecahan masalah kompleks tetap bergantung pada pengembang.",
  },
  {
    id: "graphic-designer",
    title: "Desainer Grafis",
    category: "Kreatif",
    icon: "Palette",
    impactScore: 80,
    impactLevel: "High",
    aiTasks: [
      "Membuat variasi desain dengan cepat",
      "Menghasilkan dan mengedit gambar",
      "Menyesuaikan ukuran untuk berbagai format",
    ],
    humanSkills: [
      "Menentukan arahan kreatif",
      "Menjaga konsistensi brand",
      "Selera visual & storytelling",
    ],
    description:
      "AI bisa menghasilkan banyak variasi visual dengan cepat, namun arah kreatif dan selera estetis tetap menjadi kekuatan desainer manusia.",
  },
  {
    id: "data-analyst",
    title: "Analis Data",
    category: "Teknologi",
    icon: "BarChart3",
    impactScore: 75,
    impactLevel: "High",
    aiTasks: [
      "Membantu menyusun query data",
      "Membuat ringkasan otomatis",
      "Mendeteksi anomali pada data",
    ],
    humanSkills: [
      "Memahami konteks bisnis",
      "Menafsirkan hasil data",
      "Mengambil keputusan berbasis data",
    ],
    description:
      "AI mempercepat pengolahan data mentah, tapi menerjemahkan angka menjadi keputusan bisnis tetap butuh konteks manusia.",
  },
  {
    id: "accountant",
    title: "Akuntan",
    category: "Keuangan",
    icon: "Calculator",
    impactScore: 55,
    impactLevel: "Medium",
    aiTasks: [
      "Membantu entri data keuangan",
      "Mendukung proses rekonsiliasi",
      "Menyusun draf laporan otomatis",
    ],
    humanSkills: [
      "Penilaian kepatuhan (compliance)",
      "Peninjauan laporan keuangan",
      "Komunikasi dengan klien",
    ],
    description:
      "Tugas administratif akuntansi makin terbantu AI, sementara keputusan kepatuhan dan komunikasi dengan klien tetap perlu manusia.",
  },
  {
    id: "marketing-specialist",
    title: "Spesialis Pemasaran",
    category: "Pemasaran",
    icon: "Megaphone",
    impactScore: 50,
    impactLevel: "Medium",
    aiTasks: [
      "Membuat draf copywriting",
      "Menyusun ide segmentasi audiens",
      "Menganalisis performa kampanye",
    ],
    humanSkills: [
      "Strategi merek",
      "Positioning produk",
      "Kreativitas & empati",
    ],
    description:
      "AI membantu mempercepat draf konten dan analisis kampanye, tapi strategi dan empati terhadap audiens tetap peran manusia.",
  },
  {
    id: "project-manager",
    title: "Manajer Proyek",
    category: "Manajemen",
    icon: "ClipboardList",
    impactScore: 38,
    impactLevel: "Low",
    aiTasks: [
      "Meringkas hasil rapat",
      "Membantu menyusun draf tugas",
      "Membuat laporan status proyek",
    ],
    humanSkills: ["Kepemimpinan", "Negosiasi", "Manajemen stakeholder"],
    description:
      "AI bisa membantu tugas administratif proyek, tapi memimpin tim dan menegosiasikan kepentingan stakeholder tetap butuh manusia.",
  },
];

export const categories = [
  "Semua",
  ...Array.from(new Set(jobs.map((job) => job.category))),
];
