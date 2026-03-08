import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import {
  applyClampedValueSnippet,
  basicUsageSnippet,
  constructorInitialValueSnippet,
  installationCdnEsm,
  installationCdnGlobal,
  installationNpm,
} from "@/projects/intl-phone-js-core/snippets/getting-started"

export function InstallationPage() {
  return (
    <DocPage groupTitle="Getting Started" title="Installation">
      <DocSection description="Official package installation:">
        <CodeSnippet title="npm" language="bash" code={installationNpm} />
      </DocSection>
      <DocSection title="CDN" description="CDN global and ESM usage from README:">
        <CodeSnippet title="CDN Global" language="html" code={installationCdnGlobal} />
        <CodeSnippet title="CDN ESM" language="html" code={installationCdnEsm} />
      </DocSection>
    </DocPage>
  )
}

export function BasicUsagePage() {
  return (
    <DocPage groupTitle="Getting Started" title="Basic Usage">
      <DocSection description="Minimal flow with IntlPhoneCore:">
        <CodeSnippet title="Basic usage" language="ts" code={basicUsageSnippet} />
      </DocSection>
      <DocSection title="Initial Value">
        <CodeSnippet title="Constructor initial value" language="ts" code={constructorInitialValueSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function ApplyClampedValuePage() {
  return (
    <DocPage groupTitle="Getting Started" title="applyClampedValue">
      <DocSection description="applyClampedValue(phone, rawValue) attempts the full input and clamps regressions to the last acceptable state.">
        <CodeSnippet title="Controlled input flow" language="tsx" code={applyClampedValueSnippet} />
      </DocSection>
      <div className="rounded-lg border border-cyan-300 bg-cyan-50 px-4 py-3 text-sm text-cyan-900 dark:border-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
        Useful when you need stable masking/format behavior while users type noisy or overflowing values.
      </div>
    </DocPage>
  )
}
