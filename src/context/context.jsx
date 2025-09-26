import { createContext, useState, useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const handleChange = () => {
      if (window.innerWidth >= 768) {
        setActive(false);
      }
    };

    handleChange(); // Initial call to set the initial state

    window.addEventListener("resize", handleChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);
  return (
    <AppContext.Provider value={{ active, setActive, toogle, setToogle }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
