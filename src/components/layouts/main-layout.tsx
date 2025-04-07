"use client"

import { Sidebar } from "./sidebar"
import { ThemeToggle } from "../ui/theme-toggle"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden pt-0 md:pt-0">
        <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b dark:border-zinc-800">
          {/* Empty div for spacing on mobile - matches the menu button */}
          <div className="md:hidden w-8"></div>
          
          <div className="md:hidden text-xl font-bold text-yellow-400">
            LeverCast
          </div>
          
          <ThemeToggle />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 