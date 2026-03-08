import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import { MethodTable } from "@/components/docs/layout/MethodTable"
import {
  apiClassSnippet,
  apiEnumsSnippet,
  apiFunctionsSnippet,
  apiTypesSnippet,
  classesTable,
  enumsTable,
  functionsTable,
  typesTable,
} from "@/projects/intl-phone-js-core/snippets/api-reference"

export function ApiReferenceClassesPage() {
  return (
    <DocPage groupTitle="API Reference" title="Classes">
      <DocSection description="Public classes exported by @intl-phone-js/core.">
        <MethodTable items={classesTable} />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Class usage" language="ts" code={apiClassSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function ApiReferenceFunctionsPage() {
  return (
    <DocPage groupTitle="API Reference" title="Functions">
      <DocSection description="Public helper functions exported by @intl-phone-js/core.">
        <MethodTable items={functionsTable} />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Function usage" language="ts" code={apiFunctionsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function ApiReferenceTypesPage() {
  return (
    <DocPage groupTitle="API Reference" title="Types">
      <DocSection description="Public TypeScript types exported by @intl-phone-js/core.">
        <MethodTable items={typesTable} />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Type usage" language="ts" code={apiTypesSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function ApiReferenceEnumsPage() {
  return (
    <DocPage groupTitle="API Reference" title="Enums">
      <DocSection description="Public enums exported by @intl-phone-js/core.">
        <MethodTable items={enumsTable} />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Enum usage" language="ts" code={apiEnumsSnippet} />
      </DocSection>
    </DocPage>
  )
}
