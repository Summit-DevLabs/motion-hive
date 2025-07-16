import Image from 'next/image'
import { notFound } from 'next/navigation'
import { galleries } from '@/data/galleries'

type GalleryPageProps = {
  params: {
    id: string
  }
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const gallery = galleries[params.id]
  
  if (!gallery) {
    notFound()
  }

  return (
    <div className="bg-primary min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {gallery.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {gallery.description}
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gallery.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-900">
              <div className="relative aspect-[3/2]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              {(image.title || image.description) && (
                <div className="p-4">
                  {image.title && (
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="mt-2 text-sm text-gray-300">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 