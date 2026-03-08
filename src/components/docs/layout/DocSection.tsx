import type { ReactNode } from "react"

import { Separator } from "@/components/ui/separator"

type DocSectionProps = {
  title?: string
  description?: string
  children: ReactNode
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <section className="space-y-3">
      <Separator />
      {title ? <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2> : null}
      {description ? <p className="text-slate-700 dark:text-slate-300">{description}</p> : null}
      <div className="space-y-3">{children}</div>
    </section>
  )
}
