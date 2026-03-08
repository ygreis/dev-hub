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

export type ProjectDocsSection = {
  title: string
  content: string
}

export type ProjectDocs = {
  summary: string
  sections: ProjectDocsSection[]
}

export type ProjectExample = {
  id: string
  title: string
  description: string
  code: string
}

export type ProjectRecord = {
  meta: ProjectMeta
  docs: ProjectDocs
  examples: ProjectExample[]
}
