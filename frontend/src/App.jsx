import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import Login from "./pages/Landing/Login.jsx";
import Signup from "./pages/Landing/Signup.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
