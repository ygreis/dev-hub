import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[60vh] place-items-center text-center">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">404</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Page not found</h1>
        <p className="mx-auto max-w-md text-slate-600 dark:text-slate-400">The requested route does not exist in this dev hub.</p>
        <Button asChild>
          <Link to="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  )
}
