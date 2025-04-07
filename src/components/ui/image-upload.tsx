"use client"

import { useState, useRef } from 'react'
import { Image as ImageIcon, X, Upload, AlertCircle } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  onImageChange?: (image: string | null) => void
  className?: string
}

export function ImageUpload({ onImageChange, className = '' }: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    handleFile(file)
  }

  const handleFile = (file: File | undefined) => {
    if (!file) return
    
    // In prototype mode we'll validate file type and size
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    const maxSize = 5 * 1024 * 1024 // 5MB
    
    setError(null)
    
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPG, PNG, GIF, or WEBP)')
      return
    }
    
    if (file.size > maxSize) {
      setError('Image size should be less than 5MB')
      return
    }
    
    // Convert the file to a data URL for preview
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      setSelectedImage(dataUrl)
      onImageChange?.(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files?.[0]
    handleFile(file)
  }

  const handleClearImage = () => {
    setSelectedImage(null)
    onImageChange?.(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`w-full ${className}`}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      
      {error && (
        <div className="mb-2 text-red-500 flex items-center text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
      
      {!selectedImage ? (
        <div
          onClick={triggerFileInput}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
              : 'border-zinc-300 dark:border-zinc-700 hover:border-yellow-500 dark:hover:border-yellow-500 hover:bg-zinc-50 dark:hover:bg-zinc-800'
          }`}
        >
          <div className="flex flex-col items-center">
            <ImageIcon className="w-10 h-10 mb-2 text-zinc-400" />
            <p className="mb-1 font-medium text-zinc-700 dark:text-zinc-300">
              Drop your image here, or <span className="text-yellow-500">browse</span>
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Supports JPG, PNG, GIF, WEBP (max 5MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
          <div className="relative aspect-video">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-cover"
            />
          </div>
          <button
            onClick={handleClearImage}
            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
} 