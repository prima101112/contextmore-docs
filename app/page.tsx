import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, FileText, Github, Layers, Lightbulb, Zap, Database, Rocket, Network } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Image src="/logo.svg" alt="contextmore logo" width={120} height={120} className="h-32 w-32" />
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Enhance AI with your own context
            </h1>
            <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
              A powerful context library for RAG applications that minimizes hallucinations by grounding AI responses in
              your own data.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/docs">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/prima101112/contextmore" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">
                  View on GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Tools Combined</h2>
            <p className="max-w-[85%] text-muted-foreground">
              contextmore provides everything you need to build powerful RAG applications
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Qdrant Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly store and retrieve vector embeddings with Qdrant's powerful vector database.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">FastAPI Backend</h3>
                <p className="text-muted-foreground">
                  High-performance API endpoints for embedding generation and context retrieval.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">MCP Integration</h3>
                <p className="text-muted-foreground">
                  Connect to any AI application with Model Context Protocol support.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Custom Knowledge Base</h3>
                <p className="text-muted-foreground">
                  Use your company's documentation, knowledge base, or any text data as context.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Fast Retrieval</h3>
                <p className="text-muted-foreground">
                  Optimized for speed with efficient vector search and context retrieval.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">RESTful API</h3>
                <p className="text-muted-foreground">
                  Comprehensive API endpoints for easy integration with your existing applications and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[85%] text-muted-foreground">
              contextmore uses RAG to enhance AI responses with your own data
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">1. Index Your Data</h3>
              <p className="text-muted-foreground">
                Upload your company's documentation, knowledge base, or any text data. contextmore processes and indexes
                this information, creating vector embeddings stored in Qdrant.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <Image src="/logo.svg" alt="contextmore logo" width={24} height={24} className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">2. Connect via MCP</h3>
              <p className="text-muted-foreground">
                Integrate contextmore with your AI applications using the Model Context Protocol. Simply add the MCP
                configuration to your project.
              </p>
              <div className="rounded-md bg-slate-900 p-4">
                <pre className="text-sm text-white">
                  {`{
  "mcpServers": {
    "contextmore": {
      "url": "http://localhost:8000/mcp"
    }
  }
}`}
                </pre>
              </div>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">3. Retrieve Relevant Context</h3>
              <p className="text-muted-foreground">
                When a user asks a question, contextmore retrieves the most relevant information from your knowledge
                base using semantic search.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">4. Generate Accurate Responses</h3>
              <p className="text-muted-foreground">
                The AI model uses the retrieved context to generate accurate, factual responses grounded in your data,
                minimizing hallucinations.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Benefits</h2>
            <p className="max-w-[85%] text-muted-foreground">Why companies and developers choose contextmore</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Minimize Hallucinations</h3>
              <p className="text-muted-foreground">
                By grounding AI responses in your actual data, contextmore significantly reduces the risk of AI
                hallucinations and factual errors.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Up-to-date Information</h3>
              <p className="text-muted-foreground">
                Overcome LLM knowledge cutoffs by providing your AI with the latest information from your organization.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Proprietary Knowledge</h3>
              <p className="text-muted-foreground">
                Leverage your organization's unique knowledge and expertise in AI responses without exposing sensitive
                data.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple integration with RESTful API and MCP makes it easy to add contextmore to your existing AI
                applications.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Scalable Architecture</h3>
              <p className="text-muted-foreground">
                Built on FastAPI and Qdrant, contextmore scales with your needs from small projects to enterprise
                applications.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Developer-Friendly</h3>
              <p className="text-muted-foreground">
                Designed with developers in mind, with clear documentation and simple APIs for quick implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Ready to enhance your AI with contextmore?
            </h2>
            <p className="max-w-[85%] text-muted-foreground">Get started today and see the difference context makes.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/docs">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="contextmore logo" width={20} height={20} className="h-5 w-5" />
              <p className="text-sm leading-loose text-center md:text-left">
                &copy; {new Date().getFullYear()} contextmore. All rights reserved.
              </p>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Built with love using{" "}
              <Link href="https://www.python.org/doc/" className="hover:text-foreground">Python</Link>,{" "}
              <Link href="https://qdrant.tech/" className="hover:text-foreground">Qdrant</Link>,{" "}
              <Link href="https://fastapi.tiangolo.com/" className="hover:text-foreground">FastAPI</Link>,{" "}
              <Link href="https://github.com/tadata-org/fastapi_mcp" className="hover:text-foreground">FastMCP</Link>, and{" "}
              <Link href="https://www.sbert.net/" className="hover:text-foreground">SBERT</Link>
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/prima101112/contextmore"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
