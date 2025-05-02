"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center px-4 sm:px-6 lg:px-8 sm:justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="contextmore logo" width={32} height={32} className="h-8 w-8" />
            <span className="inline-block font-bold">contextmore</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/#features"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => {
                // Handle hash navigation for same-page links
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => {
                // Handle hash navigation for same-page links
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              How It Works
            </Link>
            <Link
              href="/#benefits"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => {
                // Handle hash navigation for same-page links
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Benefits
            </Link>
            <Link
              href="/docs"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="https://github.com/prima101112/contextmore" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
