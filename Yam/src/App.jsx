import React, { useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";
import { RxHamburgerMenu } from "react-icons/rx";

const App = () => {
  const [openNav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!openNav);
  };

  return (
    <div className="min-h-screen bg-mainbg flex relative">
      <AnimationBg />
      <div
        className={`m-[0.5%] bg-tran transition-all duration-300 ease-in-out ${
          openNav ? "w-[15%]" : "w-0"
        } overflow-hidden z-20`}
      >
        <Navbar />
      </div>
      <div
        className="absolute top-[3%] left-[1.5%]  bg-transparent z-20"
        onClick={handleNavbar}
      >
        
      </div>
    </div>
  );
};

export default App;
