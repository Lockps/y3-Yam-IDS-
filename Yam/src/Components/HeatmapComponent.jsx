import React from 'react';
import './HeatmapComponent.css';

const HeatmapComponent = () => {
  // Sample data - replace with your actual data
  const heatmapData = [
    // Sunday
    [1, 7, 7, 3, 6, 1, 6, 23, 14, 15, 18, 10, 9, 12, 8, 2, 7, 8, 3, 8, 7, 0, 0, 0],
    // Monday
    [6, 7, 5, 4, 8, 5, 9, 9, 7, 20, 16, 21, 4, 13, 5, 12, 10, 11, 9, 5, 2, 5, 6, 0],
    // Tuesday
    [6, 6, 8, 9, 9, 7, 1, 9, 9, 10, 22, 3, 19, 9, 14, 22, 14, 4, 7, 1, 4, 8, 5, 0],
    // Wednesday
    [3, 8, 2, 7, 9, 2, 2, 1, 7, 11, 13, 23, 5, 18, 10, 22, 8, 7, 1, 3, 2, 9, 7, 0],
    // Thursday
    [9, 2, 9, 4, 8, 9, 6, 14, 9, 15, 13, 17, 12, 19, 20, 11, 3, 7, 2, 5, 1, 9, 0, 0],
    // Friday
    [7, 1, 2, 5, 6, 3, 5, 1, 12, 5, 7, 4, 4, 13, 12, 11, 9, 5, 8, 9, 7, 1, 3, 0],
    // Saturday
    [1, 3, 2, 9, 6, 2, 7, 1, 2, 9, 16, 12, 19, 20, 17, 16, 22, 10, 8, 5, 4, 5, 3, 4]
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hourLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const getColor = (value) => {
    if (value === 0) return '#1a1a2e';
    if (value < 5) return '#2b9348';
    if (value < 10) return '#aacc00';
    if (value < 15) return '#ffd700';
    if (value < 20) return '#ff8c00';
    return '#ff0000';
  };

  const getFontColor = (value) => {
    return value < 10 ? '#ffffff' : '#000000';
  };

  return (
    <div className="heatmap-container">
      <div className="heatmap-header">
        <h2>ATTACK FREQUENCY HEATMAP</h2>
        <p className="subtitle">Network intrusion attempts by day and hour</p>
      </div>
      
      <div className="heatmap-grid">
        {/* Time headers */}
        <div className="heatmap-corner"></div>
        {hourLabels.map(hour => (
          <div key={`h-${hour}`} className="time-header">
            {hour.split(':')[0]}
          </div>
        ))}

        {/* Heatmap cells */}
        {dayNames.map((day, dayIdx) => (
          <React.Fragment key={day}>
            <div className="day-label">{day}</div>
            {hourLabels.map((_, hourIdx) => {
              const value = heatmapData[dayIdx][hourIdx] || 0;
              return (
                <div
                  key={`${day}-${hourIdx}`}
                  className="heatmap-cell"
                  style={{ 
                    backgroundColor: getColor(value),
                    color: getFontColor(value)
                  }}
                  title={`${day} ${hourLabels[hourIdx]} | Attacks: ${value}`}
                >
                  {value > 0 && value}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Legend */}
      <div className="heatmap-legend">
        <div className="legend-scale">
          <span className="legend-label">Intensity:</span>
          <div className="legend-gradient">
            <span>0</span>
            <div className="gradient-bar"></div>
            <span>25+</span>
          </div>
        </div>
        <div className="legend-labels">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
          <span>Critical</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapComponent;