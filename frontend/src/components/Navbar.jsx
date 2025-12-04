import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Paper", id: "paper" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  // Scroll to section on Landing Page
  function handleScroll(id) {
    if (pathname !== "/") {
      // redirect to landing page first
      navigate(`/#${id}`);
      return;
    }
    // smooth scroll if already on landing
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-12 py-5">
      <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900">
        HumorBot
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        
        {/* MENU ITEMS */}
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            {item.label}
          </button>
        ))}

        {/* LOGIN BUTTON – hide on /login and /signup */}
        {pathname !== "/login" && pathname !== "/signup" && (
          <Link
            to="/login"
            className="px-5 py-2 rounded-full text-sm bg-gray-900 text-white hover:bg-black transition"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
