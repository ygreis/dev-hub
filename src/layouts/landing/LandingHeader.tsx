import { Link, NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/quem-sou", label: "Quem sou" },
]

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          ygreis/dev-hub
        </Link>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Button key={item.to} asChild variant="ghost" size="sm">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-slate-950 dark:text-slate-100"
                      : "text-slate-600 dark:text-slate-400"
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
