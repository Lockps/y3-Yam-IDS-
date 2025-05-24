import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "4 days ago", traffic: 28 },
  { name: "3 days ago", traffic: 33 },
  { name: "2 days ago", traffic: 20 },
  { name: "Yesterday", traffic: 40 },
  { name: "Today", traffic: 45 },
];

const TrafficOverview = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl p-4 w-full h-full shadow-lg flex flex-col gap-4 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Traffics overview</p>
          <p className="text-xs text-teal-400 font-medium">
            (+5) more in this day
          </p>
        </div>
        <div className="text-white opacity-50 text-xl font-bold">⋯</div>
      </div>

      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderRadius: "0.5rem",
                border: "none",
              }}
              labelStyle={{ color: "#38bdf8" }}
            />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#fff"
              fillOpacity={1}
              fill="url(#colorTraffic)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficOverview;
