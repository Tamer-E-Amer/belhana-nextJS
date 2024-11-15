import Image from "next/image";
import { SocialLinks } from "@/components";

const Hero = () => {
  return (
    <>
      <section className=" h-screen pb-8 lg:h-[950px] bg-black md:bg-gradient-to-l from-black from-80% to-dark-blue overflow-hidden z-40">
        <div className="container flex flex-col items-center justify-center relative">
          {/* social links */}
          <SocialLinks />
          {/* sameh image */}
          <Image
            height={1080}
            width={654.83}
            src={"/assets/imgs/optimized/sameh1.webp"}
            alt="Sameh Sedky"
            className="absolute top-0 right-0 z-0"
          />
          {/* text */}
          <div className="px-4 mt-48 md:mt-72 z-10 flex flex-col items-center justify-center gap-6 ">
            <h1 className="text-6xl md:text-9xl text-primary-orange">
              Hi there...
            </h1>
            <h3 className="text-white text-center text-4xl lg:text-6xl font-semibold">
              Welcome to Behana Wel-shiftishy
            </h3>
            <p className="text-white text-lg lg:text-xl w-full lg:w-3/4 leading-relaxed text-center">
              It is the time for our Facebook Page Belhana Wel-shiftishy to have
              its own site. it was a dream for me to present to my visitor a web
              site to facilitate its visit and provide a friendly user
              Experience for you
            </p>
            {/* read more */}
            <div className="w-full lg:w-[360px] border py-2 flex items-center justify-center cursor-pointer text-xl hover:bg-primary-orange text-white transitio duration-300">
              Read more...
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
