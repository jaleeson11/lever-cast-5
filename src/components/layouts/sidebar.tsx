"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronLeft, 
  ChevronRight,
  Edit, 
  FileText, 
  Settings, 
  LayoutTemplate,
  User
} from "lucide-react"

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      name: "New Post",
      href: "/new-post",
      icon: Edit
    },
    {
      name: "Recent Posts",
      href: "/recent-posts",
      icon: FileText
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings
    },
    {
      name: "Templates",
      href: "/templates",
      icon: LayoutTemplate
    },
  ]

  return (
    <div className={`h-screen flex flex-col bg-zinc-950 border-r border-zinc-800 transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      <div className="p-4 flex justify-between items-center">
        {!collapsed && (
          <h1 className="text-xl font-bold text-yellow-400">LeverCast</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 ${
                    isActive 
                      ? "bg-zinc-800 text-yellow-400 border-l-2 border-yellow-400" 
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  } transition-colors`}
                >
                  <Icon size={20} className="min-w-5" />
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-zinc-800 mt-auto">
        <button 
          className="flex items-center w-full p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
        >
          <User size={20} />
          {!collapsed && <span className="ml-3">Profile</span>}
        </button>
      </div>
    </div>
  )
} 