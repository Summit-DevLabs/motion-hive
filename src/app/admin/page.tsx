'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the standalone CMS HTML file
    window.location.href = '/admin/index.html'
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Decap CMS...</h1>
        <p>Redirecting to the content management interface...</p>
      </div>
    </div>
  )
} 