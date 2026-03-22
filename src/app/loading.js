export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="h-9 w-48 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse mb-2" />
          <div className="h-4 w-64 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        </div>
        <div className="h-9 w-72 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 flex flex-col gap-3"
            >
              <div className="h-5 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              <div className="h-3 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
