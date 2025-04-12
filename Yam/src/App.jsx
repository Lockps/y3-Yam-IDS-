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
    <div className="min-h-screen flex bg-mainbg">
      {/* ครึ่งซ้ายที่มีรูปภาพ */}
      <div className="left-side">
        
      </div>

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
        </div>
        
        
        <div className="login-form">
          <h2>Nice to see you!</h2>
          <p>Enter your email and password to sign in</p>
          <form>
  <input type="email" placeholder="Your email address" />
  <input type="password" placeholder="Your password" />
  
  <div className="remember-me">
    <input type="checkbox" id="remember" /> 
    <label htmlFor="remember">Remember me</label>
  </div>
  
  <button type="submit">Sign In</button>
</form>

        </div>
      </div>
    </div>
  );
};

export default App;
