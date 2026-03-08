export const setOptionsSnippet = `import { IntlPhoneCore, ValidationReason } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();
phone.setOptions({ allowedCountries: ["US"] });
phone.setValue("+5511999999999");

console.log(phone.isValid());
console.log(phone.getValidationReason() === ValidationReason.INVALID_COUNTRY);`

export const getOptionsSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore({ allowedCountries: ["US"] });
const options = phone.getOptions();

options.allowedCountries?.push("BR");

console.log(options.allowedCountries); // ["US", "BR"]
console.log(phone.getOptions().allowedCountries); // ["US"]`

export const outputsSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();
phone.setValue("+5511999999999");

const state = phone.getState();

console.log(state.rawInput);
console.log(state.formatted);
console.log(state.country);
console.log(state.callingCode);
console.log(state.nationalNumber);
console.log(state.e164);
console.log(state.isValid);
console.log(state.isPossible);`
