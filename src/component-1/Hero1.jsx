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
        className="text-gray-600 relative lg:h-screen pt-28 w-full mx-auto body-font"
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:gap-7 gap-y-20 items-center px-5">
          {/* LEFT TEXT CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            className="space-y-7 md:text-left text-center"
          >
            <div className="flex items-start gap-x-2">
              <h1 className="lg:text-5xl text-4xl capitalize text-indigo-600 grid place-items-center font-bold">
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

            <p className="mb-8 dark:text-gray-400 md:text-lg leading-relaxed">
              Hello! I&apos;m <strong>Karma Lama</strong>, a passionate visual
              creator blending <span className="font-semibold text-indigo-500">content editing</span>,
              <span className="font-semibold text-indigo-500"> photography</span>, and
              <span className="font-semibold text-indigo-500"> design</span> into compelling stories. With a background in
              business management and creative media, I specialize in transforming ideas into impactful visuals.
              <br />
              <br />
              Proficient in <strong>Adobe Tools</strong>, <strong>Microsoft Office</strong>,<strong>Figma</strong>, and digital storytelling,
              I thrive on delivering bold, modern, and effective media solutions that inspire audiences.
            </p>

            <div className="inline-flex lg:justify-start bg-pink-600 p-2 rounded-md  hover:bg-pink-700 justify-center items-center gap-x-4">
              <button
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw=="
                  );
                }}
                className="flex items-center gap-2 text-white hover:text-white text-lg font-medium transition"
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
              className="animate-blob relative bg-cover bg-center bg-no-repeat border-4 border-gray-800 rounded-full lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] transition-all duration-1000 shadow-lg shadow-indigo-300/30"
              style={dynamicStyle}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
