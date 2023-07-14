import {Route, Routes} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Trainings from "./pages/Trainings";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
