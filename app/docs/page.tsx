import { DocsLayout } from "@/components/docs-layout"
import { MarkdownContent } from "@/components/markdown-content"

async function getReadmeContent() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/prima101112/contextmore/main/README.md",
      { next: { revalidate: 900 } }, 
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch README: ${response.status}`)
    }

    return await response.text()
  } catch (error) {
    console.error("Error fetching README:", error)
    return `# contextmore

A FastAPI application for document embedding and retrieval using Qdrant vector database.

## Error Loading Documentation

We couldn't load the documentation from GitHub. Please try again later or visit the [GitHub repository](https://github.com/prima101112/contextmore) directly.`
  }
}

export default async function DocsPage() {
  const markdownContent = await getReadmeContent()

  return (
    <DocsLayout>
      <div className="container max-w-full px-4 md:px-8">
        <MarkdownContent content={markdownContent} />
      </div>
    </DocsLayout>
  )
}
