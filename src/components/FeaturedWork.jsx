/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animated Item Component
const AnimatedItem = ({ title, subtitle, year, images }) => {
  return (
    <div className="flex items-center justify-center mb-20">
      {/* Animate the Title Text with Framer Motion */}
      <motion.div
        className="font-bold text-white uppercase relative text-[156px]"
        initial={{ opacity: 0, y: 50 }} // Start from below and invisible
        animate={{ opacity: 1, y: 0 }} // Move to normal position and become visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>{title}</p>
        <p className="absolute left-48">{subtitle}</p>
        <p className="mt-48">{year}</p>
      </motion.div>

      {/* Render images */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Featured work ${index + 1}`}
            className="w-[500px] h-[700px] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const settings = {
    arrows: true, 
    infinite: true, 
    speed: 200, 
    autoplay:true,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    rtl: true, 
    focusOnSelect: true, 
  };

  // Define different images for each slide
  const images1 = ["/female2.webp"];
  const images2 = ["/female3.webp"];
  const images3 = ["/female.webp"];
  const images4 = ["/scroll4.webp"];

  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl text-white">Featured Work</p>

        {/* Slick Carousel */}
        <Slider {...settings}>
          <div>
            <AnimatedItem
              title="Benjon"
              subtitle="Website"
              year="2012"
              images={images1}
            />
          </div>
          <div>
            <AnimatedItem
                title="Benjon"
                subtitle="Website"
                year="2012"
              images={images2}
            />
          </div>
          <div>
            <AnimatedItem
                title="Benjon"
                subtitle="Website"
                year="2012"
              images={images3}
            />
          </div>
          <div>
            <AnimatedItem
               title="Benjon"
               subtitle="Website"
               year="2012"
              images={images4}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedWork;
