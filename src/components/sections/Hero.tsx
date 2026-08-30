export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center gap-8 px-4 py-20 text-center md:py-28"
    >
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
        How Will AI Change Your Job?
      </h1>

      <p className="max-w-xl text-lg text-gray-600">
        AI won&apos;t replace every job. But it will change how we work.
        Jelajahi berbagai profesi, lihat dampak AI-nya, dan temukan skill yang
        perlu kamu perkuat.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#jobs"
          className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Explore Jobs
        </a>

        <a
          href="#intro"
          className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Pelajari Dulu
        </a>
      </div>

      <div className="mt-10 h-64 w-full max-w-2xl rounded-2xl bg-gradient-to from-gray-100 to-gray-200 md:h-80" />
    </section>
  );
}
