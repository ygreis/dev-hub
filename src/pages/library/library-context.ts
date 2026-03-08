import { useOutletContext } from "react-router-dom"

import type { ProjectRecord } from "@/projects/types"

type LibraryOutletContext = {
  project: ProjectRecord
}

export function useLibraryProject() {
  return useOutletContext<LibraryOutletContext>()
}
