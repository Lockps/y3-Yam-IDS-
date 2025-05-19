import React, { useState } from 'react';
import { 
  LineChart, 
  BarChart, 
  AreaChart, 
  Line, 
  Bar, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const ThreatTrendGraph = () => {
  const [chartType, setChartType] = useState('line');
  const [selectedAttackers, setSelectedAttackers] = useState({
    ddos: true,
    phishing: true,
    exploits: true
  });

  // ข้อมูลตัวอย่าง 12 เดือน
  const data = [
    { month: 'Jan', ddos: 2000, phishing: 900, exploits: 800 },
    { month: 'Feb', ddos: 1800, phishing: 850, exploits: 750 },
    { month: 'Mar', ddos: 1600, phishing: 800, exploits: 700 },
    { month: 'Apr', ddos: 1400, phishing: 750, exploits: 650 },
    { month: 'May', ddos: 1200, phishing: 700, exploits: 600 },
    { month: 'Jun', ddos: 1000, phishing: 650, exploits: 550 },
    { month: 'Jul', ddos: 800, phishing: 600, exploits: 500 },
    { month: 'Aug', ddos: 600, phishing: 550, exploits: 450 },
    { month: 'Sep', ddos: 400, phishing: 500, exploits: 400 },
    { month: 'Oct', ddos: 200, phishing: 450, exploits: 350 },
    { month: 'Nov', ddos: 100, phishing: 400, exploits: 300 },
    { month: 'Dec', ddos: 50, phishing: 350, exploits: 250 }
  ];

  // ฟังก์ชันสลับการแสดงผลของ Attacker
  const toggleAttacker = (attacker) => {
    setSelectedAttackers(prev => ({
      ...prev,
      [attacker]: !prev[attacker]
    }));
  };

  // เรนเดอร์กราฟตามประเภท
  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 20, right: 30, left: 20, bottom: 5 }
    };

    const renderData = () => (
      <>
        {selectedAttackers.ddos && (
          <>
            {chartType === 'line' && (
              <Line 
                type="monotone" 
                dataKey="ddos" 
                name="DDoS Attacks"
                stroke="#ff4444" 
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            )}
            {chartType === 'bar' && (
              <Bar 
                dataKey="ddos" 
                name="DDoS Attacks"
                fill="#ff4444"
                radius={[4, 4, 0, 0]}
              />
            )}
            {chartType === 'area' && (
              <Area 
                type="monotone"
                dataKey="ddos" 
                name="DDoS Attacks"
                stroke="#ff4444"
                fill="#ff444433"
                strokeWidth={2}
              />
            )}
          </>
        )}
        
        {selectedAttackers.phishing && (
          <>
            {chartType === 'line' && (
              <Line 
                type="monotone" 
                dataKey="phishing" 
                name="Phishing"
                stroke="#2196f3" 
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            )}
            {chartType === 'bar' && (
              <Bar 
                dataKey="phishing" 
                name="Phishing"
                fill="#2196f3"
                radius={[4, 4, 0, 0]}
              />
            )}
            {chartType === 'area' && (
              <Area 
                type="monotone"
                dataKey="phishing" 
                name="Phishing"
                stroke="#2196f3"
                fill="#2196f333"
                strokeWidth={2}
              />
            )}
          </>
        )}
        
        {selectedAttackers.exploits && (
          <>
            {chartType === 'line' && (
              <Line 
                type="monotone" 
                dataKey="exploits" 
                name="Exploits"
                stroke="#4CAF50" 
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            )}
            {chartType === 'bar' && (
              <Bar 
                dataKey="exploits" 
                name="Exploits"
                fill="#4CAF50"
                radius={[4, 4, 0, 0]}
              />
            )}
            {chartType === 'area' && (
              <Area 
                type="monotone"
                dataKey="exploits" 
                name="Exploits"
                stroke="#4CAF50"
                fill="#4CAF5033"
                strokeWidth={2}
              />
            )}
          </>
        )}
      </>
    );

    switch(chartType) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 2000]} />
            <Tooltip />
            <Legend />
            {renderData()}
          </BarChart>
        );
      
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 2000]} />
            <Tooltip />
            <Legend />
            {renderData()}
          </AreaChart>
        );

      default: // line
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 2000]} />
            <Tooltip />
            <Legend />
            {renderData()}
          </LineChart>
        );
    }
  };

  return (
    <div className="threat-graph-container">
      <div className="graph-header">
        <h3>Threat Trend Graph</h3>
        
        <div className="controls">
          {/* ปุ่มเลือกประเภทกราฟ */}
          <div className="chart-selector">
            {['line', 'bar', 'area'].map((type) => (
              <button
                key={type}
                className={`chart-btn ${chartType === type ? 'active' : ''}`}
                onClick={() => setChartType(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Chart
              </button>
            ))}
          </div>

          {/* ปุ่มเลือก Attacker */}
          <div className="attacker-selector">
            {Object.keys(selectedAttackers).map(attacker => (
              <button
                key={attacker}
                className={`attacker-btn ${selectedAttackers[attacker] ? 'active' : ''}`}
                onClick={() => toggleAttacker(attacker)}
              >
                {attacker === 'ddos' && 'DDoS Attacks'}
                {attacker === 'phishing' && 'Phishing'}
                {attacker === 'exploits' && 'Exploits'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* กราฟ */}
      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ThreatTrendGraph;