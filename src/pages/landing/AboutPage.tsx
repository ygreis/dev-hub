import { SectionTitle } from "@/components/ui/SectionTitle"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <article className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
      <SectionTitle
        eyebrow="Quem sou"
        title="Building practical developer tools"
        description="I focus on library design, DX, and documentation experiences that stay simple as products scale."
      />
      <Separator />
      <div className="space-y-4 text-slate-700 dark:text-slate-300">
        <p>This dev hub centralizes portfolio pages and project documentation in a single React SPA.</p>
        <p>
          The architecture is based on reusable templates, project registry data, and route-driven pages prepared for
          long-term growth.
        </p>
      </div>
    </article>
  )
}
