import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";

const HeroSection = () => {
  const title1 = "MARK";
  const title2 = "ETING";

  const letterVariants = {
    initial: { x: "100px", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const containerVariants = (delay = 0) => ({
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  });

  const lineVariants = {
    initial: { x: "100px", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section className="relative p-4 bg-white sm:p-8">
      <img
        className="absolute hidden md:block right-10 top-10"
        src="/2.png"
        alt=""
      />
      <div className="relative mx-auto max-w-7xl">
        {/* Title Divider */}
        <div className="flex items-center mb-4 gap-x-5">
          <p className="text-lg font-bold sm:text-xl">DIGITAL</p>
          <div className="w-10 sm:w-20 h-[1px] bg-black"></div>
        </div>

        {/* Intro video  */}
       <div className="absolute right-10 hover:scale-105 top-28 ">
       <div className="flex items-center justify-end gap-x-2 group">
          <div className="w-32 flex items-center justify-center cursor-pointer duration-500 ease-in-out h-32 bg-[#162342] rounded-full ">
            <SiYoutubemusic className="size-10" />
          </div>
          <p className="font-bold uppercase">
            Watch <br /> Video Intro
          </p>
        </div>
       </div>

        {/* Animated Heading */}
        <div className="relative">
          {/* First Title */}
          <motion.div
            className="flex overflow-hidden"
            variants={containerVariants(0)}
            initial="initial"
            animate="animate"
          >
            {title1.split("").map((letter, index) => (
              <motion.h3
                key={index}
                className="font-bold text-[80px] sm:text-[150px] lg:text-[250px] leading-[60px] sm:leading-[120px] lg:leading-[200px]"
                variants={letterVariants}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 1,
                }}
              >
                {letter}
              </motion.h3>
            ))}
          </motion.div>

          {/* Second Title */}
          <motion.div
            className="absolute right-0 flex overflow-hidden md:top-56"
            variants={containerVariants(1.5)}
            initial="initial"
            animate="animate"
          >
            {title2.split("").map((letter, index) => (
              <motion.h3
                key={index}
                className="font-bold text-[80px] z-20 sm:text-[150px] lg:text-[250px] leading-[60px] sm:leading-[120px] lg:leading-[200px]"
                variants={letterVariants}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 1,
                }}
              >
                {letter}
              </motion.h3>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            className="mt-16 text-[#5e5e5e] font-sans font-semibold text-sm sm:text-base lg:text-lg max-w-full sm:max-w-md"
            variants={containerVariants(3)}
            initial="initial"
            animate="animate"
          >
            {[
              "Static and dynamic secure code review",
              "can prevent a day before your product",
              "is even released. We can integrate with",
              "your dev environment.",
            ].map((line, index) => (
              <motion.p
                key={index}
                className="mb-2"
                variants={lineVariants}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.8,
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>
        {/* Bouncing Arrow */}
        <div className="absolute hidden md:block top-[600px] animate-slowBounce border-[1px] border-black rounded-full left-1">
          <IoIosArrowRoundDown className="w-10 h-20 " />
        </div>
      </div>

      {/* Responsive Image */}
      <div className="absolute  right-0 w-full  sm:w-[63%]">
        <img src="/1.webp" alt="Marketing" />
      </div>
    </section>
  );
};

export default HeroSection;
