import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";  // ใช้สำหรับสไตล์ที่เกี่ยวข้องกับหน้าแอพหลัก
import Navbar from "./Components/Navbar";
import AnimationBg from "./Components/AnimationBg";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import Profile from "./Profileee"; // นำเข้า Profile.jsx
import { RxHamburgerMenu } from "react-icons/rx";

const App = () => {
  const [openNav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!openNav);
  };

  return (
    <Router>
      <div className="min-h-screen flex bg-mainbg">
        <div className="left-side"></div>

        {/* ครึ่งขวาที่มี Navbar และ ฟอร์ม */}
        <div className="right-side flex-1 relative">
          <AnimationBg />
          <div
            className={`m-[0.5%] bg-tran transition-all duration-300 ease-in-out ${openNav ? "w-[15%]" : "w-0"} overflow-hidden z-50`}
          >
            <Navbar />
          </div>
          <div
            className="absolute top-[3%] left-[1.5%] bg-transparent z-50"
            onClick={handleNavbar}
          >
            <RxHamburgerMenu />
          </div>

          {/* ใช้ React Router เพื่อกำหนดเส้นทาง */}
          <Routes>
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/profile" element={<Profile />} /> {/* แสดงหน้า Profile */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
