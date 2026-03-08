/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-900 text-white dark:bg-cyan-400 dark:text-slate-950",
        secondary: "border-transparent bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
        outline: "border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
