import React, { useEffect, useState } from "react";
import { FaDiceSix, FaUser } from "react-icons/fa";
import AnimationBg from "./AnimationBg";
import Bandwidth from "./Bandwidth";
import TrafficOverview from "./TrafficOverview";
import RiskManagement from "./RiskManagement";
import NewsFeed from "./NewsFeed";
import { useRiskContext } from "../Context/RiskContext";
import { GrDocumentTransfer, GrRisk, GrThreats } from "react-icons/gr";

const MainPage = () => {
  const [networkHealth, setNetworkHealth] = useState(95);
  const { riskValues } = useRiskContext();

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * (98 - 90 + 1)) + 90;
      setNetworkHealth(random);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stLayer = [
    {
      name: "Treat Found",
      icon: <GrThreats />,
      value: riskValues.some((risk) => risk > 75) ? 1 : 0,
    },
    { name: "Current User", icon: <FaUser />, value: "1" },
    {
      name: "Risk Rate",
      icon: <GrRisk />,
      value: riskValues.reduce((sum, value) => sum + value, 0) / 10 + " %",
    },
    {
      name: "All Traffics",
      icon: <GrDocumentTransfer />,
      value: riskValues[2] * riskValues[3],
    },
  ];

  return (
    <div className="w-full h-full  flex flex-col items-center p-4">
      <div className="w-full h-[10%] flex gap-2 justify-around mt-[3%]">
        {stLayer.map((element, index) => (
          <div
            key={index}
            className="w-[22%] bg-darkbg text-whites rounded-2xl flex justify-between items-center p-2"
          >
            <div className="ml-[5%] text-gray">
              {element.name}
              <div className="text-sm text-gray-400 text-whites">
                {element.value}
              </div>
            </div>
            <div className="w-[20%] h-[90%] flex justify-center items-center">
              <div className="w-full h-full flex justify-center items-center text-4xl">
                {element.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[95%] h-[30%] mt-[3%] flex justify-between">
        <div className="h-full w-[38%] bg-darkbg rounded-2xl">
          <TrafficOverview />
        </div>

        <div className="h-full w-[20%] bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg">
          <div className="w-full">
            <h2 className="text-sm font-semibold">Network Health</h2>
            <p className="text-xs text-gray-400">From all traffics</p>
          </div>

          <div className="relative w-28 h-28 my-2">
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
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(networkHealth / 100) * 2 * Math.PI * 40} ${
                  2 * Math.PI * 40
                }`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-blue-400 text-3xl">
              😊
            </div>
          </div>

          <div className="w-full bg-[#0f172a] rounded-xl py-2 text-center">
            <p className="text-xl font-bold">{networkHealth}%</p>
            <p className="text-sm text-gray-400">Based on Traffic</p>
          </div>
        </div>

        <div className="h-full w-[38%] bg-darkbg rounded-2xl">
          <Bandwidth />
        </div>
      </div>

      <div className="w-[95%] h-[43%] mt-[2%] flex justify-between">
        <div className="w-[63%] h-full bg-darkbg rounded-2xl">
          <RiskManagement />
        </div>
        <div className="w-[35%] h-full bg-darkbg rounded-2xl">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
