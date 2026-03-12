export const installationSnippet = `npm install usewatch-js`

export const firstStateSnippet = `import { setState, useWatch } from "usewatch-js";

const count = setState(0);

const stop = useWatch((state) => {
  console.log("count:", state.value);
}, [count]);

count.value += 1;
count.value += 1;

stop();`

export const namedStateSnippet = `import { setState, useState } from "usewatch-js";

setState("theme", "light");

const theme = useState("theme");
console.log(theme.value);

theme.value = "dark";`
