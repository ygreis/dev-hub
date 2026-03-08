type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-100 sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-slate-600 dark:text-slate-400">{description}</p> : null}
    </header>
  )
}
