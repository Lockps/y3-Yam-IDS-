import React, { useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";

const App = () => {
  const [openNav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!openNav);
  };

  return (
    <div className="min-h-screen bg-mainbg flex relative">
      <AnimationBg />
      <div
        className={`m-[0.5%] transition-all duration-300 ease-in-out ${
          openNav ? "w-[15%]" : "w-0"
        } overflow-hidden z-20`}
      >
        <Navbar close={handleNavbar} />
      </div>
      {!openNav && (
        <div
          className="absolute top-0 left-0  bg-transparent z-10"
          onClick={handleNavbar}
        >
          <button className="">Open Navbar</button>
        </div>
      )}
    </div>
  );
};

export default App;
