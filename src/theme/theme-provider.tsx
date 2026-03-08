/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = "dev-hub-theme"

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark"
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === "light" || saved === "dark") {
    return saved
  }

  if (typeof window.matchMedia === "function") {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } catch {
      return "dark"
    }
  }

  return "dark"
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.setAttribute("data-theme", theme)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
