'use client'

export default function Error({ error, unstable_retry }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950 p-6 text-center">
        <p className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">
          Failed to load repositories
        </p>
        <p className="text-sm text-red-500 dark:text-red-400 mb-5">
          {error.message}
        </p>
        <button
          onClick={unstable_retry}
          className="rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
