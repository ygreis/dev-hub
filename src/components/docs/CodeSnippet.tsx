import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { CopyButton } from "@/components/docs/CopyButton"
import { cn } from "@/lib/utils"

type CodeSnippetProps = {
  title?: string
  language: string
  code: string
  filename?: string
  className?: string
}

export function CodeSnippet({ title, language, code, filename, className }: CodeSnippetProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    update()

    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  return (
    <figure className={cn("overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700", className)}>
      <figcaption className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
        <div className="min-w-0">
          {title ? <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p> : null}
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{filename ?? language}</p>
        </div>
        <CopyButton value={code} />
      </figcaption>
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "0.85rem",
          lineHeight: 1.45,
          overflowX: "auto",
        }}
        showLineNumbers
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </figure>
  )
}
