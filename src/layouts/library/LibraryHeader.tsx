import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import type { ProjectMeta } from "@/projects/types"

type LibraryHeaderProps = {
  project: ProjectMeta
}

export function LibraryHeader({ project }: LibraryHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="space-y-1">
          <Link
            to="/"
            className="text-sm text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Back to dev hub
          </Link>
          <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{project.ecosystem}</Badge>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
