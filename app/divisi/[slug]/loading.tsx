export default function DivisionLoading() {
  return (
    <main className="flex-1" aria-busy="true">
      <p className="sr-only">Memuat halaman divisi…</p>

      <div className="animate-pulse motion-reduce:animate-none">
        {/* Hero skeleton */}
        <section className="pt-32 pb-32">
          <div className="section-container flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="h-64 w-full max-w-sm rounded-3xl bg-zinc-900/60 lg:w-1/2" />
            <div className="w-full space-y-4 lg:w-1/2">
              <div className="h-12 w-3/4 rounded bg-zinc-900/60" />
              <div className="h-12 w-1/2 rounded bg-zinc-900/60" />
            </div>
          </div>
        </section>

        {/* Intro + structure skeleton */}
        <section className="pt-24 pb-20">
          <div className="section-container space-y-8">
            <div className="mx-auto h-10 w-48 rounded bg-zinc-900/60" />
            <div className="mx-auto h-40 max-w-4xl rounded-lg bg-zinc-900/60" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="aspect-[3/4] rounded-2xl bg-zinc-900/60" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
