import { Link, Outlet, useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { LibraryFooter } from "@/layouts/library/LibraryFooter"
import { LibraryHeader } from "@/layouts/library/LibraryHeader"
import { LibrarySidebar } from "@/layouts/library/LibrarySidebar"
import { getProjectBySlug } from "@/projects/registry"

export function LibraryTemplate() {
  const { slug = "" } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
        <main className="mx-auto grid w-full max-w-3xl flex-1 place-items-center px-4 py-16 text-center sm:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Library not found</h1>
            <p className="text-slate-600 dark:text-slate-400">There is no project registered with slug: {slug}.</p>
            <Button asChild>
              <Link to="/">Return to dev hub</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900 dark:focus:bg-slate-900 dark:focus:text-slate-100"
      >
        Skip to main content
      </a>
      <LibraryHeader project={project.meta} />
      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <LibrarySidebar project={project} />
        <section
          id="main-content"
          className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <Outlet context={{ project }} />
        </section>
      </main>
      <LibraryFooter project={project.meta} />
    </div>
  )
}
