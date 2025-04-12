import React from "react";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // นำไอคอนมาจาก react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>Badguy Detection</h1>
        <div className="navbar-links">
          <a href="/dashboard">
            <FaHome className="navbar-icon" /> Dashboard
          </a>
          <a href="/profile">
            <FaUser className="navbar-icon" /> Profile
          </a>
          <a href="/signup">
            <FaUserPlus className="navbar-icon" /> Sign Up
          </a>
          <a href="/signin">
            <FaSignInAlt className="navbar-icon" /> Sign In
          </a>
        </div>
        <button className="btn-download">Free Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
