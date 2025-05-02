"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  // Extract headings from markdown content
  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      const extractedHeadings = Array.from(headingElements).map((heading) => {
        const id = heading.id
        const text = heading.textContent || ""
        const level = Number.parseInt(heading.tagName.substring(1))
        return { id, text, level }
      })
      setHeadings(extractedHeadings)
    }

    // Use a small delay to ensure the content is rendered
    const timer = setTimeout(() => {
      extractHeadings()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <SidebarProvider>
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar className="fixed top-16 z-30">
          <SidebarContent className="pt-4">
            <SidebarMenu>
              {headings.map((heading) => (
                <SidebarMenuItem key={heading.id}>
                  <SidebarMenuButton
                    asChild
                    className={`${heading.level === 1 ? "font-bold text-base" : "text-sm"} pl-${(heading.level - 1) * 4}`}
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById(heading.id)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      <span>{heading.text}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <div className="hidden md:block" aria-hidden="true"></div>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0">{children}</div>
          </main>
        </div>
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  )
}
