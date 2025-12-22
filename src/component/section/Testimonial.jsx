import { useRef, useEffect } from "react";
import { testimonials } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Helper component for stars
const Stars = ({ count }) => (
  <div className="flex mt-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Update navigation after Swiper initialization
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full mx-auto md:px-7 pt-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-4xl font-bold text-gray-900 uppercase dark:text-white title-font"
        >
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 text-sm sm:text-base leading-relaxed text-gray-500 dark:text-white">
          Real feedback from our amazing clients
        </p>
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center py-6 px-3 w-full">
                <div className="relative w-full p-6 bg-white dark:bg-gray-300 shadow-lg rounded-2xl">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-500">{t.role}</p>
                      <Stars count={t.stars} />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
                    {t.testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -left-4 hidden md:flex transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer z-10"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-800" />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -right-4 hidden md:flex transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer z-10"
          aria-label="Next Slide"
        >
          <FaChevronRight className="w-5 h-5 text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
