import type { ReactNode } from "react"

import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type DemoFrameProps = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

type DemoSectionProps = {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

type DemoCodeProps = {
  title?: string
  description?: string
  code: string
  language: string
  filename?: string
  className?: string
}

export function DemoFrame({ title, description, children, className }: DemoFrameProps) {
  return (
    <Card className={cn("overflow-hidden border-slate-200/90 dark:border-slate-700", className)}>
      <CardHeader className="space-y-2 border-b border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/50">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-5">{children}</CardContent>
    </Card>
  )
}

export function DemoPreview({ title, description, children, className }: DemoSectionProps) {
  return (
    <section className={cn("space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900", className)}>
      {title || description ? (
        <div className="space-y-1">
          {title ? <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{title}</h3> : null}
          {description ? <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}

export function DemoOutput({ title, description, children, className }: DemoSectionProps) {
  return (
    <section className={cn("space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60", className)}>
      {title || description ? (
        <div className="space-y-1">
          {title ? <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{title}</h3> : null}
          {description ? <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}

export function DemoActions({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex flex-wrap items-center gap-2", className)}>{children}</div>
}

export function DemoCode({ title = "Code", description, code, language, filename, className }: DemoCodeProps) {
  return (
    <section className={cn("space-y-3", className)}>
      {description ? <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
      <CodeSnippet title={title} language={language} code={code} filename={filename} />
    </section>
  )
}
