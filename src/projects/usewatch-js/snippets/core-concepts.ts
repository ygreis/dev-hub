export const localVsNamedSnippet = `import { setState, useState } from "usewatch-js";

const localDraft = setState("");
localDraft.value = "Unsaved text";

const inbox = setState("inbox", []);
const sameInbox = useState("inbox");

sameInbox.value = [...sameInbox.value, { id: 1, subject: "Welcome" }];`

export const contextIsolationSnippet = `import { createContext } from "usewatch-js";

const marketing = createContext();
const support = createContext();

const marketingQueue = marketing.useState("queue", ["Launch email"]);
const supportQueue = support.useState("queue", ["Refund request"]);

console.log(marketingQueue.value);
console.log(supportQueue.value);`

export const deepReactivitySnippet = `import { setState, useWatch } from "usewatch-js";

const profile = setState(
  {
    user: {
      name: "Ada",
      preferences: { language: "en" },
    },
  },
  { deep: true },
);

useWatch((state) => {
  console.log(state.value.user.preferences.language);
}, [profile]);

profile.value.user.preferences.language = "pt-BR";`

export const syncTabsSnippet = `import { setState, useWatch } from "usewatch-js";

const activityLog = setState("activity-log", [], {
  syncTabs: true,
  channelName: "usewatch-activity",
});

useWatch((state) => {
  console.log(state.value);
}, [activityLog]);

activityLog.value = [
  ...activityLog.value,
  { id: Date.now(), action: "Message sent" },
];`
