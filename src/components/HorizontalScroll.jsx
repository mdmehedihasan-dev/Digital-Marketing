/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ChooseUs from "./choose/ChooseUs";
import HappyCustomer from "./choose/HappyCustomer";
import ContactSection from "./choose/ContactSection";
import WhyChooseUs from "./choose/WhyChooseUs";

const HorizontalScroll = ({ onScrollComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (container) {
        e.preventDefault();
        container.scrollLeft += e.deltaY; 
        if (
          container.scrollLeft >=
          container.scrollWidth - container.offsetWidth
        ) {
          if (onScrollComplete) {
            onScrollComplete(); 
          }
        }
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [onScrollComplete]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div className="flex h-full">
        <div className="flex-none w-screen h-full">
          <ChooseUs />
        </div>
        <div className="flex-none w-screen h-full">
          <HappyCustomer />
        </div>
        <div className="flex-none w-screen h-full">
          <ContactSection />
        </div>
        <div className="flex-none w-screen h-full">
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
