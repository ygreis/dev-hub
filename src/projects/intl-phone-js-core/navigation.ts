import type { ProjectDocs } from "@/projects/types"

export const intlPhoneJsNavigation: ProjectDocs = {
  groups: [
    {
      slug: "overview",
      title: "Overview",
      pages: [{ slug: "introduction-overview", title: "Introduction / Overview" }],
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      pages: [
        { slug: "installation", title: "Installation" },
        { slug: "basic-usage", title: "Basic Usage" },
        { slug: "apply-clamped-value", title: "applyClampedValue" },
      ],
    },
    {
      slug: "configuration",
      title: "Configuration",
      pages: [
        { slug: "set-options", title: "setOptions" },
        { slug: "get-options", title: "getOptions" },
        { slug: "outputs-behavior", title: "Outputs / Behavior" },
      ],
    },
    {
      slug: "public-methods",
      title: "Public Methods",
      pages: [
        { slug: "core", title: "Core" },
        { slug: "helpers", title: "Helpers" },
      ],
    },
    {
      slug: "api-reference",
      title: "API Reference",
      pages: [
        { slug: "classes", title: "Classes" },
        { slug: "functions", title: "Functions" },
        { slug: "types", title: "Types" },
        { slug: "enums", title: "Enums" },
      ],
    },
    {
      slug: "advanced-examples",
      title: "Advanced Examples",
      pages: [
        { slug: "country-select", title: "Country Select" },
        { slug: "country-picker", title: "Country Picker" },
        { slug: "smart-input-integration", title: "Smart Input Integration" },
        { slug: "javascript", title: "JavaScript" },
        { slug: "typescript", title: "TypeScript" },
      ],
    },
    {
      slug: "framework-integrations",
      title: "Framework Integrations",
      pages: [
        { slug: "react", title: "React" },
        { slug: "react-native", title: "React Native" },
        { slug: "vue", title: "Vue" },
        { slug: "angular", title: "Angular" },
      ],
    },
  ],
}
