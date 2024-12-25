import { useState } from "react";
import { motion } from "framer-motion";

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="relative w-screen h-screen bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-50 w-8 h-8 bg-black rounded-full pointer-events-none"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
        }}
      />
      <h1 className="text-center mt-20 text-2xl font-bold">Hover around!</h1>
    </div>
  );
};

export default CursorAnimation;
