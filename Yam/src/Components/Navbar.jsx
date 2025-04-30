import React from "react";
import { Link } from "react-router-dom"; // ใช้ Link สำหรับเปลี่ยนเส้นทาง
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "./Navbar.css"; // เพิ่มบรรทัดนี้เพื่อใช้ Navbar.css
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Badguy Detection</h1>
      <div className="navbar-links">
        <Link to="/dashboard">
          <FaHome /> Dashboard
        </Link>
        <Link to="/profile">
          <FaUser /> Profile
        </Link>
        <Link to="/" onClick={() => onNavigate(<SignUpForm />)}>
          <FaUserPlus /> Sign Up
        </Link>
        <Link to="/" onClick={() => onNavigate(<SignInForm />)}>
          <FaSignInAlt /> Sign In
        </Link>
      </div>
      <button className="btn-download">Free Download</button>
    </nav>
  );
};

export default Navbar;
