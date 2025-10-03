import { FaChevronCircleUp } from "react-icons/fa";
import img from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const Footer = () => {
  const time = new Date().getFullYear();
  const { toogle } = useGlobalContext();

  return (
    <div>
      <footer className="relative md:w-[80vw] mx-auto md-[90vw]  mt-16 md:mt-0 ">
        <div className="w-full p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              data-aos="fade-right"
              href="#home"
              className="flex items-center mb-4 sm:mb-0"
            >
              {toogle ? (
                <img src={whiteLogo} className="h-20 mr-3" alt="karma Logo" />
              ) : (
                <img src={img} className="h-20 mr-3" alt="karma Logo" />
              )}
            </a>
            <ul
              data-aos="fade-up"
              className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
            >
              <li>
                <a href="#about me" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="mr-4 hover:underline md:mr-6 ">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="block mx-5 text-sm text-gray-500 md:mx-0 sm:text-center dark:text-gray-400">
          © {time}
          <a href="#home" className="ml-1 hover:underline">
            Karma
          </a>
          . All Rights Reserved.{" "}
          <span className="font-light  italic capitalize underline">
            <Link to={"https://mandiptamang.vercel.app"}>
              created by Mandip Tamang
            </Link>
          </span>
        </p>

        <button
          title="Home"
          className="text-3xl"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaChevronCircleUp className="absolute transition-all duration-700 bottom-10 right-14 primary text-primary hover:scale-105 animate-bounce " />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
