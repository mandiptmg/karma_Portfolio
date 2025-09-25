import { FaInstagram } from "react-icons/fa6";
import img from "../assets/person.png";
import { TypeAnimation } from "react-type-animation";

const Hero1 = () => {
  const dynamicStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div>
      <section
        id="home"
        className="relative w-full mx-auto text-gray-200 h-[80vh] pt-28 body-font "
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
              <h1 className="grid text-4xl font-bold capitalize lg:text-5xl text-primary place-items-center">
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

            <p className="mb-8 leading-relaxed dark:text-gray-300 md:text-lg">
              Hello! I&apos;m <strong>Karma Lama</strong>, a passionate visual
              creator blending{" "}
              <span className="font-semibold text-primary">
                content editing
              </span>
              ,<span className="font-semibold text-primary"> photography</span>,
              and
              <span className="font-semibold text-primary"> design</span> into
              compelling stories. With a background in business management and
              creative media, I specialize in transforming ideas into impactful
              visuals.
              <br />
              <br />
              Proficient in <strong>Adobe Tools</strong>,{" "}
              <strong>Microsoft Office</strong>,<strong>Figma</strong>, and
              digital storytelling, I thrive on delivering bold, modern, and
              effective media solutions that inspire audiences.
            </p>

            <div className="inline-flex items-center justify-center p-2 bg-pink-600 rounded-md lg:justify-start hover:bg-pink-700 gap-x-4">
              <button
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw=="
                  );
                }}
                className="flex items-center gap-2 text-lg font-medium text-white transition hover:text-white"
              >
                <FaInstagram size={25} />
                Follow on Instagram
              </button>
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="grid w-full place-items-center">
            <div
              data-aos="fade-left"
              data-aos-delay="600"
              className="animate-blob relative bg-cover bg-center bg-no-repeat border-4 border-transparent rounded-full lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] transition-all duration-1000 shadow-lg shadow-primary/10"
              style={dynamicStyle}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
