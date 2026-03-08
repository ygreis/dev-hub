export const installationNpm = "npm i @intl-phone-js/core"

export const installationCdnGlobal = `<script src="https://unpkg.com/@intl-phone-js/core/dist/index.global.min.js"></script>
<script>
  const phone = new IntlPhoneJS.IntlPhoneCore();
  phone.setValue("+5511999999999");
  console.log(phone.getState());
</script>`

export const installationCdnEsm = `<script type="module">
  import { IntlPhoneCore } from "https://unpkg.com/@intl-phone-js/core/dist/index.js";

  const phone = new IntlPhoneCore();
  phone.setValue("+5511999999999");
  console.log(phone.getState());
</script>`

export const basicUsageSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore();

phone.setValue("11999999999");
console.log("local input:", phone.getState());

phone.setValue("+5511999999999");
const state = phone.getState();

console.log("country:", state.country);
console.log("formatted:", state.formatted);
console.log("e164:", state.e164);
console.log("isValid:", state.isValid);`

export const constructorInitialValueSnippet = `import { IntlPhoneCore } from "@intl-phone-js/core";

const phone = new IntlPhoneCore({ value: "+12025550123" });
console.log(phone.getState());`

export const applyClampedValueSnippet = `import { useMemo, useState } from "react";
import { applyClampedValue, IntlPhoneCore } from "@intl-phone-js/core";

const phone = useMemo(() => new IntlPhoneCore(), []);

const [state, setState] = useState(phone.getState());

const handleChange = (text: string) => {
  const nextState = applyClampedValue(phone, text);
  setState({ ...nextState });
};`
