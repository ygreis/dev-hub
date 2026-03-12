export const usewatchJsPublishedVersion = "1.1.0"

type SymbolKind = "Function" | "Type Alias"

type DocField = {
  name: string
  type: string
  description: string
}

type DocMethod = {
  name: string
  signature: string
  description: string
}

type DocParam = {
  name: string
  type: string
  description: string
}

type DocTypeParameter = {
  name: string
  constraint?: string
  description: string
}

type DocReturns = {
  type: string
  description: string
}

type DocExample = {
  title: string
  code: string
}

type DocOverload = {
  label: string
  signature: string
  description: string
  params?: DocParam[]
  returns?: DocReturns
  typeParameters?: DocTypeParameter[]
  remarks?: string[]
  examples?: DocExample[]
}

export type UsewatchDetailedDoc = {
  slug: string
  name: string
  kind: SymbolKind
  summary: string
  signature: string
  definedIn: string[]
  remarks?: string[]
  examples?: DocExample[]
  params?: DocParam[]
  returns?: DocReturns
  typeParameters?: DocTypeParameter[]
  overloads?: DocOverload[]
  properties?: DocField[]
  methods?: DocMethod[]
  relatedSymbols?: string[]
}

export const usewatchDetailedDocOrder = [
  "set-state-options",
  "use-watch-options",
  "state-props",
  "use-watch-callback",
  "use-watch-context",
  "create-context",
  "set-state",
  "use-state",
  "use-watch",
] as const

export const usewatchDetailedDocs: Record<
  (typeof usewatchDetailedDocOrder)[number],
  UsewatchDetailedDoc
> = {
  "set-state-options": {
    slug: "set-state-options",
    name: "SetStateOptions",
    kind: "Type Alias",
    summary: "Options used when creating or updating a reactive state.",
    signature: `type SetStateOptions = {
  syncTabs?: boolean;
  deep?: boolean;
  channelName?: string;
}`,
    definedIn: ["src/index.ts:22"],
    remarks: [
      "These options control deep reactivity and optional synchronization between tabs.",
      "Named states can opt into BroadcastChannel updates by enabling syncTabs.",
    ],
    properties: [
      {
        name: "syncTabs",
        type: "boolean | undefined",
        description: "Enables optional BroadcastChannel synchronization for named states.",
      },
      {
        name: "deep",
        type: "boolean | undefined",
        description: "Controls whether nested objects are wrapped with deep reactive proxies.",
      },
      {
        name: "channelName",
        type: "string | undefined",
        description: "Overrides the BroadcastChannel name used when syncTabs is enabled.",
      },
    ],
    examples: [
      {
        title: "Disable deep reactivity",
        code: `const count = setState(0, { deep: false });`,
      },
      {
        title: "Configure tab sync",
        code: `const theme = setState("theme", "dark", {
  syncTabs: true,
  channelName: "usewatch-theme",
});`,
      },
    ],
    relatedSymbols: ["set-state", "use-state", "state-props"],
  },
  "use-watch-options": {
    slug: "use-watch-options",
    name: "UseWatchOptions",
    kind: "Type Alias",
    summary: "Options used when subscribing with useWatch.",
    signature: `type UseWatchOptions = {
  immediate?: boolean;
}`,
    definedIn: ["src/index.ts:42"],
    remarks: ["By default, watchers run immediately once after subscription."],
    properties: [
      {
        name: "immediate",
        type: "boolean | undefined",
        description:
          "When false, the watcher skips the initial run and reacts only to later updates.",
      },
    ],
    examples: [
      {
        title: "Skip the immediate callback",
        code: `useWatch((state) => {
  console.log(state.value);
}, [count], { immediate: false });`,
      },
    ],
    relatedSymbols: ["use-watch", "use-watch-callback"],
  },
  "state-props": {
    slug: "state-props",
    name: "StateProps",
    kind: "Type Alias",
    summary: "A reactive state object returned by setState or useState.",
    signature: `type StateProps<T = any> = {
  value: T;
  hasChanged: boolean;
  watch?: Array<() => void>;
  __key?: string;
  __syncTabs?: boolean;
  __deep?: boolean;
  __channelName?: string;
  __fromBroadcast?: boolean;
}`,
    definedIn: ["src/index.ts:61"],
    typeParameters: [
      {
        name: "T",
        constraint: "any",
        description: "The current value type stored by the state.",
      },
    ],
    remarks: [
      "`value` is the public reactive value.",
      "Internal metadata fields are used by the library to track named states, deep reactivity and tab synchronization.",
    ],
    examples: [
      {
        title: "Reactive value access",
        code: `const counter = setState(0);
counter.value += 1;`,
      },
    ],
    properties: [
      {
        name: "value",
        type: "T",
        description: "Public reactive value exposed by the state object.",
      },
      {
        name: "hasChanged",
        type: "boolean",
        description: "Toggled while watchers are being notified of a change.",
      },
      {
        name: "watch",
        type: "Array<() => void> | undefined",
        description: "Internal watcher list used to store subscriptions for the state.",
      },
      {
        name: "__key",
        type: "string | undefined",
        description: "Internal registry key used when the state is named.",
      },
      {
        name: "__syncTabs",
        type: "boolean | undefined",
        description: "Internal flag indicating whether tab synchronization is enabled.",
      },
      {
        name: "__deep",
        type: "boolean | undefined",
        description: "Internal flag indicating whether nested values should stay reactive.",
      },
      {
        name: "__channelName",
        type: "string | undefined",
        description: "Internal BroadcastChannel name used for synchronized named states.",
      },
      {
        name: "__fromBroadcast",
        type: "boolean | undefined",
        description: "Internal guard flag used to avoid rebroadcasting incoming cross-tab updates.",
      },
    ],
    relatedSymbols: ["set-state", "use-state", "use-watch", "set-state-options"],
  },
  "use-watch-callback": {
    slug: "use-watch-callback",
    name: "UseWatchCallback",
    kind: "Type Alias",
    summary: "Callback type used by useWatch and by UseWatchContext.useWatch.",
    signature: `type UseWatchCallback = (...states: StateProps[]) => void`,
    definedIn: ["src/index.ts:72"],
    remarks: [
      "There is no dedicated TSDoc block for this symbol in src/index.ts.",
      "The signature shows that the callback receives the watched state objects as a rest parameter.",
    ],
    params: [
      {
        name: "states",
        type: "StateProps[]",
        description:
          "Rest parameter containing the watched states in the same order provided to useWatch.",
      },
    ],
    returns: {
      type: "void",
      description: "The callback does not return a value.",
    },
    relatedSymbols: ["use-watch", "use-watch-context", "state-props"],
  },
  "use-watch-context": {
    slug: "use-watch-context",
    name: "UseWatchContext",
    kind: "Type Alias",
    summary: "Public API returned by createContext.",
    signature: `type UseWatchContext = {
  setState<T = any>(value: T, options?: SetStateOptions): StateProps<T>;
  setState<T = any>(key: string, value: T, options?: SetStateOptions): StateProps<T>;
  useState<T = any>(key: string, initialValue?: T, options?: SetStateOptions): StateProps<T>;
  useWatch(callback: UseWatchCallback, states: StateProps[], options?: UseWatchOptions): () => void;
}`,
    definedIn: ["src/index.ts:82"],
    remarks: [
      "Each context has its own registry of named states, watchers and tab-sync channels.",
      "This makes it possible to isolate groups of states from the default top-level API.",
    ],
    methods: [
      {
        name: "setState",
        signature: `setState<T = any>(value: T, options?: SetStateOptions): StateProps<T>
setState<T = any>(key: string, value: T, options?: SetStateOptions): StateProps<T>`,
        description:
          "Creates local state or creates and updates named state within the current context.",
      },
      {
        name: "useState",
        signature:
          "useState<T = any>(key: string, initialValue?: T, options?: SetStateOptions): StateProps<T>",
        description: "Reads a named state from the context registry or creates it if missing.",
      },
      {
        name: "useWatch",
        signature:
          "useWatch(callback: UseWatchCallback, states: StateProps[], options?: UseWatchOptions): () => void",
        description: "Subscribes to one or more states scoped to the same context.",
      },
    ],
    relatedSymbols: ["create-context", "set-state", "use-state", "use-watch"],
  },
  "create-context": {
    slug: "create-context",
    name: "createContext",
    kind: "Function",
    summary: "Creates an isolated reactive context.",
    signature: "const createContext: () => UseWatchContext",
    definedIn: ["src/index.ts:163"],
    remarks: [
      "Named states created inside a context are stored only in that context.",
      "This is useful when you want multiple isolated registries or separate BroadcastChannel lifecycles.",
    ],
    returns: {
      type: "UseWatchContext",
      description: "A context with its own setState, useState and useWatch functions.",
    },
    examples: [
      {
        title: "Create an isolated context",
        code: `const context = createContext();
const session = context.setState("session", { loggedIn: false });

context.useWatch((state) => {
  console.log(state.value.loggedIn);
}, [session]);`,
      },
    ],
    relatedSymbols: ["use-watch-context", "set-state", "use-state", "use-watch"],
  },
  "set-state": {
    slug: "set-state",
    name: "setState",
    kind: "Function",
    summary: "Creates reactive state in the current context, either anonymous or named.",
    signature: `const setState: {
  <T = any>(value: T, options?: SetStateOptions): StateProps<T>;
  <T = any>(key: string, value: T, options?: SetStateOptions): StateProps<T>;
}`,
    definedIn: ["src/index.ts:370", "src/index.ts:396", "src/index.ts:548"],
    overloads: [
      {
        label: "Local anonymous state",
        signature: "setState<T = any>(value: T, options?: SetStateOptions): StateProps<T>",
        description: "Creates a reactive state within the current context without a registry key.",
        params: [
          {
            name: "value",
            type: "T",
            description: "The initial value for a local anonymous state.",
          },
          {
            name: "options",
            type: "SetStateOptions | undefined",
            description: "Optional behavior flags for deep reactivity and tab sync.",
          },
        ],
        returns: {
          type: "StateProps<T>",
          description: "A reactive state object.",
        },
        typeParameters: [
          {
            name: "T",
            constraint: "any",
            description: "The value type stored by the state.",
          },
        ],
        remarks: ["Calling setState(value) creates a local state with no registry key."],
        examples: [
          {
            title: "Local state",
            code: `const counter = setState(0);`,
          },
        ],
      },
      {
        label: "Named registry-backed state",
        signature:
          "setState<T = any>(key: string, value: T, options?: SetStateOptions): StateProps<T>",
        description: "Creates or updates a named reactive state within the current context.",
        params: [
          {
            name: "key",
            type: "string",
            description: "The registry key used to store and retrieve the state.",
          },
          {
            name: "value",
            type: "T",
            description: "The initial or next value for the named state.",
          },
          {
            name: "options",
            type: "SetStateOptions | undefined",
            description: "Optional behavior flags for deep reactivity and tab sync.",
          },
        ],
        returns: {
          type: "StateProps<T>",
          description: "A reactive state object tied to the provided key.",
        },
        typeParameters: [
          {
            name: "T",
            constraint: "any",
            description: "The value type stored by the named state.",
          },
        ],
        remarks: [
          "Calling setState(key, value) creates a named state.",
          "Reusing the same key returns the same state instance and updates its value.",
          "Named states can optionally synchronize between browser tabs through BroadcastChannel.",
        ],
        examples: [
          {
            title: "Named state",
            code: `const theme = setState("theme", "dark");`,
          },
          {
            title: "Named state with tab sync",
            code: `const profile = setState("profile", { name: "Ada" }, { syncTabs: true });`,
          },
        ],
      },
    ],
    relatedSymbols: ["set-state-options", "state-props", "use-state", "use-watch-context"],
  },
  "use-state": {
    slug: "use-state",
    name: "useState",
    kind: "Function",
    summary: "Retrieves a named state from the current context or creates it if missing.",
    signature:
      "const useState: <T = any>(key: string, initialValue?: T, options?: SetStateOptions) => StateProps<T>",
    definedIn: ["src/index.ts:455", "src/index.ts:549"],
    typeParameters: [
      {
        name: "T",
        constraint: "any",
        description: "The value type stored by the state.",
      },
    ],
    params: [
      {
        name: "key",
        type: "string",
        description: "The registry key used by the named state.",
      },
      {
        name: "initialValue",
        type: "T | undefined",
        description: "Optional initial value used only when the state does not exist yet.",
      },
      {
        name: "options",
        type: "SetStateOptions | undefined",
        description: "Optional behavior flags for deep reactivity and tab sync.",
      },
    ],
    returns: {
      type: "StateProps<T>",
      description: "The existing or newly created named state.",
    },
    remarks: [
      "useState never creates anonymous states.",
      "It always operates on the named state registry of the current context.",
    ],
    examples: [
      {
        title: "Named state lookup",
        code: `const settings = useState("settings", { theme: "light" });`,
      },
    ],
    relatedSymbols: ["set-state", "set-state-options", "state-props", "use-watch-context"],
  },
  "use-watch": {
    slug: "use-watch",
    name: "useWatch",
    kind: "Function",
    summary: "Subscribes to one or more reactive states.",
    signature:
      "const useWatch: (callback: UseWatchCallback, states: StateProps[], options?: UseWatchOptions) => () => void",
    definedIn: ["src/index.ts:511", "src/index.ts:550"],
    params: [
      {
        name: "callback",
        type: "UseWatchCallback",
        description: "The function executed when any subscribed state changes.",
      },
      {
        name: "states",
        type: "StateProps[]",
        description: "The list of states observed by the watcher.",
      },
      {
        name: "options",
        type: "UseWatchOptions | undefined",
        description: "Controls immediate execution when the watcher is registered.",
      },
    ],
    returns: {
      type: "() => void",
      description: "A function that unsubscribes the watcher from all provided states.",
    },
    remarks: [
      "The callback receives the same state objects passed in states, preserving order.",
      "With immediate: true, the callback runs once as soon as the watcher is registered.",
    ],
    examples: [
      {
        title: "Watch multiple states",
        code: `const stop = useWatch((userState, countState) => {
  console.log(userState.value, countState.value);
}, [user, count]);

stop();`,
      },
      {
        title: "Watch without the initial run",
        code: `useWatch((state) => {
  console.log(state.value);
}, [counter], { immediate: false });`,
      },
    ],
    relatedSymbols: ["use-watch-callback", "use-watch-options", "state-props", "use-watch-context"],
  },
}

export function getUsewatchDetailedDoc(slug: string) {
  return usewatchDetailedDocs[slug as keyof typeof usewatchDetailedDocs] ?? null
}

export function getDetailedDocHref(slug: string) {
  return `/lib/usewatch-js/docs/detailed-docs/${slug}`
}
