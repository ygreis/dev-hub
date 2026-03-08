import type { ProjectExample } from "@/projects/types"

export const intlPhoneJsExamples: ProjectExample[] = [
  {
    id: "quick-start",
    title: "Quick start",
    description: "Initialize the engine with a default country and bind state updates.",
    code: "const phone = createPhoneState({ defaultCountry: 'US' })\nphone.setInput('+1 415 555 0123')\nconsole.log(phone.e164)",
  },
  {
    id: "custom-validation",
    title: "Custom validation",
    description: "Mix built-in checks with your own business validation rules.",
    code: "const result = validatePhone(input, { country: 'BR' })\nconst isAllowed = result.isValid && !isBlockedPrefix(result.nationalNumber)",
  },
]
