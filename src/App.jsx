import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";


const App = () => {
  return (
    <div className="w-full dark:bg-slate-900 bg-gray-50  ">
      <Navbar />
      <div className=" md:w-[80vw] w-[90vw] mx-auto">
        <Home/>
      </div>
      <div className="bg-gray-200 dark:bg-[#264653]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
