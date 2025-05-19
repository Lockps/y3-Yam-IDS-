// components/ThreatListView.jsx
import React from 'react';

const ThreatListView = () => {
  const threatData = [
    {
      ip: '192.168.1.2',
      name: 'Worms',
      type: 'Malware',
      time: '10:00 PM', // เพิ่มคอลัมน์ time กลับเข้ามา
      threatLevel: 'high'
    },
    {
      ip: '244.255.255.1',
      name: 'DoS',
      type: 'Network Threats',
      time: '11:30 PM', // เพิ่มคอลัมน์ time กลับเข้ามา
      threatLevel: 'critical'
    },
    {
      ip: 'Name',
      name: 'Name',
      type: 'Worms',
      time: '12:45 PM', // เพิ่มคอลัมน์ time กลับเข้ามา
      threatLevel: 'medium'
    }
  ];

  const getThreatEmoji = (level) => {
    switch(level) {
      case 'low': return '🟢';
      case 'medium': return '🟡';
      case 'high': return '🟠';
      case 'critical': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="blue-frame">
      <h3>Threat List View</h3>
      <table className="threat-table">
        <thead>
          <tr>
            <th>Source IP</th>
            <th>Name</th>
            <th>Type</th>
            <th>Time</th> {/* เพิ่มคอลัมน์ Time */}
            <th>Status Indicator</th>
            <th>Responses</th>
          </tr>
        </thead>
        <tbody>
          {threatData.map((item, index) => (
            <tr key={index}>
              <td>{item.ip}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.time}</td> {/* แสดงข้อมูลเวลา */}
              <td className="emoji-cell">
                {getThreatEmoji(item.threatLevel)}
              </td>
               <td className="action-cell">
                <button className="freeze-btn">Freeze</button>
                <button className="blocked-btn">Blocked</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatListView;