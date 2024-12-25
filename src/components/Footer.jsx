import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between px-2 mx-auto max-w-7xl md:flex-row">
        {/* Left Section */}
        <div className="w-1/4 text-left">
          <img src="/logo.webp" alt="logo" />
          <p className="mt-4 text-gray-400 w-80">
            When do they work well, and when do they work on us and finally, when do we actually need them, and how can we avoid them.
          </p>
        </div>
        <div className="uppercase cursor-pointer">
          <p
            href="#"
            className="block px-4 py-8 text-gray-400 border-b-[1px] border-l-[1px] border-r-[1px] hover:bg-white hover:text-black"
          >
            FACEBOOK
          </p>
          <p
            href="#"
            className="block px-4 py-8 text-gray-400 border-b-[1px] border-l-[1px] border-r-[1px] hover:bg-white hover:text-black"
          >
            TWITTER
          </p>
          <p
            href="#"
            className="block px-4 py-8 text-gray-400 border-b-[1px] border-l-[1px] border-r-[1px] hover:bg-white hover:text-black"
          >
            LINKEDIN
          </p>
          <p
            href="#"
            className="block px-4 py-8 text-gray-400 border-l-[1px] border-r-[1px] hover:bg-white hover:text-black"
          >
            INSTAGRAM
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-start w-1/2 mt-8 md:items-end md:mt-0">
          <motion.h2
            className="font-extrabold text-yellow-300 text-8xl"
            animate={{
              y: ["0px", "-20px", "0px"], 
            }}
            transition={{
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease: "easeInOut",
            }}
          >
            LET<span className="text-white">&apos;S TALK</span>
          </motion.h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 border-t border-gray-700">
        <div className="flex flex-col items-center justify-between px-2 mx-auto text-sm font-bold text-white md:flex-row">
          <p>© 2022 – 2025 | All rights reserved <br /> by Wealcoder</p>
          <nav className="mt-4 space-x-6 md:mt-0">
            <a href="#" className="hover:text-white">ABOUT US</a>
            <a href="#" className="hover:text-white">CONTACT</a>
            <a href="#" className="hover:text-white">CAREER</a>
            <a href="#" className="hover:text-white">FAQS</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
