import React from 'react'
import { list } from '@vercel/blob'

export async function Video() {
  const response = await list();
  const video = response.blobs.find(blob => blob.url.includes('porsche'));
  
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        {video?.url && (
          <video 
            className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
    </div>
  )
} 