import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { CountryPickerDemo, CountrySelectDemo, JavaScriptFlowPreview, SmartInputDemo } from "@/components/docs/IntlPhoneDemos"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import {
  countryPickerSnippet,
  countrySelectSnippet,
  javaScriptSnippet,
  smartInputSnippet,
  typeScriptSnippet,
} from "@/projects/intl-phone-js-core/snippets/advanced"

export function CountrySelectPage() {
  return (
    <DocPage groupTitle="Advanced Examples" title="Country Select">
      <DocSection description="Manual country select + input typing integrated with core state.">
        <CountrySelectDemo />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Country Select" language="tsx" code={countrySelectSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function CountryPickerPage() {
  return (
    <DocPage groupTitle="Advanced Examples" title="Country Picker">
      <DocSection description="Left button trigger + searchable dropdown by DDI, ISO and country name.">
        <CountryPickerDemo />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Country Picker" language="tsx" code={countryPickerSnippet} />
        <div className="text-sm text-slate-700 dark:text-slate-300">
          Uses{" "}
          <a
            href="https://cmdk.paco.me"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-700 underline hover:opacity-90 dark:text-cyan-300"
          >
            cmdk
          </a>{" "}
          for searchable dropdown. Install with <code>npm i cmdk</code>.
        </div>
      </DocSection>
    </DocPage>
  )
}

export function SmartInputIntegrationPage() {
  return (
    <DocPage groupTitle="Advanced Examples" title="Smart Input Integration">
      <DocSection description="Controlled input + manual country + detected country + formatted output.">
        <SmartInputDemo />
      </DocSection>
      <DocSection>
        <CodeSnippet title="Smart Input Flow" language="tsx" code={smartInputSnippet} />
        <div className="text-sm text-slate-700 dark:text-slate-300">
          Dependency used in this example: <code>cmdk</code>. Install with <code>npm i cmdk</code>.
        </div>
      </DocSection>
    </DocPage>
  )
}

export function JavaScriptPage() {
  return (
    <DocPage groupTitle="Advanced Examples" title="JavaScript">
      <DocSection description="Vanilla JavaScript flow using the same clamped update pattern.">
        <JavaScriptFlowPreview />
      </DocSection>
      <DocSection>
        <CodeSnippet title="JavaScript flow" language="js" code={javaScriptSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function TypeScriptPage() {
  return (
    <DocPage groupTitle="Advanced Examples" title="TypeScript">
      <DocSection description="TypeScript-only integration with plain DOM APIs (no framework).">
        <CodeSnippet title="TypeScript (DOM)" language="ts" code={typeScriptSnippet} />
      </DocSection>
    </DocPage>
  )
}
