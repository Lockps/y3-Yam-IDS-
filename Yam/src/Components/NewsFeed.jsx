import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [packetLogs, setPacketLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPackets, setExpandedPackets] = useState({});
  const [filter, setFilter] = useState("all"); // 'all' | 'unknown' | 'known'

  useEffect(() => {
    const fetchPackets = () => {
      fetch("http://localhost:8080/packets")
        .then((res) => res.json())
        .then((data) => {
          setPacketLogs(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchPackets();
    const interval = setInterval(fetchPackets, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleExpand = (count) => {
    setExpandedPackets((prev) => ({
      ...prev,
      [count]: !prev[count],
    }));
  };

  // Filter packets based on filter state
  const filteredPackets = packetLogs.filter((packet) => {
    const isUnknownHost =
      packet.src_host.toLowerCase() === "unknown" ||
      packet.dst_host.toLowerCase() === "unknown";

    if (filter === "unknown") return isUnknownHost;
    if (filter === "known") return !isUnknownHost;
    return true; // all
  });

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl p-4 w-full h-full shadow-lg flex flex-col gap-4 overflow-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold">Packet Logs</p>
          <p className="text-xs text-green-400 mt-1">
            🟢 {packetLogs.length}+ packets captured
          </p>
        </div>
        <div className="text-white opacity-50 text-xl font-bold">⋯</div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 text-xs">
        {["all", "unknown", "known"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded-full font-semibold transition ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {type === "all"
              ? "All Packets"
              : type === "unknown"
              ? "Unknown Host"
              : "Known Host"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 text-sm max-h-[400px] overflow-y-auto">
        {loading ? (
          <p className="text-center text-slate-400">Loading packets...</p>
        ) : filteredPackets.length === 0 ? (
          <p className="text-center text-slate-400">No packets found.</p>
        ) : (
          filteredPackets.map((packet) => {
            const isThreat = packet.threat;
            const isUnknownHost =
              packet.src_host.toLowerCase() === "unknown" ||
              packet.dst_host.toLowerCase() === "unknown";
            const isExpanded = expandedPackets[packet.count];

            return (
              <div
                key={packet.count}
                className={`flex flex-col border-b border-slate-700 pb-2 px-2 py-1 rounded-md cursor-pointer ${
                  isThreat
                    ? "bg-red-700/50"
                    : isUnknownHost
                    ? "bg-yellow-400 border-yellow-300 "
                    : "hover:bg-white/5 transition"
                }`}
                title={
                  isThreat
                    ? "⚠️ Threat detected"
                    : isUnknownHost
                    ? "⚠️ Unknown host detected"
                    : ""
                }
                onClick={() => toggleExpand(packet.count)}
              >
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-slate-400">
                    {packet.time}
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      🟢 Sender: {packet.src_ip} ({packet.src_host}) :
                      {packet.src_port}
                    </span>
                    {isUnknownHost && (
                      <span className="text-yellow-700 font-bold text-xs select-none ml-2">
                        ⚠️ Unknown Host
                      </span>
                    )}
                  </div>
                  <span className="text-sm">
                    🔵 Receiver: {packet.dst_ip} ({packet.dst_host}) :
                    {packet.dst_port}
                  </span>
                </div>
                {isExpanded && (
                  <div className="text-xs text-slate-400 pl-2 mt-1 flex flex-col gap-1">
                    <span>Protocol: {packet.protocol}</span>
                    <span>Flags: {packet.flags}</span>
                    <span>🌐 Country: {packet.country || "N/A"}</span>
                    <span>🏢 ISP: {packet.isp || "N/A"}</span>
                    <span>🏬 Org: {packet.org || "N/A"}</span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
