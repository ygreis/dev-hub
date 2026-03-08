export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Public dev hub and project portfolio.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ygreis/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 underline-offset-2 hover:underline dark:text-slate-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ygreis"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 underline-offset-2 hover:underline dark:text-slate-300"
          >
            GitHub
          </a>
        </div>
        <p>{new Date().getFullYear()} ygreis</p>
      </div>
    </footer>
  )
}
