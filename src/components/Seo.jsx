import { MdOutlineArrowOutward } from "react-icons/md";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

// Images for each service
import seo from "/seo.jpg";
import content from "/content.png";
import social from "/social.png";
import email from "/email.png";

const Seo = () => {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredService, setHoveredService] = useState(null); // Track the hovered service
  
    // Mouse move handler to track cursor position
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    // Images corresponding to each service
    const images = {
      seo,
      email,
      content,
      social,
    };
   
    const [gradientRadius, setGradientRadius] = useState(0); // Radius of the gradient
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    // Transform gradient radius for full black to white effect
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
  <>
      {/* SEO Service */}
      <motion.div
    className="relative flex items-center justify-between py-5 border-t-2 border-gray-300"
    transition={{ duration: 0.3 }}
    onMouseEnter={() => setHoveredService("seo")}
    onMouseLeave={() => setHoveredService(null)}
    onMouseMove={handleMouseMove} // Track mouse position
  >
    <div className="flex gap-x-40">
      <p className="font-bold text-3xl z-10 w-[250px]">
        SEARCH ENGINE OPTIMIZATION
      </p>
      <div>
        <p className="z-10 mb-3 font-semibold w-80">
          We help brands stand out through aweful, elegant visual
          design. Our design mainly philosophy.
        </p>
        <p className="z-10 font-semibold">+ Logo Design</p>
        <p className="z-10 font-semibold">+ Advertisement</p>
        <p className="z-10 font-semibold">+ Promotion</p>
      </div>
    </div>
    
    <motion.div
      className="relative z-10 flex items-center justify-center w-48 h-48 mt-20 overflow-hidden border-2 border-gray-300 rounded-full cursor-pointer ml-36 group"
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
        Details
      </span>
      <MdOutlineArrowOutward className="relative z-10 text-black group-hover:text-white" />
    </motion.div>

    {/* SEO Image Reveal */}
    {hoveredService === "seo" && (
      <motion.div
        className="absolute transition-opacity duration-300 bg-center bg-cover pointer-events-none opacity-5"
        style={{
          backgroundImage: `url(${images.seo})`,
          left: mousePos.x - 250, // Subtract 100px to center the image
          top: mousePos.y - 400, // Subtract 100px to center the image
          width: "300px",
          height: "400px",
          transform: "translate(0, 0)", // Keep it centered relative to the cursor
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    )}
  </motion.div>
  
  
  </>
  )
}

export default Seo