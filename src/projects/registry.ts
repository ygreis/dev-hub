import { intlPhoneJsDocs } from "@/projects/intl-phone-js-core/docs"
import { intlPhoneJsExamples } from "@/projects/intl-phone-js-core/examples"
import { intlPhoneJsMeta } from "@/projects/intl-phone-js-core/meta"
import type { ProjectRecord } from "@/projects/types"

export const projectRegistry: ProjectRecord[] = [
  {
    meta: intlPhoneJsMeta,
    docs: intlPhoneJsDocs,
    examples: intlPhoneJsExamples,
  }
]

const bySlug: Record<string, ProjectRecord> = Object.fromEntries(
  projectRegistry.map((project) => [project.meta.slug, project]),
) as Record<string, ProjectRecord>

export function getProjectBySlug(slug: string) {
  return bySlug[slug]
}
