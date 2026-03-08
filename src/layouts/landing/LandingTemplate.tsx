import { Outlet } from "react-router-dom"

import { LandingFooter } from "@/layouts/landing/LandingFooter"
import { LandingHeader } from "@/layouts/landing/LandingHeader"

export function LandingTemplate() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_#f0f9ff,_#ffffff_60%)] dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_60%)]">
      <a
        href="#main-content"
        className="sr-only z-50 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900 dark:focus:bg-slate-900 dark:focus:text-slate-100"
      >
        Skip to main content
      </a>
      <LandingHeader />
      <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  )
}
