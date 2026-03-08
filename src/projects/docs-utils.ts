import type { ProjectDocGroup, ProjectDocPage, ProjectDocs } from "@/projects/types"

export function getFirstDocPage(docs: ProjectDocs): { group: ProjectDocGroup; page: ProjectDocPage } | null {
  const group = docs.groups[0]
  const page = group?.pages[0]

  if (!group || !page) {
    return null
  }

  return { group, page }
}

export function getDocPageBySlug(docs: ProjectDocs, groupSlug?: string, pageSlug?: string) {
  if (!groupSlug || !pageSlug) {
    return null
  }

  const group = docs.groups.find((item) => item.slug === groupSlug)
  const page = group?.pages.find((item) => item.slug === pageSlug)

  if (!group || !page) {
    return null
  }

  return { group, page }
}
