export type MethodTableItem = {
  name: string
  signature: string
  description: string
}

type MethodTableProps = {
  title?: string
  items: MethodTableItem[]
}

export function MethodTable({ title, items }: MethodTableProps) {
  return (
    <section className="space-y-3">
      {title ? <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3> : null}
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-50 dark:bg-slate-950">
            <tr>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                Method
              </th>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                Signature
              </th>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name} className="odd:bg-white even:bg-slate-50/50 dark:odd:bg-slate-900 dark:even:bg-slate-950/60">
                <td className="border-b border-slate-200 px-3 py-2 font-medium text-slate-900 dark:border-slate-800 dark:text-slate-100">
                  {item.name}
                </td>
                <td className="border-b border-slate-200 px-3 py-2 font-mono text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  {item.signature}
                </td>
                <td className="border-b border-slate-200 px-3 py-2 text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
