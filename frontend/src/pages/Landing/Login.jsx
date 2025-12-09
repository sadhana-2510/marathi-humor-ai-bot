import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  // ---------------------------------------------------
  // VALIDATION FUNCTIONS
  // ---------------------------------------------------
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Must contain uppercase, lowercase, number & special character
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Reject passwords like "11111111" or "00000000"
    if (/^(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)$/.test(password)) return false;

    return strongRegex.test(password);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ---------------------------------------------------
  // SUBMIT HANDLER
  // ---------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentErrors = {};

    if (!validateEmail(form.email))
      currentErrors.email = "Enter a valid email address";

    if (!validatePassword(form.password)) {
      currentErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, digit & special character.";
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrors({ api: data.detail || "Login failed" });
        setSubmitting(false);
        return;
      }

      navigate("/chat");
    } catch (err) {
      setErrors({ api: "Server connection error" });
    }

    setSubmitting(false);
  };

  // ---------------------------------------------------
  // UI DESIGN STARTS HERE
  // ---------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">

      {/* Metallic glowing circles */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Glass Container */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-10 animate-fadeSlide">

        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Login to continue your Marathi–English Humor AI Experience
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL INPUT */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <div className="flex items-center gap-3 mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white"
                autoComplete="off"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD INPUT */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <div className="flex items-center gap-3 mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white"
                autoComplete="off"
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* API ERROR */}
          {errors.api && (
            <p className="text-red-400 text-center">{errors.api}</p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:scale-[1.02] transition-all font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-300 underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
