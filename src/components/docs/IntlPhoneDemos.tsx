import { useMemo, useState } from "react"
import { Command } from "cmdk"
import { applyClampedValue, getAllCountriesWithNames, IntlPhoneCore, type PhoneState } from "@intl-phone-js/core"

import { ExamplePreview } from "@/components/docs/layout/ExamplePreview"
import { StatePreview } from "@/components/docs/layout/StatePreview"

type NamedCountry = {
  countryCode: string
  callingCode: string
  dialCode: string
  name: string
}

function cloneState(state: PhoneState) {
  return { ...state }
}

function getFlagUrl(countryCode: string) {
  return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`
}

function FlagBadge({ countryCode }: { countryCode: string | null }) {
  if (!countryCode) {
    return <span className="text-lg">??</span>
  }

  return <img src={getFlagUrl(countryCode)} alt={countryCode} className="h-4 w-6 rounded-xs object-cover" />
}

export function CountrySelectDemo() {
  const countries = useMemo(() => getAllCountriesWithNames() as NamedCountry[], [])
  const phone = useMemo(() => new IntlPhoneCore(), [])

  const [selectedCountry, setSelectedCountry] = useState("US")
  const [state, setState] = useState(() => {
    phone.setCountry("US" as never)
    return cloneState(phone.getState())
  })

  function handleChange(text: string) {
    const nextState = applyClampedValue(phone, text)
    setState(cloneState(nextState))
  }

  function handleCountryChange(nextCountry: string) {
    setSelectedCountry(nextCountry)
    phone.setCountry(nextCountry as never)
    setState(cloneState(phone.getState()))
  }

  return (
    <ExamplePreview
      title="Live demo"
      description="Selecting a country resets the input and starts from +DDI. Typing uses masked output from core state."
    >
      <div className="grid gap-3 md:grid-cols-[240px_1fr]">
        <select
          value={selectedCountry}
          onChange={(event) => handleCountryChange(event.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        >
          {countries.map((item) => (
            <option key={item.countryCode} value={item.countryCode}>
              {item.name} ({item.dialCode})
            </option>
          ))}
        </select>

        <input
          value={state.formatted ?? ""}
          onChange={(event) => handleChange(event.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          placeholder="Type phone number"
        />
      </div>

      <StatePreview title="Core state" value={state} />
    </ExamplePreview>
  )
}

export function CountryPickerDemo() {
  const countries = useMemo(() => getAllCountriesWithNames() as NamedCountry[], [])
  const phone = useMemo(() => new IntlPhoneCore(), [])

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [manualCountry, setManualCountry] = useState<string | null>(null)
  const [state, setState] = useState(() => cloneState(phone.getState()))

  const activeCountry = state.country ?? manualCountry

  const filteredCountries = countries.filter((item) => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return true
    }

    return (
      item.callingCode.includes(normalized.replace("+", "")) ||
      item.countryCode.toLowerCase().includes(normalized) ||
      item.name.toLowerCase().includes(normalized)
    )
  })

  function handleChange(text: string) {
    const nextState = applyClampedValue(phone, text)
    setState(cloneState(nextState))
  }

  function handleCountrySelect(nextCountry: string) {
    setManualCountry(nextCountry)
    phone.setCountry(nextCountry as never)
    setState(cloneState(phone.getState()))
    setOpen(false)
  }

  return (
    <ExamplePreview
      title="Live demo"
      description="Country button updates automatically while typing when country detection succeeds."
    >
      <div className="relative">
        <div className="flex items-stretch overflow-hidden rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex w-16 items-center justify-center border-r border-slate-300 bg-slate-100 text-sm dark:border-slate-700 dark:bg-slate-800"
            aria-label="Select country"
          >
            <FlagBadge countryCode={activeCountry} />
          </button>
          <input
            value={state.formatted ?? ""}
            onChange={(event) => handleChange(event.target.value)}
            className="w-full bg-transparent px-3 py-2 text-sm"
            placeholder="(201) 555-0123"
          />
        </div>

        {open ? (
          <div className="absolute left-0 top-12 z-20 w-full rounded-md border border-slate-300 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <Command shouldFilter={false}>
              <Command.Input
                value={query}
                onValueChange={setQuery}
                className="mb-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
                placeholder="Search by DDI, ISO or name"
              />
              <Command.List className="max-h-56 overflow-auto">
                {filteredCountries.map((item) => (
                  <Command.Item
                    key={item.countryCode}
                    value={[item.countryCode, item.callingCode, item.name].join(" ")}
                    onSelect={() => handleCountrySelect(item.countryCode)}
                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                  >
                    <img src={getFlagUrl(item.countryCode)} alt={item.countryCode} className="h-4 w-6 rounded-xs object-cover" />
                    <span>{item.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">+{item.callingCode}</span>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </div>
        ) : null}
      </div>

      <StatePreview title="Core state" value={state} />
    </ExamplePreview>
  )
}

export function SmartInputDemo() {
  const countries = useMemo(() => getAllCountriesWithNames() as NamedCountry[], [])
  const phone = useMemo(() => new IntlPhoneCore(), [])

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [manualCountry, setManualCountry] = useState<string | null>(null)
  const [state, setState] = useState(() => cloneState(phone.getState()))

  const detectedCountry = state.country
  const activeCountry = detectedCountry ?? manualCountry

  const filteredCountries = countries.filter((item) => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return true
    }

    return (
      item.callingCode.includes(normalized.replace("+", "")) ||
      item.countryCode.toLowerCase().includes(normalized) ||
      item.name.toLowerCase().includes(normalized)
    )
  })

  function handleChange(text: string) {
    const nextState = applyClampedValue(phone, text)
    setState(cloneState(nextState))

    if (nextState.country) {
      setManualCountry(null)
    }
  }

  function handleCountrySelect(nextCountry: string) {
    setManualCountry(nextCountry)
    phone.setCountry(nextCountry as never)
    setState(cloneState(phone.getState()))
    setOpen(false)
  }

  return (
    <ExamplePreview
      title="Live demo"
      description="Selecting a country resets to +DDI. Typing uses clamped/masked state and auto-detect updates the flag."
    >
      <div className="relative">
        <div className="flex items-stretch overflow-hidden rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex w-16 items-center justify-center border-r border-slate-300 bg-slate-100 text-sm dark:border-slate-700 dark:bg-slate-800"
            aria-label="Select country"
          >
            <FlagBadge countryCode={activeCountry} />
          </button>
          <input
            value={state.formatted ?? ""}
            onChange={(event) => handleChange(event.target.value)}
            className="w-full bg-transparent px-3 py-2 text-sm"
            placeholder="Type your phone"
          />
        </div>

        {open ? (
          <div className="absolute left-0 top-12 z-20 w-full rounded-md border border-slate-300 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <Command shouldFilter={false}>
              <Command.Input
                value={query}
                onValueChange={setQuery}
                className="mb-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
                placeholder="Search by DDI, ISO or name"
              />
              <Command.List className="max-h-56 overflow-auto">
                {filteredCountries.map((item) => (
                  <Command.Item
                    key={item.countryCode}
                    value={[item.countryCode, item.callingCode, item.name].join(" ")}
                    onSelect={() => handleCountrySelect(item.countryCode)}
                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                  >
                    <img src={getFlagUrl(item.countryCode)} alt={item.countryCode} className="h-4 w-6 rounded-xs object-cover" />
                    <span>{item.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">+{item.callingCode}</span>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </div>
        ) : null}
      </div>

      <StatePreview
        title="Integration state"
        value={{
          detectedCountry,
          manualCountry,
          activeCountry,
          formatted: state.formatted,
          output: state,
        }}
      />
    </ExamplePreview>
  )
}

export function JavaScriptFlowPreview() {
  const phone = useMemo(() => new IntlPhoneCore(), [])
  const [state, setState] = useState(() => cloneState(phone.getState()))

  function handleChange(text: string) {
    const nextState = applyClampedValue(phone, text)
    setState(cloneState(nextState))
  }

  return (
    <ExamplePreview title="Live demo" description="JavaScript-style flow with clamped updates and masked value.">
      <input
        value={state.formatted ?? ""}
        onChange={(event) => handleChange(event.target.value)}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        placeholder="Type phone number"
      />
      <StatePreview title="Output state" value={state} />
    </ExamplePreview>
  )
}
