import React from "react";
import './Components/profile.css';  // นำเข้า CSS สำหรับหน้า Profile

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="sidebar">
        <h3>Account Pages</h3>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="profile-header">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Profile" />
          <h2>Mark Johnson</h2>
          <p>mark@simmple.com</p>
        </div>

        <div className="profile-details">
          <h3>Welcome back!</h3>
          <div className="car-info">
            <h4>Car Information</h4>
            <p>Battery Health: 76%</p>
            <p>Efficiency: +20%</p>
            <p>Consumption: 163W/km</p>
            <p>This Week: 1.342 km</p>
          </div>

          <div className="projects">
            <h4>Projects</h4>
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Modern" />
              <p>Modern</p>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Scandinavian" />
              <p>Scandinavian</p>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/150" alt="Minimalist" />
              <p>Minimalist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
