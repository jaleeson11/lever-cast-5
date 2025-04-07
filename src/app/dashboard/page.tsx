import { MainLayout } from "@/components/layouts/main-layout"
import { FileText, Edit, BarChart, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

// Dummy data for recent posts
const recentPosts = [
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
  }
]

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Dashboard</h1>
        
        {/* Stats grid - responsive for all screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Quick stats */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">Posts</p>
                <h3 className="text-xl md:text-2xl font-bold">12</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <BarChart className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">Engagement</p>
                <h3 className="text-xl md:text-2xl font-bold">324</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Edit className="h-5 w-5 md:h-6 md:w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">Drafts</p>
                <h3 className="text-xl md:text-2xl font-bold">5</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">Growth</p>
                <h3 className="text-xl md:text-2xl font-bold">+18%</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 md:mb-4">
          <h2 className="text-lg md:text-xl font-bold">Recent Posts</h2>
          <Link 
            href="/recent-posts"
            className="flex items-center text-sm text-yellow-600 dark:text-yellow-400 hover:underline transition-colors"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        {/* Mobile optimized table - transforms to cards on small screens */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          {/* Table for medium screens and above */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-700/50">
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Platforms</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors">
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {post.title}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
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
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
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
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                      {post.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Card layout for small screens */}
          <div className="sm:hidden divide-y divide-zinc-200 dark:divide-zinc-700">
            {recentPosts.map((post) => (
              <div key={post.id} className="p-4">
                <h3 className="font-medium mb-2">{post.title}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.platforms.map((platform) => (
                    <span 
                      key={platform}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
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
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 md:mt-8">
          <Link
            href="/new-post"
            className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
          >
            <Edit className="mr-2 h-4 w-4" />
            Create New Post
          </Link>
        </div>
      </div>
    </MainLayout>
  )
} 