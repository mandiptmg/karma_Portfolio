import img from "../assets/content.png";
import Resume from "../assets/resume.pdf";

const About = () => {
  return (
    <section className="w-full grid place-items-center text-gray-600">
      <div className="pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center px-4 md:px-10 max-w-7xl">
        {/* IMAGE */}
        <div className="w-full" data-aos="fade-right">
          <img
            src={img}
            alt="Karma Lama"
            className="rounded-xl object-cover w-full"
          />
        </div>

        {/* TEXT */}
        <div data-aos="fade-left">
          <h2 className="uppercase text-indigo-600 text-sm font-bold tracking-widest mb-2">
            About Me
          </h2>

          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-4">
            A Dedicated Content Editor Based in Dubai, UAE
          </h1>

          <p className="text-gray-500 dark:text-gray-300 md:text-lg leading-relaxed space-y-3">
            <span>
              I’m <strong>Karma Lama</strong>, a passionate and results-driven
              Content Editor with hands-on experience in{" "}
              <strong>graphic design</strong>,{" "}
              <strong>social media management</strong>,{" "}
              <strong>photography</strong>, and <strong>video editing</strong>.
            </span>
            <br />
            <span>
              With a strong command of tools like <strong>Adobe Suite</strong>,{" "}
              <strong>Microsoft Office</strong>, and AI-enhanced editing
              platforms, I bring both technical expertise and a creative eye to
              every project.
            </span>
            <br />
            <span>
              I thrive on crafting compelling digital content that aligns with
              brand goals and resonates with audiences. I&apos;m a fast learner,
              adaptable, and always eager to innovate.
            </span>
            <br />
            <span>
              I&apos;m excited about contributing to a creative team and
              continuing to grow in a dynamic, collaborative environment.
            </span>
          </p>

          {/* RESUME BUTTON */}
          <button
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-base font-semibold transition"
          >
            <a
              href={Resume}
              download="Karma-Lama-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-base font-semibold transition"
            ></a>
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
            <a />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
