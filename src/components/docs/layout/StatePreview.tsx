import type { ReactNode } from "react"

type StatePreviewProps = {
  title: string
  value: unknown
  footer?: ReactNode
}

export function StatePreview({ title, value, footer }: StatePreviewProps) {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{title}</p>
      <pre className="overflow-x-auto text-xs text-slate-700 dark:text-slate-200">
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
      {footer ? <div>{footer}</div> : null}
    </div>
  )
}
