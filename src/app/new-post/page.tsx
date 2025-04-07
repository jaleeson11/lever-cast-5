import { MainLayout } from "@/components/layouts/main-layout"
import { Image as ImageIcon, Send, RotateCcw } from "lucide-react"

export default function NewPost() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-semibold mb-4">Enter Your Content</h2>
              <div className="space-y-4">
                <textarea
                  className="w-full h-64 p-4 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Type your content ideas here..."
                />
                
                <div className="flex items-center gap-4">
                  <button
                    className="flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200 rounded-md transition-colors"
                  >
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Upload Image
                  </button>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    No image selected
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                className="flex-1 flex items-center justify-center px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Format Content
              </button>
              <button
                className="px-4 py-3 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-200 rounded-md transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Previews */}
          <div className="space-y-6">
            {/* LinkedIn Preview */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">LinkedIn Preview</h2>
                <span className="text-sm font-medium text-white bg-blue-600 px-2 py-1 rounded">LinkedIn</span>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 mr-3"></div>
                  <div>
                    <div className="font-bold">John Doe</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">CEO at Awesome Company</div>
                  </div>
                </div>
                
                <div className="mb-3 text-sm">
                  Create engaging, platform-specific content effortlessly. Enter your ideas and let our templates do the rest!
                </div>
                
                <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-700 rounded-lg mb-3 flex items-center justify-center text-zinc-400">
                  <ImageIcon className="h-12 w-12" />
                </div>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div>24 Reactions</div>
                  <div>12 Comments</div>
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Post to LinkedIn
                </button>
              </div>
            </div>
            
            {/* Twitter Preview */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Twitter Preview</h2>
                <span className="text-sm font-medium text-white bg-blue-400 px-2 py-1 rounded">Twitter</span>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 mr-3"></div>
                  <div>
                    <div className="font-bold">John Doe <span className="font-normal text-zinc-500 dark:text-zinc-400">@johndoe</span></div>
                    <div className="text-sm mt-1">
                      Excited to announce our new product launch! Check out how we're revolutionizing the way entrepreneurs create content. #SocialMedia #Productivity
                    </div>
                    
                    <div className="w-full h-40 bg-zinc-100 dark:bg-zinc-700 rounded-lg mt-3 flex items-center justify-center text-zinc-400">
                      <ImageIcon className="h-12 w-12" />
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                      <div>15 Retweets</div>
                      <div>42 Likes</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-md transition-colors"
                >
                  Post to Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 