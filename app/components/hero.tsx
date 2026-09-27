import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-313.25 px-4 pt-5 sm:px-6 lg:pt-7">
      <div className="relative overflow-hidden rounded-2xl border border-[#252832] bg-[#15171D]">

        <div className="grid min-h-105 items-center lg:grid-cols-[1.25fr_0.75fr]">

          {/* Text */}
          <div className="relative z-10 px-6 py-12 sm:px-10 lg:px-12">

            <p className="mb-5 text-[10px] font-bold uppercase tracking-wider text-[#C2F800]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-145 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-5 max-w-140 text-sm leading-6 text-[#92949B] sm:text-base">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today&apos;s plan, and
              watch the week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold text-[#0C0D10] transition-transform hover:scale-105"
            >
              BROWSE WORKOUTS
              <ArrowDown size={15} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-65 sm:h-80 lg:h-full lg:min-h-105">
            <Image
              src={banner}
              alt="Workout illustration"
              fill
              priority
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;