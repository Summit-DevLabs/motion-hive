import Image from 'next/image'
import background from '../images/bg-honeycomb.webp'
import heroPhoto from '../images/business-meeting.webp'

export default function SectionHero() {
  return (
    <>
      <div className="relative">
        <div className="pointer-events-none bg-primary py-16 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto ">
              <div className="text-center">
                <h1 className="text-6xl font-semibold text-white">We love creators</h1>
                <p className="pt-4 text-pretty font-semibold tracking-tight text-white lg:text-balance">
                  Everything you need to deploy your app
                </p>
              </div>
              <div className="flex flex-row w-full pt-16">
                <div className="px-2">
                  <p className="mt-6 text-lg/8 text-white">
                  With backgrounds in 3D product rendering, animation, illustration, and photo retouching for major brands, they have worked across film, TV, web, architectural visualization, print, retail packaging, and apparel. Their expertise in automated workflows and AI integration enables them to deliver greater value to their clients.
                  </p>
                  <p className="mt-6 text-lg/8 text-white">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                  </p>
                </div>
                <div className="px-2">
                  <p className="mt-6 text-lg/8 text-white">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                  </p>
                  <p className="mt-6 text-lg/8 text-white">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                  </p>
                </div>
              </div>
              <Image
                src={heroPhoto}
                alt="Business meeting"
                className="mx-auto rounded-xl w-4/5 opacity-90 mt-8"
                priority
              />            
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
