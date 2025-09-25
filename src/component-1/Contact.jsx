import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="relative text-gray-600 dark:text-gray-300 body-font py-28">
      <div className="max-w-5xl px-5 mx-auto">
        {/* Header */}
        <div className="flex flex-col w-full mb-12 text-center">
          <h1
            data-aos="fade-up"
            className="mb-4 text-3xl font-bold text-gray-900 uppercase sm:text-4xl title-font dark:text-white"
          >
            Let&apos;s <span className="text-primary">connect</span>
          </h1>
          <p
            data-aos="fade-up"
            className="mx-auto text-base leading-relaxed lg:w-2/3"
          >
            Whether you&apos;re looking to collaborate on a creative project,
            need help with content editing or visual storytelling, or simply
            want to say hello — I&apos;m just a message away!
          </p>
        </div>

        {/* Contact Options */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-6 mx-auto"
        >
          {/* Email */}
          <div className="flex items-center gap-4 p-5 transition bg-white rounded-lg shadow-md dark:bg-slate-800 hover:shadow-lg">
            <MdOutlineMail className="text-3xl text-red-500" />
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHXPchjWXShWGSlnhFMcqhNzbVWJgKJqJbzctTbBMGKpNJKTfdKMPWwzNnnnVDLRPXnq"
                  )
                }
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-primary"
              >
                karmamonlamsangpo@gmail.com
              </button>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 p-5 transition bg-white rounded-lg shadow-md dark:bg-slate-800 hover:shadow-lg">
            <FaWhatsapp className="text-3xl text-green-500" />
            <div>
              <button
                onClick={() => window.open("https://wa.me/971567835189")}
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-green-500"
              >
                +971 56 783 5189
              </button>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 p-5 transition bg-white rounded-lg shadow-md dark:bg-slate-800 hover:shadow-lg">
            <FaInstagram className="text-3xl text-pink-500" />
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw=="
                  )
                }
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-pink-500"
              >
                @karmamonlamsangpo
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Want to work together or have something in mind?
          </p>
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHXPchjWXShWGSlnhFMcqhNzbVWJgKJqJbzctTbBMGKpNJKTfdKMPWwzNnnnVDLRPXnq"
              )
            }
            className="px-6 py-2 mt-4 font-semibold text-white transition rounded bg-primary hover:bg-primary/80"
          >
            Say Hello 👋
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
