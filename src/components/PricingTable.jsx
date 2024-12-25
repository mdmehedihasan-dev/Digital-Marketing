/* eslint-disable react/prop-types */
import { animate, useMotionValue, motion, useTransform } from "framer-motion";
import { useState } from "react";
import { GrCheckmark } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";

const PricingTable = () => {
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
    <section className=" bg-pink-50">
      <div className="flex items-center min-h-screen mx-auto max-w-7xl gap-x-10 ">
        <div className="w-1/2">
          <p className="uppercase">Pricing Table</p>
          <h3 className="mb-4 text-6xl font-bold">BE KIND TO YOUR MIND</h3>

          {/* Accordion Section */}
          <div className="w-full max-w-3xl mt-12">
            <Accordion title="Design should enrich our day">
              Our design services start and end with a best-in-class experience
              strategy that builds brands. Through a process of iteration and
              prototyping, design interfaces bring joy to people.
            </Accordion>
            <Accordion title="Bring their individual experience and creative">
              This is the second `$item&apos;s` accordion body. It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes.
            </Accordion>
            <Accordion title="Human-centered design to challenges">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </Accordion>
            <Accordion title="Developing core web applications">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands. Through a process of
              iteration and prototyping design interfaces that bring joy to
              people
            </Accordion>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="w-1/2 ">
          {/* Yearly Plan */}
          <div className="relative flex items-center p-6 text-white bg-black rounded-lg shadow-lg gap-x-4">
            <div className="bg-[#ff9776] w-10 h-10 flex items-center justify-center rounded-md">
              <GrCheckmark className="size-5" />
            </div>
            <div>
              <button className="px-2 py-1 mb-2 text-sm font-semibold uppercase border-2 border-white rounded-full">
                YEARLY
              </button>

              <p className="text-2xl font-bold">14 DAYS FREE</p>
              <p className="mt-4">
                Subscription fee is <strong>$129.99 USD</strong> and
                automatically renews each year.
              </p>
              <button className="mt-4 absolute top-[-24px] right-5 bg-[#ff9776] px-2 py-1 rounded-md font-semibold text-white">
                BEST VALUE
              </button>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="flex items-center p-6 mt-10 bg-white border rounded-lg shadow-lg gap-x-4">
            <div className="flex items-center justify-center w-10 h-10 mb-2 bg-white border-2 border-gray-400 rounded-md">
              <GrCheckmark className="size-5" />
            </div>
            <div>
              <button className="px-2 py-1 text-sm font-semibold uppercase border-2 border-black rounded-full">
                Monthly
              </button>
              <p className="text-2xl font-bold">7 DAYS FREE</p>
              <p className="mt-4">
                Subscription fee is <strong>$12.99 USD</strong> and
                automatically renews each month.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end max-w-xl pb-20 mx-auto">
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
            Try it <br /> Free Now
          </span>
          <MdOutlineArrowOutward className="relative z-10 text-black group-hover:text-white" />
        </motion.div>
      </div>
    </section>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-lg font-semibold"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="pb-4 pl-4">{children}</div>}
    </div>
  );
};

export default PricingTable;
