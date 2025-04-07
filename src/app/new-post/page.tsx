"use client"

import { useState } from "react"
import { MainLayout } from "@/components/layouts/main-layout"
import { Image as ImageIcon, Send, RotateCcw, Check } from "lucide-react"
import { ImageUpload } from "@/components/ui/image-upload"

export default function NewPost() {
  const [content, setContent] = useState<string>("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isFormatting, setIsFormatting] = useState<boolean>(false)
  const [isFormatted, setIsFormatted] = useState<boolean>(false)

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    
    // Reset formatted state when content changes
    if (isFormatted) {
      setIsFormatted(false)
    }
  }

  const handleImageChange = (image: string | null) => {
    setSelectedImage(image)
    
    // Reset formatted state when image changes
    if (isFormatted) {
      setIsFormatted(false)
    }
  }

  const handleFormatContent = () => {
    // In prototype mode, we'll simulate content formatting
    setIsFormatting(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setIsFormatting(false)
      setIsFormatted(true)
    }, 1500)
  }

  const handleReset = () => {
    setContent("")
    setSelectedImage(null)
    setIsFormatted(false)
  }

  const handlePost = (platform: string) => {
    // Simulate posting
    alert(`Post has been published to ${platform}!`)
  }

  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Create New Post</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Content Input */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Enter Your Content</h2>
              <div className="space-y-3 md:space-y-4">
                <textarea
                  value={content}
                  onChange={handleContentChange}
                  className="w-full h-48 md:h-64 p-3 md:p-4 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Type your content ideas here..."
                />
                
                <div className="space-y-3">
                  <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Upload Image
                  </p>
                  <ImageUpload 
                    onImageChange={handleImageChange} 
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 md:space-x-4">
              <button
                onClick={handleFormatContent}
                disabled={!content.trim() || isFormatting}
                className={`flex-1 flex items-center justify-center px-4 py-2 md:py-3 bg-yellow-500 text-white font-medium rounded-md transition-colors ${
                  (!content.trim() || isFormatting) 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-yellow-600'
                }`}
              >
                {isFormatting ? (
                  <>
                    <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                    Formatting...
                  </>
                ) : isFormatted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    <span className="whitespace-nowrap">Formatted</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    <span className="whitespace-nowrap">Format Content</span>
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                disabled={!content && !selectedImage}
                className={`px-3 py-2 md:px-4 md:py-3 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 rounded-md transition-colors ${
                  !content && !selectedImage 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-zinc-200 dark:hover:bg-zinc-600'
                }`}
                aria-label="Reset"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Previews */}
          <div className="space-y-4 md:space-y-6">
            {/* LinkedIn Preview */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-lg md:text-xl font-semibold">LinkedIn Preview</h2>
                <span className="text-xs md:text-sm font-medium text-white bg-blue-600 px-2 py-1 rounded">LinkedIn</span>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 md:p-4 bg-white dark:bg-zinc-900">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 mr-3"></div>
                  <div>
                    <div className="font-bold text-sm md:text-base">John Doe</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">CEO at Awesome Company</div>
                  </div>
                </div>
                
                <div className="mb-3 text-xs md:text-sm">
                  {isFormatted && content
                    ? content
                    : "Create engaging, platform-specific content effortlessly. Enter your ideas and let our templates do the rest!"}
                </div>
                
                {selectedImage ? (
                  <div className="w-full h-32 md:h-48 bg-zinc-100 dark:bg-zinc-700 rounded-lg mb-3 overflow-hidden relative">
                    <img src={selectedImage} alt="Uploaded image" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-32 md:h-48 bg-zinc-100 dark:bg-zinc-700 rounded-lg mb-3 flex items-center justify-center text-zinc-400">
                    <ImageIcon className="h-8 w-8 md:h-12 md:w-12" />
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div>24 Reactions</div>
                  <div>12 Comments</div>
                </div>
              </div>
              
              <div className="mt-3 md:mt-4">
                <button
                  onClick={() => handlePost('LinkedIn')}
                  disabled={!isFormatted}
                  className={`w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md transition-colors ${
                    !isFormatted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  Post to LinkedIn
                </button>
              </div>
            </div>
            
            {/* Twitter Preview */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 md:p-6 border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-lg md:text-xl font-semibold">Twitter Preview</h2>
                <span className="text-xs md:text-sm font-medium text-white bg-blue-400 px-2 py-1 rounded">Twitter</span>
              </div>
              
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 md:p-4 bg-white dark:bg-zinc-900">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-sm md:text-base">John Doe <span className="font-normal text-zinc-500 dark:text-zinc-400">@johndoe</span></div>
                    <div className="text-xs md:text-sm mt-1">
                      {isFormatted && content
                        ? content.length > 240 
                          ? content.substring(0, 240) + '...' 
                          : content
                        : "Excited to announce our new product launch! Check out how we're revolutionizing the way entrepreneurs create content. #SocialMedia #Productivity"}
                    </div>
                    
                    {selectedImage ? (
                      <div className="w-full h-28 md:h-40 bg-zinc-100 dark:bg-zinc-700 rounded-lg mt-3 overflow-hidden relative">
                        <img src={selectedImage} alt="Uploaded image" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-full h-28 md:h-40 bg-zinc-100 dark:bg-zinc-700 rounded-lg mt-3 flex items-center justify-center text-zinc-400">
                        <ImageIcon className="h-8 w-8 md:h-12 md:w-12" />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                      <div>15 Retweets</div>
                      <div>42 Likes</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 md:mt-4">
                <button
                  onClick={() => handlePost('Twitter')}
                  disabled={!isFormatted}
                  className={`w-full flex items-center justify-center px-4 py-2 bg-blue-400 text-white font-medium rounded-md transition-colors ${
                    !isFormatted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
                  }`}
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