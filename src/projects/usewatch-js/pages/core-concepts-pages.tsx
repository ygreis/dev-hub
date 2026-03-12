import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import {
  contextIsolationSnippet,
  deepReactivitySnippet,
  localVsNamedSnippet,
  syncTabsSnippet,
} from "@/projects/usewatch-js/snippets/core-concepts"

export function LocalAndNamedStatePage() {
  return (
    <DocPage
      groupTitle="Core Concepts"
      title="Local and Named State"
      description="usewatch-js supports anonymous local state and registry-backed named state."
    >
      <DocSection description="Use local state for isolated values and named state for shared lookups.">
        <CodeSnippet title="Local vs named" language="ts" code={localVsNamedSnippet} />
      </DocSection>

      <DocSection title="Why Both Exist">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            Local state created with <code>setState(value)</code> is simple and disposable.
          </li>
          <li>
            Named state created with <code>setState(key, value)</code> or <code>useState(key)</code>{" "}
            stays addressable by key.
          </li>
          <li>
            Reusing the same named key returns the same state instance inside the current context,
            which makes shared updates straightforward.
          </li>
        </ul>
      </DocSection>
    </DocPage>
  )
}

export function WatchersAndContextsPage() {
  return (
    <DocPage
      groupTitle="Core Concepts"
      title="Watchers and Contexts"
      description="Watchers react to changes, and contexts define where named states live."
    >
      <DocSection description="Contexts keep registries isolated instead of sharing the default top-level one.">
        <CodeSnippet title="Context isolation" language="ts" code={contextIsolationSnippet} />
      </DocSection>

      <DocSection title="Reactive Observers">
        <p className="text-slate-700 dark:text-slate-300">
          <code>useWatch</code> subscribes a callback to one or more states. The callback receives
          the same state objects, in the same order, every time a subscribed state changes.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          This keeps reactive code explicit. You subscribe where you need it and dispose it with the
          returned cleanup function.
        </p>
      </DocSection>
    </DocPage>
  )
}

export function DeepReactivityAndSyncPage() {
  return (
    <DocPage
      groupTitle="Core Concepts"
      title="Deep Reactivity and Sync"
      description="Nested objects are reactive by default, and named states can optionally sync across tabs."
    >
      <DocSection description="Nested writes can trigger watchers when deep reactivity is enabled.">
        <CodeSnippet title="Deep reactivity" language="ts" code={deepReactivitySnippet} />
      </DocSection>

      <DocSection
        title="Optional Cross-Tab Sync"
        description="Tab synchronization is opt-in and only applies to named states."
      >
        <CodeSnippet title="syncTabs" language="ts" code={syncTabsSnippet} />
        <p className="text-slate-700 dark:text-slate-300">
          Internally the library uses <code>BroadcastChannel</code> when available. The state value
          is converted to a plain serializable shape before posting to the channel.
        </p>
      </DocSection>
    </DocPage>
  )
}
