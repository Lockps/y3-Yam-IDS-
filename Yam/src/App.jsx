import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProfilePage from "./Page/ProfilePage";
import DashboardPage from "./Page/DashboardPage";
import ThreatdetectPage from "./Page/ThreatdetectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/threat-detection" element={<ThreatdetectPage />} />
    </Routes>
  );
}

export default App;
