import React from 'react';
import '../Components/profile.css'; // ใส่ไฟล์ CSS ที่เราสร้าง

const ProfilePage = () => {
  return (

    <div className="profile-container">
      
      <div className="sidebar">
  <h3>🔥 BADBOI</h3> {/* เพิ่ม Emoji */}
  <hr />
  <ul>
  <li><a href="/dashboard"><span className="icon">🏠</span> Dashboard</a></li>
  <li><a href="/tables"><span className="icon">📊</span> Tables</a></li>
  <li><a href="/billing"><span className="icon">📄</span> Billing</a></li>
  <li><a href="/rtl"><span className="icon">⚙️</span> RTL</a></li>
</ul>

  <h4>ACCOUNT PAGES</h4>
<ul>
  <li><a href="/profile" className="active"><span className="icon">👤</span> Profile</a></li>
  <li><a href="/signin"><span className="icon">🔑</span> Sign In</a></li>
  <li><a href="/signup"><span className="icon">📝</span> Sign Up</a></li>
</ul>
<div className="help-section">
  <p><span className="icon">❓</span> Need help?</p>
  <button className="documentation-button"><span className="icon">📚</span> DOCUMENTATION</button>
</div>
</div>

      {/* Main content */}
      <div className="main-content">
        {/* TopPage section */}
        <div className="TopPage">
          <h3>Pages</h3> <h4>/ Profile</h4>     
        </div>

        {/* Profile header */}
        <div className="profile-header">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Profile" style={{ width: '80px', height: '80px' }} />
          <div className="profile-info">
            <h2>Mark Johnson</h2>
            <h3>mark@simmple.com</h3>
          </div>
          {/* 3 ช่องด้านขวา */}
          <div className="profile-actions">
            <button className="action-button">Overview</button>
            <button className="action-button">Projects</button>
            <button className="action-button">Settings</button>
          </div>
        </div>

        <div className="profile-top">
          
  <div className="top-row">
    {/* Welcome back */}
    <div className="welcome-back">
      <h1>Welcome back!</h1>
      <p>Nice to see you, Mark Johnson!</p>
      <button className="turn-on-car">Turn on your car →</button>
    </div>

    {/* Car Informations */}
    <div className="car-info-wrapper">
      <h3>Car Informations</h3>
      <p>Hello, Mark Johnson! Your Car is ready.</p>
      <div className="car-info">
        <div className="car-info-box">
          <h4>Battery Health</h4>
          <p>76%</p>
        </div>
        <div className="car-info-box">
          <h4>Efficiency</h4>
          <p>+20%</p>
        </div>
        <div className="car-info-box">
          <h4>Consumption</h4>
          <p>163W/km</p>
        </div>
        <div className="car-info-box">
          <h4>This Week</h4>
          <p>1.342 km</p>
        </div>
      </div>
      <div className="car-time">
        <div className="circular-progress">
          <div className="progress-value">68%</div>
        </div>
        <p>Battery Status</p>
        <p>68% Charged</p>
        <p>Time to full charge: 58 minutes</p>
      </div>
    </div>

    {/* Profile Informations */}
    <div className="profile-info-container">
      <h3>Profile Informations</h3>
      <p>Hi, I'm Mark Johnson. Decisions: If you can't decide, the answer is no...</p>
      <div className="profile-data">
        <div className="profile-item">
          <h4>Full Name:</h4>
          <p>Mark Johnson</p>
        </div>
        <div className="profile-item">
          <h4>Mobile:</h4>
          <p>(44) 123 1234 123</p>
        </div>
        <div className="profile-item">
          <h4>Email:</h4>
          <p>mark@simmple.com</p>
        </div>
        <div className="profile-item">
          <h4>Location:</h4>
          <p>United States</p>
        </div>
        <div className="profile-item">
          <h4>Social Media:</h4>
          <p>@Twitter / @Instagram</p>
        </div>
      </div>
    </div>
  </div>

  <div className="bottom-row">
  {/* Platform Settings */}
  <div className="platform-settings">
    <h3>Platform Settings</h3>
    <div className="settings-group">
      <h4>Account</h4>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Email me when someone follows me
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Email me when someone answers to my post
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Email me when someone mentions me
        </label>
      </div>
    </div>
    <div className="settings-group">
      <h4>Application</h4>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          New launches and projects
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Monthly product updates
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Subscribe to newsletter
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input type="checkbox" />
          Receive mails weekly
        </label>
      </div>
    </div>
  </div>

  <div className="projects">
  <h3>Projects</h3>
  <div className="project-list">
    <div className="project-item">
      <img src="/images/pro2.png" alt="Project 1" style={{ width: '150px', height: '100px' }} />
      <h4>Project #1</h4>
      <p>Modern</p>
      <p>As Uber works through a huge amount of internal management turmoil.</p>
      <div className="project-footer">
        <button className="view-button">View All</button>
        <div className="avatars">
          <img src="/images/Profilewelcome.png" alt="Avatar 1" style={{ width: '30px', height: '30px' }} />
          <img src="/images/avatartest.webp" alt="Avatar 2" style={{ width: '30px', height: '30px' }} />
          <img src="/images/avatartest.webp" alt="Avatar 3" style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
    </div>
    <div className="project-item">
      <img src="/images/pro1.png" alt="Project 2" style={{ width: '150px', height: '100px' }} />
      <h4>Project #2</h4>
      <p>Scandinavian</p>
      <p>Music is something that every person has his or her own specific opinion about.</p>
      <div className="project-footer">
        <button className="view-button">View All</button>
        <div className="avatars">
          <img src="https://via.placeholder.com/40" alt="Avatar 1" style={{ width: '30px', height: '30px' }} />
          <img src="https://via.placeholder.com/40" alt="Avatar 2" style={{ width: '30px', height: '30px' }} />
          <img src="https://via.placeholder.com/40" alt="Avatar 3" style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
    </div>
    <div className="project-item">
      <img src="/images/pro2.png" alt="Project 3" style={{ width: '150px', height: '100px' }} />
      <h4>Project #3</h4>
      <p>Minimalist</p>
      <p>Different people have different tastes, and various types of music.</p>
      <div className="project-footer">
        <button className="view-button">View All</button>
        <div className="avatars">
          <img src="https://via.placeholder.com/40" alt="Avatar 1" style={{ width: '30px', height: '30px' }} />
          <img src="https://via.placeholder.com/40" alt="Avatar 2" style={{ width: '30px', height: '30px' }} />
          <img src="https://via.placeholder.com/40" alt="Avatar 3" style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
    </div>
  </div>
</div>
        
          </div>
          
        </div>
        
      </div>
      </div>
    
    
  );
};

export default ProfilePage;
