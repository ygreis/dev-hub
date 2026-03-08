import { Link } from "react-router-dom"

import { Tag } from "@/components/ui/Tag"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProjectMeta } from "@/projects/types"

type ProjectCardProps = {
  project: ProjectMeta
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col border-slate-200/80 dark:border-slate-700">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <Badge variant="outline" className="shrink-0">
            {project.status}
          </Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge variant="secondary">{project.ecosystem}</Badge>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/lib/${project.slug}`}>Open library</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
