import type { ReactNode } from "react"

import {
  ArrayStateDemo,
  BooleanStateDemo,
  ContextIsolationDemo,
  CrossTabSyncDemo,
  ImmediateFalseDemo,
  NamedStateDemo,
  NestedObjectDemo,
  NumberCounterDemo,
  ObjectStateDemo,
  PrimitiveCounterDemo,
  StringStateDemo,
  WatchingMultipleStatesDemo,
} from "@/components/docs/UsewatchDemos"
import { DemoCode } from "@/components/docs/demo/DemoFrame"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import {
  arrayStateSnippet,
  booleanToggleSnippet,
  contextIsolationExampleSnippet,
  crossTabSyncHtmlSnippet,
  crossTabSyncSnippet,
  immediateFalseSnippet,
  multipleStatesSnippet,
  namedStateSnippet,
  nestedObjectSnippet,
  numberCounterSnippet,
  objectStateSnippet,
  primitiveStateSnippet,
  stringStateHtmlSnippet,
  stringStateSnippet,
} from "@/projects/usewatch-js/snippets/examples"

type ExampleCodeBlock = {
  title: string
  code: string
  language: string
  description?: string
}

type InteractiveExamplePageProps = {
  title: string
  description: string
  demo: ReactNode
  notes?: ReactNode
  codeBlocks: ExampleCodeBlock[]
}

function InteractiveExamplePage({ title, description, demo, notes, codeBlocks }: InteractiveExamplePageProps) {
  return (
    <DocPage groupTitle="Examples" title={title} description={description}>
      {demo}

      <DocSection title="Implementation" description="Live demo above, complementary source below.">
        <div className="space-y-4">
          {codeBlocks.map((block) => (
            <DemoCode
              key={block.title}
              title={block.title}
              language={block.language}
              code={block.code}
              description={block.description}
            />
          ))}
        </div>
      </DocSection>

      {notes ? (
        <div className="rounded-lg border border-cyan-300 bg-cyan-50 px-4 py-3 text-sm text-cyan-900 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
          {notes}
        </div>
      ) : null}
    </DocPage>
  )
}

export function PrimitiveStatePage() {
  return (
    <InteractiveExamplePage
      title="Primitive State"
      description="A minimal primitive state with visible controls and live output."
      demo={<PrimitiveCounterDemo />}
      codeBlocks={[
        {
          title: "Primitive state",
          language: "ts",
          code: primitiveStateSnippet,
        },
      ]}
      notes="Use plain setState(value) when you only need a local reactive value."
    />
  )
}

export function NumberCounterPage() {
  return (
    <InteractiveExamplePage
      title="Number Counter"
      description="A named numeric state with configurable increments and shared output."
      demo={<NumberCounterDemo />}
      codeBlocks={[
        {
          title: "Number counter",
          language: "ts",
          code: numberCounterSnippet,
        },
      ]}
      notes="This example uses a named state inside an isolated context so the same key can be reused predictably."
    />
  )
}

export function StringStatePage() {
  return (
    <InteractiveExamplePage
      title="String State"
      description="A real-time text input bound to reactive state with immediate visual feedback."
      demo={<StringStateDemo />}
      codeBlocks={[
        {
          title: "String state",
          language: "ts",
          code: stringStateSnippet,
        },
        {
          title: "HTML + JS equivalent",
          language: "html",
          code: stringStateHtmlSnippet,
          description: "Single-block version for docs where a standalone DOM example is easier to scan.",
        },
      ]}
      notes="The live text field above is the primary example. The HTML + JS snippet is complementary."
    />
  )
}

export function BooleanTogglePage() {
  return (
    <InteractiveExamplePage
      title="Boolean Toggle"
      description="A checkbox drives a boolean state and a visible status badge."
      demo={<BooleanStateDemo />}
      codeBlocks={[
        {
          title: "Boolean toggle",
          language: "ts",
          code: booleanToggleSnippet,
        },
      ]}
    />
  )
}

export function ArrayStatePage() {
  return (
    <InteractiveExamplePage
      title="Array State"
      description="Add items through an input and render the resulting reactive array visually."
      demo={<ArrayStateDemo />}
      codeBlocks={[
        {
          title: "Array state",
          language: "ts",
          code: arrayStateSnippet,
        },
      ]}
      notes="Replacing the array with a new array keeps updates explicit while the live list makes the result easy to read."
    />
  )
}

export function ObjectStatePage() {
  return (
    <InteractiveExamplePage
      title="Object State"
      description="Small form controls mutate a reactive object and update a structured preview in real time."
      demo={<ObjectStateDemo />}
      codeBlocks={[
        {
          title: "Object state",
          language: "ts",
          code: objectStateSnippet,
        },
      ]}
    />
  )
}

export function NestedObjectDeepReactivityPage() {
  return (
    <InteractiveExamplePage
      title="Nested Object / Deep Reactivity"
      description="Nested writes update the UI without replacing the whole object."
      demo={<NestedObjectDemo />}
      codeBlocks={[
        {
          title: "Nested object",
          language: "ts",
          code: nestedObjectSnippet,
        },
      ]}
      notes="This is where usewatch-js feels different from a shallow container: deep property writes still notify subscribers."
    />
  )
}

export function NamedStatePage() {
  return (
    <InteractiveExamplePage
      title="Named State"
      description="Two controls reuse the same named state and stay in sync."
      demo={<NamedStateDemo />}
      codeBlocks={[
        {
          title: "Named state",
          language: "ts",
          code: namedStateSnippet,
        },
      ]}
      notes="Prefer named state when multiple modules or screens should talk to the same registry entry."
    />
  )
}

export function ContextIsolationPage() {
  return (
    <InteractiveExamplePage
      title="Context Isolation"
      description="The same state key can exist in different contexts without collisions."
      demo={<ContextIsolationDemo />}
      codeBlocks={[
        {
          title: "Context isolation",
          language: "ts",
          code: contextIsolationExampleSnippet,
        },
      ]}
      notes="createContext is the right tool when the default global registry is too broad."
    />
  )
}

export function WatchingMultipleStatesPage() {
  return (
    <InteractiveExamplePage
      title="Watching Multiple States"
      description="Multiple inputs update one shared derived output."
      demo={<WatchingMultipleStatesDemo />}
      codeBlocks={[
        {
          title: "Watching multiple states",
          language: "ts",
          code: multipleStatesSnippet,
        },
      ]}
      notes="This keeps derived output explicit without wiring separate subscriptions."
    />
  )
}

export function ImmediateFalsePage() {
  return (
    <InteractiveExamplePage
      title="Immediate False"
      description="Compare a watcher that fires immediately with one that waits for the first real change."
      demo={<ImmediateFalseDemo />}
      codeBlocks={[
        {
          title: "immediate: false",
          language: "ts",
          code: immediateFalseSnippet,
        },
      ]}
      notes="Use immediate: false when the initial callback would be noisy or redundant."
    />
  )
}

export function CrossTabSyncPage() {
  return (
    <InteractiveExamplePage
      title="Cross-Tab Sync"
      description="A shared notes feed synchronized across tabs through a named state with syncTabs enabled."
      demo={<CrossTabSyncDemo />}
      codeBlocks={[
        {
          title: "Shared notes feed",
          language: "ts",
          code: crossTabSyncSnippet,
        },
        {
          title: "HTML + JS equivalent",
          language: "html",
          code: crossTabSyncHtmlSnippet,
          description: "Single-block version of the shared feed flow for standalone documentation contexts.",
        },
      ]}
      notes="Open the same route in a second tab, submit a note in one tab, and the feed in the other tab should update immediately."
    />
  )
}
