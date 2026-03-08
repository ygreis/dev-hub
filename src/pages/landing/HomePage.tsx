import { ProjectCard } from "@/components/ui/ProjectCard"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Button } from "@/components/ui/button"
import { projectRegistry } from "@/projects/registry"

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">Developer Hub</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100 sm:text-5xl">
            Public portfolio and documentation hub for my libraries.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            One SPA with landing pages and dedicated library experiences. Each library gets its own route, docs area,
            and examples section.
          </p>
          <Button asChild>
            <a href="#projects">Explore projects</a>
          </Button>
        </div>
      </section>

      <section id="projects" className="space-y-8">
        <SectionTitle
          eyebrow="Projects"
          title="Libraries and active experiments"
          description="Each card opens an isolated library area with navigation ready for docs and examples."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projectRegistry.map((project) => (
            <ProjectCard key={project.meta.slug} project={project.meta} />
          ))}
        </div>
      </section>
    </div>
  )
}
