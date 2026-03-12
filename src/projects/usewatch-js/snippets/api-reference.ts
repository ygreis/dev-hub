import type { MethodTableItem } from "@/components/docs/layout/MethodTable"

export const setStateSnippet = `import { setState } from "usewatch-js";

const localCount = setState(0);
const session = setState("session", { loggedIn: false });
const syncedNotes = setState("notes", [], { syncTabs: true });

localCount.value += 1;
session.value = { loggedIn: true };`

export const useStateSnippet = `import { useState } from "usewatch-js";

const settings = useState("settings", {
  theme: "light",
  compactMode: false,
});

settings.value.theme = "dark";`

export const useWatchSnippet = `import { setState, useWatch } from "usewatch-js";

const search = setState("");
const page = setState(1);

const stop = useWatch((searchState, pageState) => {
  console.log(searchState.value, pageState.value);
}, [search, page], { immediate: false });

search.value = "reactive state";
page.value = 2;

stop();`

export const createContextSnippet = `import { createContext } from "usewatch-js";

const dashboard = createContext();

const filter = dashboard.useState("filter", "all");
dashboard.useWatch((state) => {
  console.log(state.value);
}, [filter]);`

export const setStateOptionsSnippet = `import { setState } from "usewatch-js";

const draft = setState(
  "draft-form",
  { title: "", assignee: "" },
  {
    deep: true,
    syncTabs: true,
    channelName: "draft-sync",
  },
);`

export const useWatchOptionsSnippet = `import { setState, useWatch } from "usewatch-js";

const counter = setState(0);

useWatch((state) => {
  console.log("changed:", state.value);
}, [counter], { immediate: false });`

export const statePropsSnippet = `import type { StateProps } from "usewatch-js";

const state: StateProps<number> = {
  value: 1,
  hasChanged: false,
};

console.log(state.value);`

export const useWatchContextSnippet = `import { createContext, type UseWatchContext } from "usewatch-js";

const workspace: UseWatchContext = createContext();
const inbox = workspace.useState("inbox", []);

workspace.useWatch((state) => {
  console.log(state.value.length);
}, [inbox]);`

export const apiSummaryTable: MethodTableItem[] = [
  {
    name: "setState",
    signature: "setState(value, options?) / setState(key, value, options?)",
    description: "Creates a local state or creates/updates a named state in the current context.",
  },
  {
    name: "useState",
    signature: "useState(key, initialValue?, options?)",
    description:
      "Retrieves a named state from the registry or creates it if it does not exist yet.",
  },
  {
    name: "useWatch",
    signature: "useWatch(callback, states, options?) => () => void",
    description: "Subscribes to one or more states and returns an unsubscribe function.",
  },
  {
    name: "createContext",
    signature: "createContext() => UseWatchContext",
    description:
      "Creates an isolated registry with its own setState, useState and useWatch functions.",
  },
]

export const typeSummaryTable: MethodTableItem[] = [
  {
    name: "SetStateOptions",
    signature: "{ syncTabs?: boolean; deep?: boolean; channelName?: string }",
    description: "Controls deep reactivity and optional BroadcastChannel synchronization.",
  },
  {
    name: "UseWatchOptions",
    signature: "{ immediate?: boolean }",
    description: "Controls whether a watcher runs once immediately after subscription.",
  },
  {
    name: "StateProps<T>",
    signature: "{ value: T; hasChanged: boolean; ... }",
    description: "Reactive state object returned by setState and useState.",
  },
  {
    name: "UseWatchContext",
    signature: "{ setState; useState; useWatch }",
    description: "Public API surface returned by createContext.",
  },
]
