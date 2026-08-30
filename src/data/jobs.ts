export type Job = {
  id: string;
  title: string;
  category: string;
  icon: string; 
  impactScore: number; // 0–100
  impactLevel: "Low" | "Medium" | "High";
  aiTasks: string[];
  humanSkills: string[];
  description: string;
};

export const jobs: Job[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Technology",
    icon: "Code2",
    impactScore: 85,
    impactLevel: "High",
    aiTasks: [
      "Code generation & autocomplete",
      "Debugging & error detection",
      "Automated testing",
      "Documentation generation",
    ],
    humanSkills: [
      "System architecture & design",
      "Complex problem solving",
      "Product thinking",
    ],
    description:
      "AI mempercepat proses menulis dan menguji kode, tapi keputusan arsitektur dan pemecahan masalah kompleks tetap bergantung pada developer.",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "Creative",
    icon: "Palette",
    impactScore: 80,
    impactLevel: "High",
    aiTasks: [
      "Generating design variations",
      "Image generation & editing",
      "Resizing for multiple formats",
    ],
    humanSkills: [
      "Art direction",
      "Brand judgment",
      "Taste & visual storytelling",
    ],
    description:
      "AI bisa menghasilkan banyak variasi visual dengan cepat, namun arah kreatif dan selera estetis tetap menjadi kekuatan desainer manusia.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Technology",
    icon: "BarChart3",
    impactScore: 75,
    impactLevel: "High",
    aiTasks: ["Query assistance", "Automated summaries", "Anomaly detection"],
    humanSkills: [
      "Business context understanding",
      "Data interpretation",
      "Decision making",
    ],
    description:
      "AI mempercepat pengolahan data mentah, tapi menerjemahkan angka menjadi keputusan bisnis tetap butuh konteks manusia.",
  },
  {
    id: "accountant",
    title: "Accountant",
    category: "Finance",
    icon: "Calculator",
    impactScore: 55,
    impactLevel: "Medium",
    aiTasks: [
      "Data entry assistance",
      "Reconciliation support",
      "Automated report drafts",
    ],
    humanSkills: [
      "Compliance judgment",
      "Financial review",
      "Client communication",
    ],
    description:
      "Tugas administratif akuntansi makin terbantu AI, sementara keputusan kepatuhan dan komunikasi dengan klien tetap perlu manusia.",
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    category: "Marketing",
    icon: "Megaphone",
    impactScore: 50,
    impactLevel: "Medium",
    aiTasks: [
      "Copywriting drafts",
      "Audience segmentation ideas",
      "Campaign performance analysis",
    ],
    humanSkills: ["Brand strategy", "Positioning", "Creativity & empathy"],
    description:
      "AI membantu mempercepat draf konten dan analisis kampanye, tapi strategi dan empati terhadap audiens tetap peran manusia.",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    category: "Management",
    icon: "ClipboardList",
    impactScore: 38,
    impactLevel: "Low",
    aiTasks: ["Meeting summaries", "Task drafting", "Status reporting"],
    humanSkills: ["Leadership", "Negotiation", "Stakeholder management"],
    description:
      "AI bisa membantu tugas administratif proyek, tapi memimpin tim dan menegosiasikan kepentingan stakeholder tetap butuh manusia.",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(jobs.map((job) => job.category))),
];
