import React, { useState, useEffect } from "react";

const Bandwidth = () => {
  const [bandwidth, setBandwidth] = useState({
    bytes_per_sec: 0,
    mbps: 0,
  });

  // Fetch bandwidth data every second
  useEffect(() => {
    const fetchBandwidth = async () => {
      try {
        const res = await fetch("http://localhost:8080/bandwidth");
        const data = await res.json();
        setBandwidth(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch bandwidth:", error);
      }
    };

    fetchBandwidth(); // initial fetch

    const interval = setInterval(() => {
      fetchBandwidth();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const score = Math.min(bandwidth.mbps, 10);
  const percentage = (score / 10) * 100;

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl p-4 w-full h-full shadow-lg flex flex-col justify-between relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="text-sm font-semibold">Bandwidth</div>
        <div className="text-white opacity-50 text-xl font-bold">⋯</div>
      </div>

      {/* Content */}
      <div className="flex justify-between items-center h-full">
        {/* Left Info */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1e293b] rounded-xl px-4 py-2">
            <p className="text-xs text-gray-400">Current Usage (bytes/s)</p>
            <p className="text-lg font-bold">
              {bandwidth.bytes_per_sec.toLocaleString()}
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl px-4 py-2">
            <p className="text-xs text-gray-400">Average Bandwidth (Mbps)</p>
            <p className="text-lg font-bold">{bandwidth.mbps.toFixed(2)}</p>
          </div>
        </div>

        {/* Circular Score */}
        <div className="relative w-[120px] h-[120px]">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#334155"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#22d3ee"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`100- ${(percentage / 100) * 2 * Math.PI * 40} ${
                2 * Math.PI * 40
              }`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-xs text-gray-400">Safety</p>
            <p className="text-2xl font-bold">{100 - score.toFixed(1)}</p>
            <p className="text-xs text-gray-400">Total Score</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bandwidth;
