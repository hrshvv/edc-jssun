import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { div } from "framer-motion/client";
import PixelBlast from "@/components/PixelBlast";

const Main = () => {
  return (
    <div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold w-fit mx-auto h-[100svh] flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#05B1DE"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0}
            transparent
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 ">
            <p className="text-neutral-600 dark:text-neutral-400">Build</p>
            <FlipWords
              words={[
                "Startrups",
                "Leaders",
                "Communities",
                "Networks",
                "Inovations",
              ]}
              duration={3000}
              className="text-[#05B1DE] dark:text-[#05B1DE]"
            />
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal">
            Shaping the future of Innovation at JSS University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
