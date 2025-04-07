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
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Templates</h1>
          <button
            className="flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates
              .filter(template => template.isFavorite)
              .map(template => (
                <div 
                  key={template.id}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <LayoutTemplate className="h-5 w-5 text-yellow-500 mr-2" />
                      <h3 className="font-semibold">{template.name}</h3>
                    </div>
                    <button className="text-yellow-500">
                      <Star className="h-5 w-5 fill-yellow-500" />
                    </button>
                  </div>
                  
                  <div className="mb-4">
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
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/new-post?template=${template.id}`}
                      className="flex items-center text-sm text-yellow-600 dark:text-yellow-400 hover:underline"
                    >
                      Use template <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                    
                    <div className="flex space-x-1">
                      <button
                        className="p-1 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
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
        
        <div>
          <h2 className="text-xl font-semibold mb-4">All Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates
              .filter(template => !template.isFavorite)
              .map(template => (
                <div 
                  key={template.id}
                  className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <LayoutTemplate className="h-5 w-5 text-zinc-500 mr-2" />
                      <h3 className="font-semibold">{template.name}</h3>
                    </div>
                    <button className="text-zinc-300 dark:text-zinc-600 hover:text-yellow-500 dark:hover:text-yellow-500">
                      <Star className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mb-4">
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
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/new-post?template=${template.id}`}
                      className="flex items-center text-sm text-yellow-600 dark:text-yellow-400 hover:underline"
                    >
                      Use template <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                    
                    <div className="flex space-x-1">
                      <button
                        className="p-1 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                        aria-label="Edit template"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1 rounded text-zinc-400 hover:text-red-600"
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