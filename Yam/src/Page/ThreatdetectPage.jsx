import React from 'react';
import '../Components/threatdetect.css';
import DonutChart from '../Components/DonutChart';
import ThreatListView from '../Components/ThreatListView';
import ThreatTrendGraph from '../Components/ThreatTrendGraph';
import HeatmapComponent from '../Components/HeatmapComponent'; // นำเข้า HeatmapComponent

const ThreatdetectPage = () => {
  return (
    <div className="threat-detect-container">

      {/* ไซด์บาร์ด้านซ้าย */}
      <div className="sidebar-threatdetect">
        <h3>🔥 BADBOI</h3>
        <hr />
        <ul>
          <li><a href="/dashboard"><span className="icon">🏠</span> Dashboard</a></li>
          <li><a href="/threat-detection"><span className="icon">📊</span> Tables</a></li>
          <li><a href="/billing"><span className="icon">📄</span> Billing</a></li>
          <li><a href="/rtl"><span className="icon">⚙️</span> RTL</a></li>
        </ul>

        <h4>ACCOUNT PAGES</h4>
        <ul>
          <li><a href="/profile" className="active"><span className="icon">👤</span> Profile</a></li>
          <li><a href="/signin"><span className="icon">🔑</span> Sign In</a></li>
          <li><a href="/signup"><span className="icon">📝</span> Sign Up</a></li>
        </ul>

        <div className="help-section-threatdetect">
          <p><span className="icon">❓</span> Need help?</p>
          <button className="documentation-button"><span className="icon">📚</span> DOCUMENTATION</button>
        </div>
      </div>

      <div className="main-content-threatdetect">
  {/* ส่วนหัวหน้า */}
  <div className="TopPage-threatdetect">
    <h3>Pages</h3> 
    <h4>/ Tables</h4>
  </div>

  {/* Container สำหรับกล่องคู่ */}
  <div style={{ 
    display: 'flex', 
    gap: '20px', 
    width: '100%',
    flexWrap: 'wrap' 
  }}>
    {/* กล่อง Threat Severity Analysis */}
    <div className="analysis-card" style={{ flex: '1 1 30%' }}>
      <h3>Threat Severity Analysis</h3>
      <p>Nice to see you, Mark Johnson!</p>
      <DonutChart />
    </div>

    {/* กล่อง Threat List View */}
    <div className="analysis-car" style={{ flex: '1 1 65%' }}>
      <ThreatListView />
    </div>
    {/* เพิ่มกราฟตรงนี้ */}
<div style={{ width: '52%', marginTop: '-30%' }}>
  <ThreatTrendGraph />
</div>
{/* Heatmap แยกต่างหาก */}
  <div style={{ 
    width: '40%', 
    marginTop: '-693px',
    marginLeft: '1200px' // จัดชิดขวา
  }}>
    <HeatmapComponent />
  </div>
</div>
  </div>
</div>

  );
};

export default ThreatdetectPage;