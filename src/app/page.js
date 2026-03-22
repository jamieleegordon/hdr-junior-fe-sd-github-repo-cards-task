import RepoList from "./components/RepoList";

export default async function Page() {
  const res = await fetch(
    "https://api.github.com/users/jamieleegordon/repos?per_page=100&sort=updated",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status}: ${res.statusText}`);
  }

  const repos = await res.json();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
            GitHub Repos
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Public repositories from{" "}
            <a
              href="https://github.com/jamieleegordon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/jamieleegordon
            </a>
          </p>
        </div>
        <RepoList repos={repos} />
      </div>
    </div>
  );
}
