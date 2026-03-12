import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import {
  firstStateSnippet,
  installationSnippet,
  namedStateSnippet,
} from "@/projects/usewatch-js/snippets/getting-started"

export function InstallationPage() {
  return (
    <DocPage
      groupTitle="Getting Started"
      title="Installation"
      description="Install the published package and import the small public API."
    >
      <DocSection description="Install from npm:">
        <CodeSnippet title="npm" language="bash" code={installationSnippet} />
      </DocSection>

      <DocSection title="What You Import">
        <p className="text-slate-700 dark:text-slate-300">
          The runtime API is centered on <code>setState</code>, <code>useState</code>,{" "}
          <code>useWatch</code> and <code>createContext</code>. TypeScript consumers can also import{" "}
          <code>SetStateOptions</code>, <code>UseWatchOptions</code>, <code>StateProps</code> and{" "}
          <code>UseWatchContext</code>.
        </p>
      </DocSection>
    </DocPage>
  )
}

export function FirstStatePage() {
  return (
    <DocPage
      groupTitle="Getting Started"
      title="First State"
      description="Create a local state, subscribe to it, then move to a named state when you want reuse."
    >
      <DocSection description="Smallest useful flow: one local state and one watcher.">
        <CodeSnippet title="Local state" language="ts" code={firstStateSnippet} />
      </DocSection>

      <DocSection
        title="First Named State"
        description="Named state is useful when different parts of the code need the same registry entry."
      >
        <CodeSnippet title="Named state" language="ts" code={namedStateSnippet} />
      </DocSection>
    </DocPage>
  )
}
