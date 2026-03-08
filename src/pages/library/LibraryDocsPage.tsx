import { Separator } from "@/components/ui/separator"
import { slugify } from "@/lib/utils"

import { useLibraryProject } from "@/pages/library/library-context"

export default function LibraryDocsPage() {
  const { project } = useLibraryProject()

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">Documentation</h1>
        <p className="text-slate-600 dark:text-slate-400">{project.docs.summary}</p>
      </header>
      {project.docs.sections.map((section) => (
        <section key={section.title} id={slugify(section.title)} className="space-y-3" tabIndex={-1}>
          <Separator />
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{section.title}</h2>
          <p className="text-slate-700 dark:text-slate-300">{section.content}</p>
        </section>
      ))}
    </article>
  )
}
