import type { ReactNode } from "react"

type DocPageProps = {
  groupTitle: string
  title: string
  description?: string
  children: ReactNode
}

export function DocPage({ groupTitle, title, description, children }: DocPageProps) {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">{groupTitle}</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">{title}</h1>
        {description ? <p className="text-slate-600 dark:text-slate-400">{description}</p> : null}
      </header>
      <div className="space-y-5">{children}</div>
    </article>
  )
}
