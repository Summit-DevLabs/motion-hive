import { type Metadata } from 'next'
import { Inter, Lexend, Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Motion Hive',
    default: 'Motion Hive: Basass VFX and Holograms',
  },
  description:
    'Motion Hive is a VFX and Hologram company based in the UK. We specialise in creating stunning visual effects for film, television, and live events.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
        spaceGrotesk.variable,
      )}
    >
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </head>
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-grow bg-primary">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
