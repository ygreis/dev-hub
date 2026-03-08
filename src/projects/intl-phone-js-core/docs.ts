import type { ProjectDocs } from "@/projects/types"

export const intlPhoneJsDocs: ProjectDocs = {
  summary:
    "intl-phone-js is designed for product teams that want complete control over UI while keeping international phone number behavior consistent.",
  sections: [
    {
      title: "Why this library",
      content:
        "The core focuses on parsing, formatting, and country-aware state transitions without rendering UI components.",
    },
    {
      title: "Integration model",
      content:
        "Use the engine in React, Vue, vanilla JavaScript, or any server-driven UI. The same state machine powers every environment.",
    },
  ],
}
