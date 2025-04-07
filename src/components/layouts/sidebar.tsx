"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronLeft, 
  ChevronRight,
  Edit, 
  FileText, 
  Settings, 
  LayoutTemplate,
  User,
  Menu
} from "lucide-react"

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setCollapsed(true)
      }
    }
    
    // Check on first render
    checkIfMobile()
    
    // Setup listener for resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // For mobile: when a link is clicked, close the menu
  const handleLinkClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile menu button - only visible on small screens */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-zinc-800 text-zinc-200"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      )}
      
      {/* Sidebar - hidden on mobile unless menu is open */}
      <div className={`
        ${isMobile ? 'fixed z-40 h-full' : 'h-screen'} 
        ${isMobile && !mobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
        flex flex-col bg-zinc-950 border-r border-zinc-800 
        transition-all duration-300 
        ${collapsed && !isMobile ? "w-16" : "w-64"}
      `}>
        <div className="p-4 flex justify-between items-center">
          {(!collapsed || isMobile) && (
            <h1 className="text-xl font-bold text-yellow-400">LeverCast</h1>
          )}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          )}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400"
              aria-label="Close menu"
            >
              <ChevronLeft size={20} />
            </button>
          )}
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
                    onClick={handleLinkClick}
                  >
                    <Icon size={20} className="min-w-5" />
                    {(!collapsed || isMobile) && <span className="ml-3">{item.name}</span>}
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
            {(!collapsed || isMobile) && <span className="ml-3">Profile</span>}
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
} 