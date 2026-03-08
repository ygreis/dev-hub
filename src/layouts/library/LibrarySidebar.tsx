import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn, slugify } from "@/lib/utils"
import type { ProjectRecord } from "@/projects/types"

type LibrarySidebarProps = {
  project: ProjectRecord
}

type MenuItem = {
  label: string
  to: string
  children?: Array<{ label: string; to: string }>
}

const topLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100",
  )

const childLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block rounded-md px-3 py-1.5 text-sm transition-colors",
    isActive
      ? "text-cyan-700 dark:text-cyan-300"
      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
  )

export function LibrarySidebar({ project }: LibrarySidebarProps) {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const slug = project.meta.slug

  const menuItems = useMemo<MenuItem[]>(
    () => [
      { label: "Overview", to: `/lib/${slug}` },
      {
        label: "Docs",
        to: `/lib/${slug}/docs`,
        children: project.docs.sections.map((section) => ({
          label: section.title,
          to: `/lib/${slug}/docs#${slugify(section.title)}`,
        })),
      },
      {
        label: "Examples",
        to: `/lib/${slug}/examples`,
        children: project.examples.map((example) => ({
          label: example.title,
          to: `/lib/${slug}/examples#${slugify(example.id)}`,
        })),
      },
    ],
    [project.docs.sections, project.examples, slug],
  )

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) {
      return menuItems
    }

    return menuItems
      .map((item) => {
        const matchTop = item.label.toLowerCase().includes(query)
        const matchedChildren = item.children?.filter((child) => child.label.toLowerCase().includes(query))

        if (matchTop) {
          return item
        }

        if (matchedChildren && matchedChildren.length > 0) {
          return { ...item, children: matchedChildren }
        }

        return null
      })
      .filter((item): item is MenuItem => item !== null)
  }, [menuItems, search])

  return (
    <aside className="h-fit space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full justify-between lg:hidden"
        aria-expanded={isOpen}
        aria-controls="library-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        Library menu
        <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </Button>

      <div
        id="library-menu"
        className={cn(
          "rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900",
          isOpen ? "block" : "hidden lg:block",
        )}
      >
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Library menu
        </p>

        <div className="mb-3 px-3">
          <label htmlFor="library-search" className="sr-only">
            Search library menu
          </label>
          <input
            id="library-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            placeholder="Search docs or examples"
          />
        </div>

        <nav className="space-y-1" aria-label="Library navigation">
          {filteredItems.map((item) => (
            <div key={item.to} className="space-y-1">
              <NavLink to={item.to} end={item.to.endsWith(slug)} className={topLinkClass}>
                {item.label}
              </NavLink>
              {item.children && item.children.length > 0 ? (
                <div className="ml-3 border-l border-slate-200 pl-3 dark:border-slate-700">
                  {item.children.map((child) => (
                    <NavLink key={child.to} to={child.to} className={childLinkClass}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          {filteredItems.length === 0 ? (
            <p className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">No results found.</p>
          ) : null}
        </nav>
      </div>
    </aside>
  )
}
