// RiskManagement.js
import React, { useEffect, useState, useRef } from "react";
import { useRiskContext } from "../Context/RiskContext";

const getRandomHexColor = () => {
  const hexColors = [
    "#f87171",
    "#60a5fa",
    "#4ade80",
    "#facc15",
    "#a78bfa",
    "#fb923c",
    "#34d399",
    "#d4d4d4",
  ];
  return hexColors[Math.floor(Math.random() * hexColors.length)];
};

const AvatarGroup = ({ colors = [] }) => (
  <div className="flex -space-x-2">
    {colors.map((color, i) => (
      <div
        key={i}
        className="w-6 h-6 rounded-full border-2 border-[#0f172a]"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

const generateInitialTasks = () =>
  [
    { icon: "🟥", title: "Total Uptime Technologies, LLC", users: 5, risk: 32 },
    { icon: "🟦", title: "Microsoft Corporation", users: 3, risk: 11 },
    { icon: "🟩", title: "unknow", users: 4, risk: 97 },
    { icon: "🟢", title: "Amazon.com, Inc.", users: 3, risk: 80 },
    { icon: "🟨", title: "Google", users: 5, risk: 5 },
  ].map((task) => ({
    ...task,
    avatarColors: [...Array(task.users)].map(() => getRandomHexColor()),
  }));

const RiskManagement = () => {
  const [tasks, setTasks] = useState(generateInitialTasks);
  const [targetRisks, setTargetRisks] = useState(null);
  const intervalRef = useRef(null);
  const { setRiskValues } = useRiskContext();

  useEffect(() => {
    setRiskValues(tasks.map((task) => task.risk));
  }, [tasks, setRiskValues]);

  useEffect(() => {
    if (targetRisks === null) {
      const interval = setInterval(() => {
        setTasks((prev) =>
          prev.map((task) => {
            const variation = Math.floor(Math.random() * 11) - 5;
            const maxUp = Math.min(5, 100 - task.risk);
            const maxDown = Math.min(5, task.risk);
            const clamped = Math.min(Math.max(variation, -maxDown), maxUp);
            return { ...task, risk: task.risk + clamped };
          })
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [targetRisks]);

  useEffect(() => {
    if (!targetRisks) return;

    intervalRef.current = setInterval(() => {
      setTasks((prevTasks) => {
        let done = true;
        const updated = prevTasks.map((task, i) => {
          const target = targetRisks[i];
          if (task.risk !== target) {
            done = false;
            const diff = task.risk > target ? -1 : 1;
            return { ...task, risk: task.risk + diff };
          }
          return task;
        });

        if (done) {
          clearInterval(intervalRef.current);
          setTargetRisks(null);
        }

        return updated;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [targetRisks]);

  const lowerRisks = () => {
    const newTargets = tasks.map(() => {
      const base = Math.floor(Math.random() * 21);
      const variation = Math.floor(Math.random() * 5) - 2;
      return Math.max(0, Math.min(20, base + variation));
    });
    setTargetRisks(newTargets);
  };

  return (
    <div
      onClick={lowerRisks}
      className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl p-4 w-full h-full shadow-lg flex flex-col gap-4"
      style={{ cursor: "pointer" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Risk Management</p>
          <p className="text-xs text-green-400 mt-1">
            🟢 30+ threats mitigated
          </p>
        </div>
        <div className="text-white opacity-50 text-xl font-bold">⋯</div>
      </div>

      <div className="grid grid-cols-3 text-xs text-gray-400 font-medium border-b border-slate-700 pb-2">
        <span>Threat</span>
        <span>Users</span>
        <span>Risk rate</span>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task, idx) => (
          <div key={idx} className="grid grid-cols-3 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">{task.icon}</span>
              <span>{task.title}</span>
            </div>
            <AvatarGroup colors={task.avatarColors} />
            <div className="flex items-center gap-2">
              <span className="w-10 text-sm font-medium">
                {Math.round(task.risk)}%
              </span>
              <div className="w-full bg-slate-700 h-1 rounded-full">
                <div
                  className="h-1 rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: `${task.risk}%`,
                    backgroundColor: task.risk > 75 ? "#f87171" : "#60a5fa",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskManagement;
