import type { MethodTableItem } from "@/components/docs/layout/MethodTable"

export const coreUsageSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore({ allowedCountries: ["US", "BR"] });
phone.setValue("+5511999999999");

console.log(phone.getState());
console.log(phone.getValidationReason());`

export const helperUsageSnippet = `import {
  applyClampedValue,
  getAllCountries,
  getCountryName,
  getAllCountriesWithNames,
} from "@intl-phone-js/core";

const list = getAllCountries();
const brName = getCountryName("BR");
const namedList = getAllCountriesWithNames();

console.log(list.length, brName, namedList[0]);`

export const coreMethods: MethodTableItem[] = [
  { name: "constructor", signature: "new IntlPhoneCore(options?)", description: "Creates a core instance and applies initial options/value." },
  { name: "setValue", signature: "setValue(value)", description: "Updates state from input text (normalize + parse)." },
  { name: "setCountry", signature: "setCountry(countryCode)", description: "Sets country context using calling code." },
  { name: "setOptions", signature: "setOptions(options, reprocess = true)", description: "Merges options and optionally reprocesses current raw input." },
  { name: "getOptions", signature: "getOptions()", description: "Returns a defensive copy of options." },
  { name: "reset", signature: "reset()", description: "Resets state to initial values." },
  { name: "getState", signature: "getState()", description: "Returns current PhoneState." },
  { name: "getValue", signature: "getValue()", description: "Returns state.value." },
  { name: "getRawInput", signature: "getRawInput()", description: "Returns state.rawInput." },
  { name: "getCountry", signature: "getCountry()", description: "Returns country code or null." },
  { name: "getCallingCode", signature: "getCallingCode()", description: "Returns calling code or null." },
  { name: "getE164", signature: "getE164()", description: "Returns E.164 or null." },
  { name: "isValid", signature: "isValid()", description: "Returns current valid status." },
  { name: "isPossible", signature: "isPossible()", description: "Returns current possible status." },
  {
    name: "getValidationReason",
    signature: "getValidationReason()",
    description: "Returns EMPTY, INVALID_COUNTRY, TOO_SHORT, TOO_LONG, NOT_POSSIBLE or VALID.",
  },
]

export const helperMethods: MethodTableItem[] = [
  {
    name: "applyClampedValue",
    signature: "applyClampedValue(phone, rawValue)",
    description: "Applies value and clamps regressions/overflow to last acceptable state.",
  },
  {
    name: "getAllCountries",
    signature: "getAllCountries()",
    description: "Returns countryCode, callingCode and dialCode list.",
  },
  {
    name: "getCountryName",
    signature: "getCountryName(countryCode)",
    description: "Resolves display country name.",
  },
  {
    name: "getAllCountriesWithNames",
    signature: "getAllCountriesWithNames()",
    description: "Returns country list with name field included.",
  },
  {
    name: "ValidationReason",
    signature: "enum ValidationReason",
    description: "Enum returned by getValidationReason.",
  },
]
