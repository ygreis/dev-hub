import { useEffect, useMemo, useState } from "react"
import {
  createContext as createUsewatchContext,
  setState as createUsewatchState,
  useWatch as observeStates,
  type StateProps,
  type UseWatchOptions,
} from "usewatch-js"

import { DemoActions, DemoFrame, DemoOutput, DemoPreview } from "@/components/docs/demo/DemoFrame"
import { StatePreview } from "@/components/docs/layout/StatePreview"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const inputClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"

const textareaClassName =
  "min-h-24 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"

const selectClassName =
  "rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"

function toPlainValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

function useUsewatchRender(states: StateProps[], options?: UseWatchOptions) {
  const [, setVersion] = useState(0)

  useEffect(() => {
    return observeStates(() => {
      setVersion((current) => current + 1)
    }, states, options)
  }, [options?.immediate, states])
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="space-y-1.5">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      {children}
    </label>
  )
}

export function PrimitiveCounterDemo() {
  const counter = useMemo(() => createUsewatchState(0), [])
  const watchedStates = useMemo(() => [counter], [counter])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Primitive counter" description="Local anonymous state with visual output and explicit actions.">
      <DemoPreview title="Preview" description="Increment, decrement or reset the primitive number state.">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/60">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Current value</p>
              <p className="text-3xl font-bold text-slate-950 dark:text-slate-100">{counter.value}</p>
            </div>
            <Badge variant="outline">anonymous state</Badge>
          </div>
          <DemoActions>
            <Button type="button" variant="outline" onClick={() => (counter.value -= 1)}>
              Decrement
            </Button>
            <Button type="button" onClick={() => (counter.value += 1)}>
              Increment
            </Button>
            <Button type="button" variant="secondary" onClick={() => (counter.value = 0)}>
              Reset
            </Button>
          </DemoActions>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="State snapshot" value={{ value: counter.value, hasChanged: counter.hasChanged }} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function NumberCounterDemo() {
  const context = useMemo(() => createUsewatchContext(), [])
  const counter = useMemo(() => context.useState("counter-demo", 10), [context])
  const watchedStates = useMemo(() => [counter], [counter])
  const [step, setStep] = useState(5)

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Number counter" description="Named numeric state with configurable step and shared output.">
      <DemoPreview title="Preview" description="This counter uses a named state inside an isolated context.">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/60">
            <p className="text-sm text-slate-500 dark:text-slate-400">Shared count</p>
            <p className="text-4xl font-bold text-slate-950 dark:text-slate-100">{counter.value}</p>
          </div>
          <Field label="Step">
            <select value={step} onChange={(event) => setStep(Number(event.target.value))} className={selectClassName}>
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </Field>
        </div>
        <DemoActions>
          <Button type="button" variant="outline" onClick={() => (counter.value -= step)}>
            -{step}
          </Button>
          <Button type="button" onClick={() => (counter.value += step)}>
            +{step}
          </Button>
          <Button type="button" variant="secondary" onClick={() => (counter.value = 10)}>
            Restore default
          </Button>
        </DemoActions>
      </DemoPreview>

      <DemoOutput title="Output">
        <div className="grid gap-3 md:grid-cols-2">
          <StatePreview title="Named state" value={{ value: counter.value, key: "counter-demo" }} />
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">Derived total</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Next increment would move the counter to <strong>{counter.value + step}</strong>.
            </p>
          </div>
        </div>
      </DemoOutput>
    </DemoFrame>
  )
}

export function StringStateDemo() {
  const query = useMemo(() => createUsewatchState(""), [])
  const watchedStates = useMemo(() => [query], [query])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="String state" description="Type in the field and watch the state update in real time.">
      <DemoPreview title="Preview" description="This is the required real-time text example.">
        <div className="space-y-4">
          <Field label="Search query">
            <input
              value={query.value}
              onChange={(event) => {
                query.value = event.target.value
              }}
              className={inputClassName}
              placeholder="Type here and see the output react immediately"
            />
          </Field>
          <div className="rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 px-4 py-3 text-sm text-cyan-900 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
            Live text: <strong>{query.value || "Nothing typed yet"}</strong>
          </div>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="String state" value={{ value: query.value, length: query.value.length }} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function BooleanStateDemo() {
  const enabled = useMemo(() => createUsewatchState(false), [])
  const watchedStates = useMemo(() => [enabled], [enabled])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Boolean state" description="A checkbox drives a reactive boolean state and a visual status badge.">
      <DemoPreview title="Preview">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={enabled.value}
              onChange={(event) => {
                enabled.value = event.target.checked
              }}
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400 dark:border-slate-700"
            />
            Enable notifications
          </label>
          <Badge variant={enabled.value ? "default" : "outline"}>{enabled.value ? "Enabled" : "Disabled"}</Badge>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="Boolean state" value={{ value: enabled.value, status: enabled.value ? "on" : "off" }} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function ArrayStateDemo() {
  const items = useMemo(() => createUsewatchState<string[]>(["Read docs"]), [])
  const watchedStates = useMemo(() => [items], [items])
  const [draft, setDraft] = useState("")

  useUsewatchRender(watchedStates)

  function addItem() {
    const next = draft.trim()

    if (!next) {
      return
    }

    items.value = [...items.value, next]
    setDraft("")
  }

  return (
    <DemoFrame title="Array state" description="Add items to a reactive array and render them as a real list.">
      <DemoPreview title="Preview">
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} className={inputClassName} placeholder="Add a new task" />
          <Button type="button" onClick={addItem}>
            Add item
          </Button>
        </div>
        <ul className="space-y-2">
          {items.value.map((item, index) => (
            <li key={`${item}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950/60">
              {item}
            </li>
          ))}
        </ul>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="Array state" value={toPlainValue(items.value)} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function ObjectStateDemo() {
  const profile = useMemo(
    () =>
      createUsewatchState({
        name: "Ada",
        role: "Engineer",
        remote: true,
      }),
    [],
  )
  const watchedStates = useMemo(() => [profile], [profile])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Object state" description="Small form controls mutate the object and the preview updates immediately.">
      <DemoPreview title="Preview">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name">
            <input
              value={profile.value.name}
              onChange={(event) => {
                profile.value.name = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
          <Field label="Role">
            <input
              value={profile.value.role}
              onChange={(event) => {
                profile.value.role = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
        </div>
        <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={profile.value.remote}
            onChange={(event) => {
              profile.value.remote = event.target.checked
            }}
            className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400 dark:border-slate-700"
          />
          Remote teammate
        </label>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="Object state" value={toPlainValue(profile.value)} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function NestedObjectDemo() {
  const workspace = useMemo(
    () =>
      createUsewatchState({
        member: {
          profile: {
            name: "Maya",
            title: "Design lead",
          },
        },
        preferences: {
          notifications: {
            email: true,
            push: false,
          },
        },
      }),
    [],
  )
  const watchedStates = useMemo(() => [workspace], [workspace])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Nested object" description="Deep property writes trigger UI updates without replacing the whole object.">
      <DemoPreview title="Preview">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Member name">
            <input
              value={workspace.value.member.profile.name}
              onChange={(event) => {
                workspace.value.member.profile.name = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
          <Field label="Job title">
            <input
              value={workspace.value.member.profile.title}
              onChange={(event) => {
                workspace.value.member.profile.title = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={workspace.value.preferences.notifications.email}
              onChange={(event) => {
                workspace.value.preferences.notifications.email = event.target.checked
              }}
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400 dark:border-slate-700"
            />
            Email notifications
          </label>
          <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={workspace.value.preferences.notifications.push}
              onChange={(event) => {
                workspace.value.preferences.notifications.push = event.target.checked
              }}
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400 dark:border-slate-700"
            />
            Push notifications
          </label>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="Deep reactive state" value={toPlainValue(workspace.value)} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function NamedStateDemo() {
  const context = useMemo(() => createUsewatchContext(), [])
  const leftDraft = useMemo(() => context.useState("shared-draft", "Shared named state"), [context])
  const rightDraft = useMemo(() => context.useState("shared-draft"), [context])
  const watchedStates = useMemo(() => [leftDraft], [leftDraft])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Named state reuse" description="Two controls read the same named state from one isolated context.">
      <DemoPreview title="Preview">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Editor A">
            <input
              value={leftDraft.value}
              onChange={(event) => {
                leftDraft.value = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
          <Field label="Editor B">
            <input
              value={rightDraft.value}
              onChange={(event) => {
                rightDraft.value = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-300">
          Same object instance: <strong>{String(leftDraft === rightDraft)}</strong>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <StatePreview title="Named state" value={{ key: "shared-draft", value: leftDraft.value }} />
      </DemoOutput>
    </DemoFrame>
  )
}

export function ContextIsolationDemo() {
  const adminContext = useMemo(() => createUsewatchContext(), [])
  const publicContext = useMemo(() => createUsewatchContext(), [])
  const adminNotice = useMemo(() => adminContext.useState("notice", "Deploy at 18:00"), [adminContext])
  const publicNotice = useMemo(() => publicContext.useState("notice", "Spring release is live"), [publicContext])
  const watchedStates = useMemo(() => [adminNotice, publicNotice], [adminNotice, publicNotice])

  useUsewatchRender(watchedStates)

  return (
    <DemoFrame title="Context isolation" description="Two contexts can reuse the same key without leaking updates between registries.">
      <DemoPreview title="Preview" description="Both fields use the same key, but each context keeps its own value.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Admin context">
            <input
              value={adminNotice.value}
              onChange={(event) => {
                adminNotice.value = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
          <Field label="Public context">
            <input
              value={publicNotice.value}
              onChange={(event) => {
                publicNotice.value = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-300">
            <p className="font-medium text-slate-900 dark:text-slate-100">Admin preview</p>
            <p className="mt-2">{adminNotice.value}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-300">
            <p className="font-medium text-slate-900 dark:text-slate-100">Public preview</p>
            <p className="mt-2">{publicNotice.value}</p>
          </div>
        </div>
      </DemoPreview>

      <DemoOutput title="Output">
        <div className="grid gap-3 md:grid-cols-2">
          <StatePreview title="Admin context" value={{ key: "notice", value: adminNotice.value }} />
          <StatePreview title="Public context" value={{ key: "notice", value: publicNotice.value }} />
        </div>
      </DemoOutput>
    </DemoFrame>
  )
}

export function WatchingMultipleStatesDemo() {
  const query = useMemo(() => createUsewatchState("open issues"), [])
  const page = useMemo(() => createUsewatchState(1), [])
  const onlyAssigned = useMemo(() => createUsewatchState(false), [])
  const watchedStates = useMemo(() => [query, page, onlyAssigned], [onlyAssigned, page, query])
  const [summary, setSummary] = useState("")

  useUsewatchRender(watchedStates)

  useEffect(() => {
    return observeStates((queryState, pageState, assignedState) => {
      const segments = [
        `query="${queryState.value}"`,
        `page=${pageState.value}`,
        assignedState.value ? "assigned only" : "all tasks",
      ]
      setSummary(segments.join(" | "))
    }, watchedStates)
  }, [watchedStates])

  return (
    <DemoFrame title="Watching multiple states" description="Several state inputs can drive one shared derived output.">
      <DemoPreview title="Preview">
        <div className="grid gap-4 md:grid-cols-[1fr_140px]">
          <Field label="Query">
            <input
              value={query.value}
              onChange={(event) => {
                query.value = event.target.value
              }}
              className={inputClassName}
            />
          </Field>
          <Field label="Page">
            <input
              type="number"
              min={1}
              value={page.value}
              onChange={(event) => {
                page.value = Number(event.target.value || 1)
              }}
              className={inputClassName}
            />
          </Field>
        </div>
        <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={onlyAssigned.value}
            onChange={(event) => {
              onlyAssigned.value = event.target.checked
            }}
            className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400 dark:border-slate-700"
          />
          Show only assigned tasks
        </label>
      </DemoPreview>

      <DemoOutput title="Combined output">
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          {summary}
        </div>
      </DemoOutput>
    </DemoFrame>
  )
}

export function ImmediateFalseDemo() {
  const filter = useMemo(() => createUsewatchState("all"), [])
  const watchedStates = useMemo(() => [filter], [filter])
  const [immediateLog, setImmediateLog] = useState<string[]>([])
  const [delayedLog, setDelayedLog] = useState<string[]>([])

  useUsewatchRender(watchedStates)

  useEffect(() => {
    setImmediateLog([])
    setDelayedLog([])

    const stopImmediate = observeStates((state) => {
      const entry = `immediate -> ${state.value}`
      setImmediateLog((current) => (current.at(-1) === entry ? current : [...current, entry]))
    }, watchedStates)

    const stopDelayed = observeStates(
      (state) => {
        const entry = `delayed -> ${state.value}`
        setDelayedLog((current) => (current.at(-1) === entry ? current : [...current, entry]))
      },
      watchedStates,
      { immediate: false },
    )

    return () => {
      stopImmediate()
      stopDelayed()
    }
  }, [watchedStates])

  return (
    <DemoFrame title="Immediate false" description="Compare the default watcher behavior with immediate: false.">
      <DemoPreview title="Preview">
        <Field label="Current filter">
          <select
            value={filter.value}
            onChange={(event) => {
              filter.value = event.target.value
            }}
            className={selectClassName}
          >
            <option value="all">all</option>
            <option value="active">active</option>
            <option value="completed">completed</option>
          </select>
        </Field>
      </DemoPreview>

      <DemoOutput title="Watcher logs" description="The top watcher fires immediately on subscription. The bottom one waits for the first real change.">
        <div className="grid gap-4 md:grid-cols-2">
          <StatePreview title="Default immediate" value={immediateLog} />
          <StatePreview title="immediate: false" value={delayedLog} />
        </div>
      </DemoOutput>
    </DemoFrame>
  )
}

type FeedItem = {
  id: number
  author: string
  message: string
  createdAt: string
}

export function CrossTabSyncDemo() {
  const context = useMemo(() => createUsewatchContext(), [])
  const feed = useMemo(
    () =>
      context.useState<FeedItem[]>("dev-hub-notes-feed", [], {
        syncTabs: true,
        deep: true,
        channelName: "dev-hub-usewatch-notes-feed",
      }),
    [context],
  )
  const watchedStates = useMemo(() => [feed], [feed])
  const [author, setAuthor] = useState("Maya")
  const [message, setMessage] = useState("")
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null)

  useUsewatchRender(watchedStates)

  function submitItem() {
    const nextAuthor = author.trim()
    const nextMessage = message.trim()

    if (!nextAuthor || !nextMessage) {
      return
    }

    feed.value = [
      {
        id: Date.now(),
        author: nextAuthor,
        message: nextMessage,
        createdAt: new Date().toLocaleTimeString(),
      },
      ...feed.value,
    ]

    setMessage("")
  }

  function clearFeed() {
    feed.value = []
    setSelectedItem(null)
  }

  return (
    <DemoFrame title="Cross-tab sync" description="A shared notes feed synchronized across tabs through syncTabs: true.">
      <DemoPreview title="Preview" description="Open the same page in another tab, submit a note here, and the second tab should update immediately.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Author">
            <input value={author} onChange={(event) => setAuthor(event.target.value)} className={inputClassName} />
          </Field>
          <Field label="Message">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={textareaClassName}
              placeholder="Share a quick update"
            />
          </Field>
        </div>
        <DemoActions>
          <Button type="button" onClick={submitItem}>
            Send to shared feed
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button" variant="outline" disabled={feed.value.length === 0}>
                Clear feed
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear shared feed?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes all notes from the synchronized state in this tab and any other open tab using the same demo.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={clearFeed}>Clear notes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DemoActions>
        <div className="rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 px-4 py-3 text-sm text-cyan-900 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
          Tip: duplicate this route in a second browser tab to see the feed sync in real time.
        </div>
      </DemoPreview>

      <DemoOutput title="Shared feed" description="Click any note to inspect its details in a dialog.">
        <div className="space-y-3">
          {feed.value.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
              No notes yet. Submit a message above and watch it appear here and in other tabs.
            </div>
          ) : (
            feed.value.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-cyan-400 hover:bg-cyan-50/40 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-cyan-950/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900 dark:text-slate-100">{item.author}</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.createdAt}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.message}</p>
              </button>
            ))
          )}
        </div>
        <StatePreview title="Synchronized state" value={toPlainValue(feed.value)} />
      </DemoOutput>

      <Dialog open={selectedItem !== null} onOpenChange={(open) => setSelectedItem(open ? selectedItem : null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedItem?.author ?? "Note details"}</DialogTitle>
            <DialogDescription>Details for the selected synchronized feed item.</DialogDescription>
          </DialogHeader>
          {selectedItem ? (
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p>
                <strong>Message:</strong> {selectedItem.message}
              </p>
              <p>
                <strong>Created at:</strong> {selectedItem.createdAt}
              </p>
              <p>
                <strong>Record id:</strong> {selectedItem.id}
              </p>
            </div>
          ) : null}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setSelectedItem(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DemoFrame>
  )
}
