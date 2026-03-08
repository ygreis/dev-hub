export const countrySelectSnippet = `import { useMemo, useState } from "react";
import { applyClampedValue, getAllCountriesWithNames, IntlPhoneCore } from "@intl-phone-js/core";

const phone = useMemo(() => new IntlPhoneCore(), []);
const [state, setState] = useState(phone.getState());

const handleChange = (text: string) => {
  const nextState = applyClampedValue(phone, text);
  setState({ ...nextState });
};

const handleCountrySelect = (countryCode: string) => {
  phone.setCountry(countryCode as never);
  setState({ ...phone.getState() });
};`

export const countryPickerSnippet = `import { useMemo, useState } from "react";
import { Command } from "cmdk";
import { applyClampedValue, getAllCountriesWithNames, IntlPhoneCore } from "@intl-phone-js/core";

const phone = useMemo(() => new IntlPhoneCore(), []);
const [state, setState] = useState(phone.getState());

const handleChange = (text: string) => {
  const nextState = applyClampedValue(phone, text);
  setState({ ...nextState });
};`

export const smartInputSnippet = `import { useMemo, useState } from "react";
import { Command } from "cmdk";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

const phone = useMemo(() => new IntlPhoneCore(), []);
const [state, setState] = useState(phone.getState());

const handleChange = (text: string) => {
  const nextState = applyClampedValue(phone, text);
  setState({ ...nextState });
};`

export const javaScriptSnippet = `import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();
let state = phone.getState();

function handleChange(text) {
  const nextState = applyClampedValue(phone, text);
  state = { ...nextState };
  return state;
}`

export const typeScriptSnippet = `import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

const inputEl = document.querySelector<HTMLInputElement>("#phone-input");
const outputEl = document.querySelector<HTMLPreElement>("#phone-output");

if (!inputEl || !outputEl) {
  throw new Error("Missing required DOM elements");
}

const phone = new IntlPhoneCore();
let state = { ...phone.getState() };

function render() {
  inputEl.value = state.formatted ?? "";
  outputEl.textContent = JSON.stringify(state, null, 2);
}

inputEl.addEventListener("input", (event) => {
  const nextText = (event.target as HTMLInputElement).value;
  const nextState = applyClampedValue(phone, nextText);
  state = { ...nextState };
  render();
});

render();`
