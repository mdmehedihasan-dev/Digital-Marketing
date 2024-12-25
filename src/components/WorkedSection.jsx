import { motion } from "framer-motion";

const WorkedSection = () => {
  // Variants for the title animation
  const titleVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Variants for the logos animation
  const logoVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const logoItemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="pt-32 sm:pt-48 lg:pt-96 pb-20 sm:pb-32 lg:pb-44">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center px-4"
          initial="initial"
          animate="animate"
          variants={titleVariants}
        >
          <h3 className="font-semibold text-sm sm:text-base lg:text-lg uppercase">
            We worked with global largest brands
          </h3>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          className="flex flex-wrap mt-8 sm:mt-12 lg:mt-16 gap-x-20 gap-y-8 justify-center items-center px-4"
          initial="initial"
          animate="animate"
          variants={logoVariants}
        >
          {[
            "/2.webp",
            "/3.webp",
            "/4.webp",
            "/5.webp",
            "/6.webp",
            "/7.webp",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="w-24 sm:w-28"
              variants={logoItemVariants}
            >
              <img
                src={src}
                alt="brand logo"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkedSection;
