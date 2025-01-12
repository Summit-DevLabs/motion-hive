import Image from "next/image";
import { Container } from "@/components/Container";
import mhTempLogo from "@/images/mh-temp-logo.png";
export function Hero() {
  return (
    <div className="relative bg-primary">
      <div className="relative flex justify-center">
        <Image
          src={mhTempLogo}
          alt={"honeycomb"}
          className="max-w-max"
          width={700}
          height={700}
          // className="absolute left-1/2 top-1/2 max-w-none translate-x-[-100%] translate-y-[-30%] opacity-5"
        />
      </div>
      <Container className="relative pb-16 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl text-white">
          We create badass{" "}
          <span className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl metallic-rose-gold">
            VFX
          </span>{" "}
          and{" "}
          <span className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl metallic-gold">
            Holograms
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white">
          Using state of the art technology we create perfectly accurate models
          of any product you can image... Yes even that.
        </p>
      </Container>
    </div>
  );
}
