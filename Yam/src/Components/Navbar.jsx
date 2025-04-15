import React from "react";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import './Navbar.css'; // เพิ่มบรรทัดนี้เพื่อใช้ Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Badguy Detection</h1>
      <div className="navbar-links">
        <a href="/dashboard">
          <FaHome /> Dashboard
        </a>
        <a href="/profile">
          <FaUser /> Profile
        </a>
        <a href="/signup">
          <FaUserPlus /> Sign Up
        </a>
        <a href="/signin">
          <FaSignInAlt /> Sign In
        </a>
      </div>
      <button className="btn-download">Free Download</button>
    </nav>
  );
};



export default Navbar;
