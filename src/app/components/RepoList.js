'use client'

import { useState } from "react";

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Ruby: "#701516",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Vue: "#41b883",
};

function RepoCard({ repo }) {
  const color = LANGUAGE_COLORS[repo.language] ?? "#8b949e";

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
        >
          {repo.name}
        </a>
        {repo.fork && (
          <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-full px-2 py-0.5">
            fork
          </span>
        )}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {repo.description ?? (
          <span className="italic text-zinc-400 dark:text-zinc-600">
            No description provided
          </span>
        )}
      </p>

      <div className="flex items-center gap-4 mt-auto pt-2 text-xs text-zinc-500 dark:text-zinc-400">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.873 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
          </svg>
          {repo.stargazers_count.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default function RepoList({ repos }) {
  const [query, setQuery] = useState("");

  const filtered = repos.filter((repo) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <input
          type="search"
          placeholder="Filter by repo name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p className="text-xs text-zinc-400 dark:text-zinc-600 mb-4">
        {filtered.length === repos.length
          ? `${repos.length} repositories`
          : `Showing ${filtered.length} of ${repos.length} repositories`}
      </p>

      {filtered.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400 text-sm py-12 text-center">
          No repos match &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </>
  );
}
