import { Navigate } from "react-router-dom"

import { useLibraryProject } from "@/pages/library/library-context"
import { getFirstDocPage } from "@/projects/docs-utils"

export default function LibraryExamplesPage() {
  const { project } = useLibraryProject()
  const firstDoc = getFirstDocPage(project.docs)

  if (!firstDoc) {
    return <p className="text-slate-600 dark:text-slate-400">No documentation pages available yet.</p>
  }

  return <Navigate to={`/lib/${project.meta.slug}/docs/${firstDoc.group.slug}/${firstDoc.page.slug}`} replace />
}
