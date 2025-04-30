import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProfilePage from "./Page/ProfilePage";
import DashboardPage from "./Page/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
