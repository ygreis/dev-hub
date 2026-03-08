import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import { MethodTable } from "@/components/docs/layout/MethodTable"
import { coreMethods, coreUsageSnippet, helperMethods, helperUsageSnippet } from "@/projects/intl-phone-js-core/snippets/methods"

export function CoreMethodsPage() {
  return (
    <DocPage groupTitle="Public Methods" title="Core">
      <DocSection description="Example call flow with IntlPhoneCore:">
        <CodeSnippet title="Core usage" language="ts" code={coreUsageSnippet} />
      </DocSection>
      <DocSection>
        <MethodTable title="IntlPhoneCore methods" items={coreMethods} />
      </DocSection>
    </DocPage>
  )
}

export function HelperMethodsPage() {
  return (
    <DocPage groupTitle="Public Methods" title="Helpers">
      <DocSection description="Example helper usage:">
        <CodeSnippet title="Helper usage" language="ts" code={helperUsageSnippet} />
      </DocSection>
      <DocSection>
        <MethodTable title="Helper exports" items={helperMethods} />
      </DocSection>
    </DocPage>
  )
}
