import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Alts has been a fantastic experience. Their dedication to our success is remarkable!",
    name: "Maria D. Halk",
    title: "Managing Director",
  },
  {
    quote: "Their solutions made a huge difference in our business outcomes!",
    name: "John D. Smith",
    title: "CEO, Example Inc.",
  },
  {
    quote: "We found the best team for collaboration and success with Alts!",
    name: "Emily R. Brown",
    title: "Project Manager",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-3xl p-8 mx-auto text-center bg-gray-100 rounded-lg shadow">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-6 py-8">
            <blockquote className="text-lg italic text-gray-700">
              {testimonial.quote}
            </blockquote>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
