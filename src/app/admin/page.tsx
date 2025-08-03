'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Check if this is a GitHub OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // This is a GitHub OAuth callback, redirect to the CMS
      window.location.href = '/admin/index.html' + window.location.search;
    } else {
      // Normal admin access, redirect to CMS
      window.location.href = '/admin/index.html';
    }
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