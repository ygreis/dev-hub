import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { slugify } from "@/lib/utils"

import { useLibraryProject } from "@/pages/library/library-context"

export default function LibraryExamplesPage() {
  const { project } = useLibraryProject()
  const defaultExample = project.examples[0]?.id

  if (!defaultExample) {
    return <p className="text-slate-600 dark:text-slate-400">No examples available yet.</p>
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">Examples</h1>
        <p className="text-slate-600 dark:text-slate-400">Practical snippets prepared for this library.</p>
      </header>
      <Tabs defaultValue={defaultExample}>
        <TabsList>
          {project.examples.map((example) => (
            <TabsTrigger key={example.id} value={example.id}>
              {example.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {project.examples.map((example) => (
          <TabsContent key={example.id} value={example.id} id={slugify(example.id)} tabIndex={-1}>
            <Card className="dark:border-slate-700">
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100 dark:bg-slate-950">
                  <code>{example.code}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </article>
  )
}
