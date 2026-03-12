export const primitiveStateSnippet = `import { setState, useWatch } from "usewatch-js";

const ready = setState(true);

useWatch((state) => {
  console.log("ready:", state.value);
}, [ready]);

ready.value = false;`

export const numberCounterSnippet = `import { setState, useWatch } from "usewatch-js";

const count = setState(0);

useWatch((state) => {
  console.log("count:", state.value);
}, [count]);

count.value += 1;
count.value += 1;`

export const stringStateSnippet = `import { setState, useWatch } from "usewatch-js";

const search = setState("");

useWatch((state) => {
  console.log("query:", state.value);
}, [search]);

search.value = "documentation";`

export const stringStateHtmlSnippet = `<label>
  Search query
  <input id="query-input" placeholder="Type here" />
</label>

<p>
  Live text:
  <strong id="query-output">Nothing typed yet</strong>
</p>

<script type="module">
  import { setState, useWatch } from "usewatch-js";

  const query = setState("");
  const input = document.querySelector("#query-input");
  const output = document.querySelector("#query-output");

  useWatch((state) => {
    output.textContent = state.value || "Nothing typed yet";
  }, [query]);

  input.addEventListener("input", (event) => {
    query.value = event.target.value;
  });
</script>`

export const booleanToggleSnippet = `import { setState, useWatch } from "usewatch-js";

const sidebarOpen = setState(false);

useWatch((state) => {
  console.log("sidebar open:", state.value);
}, [sidebarOpen]);

sidebarOpen.value = !sidebarOpen.value;`

export const arrayStateSnippet = `import { setState, useWatch } from "usewatch-js";

const tags = setState(["docs"]);

useWatch((state) => {
  console.log(state.value.join(", "));
}, [tags]);

tags.value = [...tags.value, "guide"];`

export const objectStateSnippet = `import { setState, useWatch } from "usewatch-js";

const filters = setState({
  status: "open",
  assignee: "Ada",
});

useWatch((state) => {
  console.log(state.value);
}, [filters]);

filters.value = { ...filters.value, status: "closed" };`

export const nestedObjectSnippet = `import { setState, useWatch } from "usewatch-js";

const board = setState(
  {
    currentSprint: {
      name: "Sprint 12",
      metrics: { completed: 3, pending: 5 },
    },
  },
  { deep: true },
);

useWatch((state) => {
  console.log(state.value.currentSprint.metrics.completed);
}, [board]);

board.value.currentSprint.metrics.completed += 1;`

export const namedStateSnippet = `import { setState, useState } from "usewatch-js";

setState("cart-count", 1);

const cartCount = useState("cart-count");
cartCount.value += 1;

console.log(cartCount.value);`

export const contextIsolationExampleSnippet = `import { createContext } from "usewatch-js";

const admin = createContext();
const publicSite = createContext();

const adminNotice = admin.useState("notice", "Internal only");
const publicNotice = publicSite.useState("notice", "Public banner");

console.log(adminNotice.value);
console.log(publicNotice.value);`

export const multipleStatesSnippet = `import { setState, useWatch } from "usewatch-js";

const query = setState("");
const page = setState(1);

useWatch((queryState, pageState) => {
  console.log({ query: queryState.value, page: pageState.value });
}, [query, page]);

query.value = "proxy";
page.value = 2;`

export const immediateFalseSnippet = `import { setState, useWatch } from "usewatch-js";

const filter = setState("all");

useWatch((state) => {
  console.log("changed later:", state.value);
}, [filter], { immediate: false });

filter.value = "completed";`

export const crossTabSyncSnippet = `import { setState, useWatch } from "usewatch-js";

const notesFeed = setState("notes-feed", [], {
  syncTabs: true,
  deep: true,
  channelName: "notes-feed-demo",
});

function submitNote(author, text) {
  notesFeed.value = [
    ...notesFeed.value,
    {
      id: Date.now(),
      author,
      text,
      createdAt: new Date().toISOString(),
    },
  ];
}

useWatch((state) => {
  console.table(state.value);
}, [notesFeed]);

submitNote("Maya", "Draft ready for review");`

export const crossTabSyncHtmlSnippet = `<form id="notes-form">
  <input id="author-input" placeholder="Author" value="Maya" />
  <textarea id="message-input" placeholder="Share an update"></textarea>
  <button type="submit">Send to shared feed</button>
</form>

<p>Open this page in another tab and submit a note here.</p>
<ul id="notes-feed"></ul>

<script type="module">
  import { setState, useWatch } from "usewatch-js";

  const feed = setState("notes-feed", [], {
    syncTabs: true,
    deep: true,
    channelName: "notes-feed-demo",
  });

  const form = document.querySelector("#notes-form");
  const authorInput = document.querySelector("#author-input");
  const messageInput = document.querySelector("#message-input");
  const list = document.querySelector("#notes-feed");

  function render(items) {
    list.innerHTML = items
      .map(
        (item) => \`<li><strong>\${item.author}</strong>: \${item.message}</li>\`,
      )
      .join("");
  }

  useWatch((state) => {
    render(state.value);
  }, [feed]);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const author = authorInput.value.trim();
    const message = messageInput.value.trim();

    if (!author || !message) return;

    feed.value = [
      {
        id: Date.now(),
        author,
        message,
      },
      ...feed.value,
    ];

    messageInput.value = "";
  });
</script>`
