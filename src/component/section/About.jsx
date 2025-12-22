import img from "../../assets/content.png";
import Resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <section className="grid w-full text-gray-600 place-items-center">
      <div className="grid items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-2 md:px-10 max-w-7xl mx-auto">
        {/* IMAGE */}
        <div className="w-full" data-aos="fade-right">
          <img
            src={img}
            alt="Karma Lama"
            className="object-cover w-full rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div data-aos="fade-up">
          <h2 className="mb-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">
            About Me
          </h2>

          <h1 className="mb-4 text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            A Dedicated Content Editor Based in Dubai, UAE
          </h1>
          <p className="space-y-3 leading-relaxed text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            <span>
              I’m <strong>Karma Lama</strong>, a creative
              <strong> Video Editor</strong> and
              <strong> Content Creator</strong> who turns ideas into meaningful,
              high-quality visuals. My work spans
              <strong> video editing</strong>,<strong> photography</strong>,
              <strong> graphic design</strong>, and
              <strong> social media content</strong>.
            </span>
            <br />
            <span>
              I use professional tools such as
              <strong> Adobe Premiere Pro</strong>,
              <strong> After Effects</strong>,<strong> Photoshop</strong>,
              <strong> Illustrator</strong>,<strong> Lightroom</strong>,
              <strong> DaVinci Resolve</strong>, and
              <strong> CapCut Pro</strong>, along with AI-powered editing tools
              to deliver clean, cinematic, and on-brand content.
            </span>
            <br />
            <span>
              Visual storytelling is at the heart of my work—creating content
              that connects with audiences, strengthens brand identity, and
              performs across digital platforms.
            </span>
            <br />
            <span>
              I’m adaptable, detail-oriented, and always eager to learn,
              thriving in fast-paced creative environments and collaborative
              teams.
            </span>
          </p>

          {/* RESUME BUTTON */}
          <button className="inline-flex items-center gap-2  mt-6">
            <a
              href={Resume}
              download="Karma-Lama-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-base font-semibold text-white transition rounded-lg bg-primary hover:bg-primary/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="20"
                viewBox="0 0 640 512"
                className="fill-current"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
              </svg>
              <span>View Resume</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
