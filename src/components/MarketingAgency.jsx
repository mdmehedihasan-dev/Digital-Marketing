import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";

const MarketingAgency = () => {
  const [gradientRadius, setGradientRadius] = useState(0); 
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const gradient = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(255, 255, 255, 1) ${gradientRadius}%, rgba(0, 0, 0, 1) 0)`
  );

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    animate(gradientRadius, 100, {
      duration: 1, 
      onUpdate: (value) => setGradientRadius(value),
    });
  };

  const handleMouseLeave = () => {
    animate(gradientRadius, 0, {
      duration: 1,
      onUpdate: (value) => setGradientRadius(value),
    });
  };

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="items-center block gap-8 gap-x-32 md:flex">
          {/* Left Image Section */}
          <div className="w-full lg:w-[45]">
            <div className="py-40">
              <img
                src="/marketing.webp"
                alt="Marketing"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-[55%]">
            <p className="font-semibold text-white uppercase">Who We Are</p>
            <h3 className="mt-6 text-4xl font-bold text-white uppercase lg:text-6xl">
              We are leading digital marketing agency.
            </h3>
            <div className="text-gray-300 mt-16 ml-36 w-[466px] ">
              <p>
                We’re a team of strategic digital marketers working globally
                with the largest brands. We believe that progress only happens when
                you refuse to play things safe. We combine ideas, behaviors,
                and insights with design, technology, and data to produce brand
                experiences that customers love our services.
              </p>
            </div>
            {/* Sunrise Effect on Hover */}
            <motion.div
              className="relative flex items-center justify-center w-48 h-48 mt-20 overflow-hidden border-2 border-gray-300 rounded-full cursor-pointer ml-36 group"
              style={{ background: gradient }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left);
                y.set(e.clientY - rect.top);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 text-gray-300 group-hover:text-black">
                Details
              </span>
              <MdOutlineArrowOutward className="relative z-10 text-gray-300 group-hover:text-black" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAgency;
