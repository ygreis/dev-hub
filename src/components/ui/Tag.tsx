import { Badge } from "@/components/ui/badge"

type TagProps = {
  label: string
}

export function Tag({ label }: TagProps) {
  return <Badge variant="secondary">{label}</Badge>
}
