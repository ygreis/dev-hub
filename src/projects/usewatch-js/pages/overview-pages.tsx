import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"

export function IntroductionOverviewPage() {
  return (
    <DocPage
      groupTitle="Overview"
      title="Introduction / Overview"
      description="usewatch-js is a minimal reactive state library for vanilla JavaScript."
    >
      <DocSection description="The public API is intentionally small: setState, useState, useWatch and createContext.">
        <p className="text-slate-700 dark:text-slate-300">
          The library focuses on a single idea: hold a value in a reactive state object and notify
          subscribers whenever that value changes.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          It works in plain JavaScript without UI bindings. You can use it for DOM code, widgets,
          dashboards, browser tools or any small state layer where explicit updates are enough.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Named states can live in a registry, contexts can isolate independent registries, nested
          objects can stay reactive, and optional tab synchronization can mirror named state updates
          across browser tabs.
        </p>
      </DocSection>

      <DocSection title="Public Surface">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <code>setState</code> creates local state and also creates or updates named state.
          </li>
          <li>
            <code>useState</code> reads a named state from the current context registry and creates
            it if missing.
          </li>
          <li>
            <code>useWatch</code> subscribes to one or more states and returns an unsubscribe
            function.
          </li>
          <li>
            <code>createContext</code> creates an isolated registry for named states, watchers and
            tab-sync channels.
          </li>
        </ul>
      </DocSection>

      <DocSection title="When It Fits Well">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Plain JavaScript apps
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Good fit for small to medium browser codebases that need a predictable state layer
              without framework glue.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Reactive DOM updates
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Watchers make it straightforward to rerender small fragments or recompute derived
              values on change.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">
              Scoped state islands
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Contexts help when separate parts of the app should not share the same named state
              registry.
            </p>
          </div>
        </div>
      </DocSection>
    </DocPage>
  )
}
