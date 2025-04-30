import React from "react";
import { Link } from "react-router-dom"; // ใช้ Link สำหรับเปลี่ยนเส้นทาง
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import './Navbar.css'; // เพิ่มบรรทัดนี้เพื่อใช้ Navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Badguy Detection</h1>
      <div className="navbar-links">
        <Link to="/dashboard"> {/* ใช้ Link แทน <a> เพื่อให้เปลี่ยนหน้า */}
          <FaHome /> Dashboard
        </Link>
        <Link to="/profile">
          <FaUser /> Profile
        </Link>
        <Link to="/signup"> {/* ลิงก์ไปหน้า SignUp */}
          <FaUserPlus /> Sign Up
        </Link>
        <Link to="/signin"> {/* ลิงก์ไปหน้า SignIn */}
          <FaSignInAlt /> Sign In
        </Link>
      </div>
      <button className="btn-download">Free Download</button>
    </nav>
  );
};

export default Navbar;
