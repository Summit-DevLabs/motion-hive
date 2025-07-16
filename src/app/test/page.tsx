'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

// Sample photo data - in a real app, this would come from an API or database
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1682687220742-aba19b51f36e',
    alt: 'Scenic mountain landscape',
    title: 'Mountain Vista'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1682687221038-404670d5b57a',
    alt: 'Ocean sunset view',
    title: 'Ocean Sunset'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
    alt: 'Urban cityscape',
    title: 'City Lights'
  },
  // Add more photos as needed
]

export default function TestPage() {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([])

  const toggleLike = (photoId: number) => {
    setLikedPhotos(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    )
  }

  return (
    <div className="bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => toggleLike(photo.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  {likedPhotos.includes(photo.id) ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-white" />
                  )}
                </button>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-medium text-white">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 