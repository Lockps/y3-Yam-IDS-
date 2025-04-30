import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"; // ใช้สำหรับสไตล์ที่เกี่ยวข้องกับหน้าแอพหลัก
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import Profile from "./Profileee"; // นำเข้า Profile.jsx
import { RxHamburgerMenu } from "react-icons/rx";

const Landing = () => {
  const [openNav, setNav] = useState(true);
  const [pageSelect, setPageSelect] = useState(<SignInForm />);

  const handleNavbar = () => {
    setNav(!openNav);
  };

  return (
    <div className="min-h-screen flex bg-mainbg">
      <div className="left-side"></div>

      <div className="right-side  relative bg-mainbg">
        <AnimationBg />
        <div
          className={`m-[0.5%] bg-tran transition-all duration-300 ease-in-out ${
            openNav ? "w-[15%]" : "w-0"
          } overflow-hidden z-50`}
        >
          <Navbar onNavigate={setPageSelect} />
        </div>
        <div
          className="absolute top-[3%] left-[1.5%] bg-transparent z-50"
          onClick={handleNavbar}
        ></div>
        <div className="">{pageSelect}</div>
      </div>
    </div>
  );
};

export default Landing;
