import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import Login from "./pages/Landing/Login.jsx";
import Signup from "./pages/Landing/Signup.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Other pages will be added later */}
        {/* <Route path="/chat" element={<Chat />} />
        <Route path="/analysis" element={<AnalysisDashboard />} />
        <Route path="/training-summary" element={<TrainingSummary />} />
        <Route path="/compare-models" element={<CompareModels />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
