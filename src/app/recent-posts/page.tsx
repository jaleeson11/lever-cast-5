import { MainLayout } from "@/components/layouts/main-layout"
import { ArrowDown, ArrowUp, Filter, Search, Edit, Trash } from "lucide-react"
import Link from "next/link"

// Dummy data for posts
const posts = [
  {
    id: 1,
    title: "10 Tips for SaaS Growth",
    platforms: ["LinkedIn", "Twitter"],
    status: "published",
    date: "2023-04-05"
  },
  {
    id: 2,
    title: "How to Scale Your Startup",
    platforms: ["LinkedIn"],
    status: "draft",
    date: "2023-04-06"
  },
  {
    id: 3,
    title: "Product Launch Strategy",
    platforms: ["Twitter"],
    status: "pending",
    date: "2023-04-07"
  },
  {
    id: 4,
    title: "Effective Email Marketing Campaigns",
    platforms: ["LinkedIn"],
    status: "published",
    date: "2023-04-04"
  },
  {
    id: 5,
    title: "Social Media Trends for 2023",
    platforms: ["Twitter", "LinkedIn"],
    status: "draft",
    date: "2023-04-03"
  },
  {
    id: 6,
    title: "Customer Retention Strategies",
    platforms: ["LinkedIn"],
    status: "pending",
    date: "2023-04-02"
  }
]

export default function RecentPosts() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              className="pl-10 w-full h-10 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Search posts..."
            />
          </div>
          
          {/* Filter buttons */}
          <div className="flex gap-3">
            <button
              className="flex items-center px-4 py-2 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-md transition-colors"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            
            <button
              className="flex items-center px-4 py-2 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-md transition-colors"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Date
            </button>
          </div>
        </div>
        
        {/* Posts table */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-700/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Platforms</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {post.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-1">
                        {post.platforms.map((platform) => (
                          <span 
                            key={platform}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span 
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          post.status === 'published' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' 
                            : post.status === 'pending'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                            : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-400'
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                      {post.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          className="p-1 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                          aria-label="Edit post"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="p-1 rounded text-zinc-400 hover:text-red-600"
                          aria-label="Delete post"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">6</span> results
          </div>
          
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-md transition-colors disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button
              className="px-3 py-1 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-md transition-colors disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 