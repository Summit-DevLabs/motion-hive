
import background from '../images/bg-honeycomb.webp'



export default function SectionHero() {
  return (
    <>
      <div className="relative">
        <img
          alt="background honeycomb pattern"
          src={background.src}
          width={background.width}
          className="absolute top-0 opacity-20 h-full min-w-full shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
        />
        <div className="pointer-events-none bg-secondary py-16 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto ">
              <div className="text-center">
                <h1 className="text-6xl font-semibold text-tertiary">We love creators</h1>
                <p className="pt-4 text-pretty font-semibold tracking-tight text-tertiary lg:text-balance">
                  Everything you need to deploy your app
                </p>
              </div>
              <div className="flex flex-row w-full pt-16">
                <div className="px-2">
                  <p className="mt-6 text-lg/8 text-tertiary">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                  </p>
                  <p className="mt-6 text-lg/8 text-tertiary">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                  </p>
                </div>
                <div className="px-2">
                  <p className="mt-6 text-lg/8 text-tertiary">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                  </p>
                  <p className="mt-6 text-lg/8 text-tertiary">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
