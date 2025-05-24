import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MainPage from "../Components/MainPage";
import AnimationBg from "../Components/AnimationBg";
import { RiskProvider } from "../Context/RiskContext";

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen  flex">
      <AnimationBg />
      <Sidebar />
      <RiskProvider>
        <MainPage />
      </RiskProvider>
    </div>
  );
};

export default DashboardPage;
