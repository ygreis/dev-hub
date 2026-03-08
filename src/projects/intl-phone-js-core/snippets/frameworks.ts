export const reactSnippet = `import { useMemo, useState } from "react";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

export function PhoneField() {
  const phone = useMemo(() => new IntlPhoneCore(), []);
  const [state, setState] = useState(phone.getState());

  const handleChange = (text: string) => {
    const nextState = applyClampedValue(phone, text);
    setState({ ...nextState });
  };

  return <input onChange={(e) => handleChange(e.target.value)} value={state.formatted} />;
}`

export const reactNativeSnippet = `import React, { useMemo, useState } from "react";
import { TextInput } from "react-native";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

export function PhoneInputRN() {
  const phone = useMemo(() => new IntlPhoneCore(), []);
  const [state, setState] = useState(phone.getState());

  const handleChange = (text: string) => {
    const nextState = applyClampedValue(phone, text);
    setState({ ...nextState });
  };

  return <TextInput value={state.formatted} onChangeText={handleChange} />;
}`

export const vueSnippet = `import { ref } from "vue";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();
const state = ref({ ...phone.getState() });

function handleChange(text: string) {
  const nextState = applyClampedValue(phone, text);
  state.value = { ...nextState };
}`

export const angularSnippet = `import { Component } from "@angular/core";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

@Component({
  selector: "app-phone-field",
  template: \`
    <input (input)="onInput($event)" [value]="state.formatted" />
  \`,
})
export class PhoneFieldComponent {
  private readonly phone = new IntlPhoneCore();
  state = { ...this.phone.getState() };

  onInput(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    const nextState = applyClampedValue(this.phone, text);
    this.state = { ...nextState };
  }
}`
