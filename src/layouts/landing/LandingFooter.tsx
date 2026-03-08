export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>Public dev hub and project portfolio.</p>
        <p>{new Date().getFullYear()} ygreis</p>
      </div>
    </footer>
  )
}
