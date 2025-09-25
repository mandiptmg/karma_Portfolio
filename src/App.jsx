import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div className="w-full dark:bg-slate-900 bg-gray-50  ">
      <Navbar />
      <div className=" md:w-[80vw] w-[90vw] mx-auto">
        <Hero />
      </div>
      <div className="bg-gray-200 dark:bg-[#264653]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
