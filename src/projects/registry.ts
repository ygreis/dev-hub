import { intlPhoneJsMeta } from "@/projects/intl-phone-js-core/meta"
import { intlPhoneJsNavigation } from "@/projects/intl-phone-js-core/navigation"
import { resolveIntlPhoneJsDocPage } from "@/projects/intl-phone-js-core/pages/registry"
import type { ProjectRecord } from "@/projects/types"
import { usewatchJsMeta } from "@/projects/usewatch-js/meta"
import { usewatchJsNavigation } from "@/projects/usewatch-js/navigation"
import { resolveUsewatchJsDocPage } from "@/projects/usewatch-js/pages/registry"

export const projectRegistry: ProjectRecord[] = [
  {
    meta: intlPhoneJsMeta,
    docs: intlPhoneJsNavigation,
    resolveDocPage: resolveIntlPhoneJsDocPage,
  },
  {
    meta: usewatchJsMeta,
    docs: usewatchJsNavigation,
    resolveDocPage: resolveUsewatchJsDocPage,
  },
]

const bySlug: Record<string, ProjectRecord> = Object.fromEntries(
  projectRegistry.map((project) => [project.meta.slug, project]),
) as Record<string, ProjectRecord>

export function getProjectBySlug(slug: string) {
  return bySlug[slug]
}
