import React from 'react'
import { list } from '@vercel/blob'

export async function Video() {
  try {
    const response = await list();
    const video = response.blobs.find(blob => blob.url.includes('porsche'));
    
    if (!video?.url) {
      return (
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-gray-900 flex items-center justify-center">
          <p className="text-gray-400">Video not available</p>
        </div>
      );
    }

    return (
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
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
      </div>
    );
  } catch (error) {
    console.error('Error loading video:', error);
    return (
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400">Error loading video</p>
      </div>
    );
  }
} 