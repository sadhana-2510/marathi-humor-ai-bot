import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-5 
      fixed top-0 left-0 z-30 bg-transparent">

      {/* Branding */}
      <h1 className="text-xl md:text-2xl font-bold text-white/80 tracking-wide">
        HumorBot
      </h1>

      {/* ONLY LOGIN BUTTON — removed About, Paper, Team, Contact */}
      <button
        onClick={() => navigate("/login")}
        className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl 
        border border-white/20 text-white font-medium hover:bg-white/20 
        hover:shadow-md transition-all"
      >
        Login
      </button>
    </nav>
  );
}
