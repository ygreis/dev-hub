import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ProjectRecord } from "@/projects/types"

type LibrarySidebarProps = {
  project: ProjectRecord
}

type MenuGroup = {
  label: string
  to: string
  children: Array<{ label: string; to: string }>
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

function createDocPath(slug: string, groupSlug: string, pageSlug: string) {
  return `/lib/${slug}/docs/${groupSlug}/${pageSlug}`
}

export function LibrarySidebar({ project }: LibrarySidebarProps) {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const slug = project.meta.slug

  const menuGroups = useMemo<MenuGroup[]>(
    () =>
      project.docs.groups
        .map((group) => {
          const firstPage = group.pages[0]

          if (!firstPage) {
            return null
          }

          return {
            label: group.title,
            to: createDocPath(slug, group.slug, firstPage.slug),
            children: group.pages.map((page) => ({
              label: page.title,
              to: createDocPath(slug, group.slug, page.slug),
            })),
          }
        })
        .filter((group): group is MenuGroup => group !== null),
    [project.docs.groups, slug],
  )

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) {
      return menuGroups
    }

    return menuGroups
      .map((group) => {
        const matchGroup = group.label.toLowerCase().includes(query)
        const matchedChildren = group.children.filter((child) => child.label.toLowerCase().includes(query))

        if (matchGroup) {
          return group
        }

        if (matchedChildren.length > 0) {
          return {
            ...group,
            children: matchedChildren,
          }
        }

        return null
      })
      .filter((group): group is MenuGroup => group !== null)
  }, [menuGroups, search])

  function closeOnNavigate() {
    setIsOpen(false)
  }

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
        <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
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
            placeholder="Search sections"
          />
        </div>

        <nav className="space-y-2" aria-label="Library navigation">
          {filteredItems.map((group) => (
            <div key={group.label} className="space-y-1">
              <NavLink to={group.to} className={topLinkClass} onClick={closeOnNavigate}>
                {group.label}
              </NavLink>
              <div className="ml-3 border-l border-slate-200 pl-3 dark:border-slate-700">
                {group.children.map((child) => (
                  <NavLink key={child.to} to={child.to} className={childLinkClass} onClick={closeOnNavigate}>
                    {child.label}
                  </NavLink>
                ))}
              </div>
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
