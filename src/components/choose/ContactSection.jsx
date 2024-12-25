import { animate, useMotionValue, motion, useTransform } from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
export default function ContactSection() {
    const [gradientRadius, setGradientRadius] = useState(0);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const gradient = useTransform(
      [x, y],
      ([latestX, latestY]) =>
        `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(0, 0, 0, 1) ${gradientRadius}%, rgba(255, 255, 255, 0) 0)`
    );
  
    const handleMouseEnter = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
  
      // Start the "sunrise" animation
      animate(gradientRadius, 100, {
        duration: 1, // Smooth effect duration
        onUpdate: (value) => setGradientRadius(value),
      });
    };
  
    const handleMouseLeave = () => {
      // Reset the gradient radius
      animate(gradientRadius, 0, {
        duration: 1,
        onUpdate: (value) => setGradientRadius(value),
      });
    };
  
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-[#e0e3cc]">
      {/* Heading */}
      <div className="text-center">
        <p className="mb-4 text-xl font-medium text-gray-700">
          Have you project in mind?
        </p>
        <h1 className="text-4xl leading-tight text-gray-900 lg:text-7xl">
          Let’s make something <br /> great together!
        </h1>
      </div>

      {/* Contact Button */}
     <div className="py-20">
     <motion.div
          className="relative z-10 flex items-center justify-center w-48 h-48 overflow-hidden border-2 border-gray-300 rounded-full cursor-pointer group"
          style={{ background: gradient }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-10 text-black group-hover:text-white">
            Contact  <br /> With Us
          </span>
          <MdOutlineArrowOutward className="relative z-10 text-black group-hover:text-white" />
        </motion.div>
     </div>
    </section>
  );
}
