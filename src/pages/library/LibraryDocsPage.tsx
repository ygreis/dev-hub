import { Navigate, useParams } from "react-router-dom"

import { useLibraryProject } from "@/pages/library/library-context"
import { getDocPageBySlug, getFirstDocPage } from "@/projects/docs-utils"

export default function LibraryDocsPage() {
  const { project } = useLibraryProject()
  const { groupSlug, pageSlug } = useParams()

  const firstDoc = getFirstDocPage(project.docs)

  if (!groupSlug || !pageSlug) {
    if (!firstDoc) {
      return <p className="text-slate-600 dark:text-slate-400">No documentation pages available yet.</p>
    }

    return <Navigate to={`/lib/${project.meta.slug}/docs/${firstDoc.group.slug}/${firstDoc.page.slug}`} replace />
  }

  const current = getDocPageBySlug(project.docs, groupSlug, pageSlug)

  if (!current) {
    if (!firstDoc) {
      return <p className="text-slate-600 dark:text-slate-400">No documentation pages available yet.</p>
    }

    return <Navigate to={`/lib/${project.meta.slug}/docs/${firstDoc.group.slug}/${firstDoc.page.slug}`} replace />
  }

  const pageNode = project.resolveDocPage(groupSlug, pageSlug)

  if (!pageNode) {
    return (
      <p className="text-slate-600 dark:text-slate-400">
        This documentation page is not implemented yet: <code>{groupSlug}/{pageSlug}</code>
      </p>
    )
  }

  return pageNode
}
