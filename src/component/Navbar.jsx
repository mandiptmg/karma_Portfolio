import image from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";

// import { NavLink } from 'react-router-dom'
import "animate.css";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { active, setActive, toogle, setToogle } = useGlobalContext();
  const [scroll, setScroll] = useState("");

  //load dark mode local storage
  useEffect(() => {
    const storedValue = localStorage.getItem("dark-mode");
    if (storedValue === "true") {
      setToogle(true);
      document.documentElement.classList.add("dark");
    } else {
      setToogle(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(
          "bg-gray-100 text-gray-600 dark:text-white dark:bg-slate-800 shadow-xl"
        );
      } else {
        setScroll("text-white");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlink = [
    { title: "home", href: "#home" },
    { title: "about me", href: "#about me" },
    { title: "Portfolio", href: "#projects" },
    { title: "contact", href: "#contact" },
  ];
  return (
    <div className={` ${scroll} items-center  h-20 z-20 grid sticky top-0`}>
      <div className="w-[90vw] mx-auto md:w-[80vw]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <a href="/" className="flex items-center gap-1">
              {toogle ? (
                <img
                  src={whiteLogo}
                  className="object-contain h-16 duration-1000 rounded-full animate__slower animate__fadeInLeft animate__animated"
                  alt="karma Logo"
                />
              ) : window.scrollY > 50 ? (
                <img
                  src={image}
                  className="object-contain h-16 duration-1000 rounded-full animate__slower animate__fadeInLeft animate__animated"
                  alt="karma Logo"
                />
              ) : (
                <img
                  src={whiteLogo}
                  className="object-contain h-16 duration-1000 rounded-full animate__slower animate__fadeInLeft animate__animated"
                  alt="karma Logo"
                />
              )}
            </a>
          </div>
          <div className="hidden animate__slower animate__fadeInDown animate__animated md:block">
            <ul className="flex items-center gap-5 text-lg capitalize lg:gap-10 ">
              {navlink.map((item) => {
                const { title, href } = item;
                return (
                  <li key={title} className="hover:text-primary">
                    <a href={href}>{title}</a>
                  </li>
                );
              })}{" "}
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                setToogle(!toogle);
                if (toogle === true) {
                  document.documentElement.classList.remove("dark");
                  localStorage.setItem("dark-mode", !toogle);
                } else {
                  document.documentElement.classList.add("dark");
                  localStorage.setItem("dark-mode", !toogle);
                }
              }}
              title={toogle ? "light mode on" : "night mode on"}
              className="mr-5 md:mr-0 animate__slower animate__fadeInRight animate__animated"
            >
              {toogle ? (
                <BsFillSunFill className="text-yellow-600  bg-white p-2 h-7 w-7 rounded-full" />
              ) : (
                <BsFillMoonStarsFill className="text-slate-800 bg-white p-2 h-7 w-7 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActive(!active)}
              className="text-xl md:hidden animate__slower animate__fadeInRight animate__animated"
            >
              <FaBars className="transition-all duration-300 text-primary hover:rotate-90 hover:text-primary " />
            </button>
          </div>
        </div>
      </div>

      {/* //close and open menu */}

      <div
        className={
          active
            ? " fixed grid place-items-center dark:bg-slate-900 bg-white top-0 left-0 z-10 w-full h-full"
            : "hidden"
        }
      >
        <div className="grid place-items-center">
          <div>
            <button
              className="absolute top-7 right-5 bg-primary rounded-full p-2  transition-all duration-300 hover:scale-105  "
              onClick={() => setActive(false)}
            >
              <FaTimes className="text-2xl text-white " />
            </button>
          </div>
          <div>
            <ul className="text-4xl text-center text-gray-600 capitalize space-y-14 dark:text-white ">
              {navlink.map((item, index) => {
                const { title, href } = item;
                return (
                  <li key={index} className="hover:text-primary uppercase italic font-extrabold">
                    <a href={href} onClick={() => setActive(false)}>
                      {title}
                    </a>
                  </li>
                );
              })}{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
