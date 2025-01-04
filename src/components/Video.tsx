import React from 'react'

export function Video() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/videos/porsche.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 