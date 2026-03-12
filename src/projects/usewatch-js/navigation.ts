import type { ProjectDocs } from "@/projects/types"

export const usewatchJsNavigation: ProjectDocs = {
  groups: [
    {
      slug: "overview",
      title: "Overview",
      pages: [{ slug: "introduction-overview", title: "Introduction / Overview" }],
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      pages: [
        { slug: "installation", title: "Installation" },
        { slug: "first-state", title: "First State" },
      ],
    },
    {
      slug: "core-concepts",
      title: "Core Concepts",
      pages: [
        { slug: "local-and-named-state", title: "Local and Named State" },
        { slug: "watchers-and-contexts", title: "Watchers and Contexts" },
        { slug: "deep-reactivity-and-sync", title: "Deep Reactivity and Sync" },
      ],
    },
    {
      slug: "api-reference",
      title: "API Reference",
      pages: [
        { slug: "set-state", title: "setState" },
        { slug: "use-state", title: "useState" },
        { slug: "use-watch", title: "useWatch" },
        { slug: "create-context", title: "createContext" },
        { slug: "set-state-options", title: "SetStateOptions" },
        { slug: "use-watch-options", title: "UseWatchOptions" },
        { slug: "state-props", title: "StateProps" },
        { slug: "use-watch-context", title: "UseWatchContext" },
      ],
    },
    {
      slug: "examples",
      title: "Examples",
      pages: [
        { slug: "primitive-state", title: "Primitive State" },
        { slug: "number-counter", title: "Number Counter" },
        { slug: "string-state", title: "String State" },
        { slug: "boolean-toggle", title: "Boolean Toggle" },
        { slug: "array-state", title: "Array State" },
        { slug: "object-state", title: "Object State" },
        { slug: "nested-object-deep-reactivity", title: "Nested Object / Deep Reactivity" },
        { slug: "named-state", title: "Named State" },
        { slug: "context-isolation", title: "Context Isolation" },
        { slug: "watching-multiple-states", title: "Watching Multiple States" },
        { slug: "immediate-false", title: "Immediate False" },
        { slug: "cross-tab-sync", title: "Cross-Tab Sync" },
      ],
    },
    {
      slug: "detailed-docs",
      title: "Detailed Docs",
      pages: [
        { slug: "set-state-options", title: "SetStateOptions" },
        { slug: "use-watch-options", title: "UseWatchOptions" },
        { slug: "state-props", title: "StateProps" },
        { slug: "use-watch-callback", title: "UseWatchCallback" },
        { slug: "use-watch-context", title: "UseWatchContext" },
        { slug: "create-context", title: "createContext" },
        { slug: "set-state", title: "setState" },
        { slug: "use-state", title: "useState" },
        { slug: "use-watch", title: "useWatch" },
      ],
    },
  ],
}
