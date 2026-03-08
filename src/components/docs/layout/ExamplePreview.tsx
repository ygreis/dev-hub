import type { ReactNode } from "react"

type ExamplePreviewProps = {
  title: string
  description?: string
  children: ReactNode
}

export function ExamplePreview({ title, description, children }: ExamplePreviewProps) {
  return (
    <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        {description ? <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
      </div>
      <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
        {children}
      </div>
    </section>
  )
}
