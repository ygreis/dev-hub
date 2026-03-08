import { DocPage } from "@/components/docs/layout/DocPage"
import { DocSection } from "@/components/docs/layout/DocSection"

export function IntroductionOverviewPage() {
  return (
    <DocPage groupTitle="Overview" title="Introduction / Overview">
      <DocSection description="@intl-phone-js/core is a headless engine for international phone inputs.">
        <p className="text-slate-700 dark:text-slate-300">
          The library solves the hard parts of international phone handling: parsing raw text, applying mask/formatting,
          validating number structure, and exposing deterministic state changes while users type.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          It is a core headless package, so it does not render UI. You keep full control over the interface and connect
          the core to React, React Native, Vue, Angular, or plain JavaScript.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          The returned state object is enough to build any country picker, masked input, validation feedback, or custom
          checkout/profile flow without locking your product into a specific UI layer.
        </p>
      </DocSection>

      <DocSection title="Architecture">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Core Engine</h3>
            <p className="text-slate-700 dark:text-slate-300">
              <code>IntlPhoneCore</code> is responsible for parsing, formatting and validating international numbers.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">UI Agnostic</h3>
            <p className="text-slate-700 dark:text-slate-300">
              The core does not render UI components and can run in React, React Native, Vue, Angular, or vanilla JS.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">State Driven</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Instead of mutating DOM inputs directly, you read state and render any interface from that single source of truth.
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection title="Public Surface">
        <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
          <li>Class: <code>IntlPhoneCore</code></li>
          <li>
            Helpers: <code>applyClampedValue</code>, <code>getAllCountries</code>, <code>getCountryName</code>,{" "}
            <code>getAllCountriesWithNames</code>
          </li>
          <li>
            Enum: <code>ValidationReason</code> (<code>EMPTY</code>, <code>INVALID_COUNTRY</code>, <code>TOO_SHORT</code>,{" "}
            <code>TOO_LONG</code>, <code>NOT_POSSIBLE</code>, <code>VALID</code>)
          </li>
          <li>Types: <code>PhoneState</code>, <code>IntlPhoneOptions</code>, <code>PhoneCountry</code></li>
        </ul>
      </DocSection>
    </DocPage>
  )
}
