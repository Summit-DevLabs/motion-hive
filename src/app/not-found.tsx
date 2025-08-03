import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <div className="bg-primary px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-white">
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-light-gold sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="mt-6 text-xl/8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-10">
          <a 
            href="/" 
            className="text-light-gold hover:text-white transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
