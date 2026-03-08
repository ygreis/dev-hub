import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import { angularSnippet, reactNativeSnippet, reactSnippet, vueSnippet } from "@/projects/intl-phone-js-core/snippets/frameworks"

export function ReactPage() {
  return (
    <DocPage groupTitle="Framework Integrations" title="React">
      <DocSection description="Manual integration using core directly.">
        <CodeSnippet title="React" language="tsx" code={reactSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function ReactNativePage() {
  return (
    <DocPage groupTitle="Framework Integrations" title="React Native">
      <DocSection description="Conceptual integration using applyClampedValue and state copy updates.">
        <CodeSnippet title="React Native" language="tsx" code={reactNativeSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function VuePage() {
  return (
    <DocPage groupTitle="Framework Integrations" title="Vue">
      <DocSection description="Conceptual integration with ref state updates.">
        <CodeSnippet title="Vue" language="ts" code={vueSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function AngularPage() {
  return (
    <DocPage groupTitle="Framework Integrations" title="Angular">
      <DocSection description="Conceptual integration in component class.">
        <CodeSnippet title="Angular" language="ts" code={angularSnippet} />
      </DocSection>
    </DocPage>
  )
}
