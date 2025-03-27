import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/components/Banner'
import { caseStudies } from './data'

export default function CaseStudiesPage() {
  return (
    <>
      <Banner
        title="CASE STUDIES"
        description="Explore our portfolio of successful projects and client solutions"
        backgroundColor="primary"
        headerTextColor="white"
        descriptionTextColor="white"
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover how we&apos;ve helped clients across various industries achieve their visual goals.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.id} className="flex flex-col h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <span className="text-primary font-semibold">{study.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{study.description}</p>
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    View Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 