export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-primary)] py-24 text-white">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <p className="text-sm text-white/50">Sebelum kamu pergi</p>
        <h2 className="font-display mt-3 text-3xl font-medium md:text-4xl">
          Pekerjaanmu akan berubah. Pastikan kamu berubah bersamanya.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
          Mulai dengan memahami dampak AI di bidangmu, lalu perkuat skill yang
          paling sulit digantikan.
        </p>
        <a
          href="#jobs"
          className="mt-8 inline-block rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Jelajahi kariermu
        </a>
      </div>
    </section>
  );
}
