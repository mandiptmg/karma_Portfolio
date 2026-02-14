import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import contact from "../../assets/contact.png";
const Contact = () => {
  return (
    <section className="relative text-gray-600 grid lg:grid-cols-2 place-items-center gap-6 dark:text-gray-300 body-font py-28">
      <div className="w-full h-full overflow-hidden ">
        <img src={contact} className="w-full rounded-xl  object-cover" />
      </div>
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col w-full mb-12 text-center">
          <h1
            data-aos="fade-up"
            className="mb-4 text-2xl font-bold text-gray-900 uppercase sm:text-4xl title-font dark:text-white"
          >
            Let&apos;s <span className="text-primary">connect</span>
          </h1>
          <p
            data-aos="fade-up"
            className="mx-auto text-sm sm:text-base leading-relaxed lg:w-2/3 text-gray-500  dark:text-white "
          >
            Whether you&apos;re looking to collaborate on a creative project,
            need help with content editing or visual storytelling, or simply
            want to say hello — I&apos;m just a message away!
          </p>
        </div>

        {/* Contact Options */}
        <div
          data-aos="fade-up"
          className="grid  grid-row-4  items-center justify-center w-full  gap-6 mx-auto"
        >
          {/* Email */}
          <div className="col-span-1  xl:col-span-2 flex items-center justify-center gap-4 p-5 transition bg-white rounded-lg shadow-md dark:bg-slate-800 hover:shadow-lg">
            <MdOutlineMail className="text-3xl text-red-500" />
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=karmamonlamsangpo@gmail.com&su=Hello&body=Hi%20Karma",
                  )
                }
                className="font-medium text-sm  cursor-pointer sm:text-base text-gray-800 dark:text-gray-100 hover:text-primary  hover:text-red-500"
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
                className="font-medium  cursor-pointer text-sm sm:text-base text-gray-800 dark:text-gray-100 hover:text-green-500"
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
                    "https://www.instagram.com/karmamonlamsangpo/profilecard/?igsh=MWs3b2psMHZianFxZw==",
                  )
                }
                className="font-medium   cursor-pointer text-sm sm:text-base text-gray-800 dark:text-gray-100 hover:text-pink-500"
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
            title="Send me an email"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=karmamonlamsangpo@gmail.com&su=Hello&body=Hi%20Karma",
              )
            }
            className="px-6 py-2 mt-4 hover:scale-105  text-sm sm:text-base cursor-pointer font-semibold dark:text-white text-gray-600 transition-all rounded bg-primary hover:bg-primary/80"
          >
            Say Hello 👋
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
