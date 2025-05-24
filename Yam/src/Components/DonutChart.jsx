import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Low", "Medium", "High", "Critical"],
    datasets: [
      {
        label: "Threat Level",
        data: [18, 12, 6, 1],
        backgroundColor: ["#00c853", "#fdd835", "#ff6d00", "#d50000"],
        borderWidth: 0, // ปิดเส้นขอบ
        borderColor: "transparent", // กำหนดสีขอบ
      },
    ],
  };

  const percentages = ["46.15%", "30.77%", "15.38%", "2.56%"];

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // ปิดเส้นแบ่งส่วน
      },
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
      {/* ส่วนแผนภูมิ */}
      <div style={{ width: 200, height: 200, position: "relative" }}>
        <Doughnut data={data} options={options} />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          <div style={{ fontSize: "16px" }}>Total Value</div>
          <strong style={{ fontSize: "24px" }}>39</strong>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "8px",
          }}
        >
          <div style={{ width: "12px" }} />
          <div style={{ minWidth: "70px", color: "#fff", fontWeight: "500" }}>
            Label
          </div>
          <div
            style={{
              minWidth: "40px",
              color: "#fff",
              fontWeight: "500",
              marginRight: "30px",
            }}
          >
            Value
          </div>
          <div style={{ minWidth: "70px", color: "#fff", fontWeight: "500" }}>
            %
          </div>
        </div>

        {/* แถวข้อมูล */}
        {data.labels.map((label, index) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            />
            <div style={{ minWidth: "70px", color: "#fff" }}>{label}</div>
            <div
              style={{ minWidth: "40px", color: "#fff", marginRight: "30px" }}
            >
              {data.datasets[0].data[index]}
            </div>
            <div style={{ minWidth: "70px", color: "#fff" }}>
              {percentages[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
