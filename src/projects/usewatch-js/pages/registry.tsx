import type { ResolveProjectDocPage } from "@/projects/types"

import {
  CreateContextPage,
  SetStateOptionsPage,
  SetStatePage,
  StatePropsPage,
  UseStatePage,
  UseWatchContextPage,
  UseWatchOptionsPage,
  UseWatchPage,
} from "@/projects/usewatch-js/pages/api-reference-pages"
import {
  DeepReactivityAndSyncPage,
  LocalAndNamedStatePage,
  WatchersAndContextsPage,
} from "@/projects/usewatch-js/pages/core-concepts-pages"
import {
  CreateContextDetailedPage,
  SetStateDetailedPage,
  SetStateOptionsDetailedPage,
  StatePropsDetailedPage,
  UseStateDetailedPage,
  UseWatchCallbackDetailedPage,
  UseWatchContextDetailedPage,
  UseWatchDetailedPage,
  UseWatchOptionsDetailedPage,
} from "@/projects/usewatch-js/pages/detailed-docs-pages"
import {
  ArrayStatePage,
  BooleanTogglePage,
  ContextIsolationPage,
  CrossTabSyncPage,
  ImmediateFalsePage,
  NamedStatePage,
  NestedObjectDeepReactivityPage,
  NumberCounterPage,
  ObjectStatePage,
  PrimitiveStatePage,
  StringStatePage,
  WatchingMultipleStatesPage,
} from "@/projects/usewatch-js/pages/examples-pages"
import {
  FirstStatePage,
  InstallationPage,
} from "@/projects/usewatch-js/pages/getting-started-pages"
import { IntroductionOverviewPage } from "@/projects/usewatch-js/pages/overview-pages"

const pages = {
  "overview/introduction-overview": IntroductionOverviewPage,

  "getting-started/installation": InstallationPage,
  "getting-started/first-state": FirstStatePage,

  "core-concepts/local-and-named-state": LocalAndNamedStatePage,
  "core-concepts/watchers-and-contexts": WatchersAndContextsPage,
  "core-concepts/deep-reactivity-and-sync": DeepReactivityAndSyncPage,

  "api-reference/set-state": SetStatePage,
  "api-reference/use-state": UseStatePage,
  "api-reference/use-watch": UseWatchPage,
  "api-reference/create-context": CreateContextPage,
  "api-reference/set-state-options": SetStateOptionsPage,
  "api-reference/use-watch-options": UseWatchOptionsPage,
  "api-reference/state-props": StatePropsPage,
  "api-reference/use-watch-context": UseWatchContextPage,

  "examples/primitive-state": PrimitiveStatePage,
  "examples/number-counter": NumberCounterPage,
  "examples/string-state": StringStatePage,
  "examples/boolean-toggle": BooleanTogglePage,
  "examples/array-state": ArrayStatePage,
  "examples/object-state": ObjectStatePage,
  "examples/nested-object-deep-reactivity": NestedObjectDeepReactivityPage,
  "examples/named-state": NamedStatePage,
  "examples/context-isolation": ContextIsolationPage,
  "examples/watching-multiple-states": WatchingMultipleStatesPage,
  "examples/immediate-false": ImmediateFalsePage,
  "examples/cross-tab-sync": CrossTabSyncPage,

  "detailed-docs/set-state-options": SetStateOptionsDetailedPage,
  "detailed-docs/use-watch-options": UseWatchOptionsDetailedPage,
  "detailed-docs/state-props": StatePropsDetailedPage,
  "detailed-docs/use-watch-callback": UseWatchCallbackDetailedPage,
  "detailed-docs/use-watch-context": UseWatchContextDetailedPage,
  "detailed-docs/create-context": CreateContextDetailedPage,
  "detailed-docs/set-state": SetStateDetailedPage,
  "detailed-docs/use-state": UseStateDetailedPage,
  "detailed-docs/use-watch": UseWatchDetailedPage,
} as const

export const resolveUsewatchJsDocPage: ResolveProjectDocPage = (groupSlug, pageSlug) => {
  const key = `${groupSlug}/${pageSlug}` as keyof typeof pages
  const PageComponent = pages[key]
  return PageComponent ? <PageComponent /> : null
}
