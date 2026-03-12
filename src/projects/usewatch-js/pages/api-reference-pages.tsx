import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import { MethodTable } from "@/components/docs/layout/MethodTable"
import {
  apiSummaryTable,
  createContextSnippet,
  setStateOptionsSnippet,
  setStateSnippet,
  statePropsSnippet,
  typeSummaryTable,
  useStateSnippet,
  useWatchContextSnippet,
  useWatchOptionsSnippet,
  useWatchSnippet,
} from "@/projects/usewatch-js/snippets/api-reference"

export function SetStatePage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="setState"
      description="Creates a local state or creates and updates a named state in the current context."
    >
      <DocSection description="Overloads: setState(value, options?) and setState(key, value, options?).">
        <MethodTable items={apiSummaryTable.filter((item) => item.name === "setState")} />
      </DocSection>
      <DocSection title="Behavior">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <code>setState(value)</code> creates an anonymous state with no registry key.
          </li>
          <li>
            <code>setState(key, value)</code> creates a named state or updates the existing one for
            that key.
          </li>
          <li>
            When a named state already exists, the same state instance is reused and its value is
            updated.
          </li>
        </ul>
      </DocSection>
      <DocSection>
        <CodeSnippet title="setState" language="ts" code={setStateSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function UseStatePage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="useState"
      description="Looks up a named state in the current context registry and creates it if needed."
    >
      <DocSection description="Signature: useState(key, initialValue?, options?).">
        <MethodTable items={apiSummaryTable.filter((item) => item.name === "useState")} />
      </DocSection>
      <DocSection title="Behavior">
        <p className="text-slate-700 dark:text-slate-300">
          Unlike <code>setState(value)</code>, <code>useState</code> never creates anonymous state.
          It always works with a named key in the current registry.
        </p>
      </DocSection>
      <DocSection>
        <CodeSnippet title="useState" language="ts" code={useStateSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function UseWatchPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="useWatch"
      description="Subscribes to one or more states and returns a cleanup function."
    >
      <DocSection description="Signature: useWatch(callback, states, options?) => () => void.">
        <MethodTable items={apiSummaryTable.filter((item) => item.name === "useWatch")} />
      </DocSection>
      <DocSection title="Behavior">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            The callback receives the state objects passed in <code>states</code>, preserving order.
          </li>
          <li>By default it runs immediately once after registration.</li>
          <li>The returned function unsubscribes the watcher from every state in the list.</li>
        </ul>
      </DocSection>
      <DocSection>
        <CodeSnippet title="useWatch" language="ts" code={useWatchSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function CreateContextPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="createContext"
      description="Creates an isolated registry with its own named states, watchers and tab-sync channels."
    >
      <DocSection description="Signature: createContext() => UseWatchContext.">
        <MethodTable items={apiSummaryTable.filter((item) => item.name === "createContext")} />
      </DocSection>
      <DocSection title="Behavior">
        <p className="text-slate-700 dark:text-slate-300">
          This is useful when multiple parts of an application should not reuse the same named keys
          or share the same BroadcastChannel lifecycle.
        </p>
      </DocSection>
      <DocSection>
        <CodeSnippet title="createContext" language="ts" code={createContextSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function SetStateOptionsPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="SetStateOptions"
      description="Controls deep reactivity and optional synchronization between tabs."
    >
      <DocSection description="Fields: syncTabs?, deep?, channelName?.">
        <MethodTable items={typeSummaryTable.filter((item) => item.name === "SetStateOptions")} />
      </DocSection>
      <DocSection title="Notes">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <code>deep</code> defaults to <code>true</code>.
          </li>
          <li>
            <code>syncTabs</code> defaults to <code>false</code>.
          </li>
          <li>
            <code>channelName</code> defaults to <code>"usewatch-js"</code>.
          </li>
        </ul>
      </DocSection>
      <DocSection>
        <CodeSnippet title="SetStateOptions" language="ts" code={setStateOptionsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function UseWatchOptionsPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="UseWatchOptions"
      description="Controls immediate execution when a watcher is registered."
    >
      <DocSection description="Fields: immediate?.">
        <MethodTable items={typeSummaryTable.filter((item) => item.name === "UseWatchOptions")} />
      </DocSection>
      <DocSection title="Notes">
        <p className="text-slate-700 dark:text-slate-300">
          The TSDoc and implementation both indicate that watchers run immediately by default. Pass{" "}
          <code>{`{ immediate: false }`}</code> when you only want future changes.
        </p>
      </DocSection>
      <DocSection>
        <CodeSnippet title="UseWatchOptions" language="ts" code={useWatchOptionsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function StatePropsPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="StateProps"
      description="Reactive state object returned by setState and useState."
    >
      <DocSection description="Public shape plus internal metadata fields used by the library.">
        <MethodTable items={typeSummaryTable.filter((item) => item.name === "StateProps<T>")} />
      </DocSection>
      <DocSection title="Important Fields">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <code>value</code> is the reactive public value.
          </li>
          <li>
            <code>hasChanged</code> is toggled while watchers are being notified.
          </li>
          <li>
            Internal fields such as <code>__key</code>, <code>__syncTabs</code> and{" "}
            <code>__channelName</code> support registry and sync behavior.
          </li>
        </ul>
      </DocSection>
      <DocSection>
        <CodeSnippet title="StateProps" language="ts" code={statePropsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function UseWatchContextPage() {
  return (
    <DocPage
      groupTitle="API Reference"
      title="UseWatchContext"
      description="Public API surface returned by createContext."
    >
      <DocSection description="Contains context-scoped setState, useState and useWatch functions.">
        <MethodTable items={typeSummaryTable.filter((item) => item.name === "UseWatchContext")} />
      </DocSection>
      <DocSection title="Why It Matters">
        <p className="text-slate-700 dark:text-slate-300">
          The explicit context type makes it clear that isolation happens at the API boundary, not
          just at the stored value level.
        </p>
      </DocSection>
      <DocSection>
        <CodeSnippet title="UseWatchContext" language="ts" code={useWatchContextSnippet} />
      </DocSection>
    </DocPage>
  )
}
