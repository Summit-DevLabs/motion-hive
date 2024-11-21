import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'


export function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 bottom-0 ring-1 ring-inset ring-black/5" />
      <Container className="relative pb-16 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          We create badass VFX and Holograms
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Using state of the art technology we create perfectly accurate models of any product you can image... Yes even that.
        </p>
      </Container >
    </div>
  )
}
