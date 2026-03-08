import type { ReactNode } from "react"

export type ProjectStatus = "active" | "beta" | "planned"

export type ProjectMeta = {
  slug: string
  title: string
  description: string
  ecosystem: string
  repositoryUrl: string
  packageUrl?: string
  docsUrl?: string
  status: ProjectStatus
  tags: string[]
}

export type ProjectDocPage = {
  slug: string
  title: string
}

export type ProjectDocGroup = {
  slug: string
  title: string
  pages: ProjectDocPage[]
}

export type ProjectDocs = {
  groups: ProjectDocGroup[]
}

export type ResolveProjectDocPage = (groupSlug: string, pageSlug: string) => ReactNode | null

export type ProjectRecord = {
  meta: ProjectMeta
  docs: ProjectDocs
  resolveDocPage: ResolveProjectDocPage
}
