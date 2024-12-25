import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ContentMarketing from "./ContentMarketing";
import Email from "./Email";
import Seo from "./Seo";
import SocialMarketing from "./SocialMarketing";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="mt-36 pl-96"
          initial={{ opacity: 0, y: 50 }} // Animation start: hidden and moved down
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation end: visible and moved up
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
        >
          <p className="text-xl font-semibold text-gray-500">Services</p>
          <h3 className="text-6xl font-bold">
            Our Marketing <br /> Services
          </h3>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="mx-auto w-[500px] pl-40 mt-20"
          initial={{ opacity: 0, y: 50 }} // Animation start: hidden and moved down
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animation end: visible and moved up
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Animation timing with delay
        >
          <p className="font-semibold text-gray-500 ">
            Consumers today rely heavily on digital means to research products.
            We research a brand of bldend engaging with it, according to the
            meanwhile, 51% of consumers say they use Google to research products
            before buying.
          </p>
        </motion.div>

        {/* All Services Section */}
        <div className="py-40">
          <Seo />
          <Email />
          <ContentMarketing />
          <SocialMarketing />
        </div>
      </div>
    </section>
  );
};

export default Services;
