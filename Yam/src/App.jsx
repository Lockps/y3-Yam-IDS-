import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";

const App = () => {
  return (
    <div className="min-h-screen bg-mainbg flex relative">
      <AnimationBg />
      <div className=" relative z-10 w-[12%] m-[1%]">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
