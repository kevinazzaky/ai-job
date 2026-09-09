import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang AI", href: "#intro" },
  { label: "Jelajahi Pekerjaan", href: "#jobs" },
  { label: "Skill", href: "#skills" },
  { label: "Human + AI", href: "#human-ai" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070d] text-white/60">
      <div className="glow-spot left-1/2 top-0 size-160 -translate-x-1/2 -translate-y-2/3 opacity-30" />

      <div className="container relative mx-auto grid gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-lg font-semibold tracking-tight text-white">
            AI Job Impact
          </p>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
            Landing page interaktif untuk memahami bagaimana AI mengubah cara
            kerja di berbagai profesi — bukan sekadar ancaman, tapi pergeseran
            cara kerja kita sendiri.
          </p>

          <a
            href="#jobs"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition hover:text-blue-200"
          >
            Mulai jelajahi
            <ArrowRight size={14} />
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navigasi</p>

          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Tentang Proyek</p>

          <ul className="mt-4 space-y-2.5 text-sm">
            <li>Dibangun dengan Next.js &amp; Tailwind CSS</li>
            <li>Proyek portofolio, bukan riset ilmiah</li>
            <li>Data pekerjaan bersifat ilustratif</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} AI Job Impact. Hak cipta dilindungi.
          </p>

          <a
            href="#home"
            className="underline decoration-white/20 underline-offset-4 transition hover:decoration-white/50"
          >
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}
