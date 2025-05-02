"use client"

import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Add IDs to headings for navigation
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    headings.forEach((heading) => {
      if (!heading.id && heading.textContent) {
        heading.id = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .replace(/\s+/g, "-")
      }
    })
  }, [content])

  useEffect(() => {
    // Handle hash navigation when the page loads
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 300)
      }
    }
  }, [])

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" {...props} />,
          h2: ({ node, ...props }) => (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" {...props} />
          ),
          p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
          a: ({ node, ...props }) => <a className="font-medium text-primary underline underline-offset-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "")
            return !inline ? (
              <pre className={`p-4 rounded-md bg-slate-900 overflow-x-auto ${match ? `language-${match[1]}` : ""}`}>
                <code className="text-sm text-white" {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
