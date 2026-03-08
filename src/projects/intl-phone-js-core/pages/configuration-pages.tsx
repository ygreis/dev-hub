import { CodeSnippet } from "@/components/docs/CodeSnippet"
import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"
import { getOptionsSnippet, outputsSnippet, setOptionsSnippet } from "@/projects/intl-phone-js-core/snippets/configuration"

export function SetOptionsPage() {
  return (
    <DocPage groupTitle="Configuration" title="setOptions">
      <DocSection description="setOptions(options, reprocess = true) merges options and can reprocess the current input.">
        <CodeSnippet title="Restrict with allowedCountries" language="ts" code={setOptionsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function GetOptionsPage() {
  return (
    <DocPage groupTitle="Configuration" title="getOptions">
      <DocSection description="getOptions returns a defensive copy.">
        <CodeSnippet title="Safe options copy" language="ts" code={getOptionsSnippet} />
      </DocSection>
    </DocPage>
  )
}

export function OutputsBehaviorPage() {
  return (
    <DocPage groupTitle="Configuration" title="Outputs / Behavior">
      <DocSection description="Outputs come from PhoneState fields and getters. No output-mode switch exists in the current public API.">
        <CodeSnippet title="Read outputs" language="ts" code={outputsSnippet} />
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li><code>getState()</code> keeps the same internal object reference.</li>
          <li><code>reset()</code> clears fields and keeps reference.</li>
          <li><code>setValue()</code> normalizes to digits and parses as <code>+digits</code>.</li>
        </ul>
      </DocSection>
    </DocPage>
  )
}
