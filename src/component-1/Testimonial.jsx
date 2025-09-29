import { useRef, useState } from "react";
import { testimonials } from "./data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoInfo, setVideoInfo] = useState({ name: "", role: "" });

  const openVideo = (url, name, role) => {
    setVideoUrl(url);
    setVideoInfo({ name, role });
  };

  return (
    <div className="relative w-full mx-auto  md:px-7 pt-24">
      {/* Header / Title */}
      <div className="text-center mb-8">
        <h2
          data-aos="fade-up"
          className=" text-2xl font-bold text-gray-900 uppercase sm:text-4xl title-font dark:text-white"
        >
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 text-sm sm:text-base leading-relaxed text-gray-500  dark:text-white">
          Real feedback from our amazing clients
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20} // smaller space on mobile
          slidesPerView={1} // default 1 slide on mobile
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center py-6 px-3  w-full">
                <div className="w-full p-6 bg-white  dark:bg-gray-300 shadow-lg rounded-2xl">
                  {/* Video Button */}
                  {t.video && (
                    <button
                      onClick={() => openVideo(t.video, t.name, t.role)}
                      className="absolute top-4 right-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md"
                      title="Watch Video"
                    >
                      <FaPlay className="w-4 h-4" />
                    </button>
                  )}
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
                      <div className="flex mt-1">
                        {[...Array(t.stars)].map((_, i) => (
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

        {/* Custom Navigation */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -left-3 hidden md:block  sm:-left-5 md:-left-6 transform -translate-y-1/2 cursor-pointer p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
        >
          <FaChevronLeft className="text-gray-800 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -right-3 hidden md:block sm:-right-5 md:-right-6 transform -translate-y-1/2 cursor-pointer p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
        >
          <FaChevronRight className="text-gray-800 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      {/* Video Modal */}
      {videoUrl && (
        <div
          onClick={() => setVideoUrl(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl p-4 bg-white rounded-xl"
          >
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute z-10 top-3 right-3 bg-red-500 rounded-full p-1 text-white"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Name & Role */}
            <div className="text-center mb-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {videoInfo.name}
              </h3>
              <p className="text-sm text-gray-500">{videoInfo.role}</p>
            </div>

            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src={videoUrl}
                title="Client Video"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
