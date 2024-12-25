import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-20 mx-auto max-w-7xl">
      {/* Header Section */}
      <motion.div
        ref={ref}
        className="mt-36 pl-96"
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <p className="text-xl font-semibold text-gray-500">Recent Blog</p>
        <h3 className="text-6xl font-bold">
          Read Updated <br />
          Journal
        </h3>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="mx-auto w-[500px] pl-40 my-20"
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
      >
        <p className="font-semibold text-gray-500 ">
          Read our blog and try to see everything from every perspective. Our
          passion lies in making everything accessible and aesthetic for
          everyone.
        </p>
      </motion.div>

      <div className="flex items-center gap-x-80">
        <div className="relative w-96">
          <div className="w-80 h-[500px] bg-red-500">
            <img src="/blog.webp" alt="blog" className="w-full h-full " />
          </div>
          <div className="absolute bottom-0 right-[-200px] p-6 bg-white w-96 h-[250px]">
            <span className="font-semibold text-gray-400">
              UI Design . 02 May 2019
            </span>
            <p className="text-2xl font-bold ">
              How to bring fold to your startup company with Axtra
            </p>

            <div className="flex items-center justify-start mt-20 border-t-2 border-gray-400">
              <a href="#">Read More</a>
              <MdArrowOutward />
            </div>
          </div>
        </div>

        <div className="relative w-96">
          <div className="w-80 h-[500px] bg-red-500">
            <img src="/blog2.webp" alt="blog" className="w-full h-full " />
          </div>
          <div className="absolute bottom-0 right-[-200px] p-6 bg-white w-96 h-[250px]">
            <span className="font-semibold text-gray-400">
              UI Design . 02 May 2019
            </span>
            <p className="text-2xl font-bold ">
              How to bring fold to your startup company with Axtra
            </p>

            <div className="flex items-center justify-start mt-20 border-t-2 border-gray-400">
              <a href="#">Read More</a>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
