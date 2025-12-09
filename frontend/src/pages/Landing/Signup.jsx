import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ------------------------------
  // VALIDATION FUNCTIONS
  // ------------------------------
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 8) return "Minimum 8 characters required";
    if (!/[A-Z]/.test(password)) return "Include at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Include at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Include at least one number";
    if (!/[!@#$%^&*()_+\-=[\]{};:'",.<>/?]/.test(password))
      return "Include at least one special character";
    if (password === "00000000") return "Password cannot be all zeros";
    if (password === "11111111") return "Password cannot be all ones";
    if (/\s/.test(password)) return "No spaces allowed";

    return "";
  };

  // ------------------------------
  // HANDLE INPUT CHANGE
  // ------------------------------
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ------------------------------
  // HANDLE SUBMIT
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validate all fields
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(form.email)) newErrors.email = "Invalid email format";
    const passwordCheck = validatePassword(form.password);
    if (passwordCheck) newErrors.password = passwordCheck;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // ------------------------------
    // CALL BACKEND /signup
    // ------------------------------
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({ submit: data.detail || "Signup failed" });
        setLoading(false);
        return;
      }

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      setErrors({ submit: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------
  // UI
  // ------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-white/20">

        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-300 mb-6">Sign up to continue</p>

        {errors.submit && (
          <p className="text-red-400 text-sm mb-4">{errors.submit}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="text-gray-200 text-sm">Full Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-200 text-sm">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-200 text-sm">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-gray-300 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
