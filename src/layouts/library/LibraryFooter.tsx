import type { ProjectMeta } from "@/projects/types"

type LibraryFooterProps = {
  project: ProjectMeta
}

export function LibraryFooter({ project }: LibraryFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>{project.title} documentation area</p>
        <p>Built for GitHub Pages</p>
      </div>
    </footer>
  )
}
