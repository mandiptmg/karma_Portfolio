import { FaInstagram } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import img from "../../assets/person.png";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dynamicStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div>
      <section
        id="home"
        className="relative grid place-items-center w-full mx-auto text-gray-600 lg:text-gray-200 min-h-[80vh] pt-28 body-font "
      >
        <div className="flex flex-col-reverse items-center px-5 lg:grid lg:grid-cols-2 md:gap-7 gap-y-20">
          {/* LEFT TEXT CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            className="text-center space-y-7 md:text-left"
          >
            <div className="flex items-start gap-x-2">
              <h1 className="grid w-full text-2xl sm:text-3xl md:text-4xl font-bold capitalize lg:text-5xl text-primary place-items-center lg:place-items-start">
                <TypeAnimation
                  sequence={[
                    "Content Editor 📸",
                    1500,
                    "Visual Storyteller 🎬",
                    1500,
                    "Creative Designer 🎨",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
            </div>

            <p className="mb-8 leading-relaxed dark:text-gray-300 text-sm sm:text-base md:text-lg">
              Hi, I’m <strong>Karma Lama</strong> — a
              <strong> Visual Content Creator</strong> and
              <strong> Digital Marketing Lead</strong> crafting
              <span className="font-semibold text-primary">
                {" "}
                cinematic visuals
              </span>
              ,
              <span className="font-semibold text-primary">
                {" "}
                high-impact videos
              </span>
              , and
              <span className="font-semibold text-primary">
                {" "}
                performance-driven campaigns
              </span>
              that help brands stand out and convert attention into results.
              <br />
              <br />
              Currently, I create premium real estate content at{" "}
              <strong>Revo Real Estate</strong> in Dubai, producing property
              films, short-form social content, and digital campaigns that
              elevate brand presence and property visibility. Previously, I led
              creative and marketing strategy as{" "}
              <strong>Digital Marketing Head at Arya Specialty Coffee</strong>.
            </p>

            <div className="flex gap-2 items-center ">
              <button
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw=="
                  );
                }}
                className="inline-flex items-center gap-2  p-2 bg-pink-600 rounded-md lg:justify-start hover:bg-pink-700 text-sm md:text-lg font-medium text-white transition hover:text-white"
              >
                <FaInstagram size={25} />
                Instagram
              </button>
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="inline-flex items-center gap-2 capitalize p-2 bg-pink-600 rounded-md lg:justify-start hover:bg-pink-700 text-sm md:text-lg font-medium text-white transition hover:text-white"
              >
                <FaRegPlayCircle size={25} />
                play video
              </button>
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="grid w-full place-items-center">
            <div
              data-aos="fade-down"
              data-aos-delay="600"
              className="animate-blob relative bg-cover bg-center bg-no-repeat border-4 border-transparent rounded-full lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] transition-all duration-1000 shadow-lg shadow-primary/10"
              style={dynamicStyle}
            ></div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative shadow-lg w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mux Player */}
            <mux-player
              class="w-full rounded-b-2xl"
              autoplay
              playback-id="A6oZoUWVZjOIVZB6XnBMLagYnXE6xhDhp8Hcyky018hk"
              metadata-video-title="Demo Video"
              metadata-viewer-user-id="user-123"
              accent-color="#5C9FFF"
            ></mux-player>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
