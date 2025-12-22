
import bgVideo from "../assets/video/trek.mp4";
import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Testimonials from "./section/Testimonial";

const Home = () => {
  return (
    <div>
      <a
        href="https://wa.me/971501234567" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-4 text-white transition-all duration-300 bg-green-500 rounded-full shadow-lg bottom-16 right-5 animate-bounce hover:animate-none hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.877 7.877 0 0 0 8.005.083C3.637.083.084 3.636.084 8.005c0 1.411.373 2.797 1.08 4.016L.034 15.86l3.924-1.018a7.91 7.91 0 0 0 3.948 1.051h.003c4.367 0 7.92-3.554 7.92-7.922a7.878 7.878 0 0 0-2.308-5.645zm-5.598 11.61a6.585 6.585 0 0 1-3.36-.917l-.24-.144-2.326.604.62-2.264-.157-.232a6.592 6.592 0 0 1-1.017-3.514c0-3.635 2.96-6.597 6.599-6.597a6.56 6.56 0 0 1 4.666 1.932 6.55 6.55 0 0 1 1.933 4.665c0 3.637-2.96 6.597-6.598 6.597zm3.603-4.94c-.198-.099-1.174-.58-1.357-.646-.182-.066-.316-.1-.45.1-.132.198-.515.645-.63.778-.116.132-.232.15-.43.05-.198-.1-.837-.308-1.594-.983-.59-.524-.99-1.172-1.105-1.37-.116-.198-.012-.304.087-.403.089-.089.198-.232.297-.348.1-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.1-.45-1.084-.616-1.487-.162-.39-.327-.337-.45-.343-.116-.006-.248-.006-.38-.006s-.347.05-.53.248c-.182.198-.696.681-.696 1.66 0 .979.713 1.924.813 2.057.1.132 1.402 2.14 3.395 3.002.474.204.843.326 1.13.417.475.15.906.129 1.248.078.38-.057 1.174-.48 1.34-.944.166-.463.166-.86.116-.944-.05-.082-.182-.132-.38-.232z" />
        </svg>
      </a>

      {/* video show  */}
      <div className="absolute top-0 left-0 w-full min-h-[80vh] overflow-hidden ">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/path/to/poster.jpg" // optional static image
          className="absolute inset-0 object-cover object-top h-full w-full"
          loading="lazy"
          aria-label="Background video"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black overlay with 60% opacity */}
        <div className="absolute inset-0 bg-black/30 min-h-[80vh] w-full mix-blend-multiply "></div>
        <div className="absolute bottom-0 left-0 w-full min-h-[80vh] bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-slate-900"></div>
      </div>

      <div id="home">
        <Hero/>
      </div>
      <div id="about me">
        <About/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
       <div>
        <Testimonials/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
