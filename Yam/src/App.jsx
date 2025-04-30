import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProfilePage from "./Page/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
