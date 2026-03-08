import type { ResolveProjectDocPage } from "@/projects/types"

import {
  TypeScriptPage,
  CountryPickerPage,
  CountrySelectPage,
  JavaScriptPage,
  SmartInputIntegrationPage,
} from "@/projects/intl-phone-js-core/pages/advanced-pages"
import {
  ApiReferenceClassesPage,
  ApiReferenceEnumsPage,
  ApiReferenceFunctionsPage,
  ApiReferenceTypesPage,
} from "@/projects/intl-phone-js-core/pages/api-reference-pages"
import {
  GetOptionsPage,
  OutputsBehaviorPage,
  SetOptionsPage,
} from "@/projects/intl-phone-js-core/pages/configuration-pages"
import { ApplyClampedValuePage, BasicUsagePage, InstallationPage } from "@/projects/intl-phone-js-core/pages/getting-started-pages"
import { AngularPage, ReactNativePage, ReactPage, VuePage } from "@/projects/intl-phone-js-core/pages/framework-pages"
import { CoreMethodsPage, HelperMethodsPage } from "@/projects/intl-phone-js-core/pages/methods-pages"
import { IntroductionOverviewPage } from "@/projects/intl-phone-js-core/pages/overview-pages"

const pages = {
  "overview/introduction-overview": IntroductionOverviewPage,

  "getting-started/installation": InstallationPage,
  "getting-started/basic-usage": BasicUsagePage,
  "getting-started/apply-clamped-value": ApplyClampedValuePage,

  "configuration/set-options": SetOptionsPage,
  "configuration/get-options": GetOptionsPage,
  "configuration/outputs-behavior": OutputsBehaviorPage,

  "public-methods/core": CoreMethodsPage,
  "public-methods/helpers": HelperMethodsPage,

  "api-reference/classes": ApiReferenceClassesPage,
  "api-reference/functions": ApiReferenceFunctionsPage,
  "api-reference/types": ApiReferenceTypesPage,
  "api-reference/enums": ApiReferenceEnumsPage,

  "advanced-examples/country-select": CountrySelectPage,
  "advanced-examples/country-picker": CountryPickerPage,
  "advanced-examples/smart-input-integration": SmartInputIntegrationPage,
  "advanced-examples/javascript": JavaScriptPage,
  "advanced-examples/typescript": TypeScriptPage,

  "framework-integrations/react": ReactPage,
  "framework-integrations/react-native": ReactNativePage,
  "framework-integrations/vue": VuePage,
  "framework-integrations/angular": AngularPage,
} as const

export const resolveIntlPhoneJsDocPage: ResolveProjectDocPage = (groupSlug, pageSlug) => {
  const key = `${groupSlug}/${pageSlug}` as keyof typeof pages
  const PageComponent = pages[key]
  return PageComponent ? <PageComponent /> : null
}
