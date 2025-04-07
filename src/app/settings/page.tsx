import { MainLayout } from "@/components/layouts/main-layout"
import { Linkedin, Twitter, User, Bell, Moon } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Settings() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center mb-4">
              <User className="mr-2 h-5 w-5 text-yellow-500" />
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Company/Organization</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue="Awesome Company"
                />
              </div>
            </div>
          </div>
          
          {/* Social Media Connections */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Connected as John Doe</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-md text-sm font-medium transition-colors"
                >
                  Disconnect
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Connected as @johndoe</p>
                  </div>
                </div>
                <button
                  className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-md text-sm font-medium transition-colors"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
          
          {/* Preferences */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="mr-3 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Receive notifications about your posts</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon className="mr-3 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Toggle between light and dark mode</p>
                  </div>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 