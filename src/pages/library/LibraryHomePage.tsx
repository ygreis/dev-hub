import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLibraryProject } from "@/pages/library/library-context"
import { getFirstDocPage } from "@/projects/docs-utils"

export default function LibraryHomePage() {
  const { project } = useLibraryProject()
  const firstDoc = getFirstDocPage(project.docs)
  const docsHref = firstDoc
    ? `/lib/${project.meta.slug}/docs/${firstDoc.group.slug}/${firstDoc.page.slug}`
    : `/lib/${project.meta.slug}/docs`

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">{project.meta.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">{project.meta.description}</p>
      </header>
      <Separator />
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href={project.meta.repositoryUrl} target="_blank" rel="noreferrer">
            Repository
          </a>
        </Button>
        {project.meta.packageUrl ? (
          <Button asChild variant="secondary">
            <a href={project.meta.packageUrl} target="_blank" rel="noreferrer">
              Package
            </a>
          </Button>
        ) : null}
        <Button asChild variant="outline">
          <Link to={docsHref}>Docs</Link>
        </Button>
      </div>
      <p className="text-slate-600 dark:text-slate-400">
        Use the left menu to browse sections and pages. The navigation is scoped to this library only.
      </p>
    </article>
  )
}
