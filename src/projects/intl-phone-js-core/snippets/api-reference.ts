import type { MethodTableItem } from "@/components/docs/layout/MethodTable"

export const apiClassSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore({ allowedCountries: ["US", "BR"] });
phone.setValue("+5511999999999");

console.log(phone.getState());`

export const apiFunctionsSnippet = `import {
  applyClampedValue,
  getAllCountries,
  getCountryName,
  getAllCountriesWithNames,
} from "@intl-phone-js/core";

const countries = getAllCountries();
const countryName = getCountryName("BR");
const countriesWithNames = getAllCountriesWithNames();

console.log(countries.length, countryName, countriesWithNames[0]);`

export const apiTypesSnippet = `import type {
  IntlPhoneOptions,
  PhoneCountry,
  PhoneState,
} from "@intl-phone-js/core";

const options: IntlPhoneOptions = {
  allowedCountries: ["US", "BR"],
};

const state: PhoneState = {
  rawInput: "",
  formatted: "",
  value: "",
  country: null,
  callingCode: null,
  nationalNumber: null,
  e164: null,
  isValid: false,
  isPossible: true,
};

const country: PhoneCountry = {
  countryCode: "US",
  callingCode: "1",
  dialCode: "+1",
};

console.log(options, state, country);`

export const apiEnumsSnippet = `import { IntlPhoneCore, ValidationReason } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();
const reason = phone.getValidationReason();

if (reason === ValidationReason.EMPTY) {
  console.log("No value provided");
}`

export const classesTable: MethodTableItem[] = [
  { name: "IntlPhoneCore", signature: "class IntlPhoneCore", description: "Core state engine for parsing, formatting and validation." },
]

export const functionsTable: MethodTableItem[] = [
  { name: "applyClampedValue", signature: "applyClampedValue(phone, rawValue)", description: "Applies value and clamps overflow/regression." },
  { name: "getAllCountries", signature: "getAllCountries()", description: "Returns country metadata with dial codes." },
  { name: "getCountryName", signature: "getCountryName(countryCode)", description: "Returns country display name." },
  { name: "getAllCountriesWithNames", signature: "getAllCountriesWithNames()", description: "Returns country metadata with name field." },
]

export const typesTable: MethodTableItem[] = [
  { name: "IntlPhoneOptions", signature: "type IntlPhoneOptions", description: "Core options type (allowedCountries, value)." },
  { name: "PhoneState", signature: "interface PhoneState", description: "State payload returned by getState and related flows." },
  { name: "PhoneCountry", signature: "interface PhoneCountry", description: "Country metadata type returned by country helper functions." },
]

export const enumsTable: MethodTableItem[] = [
  { name: "ValidationReason", signature: "enum ValidationReason", description: "EMPTY, INVALID_COUNTRY, TOO_SHORT, TOO_LONG, NOT_POSSIBLE, VALID." },
]
