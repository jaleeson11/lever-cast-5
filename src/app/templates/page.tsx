import { MainLayout } from "@/components/layouts/main-layout"
import { LayoutTemplate, Plus, Edit, Star, ArrowUpRight, Trash } from "lucide-react"
import Link from "next/link"

// Dummy data for templates
const templates = [
  {
    id: 1,
    name: "Professional LinkedIn Post",
    description: "Converts your content into a formal, business-oriented LinkedIn post with appropriate hashtags and formatting.",
    platform: "LinkedIn",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Engaging Twitter Thread",
    description: "Transforms your content into a highly engaging Twitter thread optimized for maximum engagement.",
    platform: "Twitter",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Product Launch Announcement",
    description: "Perfect for announcing new products or features across all platforms.",
    platform: "All",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Thought Leadership",
    description: "Presents your ideas in a way that establishes you as a thought leader in your industry.",
    platform: "LinkedIn",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Viral Twitter Content",
    description: "Optimizes your content for maximum shareability on Twitter with trending formats.",
    platform: "Twitter",
    isFavorite: false,
  }
]

export default function Templates() {
  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Templates</h1>
          <button
            className="flex items-center px-3 py-2 md:px-4 md:py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </button>
        </div>
        
        {/* Favorites section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {templates
              .filter(template => template.isFavorite)
              .map(template => (
                <div 
                  key={template.id}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <LayoutTemplate className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <h3 className="font-semibold text-sm md:text-base line-clamp-1">{template.name}</h3>
                    </div>
                    <button className="text-yellow-500 flex-shrink-0 p-1 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-full transition-colors">
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-500" />
                    </button>
                  </div>
                  
                  <div className="mb-3 md:mb-4">
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        template.platform === 'LinkedIn' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' 
                          : template.platform === 'Twitter'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-300'
                          : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-400'
                      }`}
                    >
                      {template.platform}
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/new-post?template=${template.id}`}
                      className="flex items-center text-xs md:text-sm text-yellow-600 dark:text-yellow-400 hover:underline hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
                    >
                      Use template <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                    
                    <div className="flex space-x-1">
                      <button
                        className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="Edit template"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* All Templates section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">All Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {templates
              .filter(template => !template.isFavorite)
              .map(template => (
                <div 
                  key={template.id}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <LayoutTemplate className="h-5 w-5 text-zinc-500 mr-2 flex-shrink-0" />
                      <h3 className="font-semibold text-sm md:text-base line-clamp-1">{template.name}</h3>
                    </div>
                    <button className="text-zinc-300 dark:text-zinc-600 hover:text-yellow-500 dark:hover:text-yellow-500 flex-shrink-0 p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors">
                      <Star className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                  
                  <div className="mb-3 md:mb-4">
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        template.platform === 'LinkedIn' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' 
                          : template.platform === 'Twitter'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-300'
                          : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-400'
                      }`}
                    >
                      {template.platform}
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/new-post?template=${template.id}`}
                      className="flex items-center text-xs md:text-sm text-yellow-600 dark:text-yellow-400 hover:underline hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
                    >
                      Use template <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                    
                    <div className="flex space-x-1">
                      <button
                        className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="Edit template"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1 rounded-full text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        aria-label="Delete template"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 