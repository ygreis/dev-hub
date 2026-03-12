import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  getDetailedDocHref,
  getUsewatchDetailedDoc,
  usewatchDetailedDocOrder,
  usewatchJsPublishedVersion,
  type UsewatchDetailedDoc,
} from "@/projects/usewatch-js/detailed-docs-data"

type SectionLink = {
  id: string
  label: string
}

function DefinitionBlock({ code, className }: { code: string; className?: string }) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-xl border border-slate-200 bg-slate-950/95 p-4 text-sm text-slate-100 dark:border-slate-700",
        className,
      )}
    >
      <code>{code}</code>
    </pre>
  )
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-xl font-semibold text-slate-950 dark:text-slate-100">
      {children}
    </h2>
  )
}

function MemberTable({
  title,
  items,
  mode = "type",
}: {
  title: string
  items: Array<{ name: string; type?: string; signature?: string; description: string }>
  mode?: "type" | "signature"
}) {
  const sectionId = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <section className="space-y-3">
      <SectionHeading id={sectionId}>{title}</SectionHeading>
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-50 dark:bg-slate-950">
            <tr>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                Name
              </th>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {mode === "signature" ? "Signature" : "Type"}
              </th>
              <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.name}
                className="odd:bg-white even:bg-slate-50/60 dark:odd:bg-slate-900 dark:even:bg-slate-950/60"
              >
                <td className="border-b border-slate-200 px-3 py-2 font-medium text-slate-900 dark:border-slate-800 dark:text-slate-100">
                  {item.name}
                </td>
                <td className="border-b border-slate-200 px-3 py-2 font-mono text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  {mode === "signature" ? item.signature : item.type}
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

function SignatureSection({ doc }: { doc: UsewatchDetailedDoc }) {
  return (
    <section className="space-y-3">
      <SectionHeading id="signature">Signature</SectionHeading>
      <DefinitionBlock code={doc.signature} />
    </section>
  )
}

function TypeParametersSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.typeParameters?.length) {
    return null
  }

  return (
    <section className="space-y-3">
      <SectionHeading id="type-parameters">Type Parameters</SectionHeading>
      <div className="space-y-3">
        {doc.typeParameters.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/50"
          >
            <p className="font-mono text-sm text-slate-900 dark:text-slate-100">
              {item.name}
              {item.constraint ? ` = ${item.constraint}` : ""}
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ParamsSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.params?.length) {
    return null
  }

  return (
    <MemberTable
      title="Parameters"
      items={doc.params.map((item) => ({
        name: item.name,
        type: item.type,
        description: item.description,
      }))}
    />
  )
}

function ReturnsSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.returns) {
    return null
  }

  return (
    <section className="space-y-3">
      <SectionHeading id="returns">Returns</SectionHeading>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/50">
        <p className="font-mono text-sm text-slate-900 dark:text-slate-100">{doc.returns.type}</p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{doc.returns.description}</p>
      </div>
    </section>
  )
}

function RemarksSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.remarks?.length) {
    return null
  }

  return (
    <section className="space-y-3">
      <SectionHeading id="remarks">Remarks</SectionHeading>
      <div className="space-y-3">
        {doc.remarks.map((remark, index) => (
          <p key={index} className="text-slate-700 dark:text-slate-300">
            {remark}
          </p>
        ))}
      </div>
    </section>
  )
}

function ExamplesSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.examples?.length) {
    return null
  }

  return (
    <section className="space-y-4">
      <SectionHeading id="examples">Examples</SectionHeading>
      {doc.examples.map((example) => (
        <div key={example.title} className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {example.title}
          </p>
          <DefinitionBlock code={example.code} />
        </div>
      ))}
    </section>
  )
}

function OverloadsSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.overloads?.length) {
    return null
  }

  return (
    <section className="space-y-4">
      <SectionHeading id="overloads">Overloads</SectionHeading>
      {doc.overloads.map((overload) => (
        <div
          key={overload.label}
          className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/50"
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {overload.label}
            </p>
            <p className="text-slate-700 dark:text-slate-300">{overload.description}</p>
          </div>
          <DefinitionBlock code={overload.signature} />
          {overload.typeParameters?.length ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Type Parameters
              </h3>
              {overload.typeParameters.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <p className="font-mono text-sm text-slate-900 dark:text-slate-100">
                    {item.name}
                    {item.constraint ? ` = ${item.constraint}` : ""}
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
          {overload.params?.length ? (
            <MemberTable
              title={`${overload.label} Parameters`}
              items={overload.params.map((item) => ({
                name: item.name,
                type: item.type,
                description: item.description,
              }))}
            />
          ) : null}
          {overload.returns ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Returns</h3>
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-mono text-sm text-slate-900 dark:text-slate-100">
                  {overload.returns.type}
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {overload.returns.description}
                </p>
              </div>
            </div>
          ) : null}
          {overload.remarks?.length ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Remarks</h3>
              {overload.remarks.map((remark, index) => (
                <p key={index} className="text-sm text-slate-700 dark:text-slate-300">
                  {remark}
                </p>
              ))}
            </div>
          ) : null}
          {overload.examples?.length ? (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Examples</h3>
              {overload.examples.map((example) => (
                <div key={example.title} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {example.title}
                  </p>
                  <DefinitionBlock code={example.code} className="bg-slate-950" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </section>
  )
}

function RelatedSymbolsSection({ doc }: { doc: UsewatchDetailedDoc }) {
  if (!doc.relatedSymbols?.length) {
    return null
  }

  return (
    <section className="space-y-3">
      <SectionHeading id="related-symbols">Related Symbols</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {doc.relatedSymbols.map((slug) => {
          const related = getUsewatchDetailedDoc(slug)

          if (!related) {
            return null
          }

          return (
            <Link
              key={slug}
              to={getDetailedDocHref(slug)}
              className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              {related.name}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function buildSectionLinks(doc: UsewatchDetailedDoc): SectionLink[] {
  const items: SectionLink[] = [{ id: "signature", label: "Signature" }]

  if (doc.typeParameters?.length) {
    items.push({ id: "type-parameters", label: "Type Parameters" })
  }

  if (doc.params?.length) {
    items.push({ id: "parameters", label: "Parameters" })
  }

  if (doc.returns) {
    items.push({ id: "returns", label: "Returns" })
  }

  if (doc.overloads?.length) {
    items.push({ id: "overloads", label: "Overloads" })
  }

  if (doc.properties?.length) {
    items.push({ id: "properties", label: "Properties" })
  }

  if (doc.methods?.length) {
    items.push({ id: "methods", label: "Methods" })
  }

  if (doc.remarks?.length) {
    items.push({ id: "remarks", label: "Remarks" })
  }

  if (doc.examples?.length) {
    items.push({ id: "examples", label: "Examples" })
  }

  if (doc.relatedSymbols?.length) {
    items.push({ id: "related-symbols", label: "Related Symbols" })
  }

  return items
}

function DetailedDocLayout({ doc }: { doc: UsewatchDetailedDoc }) {
  const sectionLinks = buildSectionLinks(doc)

  return (
    <article className="space-y-8">
      <header className="space-y-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{doc.kind}</Badge>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Detailed Docs
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Published API: v{usewatchJsPublishedVersion}
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">
            {doc.name}
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-400">{doc.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {doc.definedIn.map((entry) => (
            <span
              key={entry}
              className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              Defined in {entry}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_250px]">
        <div className="space-y-8">
          <SignatureSection doc={doc} />
          <TypeParametersSection doc={doc} />
          <ParamsSection doc={doc} />
          <ReturnsSection doc={doc} />
          <OverloadsSection doc={doc} />
          {doc.properties?.length ? (
            <MemberTable
              title="Properties"
              items={doc.properties.map((item) => ({
                name: item.name,
                type: item.type,
                description: item.description,
              }))}
            />
          ) : null}
          {doc.methods?.length ? (
            <MemberTable
              title="Methods"
              mode="signature"
              items={doc.methods.map((item) => ({
                name: item.name,
                signature: item.signature,
                description: item.description,
              }))}
            />
          ) : null}
          <RemarksSection doc={doc} />
          <ExamplesSection doc={doc} />
          <RelatedSymbolsSection doc={doc} />
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/50">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                On This Page
              </h2>
              <nav className="space-y-2" aria-label="On this page">
                {sectionLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-slate-600 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 border-t border-slate-200 pt-5 dark:border-slate-800">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Symbols
              </h2>
              <nav className="space-y-2" aria-label="Detailed docs symbols">
                {usewatchDetailedDocOrder.map((slug) => {
                  const item = getUsewatchDetailedDoc(slug)

                  if (!item) {
                    return null
                  }

                  return (
                    <Link
                      key={slug}
                      to={getDetailedDocHref(slug)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors",
                        slug === doc.slug
                          ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300"
                          : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-100",
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

function createDetailedDocPage(slug: string) {
  return function DetailedDocPage() {
    const doc = getUsewatchDetailedDoc(slug)

    if (!doc) {
      return null
    }

    return <DetailedDocLayout doc={doc} />
  }
}

export const SetStateOptionsDetailedPage = createDetailedDocPage("set-state-options")
export const UseWatchOptionsDetailedPage = createDetailedDocPage("use-watch-options")
export const StatePropsDetailedPage = createDetailedDocPage("state-props")
export const UseWatchCallbackDetailedPage = createDetailedDocPage("use-watch-callback")
export const UseWatchContextDetailedPage = createDetailedDocPage("use-watch-context")
export const CreateContextDetailedPage = createDetailedDocPage("create-context")
export const SetStateDetailedPage = createDetailedDocPage("set-state")
export const UseStateDetailedPage = createDetailedDocPage("use-state")
export const UseWatchDetailedPage = createDetailedDocPage("use-watch")
