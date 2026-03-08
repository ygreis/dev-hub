import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { LandingTemplate } from "@/layouts/landing/LandingTemplate"
import { LibraryTemplate } from "@/layouts/library/LibraryTemplate"

const HomePage = lazy(() => import("@/pages/landing/HomePage"))
const AboutPage = lazy(() => import("@/pages/landing/AboutPage"))
const LibraryHomePage = lazy(() => import("@/pages/library/LibraryHomePage"))
const LibraryDocsPage = lazy(() => import("@/pages/library/LibraryDocsPage"))
const LibraryExamplesPage = lazy(() => import("@/pages/library/LibraryExamplesPage"))
const NotFoundPage = lazy(() => import("@/pages/misc/NotFoundPage"))

function RouteFallback() {
  return (
    <div className="grid min-h-[40vh] place-items-center text-slate-600 dark:text-slate-400">
      <p>Loading page...</p>
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<LandingTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="quem-sou" element={<AboutPage />} />
        </Route>

        <Route path="lib/:slug" element={<LibraryTemplate />}>
          <Route index element={<LibraryHomePage />} />
          <Route path="docs" element={<LibraryDocsPage />} />
          <Route path="examples" element={<LibraryExamplesPage />} />
          <Route path="home" element={<Navigate to=".." replace />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
