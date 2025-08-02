import React from 'react'
// import { list } from '@vercel/blob'

export async function Video() {
  // Temporarily disabled for admin deployment
  // const response = await list();
  // const video = response.blobs.find(blob => blob.url.includes('porsche'));
  
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        {/* Video temporarily disabled for admin deployment */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">Video placeholder</p>
        </div>
    </div>
  )
} 