export interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string
}

export interface Gallery {
  id: string
  title: string
  description: string
  images: GalleryImage[]
}

export const galleries: Record<string, Gallery> = {
  'hoover': {
    id: 'hoover',
    title: 'Hoover Gallery',
    description: 'A comprehensive showcase of our Hoover feature in action, demonstrating its capabilities and real-world applications.',
    images: [
      {
        src: '/images/gallery/hoover-1.jpg',
        alt: 'Hoover feature demonstration',
        title: 'Advanced Interface',
        description: 'The intuitive user interface of our Hoover feature'
      },
      {
        src: '/images/gallery/hoover-2.jpg',
        alt: 'Hoover in action',
        title: 'Real-time Processing',
        description: 'See how Hoover processes data in real-time'
      },
      {
        src: '/images/gallery/hoover-3.jpg',
        alt: 'Hoover results',
        title: 'Results Dashboard',
        description: 'Comprehensive results dashboard showing Hoover analytics'
      }
    ]
  }
  // Add more galleries here as needed
} 