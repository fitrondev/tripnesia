import Image from "next/image";

import { ArrowRight, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

import Header from "../Header";

const Hero = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <section className="relative flex min-h-screen flex-col">
        {/* Background Image */}
        <Image
          src="/assets/images/hero.jpg"
          alt="Indonesia travel destination"
          fill
          className="object-cover brightness-50"
          priority
        />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              Jelajahi Indonesia dengan{" "}
              <span className="from-primary bg-gradient-to-r to-cyan-400 bg-clip-text text-transparent">
                Tripnesia
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 md:text-xl lg:text-2xl">
              Temukan destinasi wisata terbaik di Indonesia. Dari pantai eksotis
              hingga gunung menawan, wujudkan petualangan impian Anda bersama
              kami.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 text-lg font-medium has-[>svg]:px-8"
              >
                <Compass className="size-5" />
                Mulai Petualangan
              </Button>

              <Button
                variant={"secondary"}
                size="lg"
                className="h-14 text-lg font-medium has-[>svg]:px-8"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
