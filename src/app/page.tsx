export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <main className="flex w-full max-w-xl flex-col items-center text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
          Yayında
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          Dragon
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Site yayında. Sayfa yapım aşamasında.
        </p>
      </main>
    </div>
  );
}
