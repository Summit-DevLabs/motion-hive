import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies, type CaseStudy } from '../../case-studies/data'

interface CaseStudyPageProps {
  params: {
    id: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study: CaseStudy | undefined = caseStudies.find((s: CaseStudy) => s.id === parseInt(params.id))
  
  if (!study) {
    notFound()
  }

  return (
    <div className="bg-primary min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link 
          href="/case-studies"
          className="text-white hover:text-gray-300 transition-colors inline-flex items-center"
        >
          ← Back to all Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{study.title}</h1>
              <p className="text-gray-300 text-lg">{study.description}</p>
            </div>
            
            {/* Hero Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1C1C1C] rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Project Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Category</h3>
                  <p className="text-white">{study.category}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Client</h3>
                  <p className="text-white">{study.title.split(" ")[0]}</p>
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Services</h3>
                  <ul className="text-white space-y-1">
                    <li>3D Modeling</li>
                    <li>Texturing</li>
                    <li>Lighting</li>
                    <li>Rendering</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Tools Used</h3>
                  <ul className="text-white space-y-1">
                    <li>Maya</li>
                    <li>V-Ray</li>
                    <li>Substance Painter</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Section */}
      <div className="bg-[#1C1C1C] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">The Challenge</h2>
              <p className="text-gray-300">
                Our client needed high-quality product visualizations that would showcase their product&apos;s unique features and appeal to their target market. The challenge was to create photorealistic renders that would highlight the product&apos;s design while maintaining accuracy in materials and scale.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">The Solution</h2>
              <p className="text-gray-300">
                We developed a comprehensive 3D visualization pipeline that included detailed modeling, precise material creation, and strategic lighting setups. Our team worked closely with the client to ensure every detail was captured correctly, from surface finishes to mechanical components.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Impact Section */}
      <div className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-12 text-center">Business Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Faster Time to Market</h3>
              <p className="text-gray-300">Reduced product visualization time by 40% through our optimized workflow</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Increased Engagement</h3>
              <p className="text-gray-300">Marketing materials featuring our renders saw 65% higher engagement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1C1C1C] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Cost Efficiency</h3>
              <p className="text-gray-300">Eliminated need for physical prototypes, reducing costs by 30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 